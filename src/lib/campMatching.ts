// ================================
// 營隊配對邏輯 - Camp Matching System
// ================================

import { Camp } from '@/data/camps';
import { ChildProfile, ProfileType, CampTags, profileDescriptions } from './surveyModel';

// 擴展營隊標籤資料
export const campTags: Record<string, CampTags> = {
  'camp-1': { // Swiss Alps Adventure
    activityType: ['outdoor'],
    structureLevel: 'medium',
    socialIntensity: 'high',
    englishRequirement: 'medium'
  },
  'camp-2': { // London English Immersion
    activityType: ['language', 'creative'],
    structureLevel: 'high',
    socialIntensity: 'medium',
    englishRequirement: 'high'
  },
  'camp-3': { // Berlin STEAM
    activityType: ['steam'],
    structureLevel: 'high',
    socialIntensity: 'medium',
    englishRequirement: 'medium'
  },
  'camp-4': { // Barcelona Football
    activityType: ['sports'],
    structureLevel: 'medium',
    socialIntensity: 'high',
    englishRequirement: 'low'
  },
  'camp-5': { // Florence Art
    activityType: ['creative'],
    structureLevel: 'medium',
    socialIntensity: 'medium',
    englishRequirement: 'medium'
  },
  'camp-6': { // Nordic Leadership
    activityType: ['outdoor'],
    structureLevel: 'low',
    socialIntensity: 'high',
    englishRequirement: 'high'
  }
};

// 型態與營隊標籤的匹配權重
const profileTagWeights: Record<ProfileType, {
  activityType: Record<string, number>;
  structureLevel: Record<string, number>;
  socialIntensity: Record<string, number>;
  englishRequirement: Record<string, number>;
}> = {
  explorer: {
    activityType: { outdoor: 5, sports: 4, steam: 2, creative: 2, language: 2 },
    structureLevel: { low: 4, medium: 3, high: 1 },
    socialIntensity: { high: 4, medium: 3, low: 1 },
    englishRequirement: { high: 3, medium: 4, low: 2 }
  },
  builder: {
    activityType: { steam: 5, creative: 4, language: 3, outdoor: 2, sports: 2 },
    structureLevel: { high: 5, medium: 3, low: 1 },
    socialIntensity: { low: 3, medium: 4, high: 2 },
    englishRequirement: { low: 3, medium: 4, high: 2 }
  },
  connector: {
    activityType: { language: 4, creative: 4, sports: 4, outdoor: 3, steam: 2 },
    structureLevel: { medium: 4, high: 3, low: 2 },
    socialIntensity: { high: 5, medium: 3, low: 1 },
    englishRequirement: { medium: 4, high: 3, low: 2 }
  }
};

// 計算單個營隊的匹配分數
function calculateCampScore(
  camp: Camp,
  profile: ChildProfile,
  answers: Record<string, string | string[]>
): number {
  const tags = campTags[camp.id];
  if (!tags) return 50; // 默認分數

  const weights = profileTagWeights[profile.primaryType];
  let score = 0;
  let maxScore = 0;

  // 活動類型匹配
  tags.activityType.forEach(type => {
    score += weights.activityType[type] || 0;
  });
  maxScore += 5 * tags.activityType.length;

  // 結構程度匹配
  score += weights.structureLevel[tags.structureLevel] || 0;
  maxScore += 5;

  // 社交強度匹配
  score += weights.socialIntensity[tags.socialIntensity] || 0;
  maxScore += 5;

  // 英文需求匹配（根據孩子的英文程度調整）
  const englishScore = profile.dimensionScores.languageActivation;
  if (tags.englishRequirement === 'high' && englishScore >= 4) {
    score += 5;
  } else if (tags.englishRequirement === 'medium' && englishScore >= 2) {
    score += 4;
  } else if (tags.englishRequirement === 'low') {
    score += 3;
  } else {
    score += 1;
  }
  maxScore += 5;

  // 活動偏好加分
  const activityAnswer = answers['activity_preference'];
  const activities = Array.isArray(activityAnswer) ? activityAnswer : [];
  
  const categoryToActivity: Record<string, string> = {
    'Outdoor': 'outdoor',
    'Sports': 'sports',
    'STEAM': 'steam',
    'Arts': 'creative',
    'English': 'language'
  };
  
  const campActivityType = categoryToActivity[camp.category];
  if (campActivityType && activities.includes(campActivityType)) {
    score += 3;
  }
  maxScore += 3;

  // 轉換為百分比
  const percentage = Math.round((score / maxScore) * 100);
  
  // 確保分數在合理範圍內 (60-98)
  return Math.min(98, Math.max(60, percentage + 20));
}

// 生成推薦理由
function generateReasons(
  camp: Camp,
  profile: ChildProfile,
  answers: Record<string, string | string[]>
): string[] {
  const reasons: string[] = [];
  const tags = campTags[camp.id];
  const typeInfo = profileDescriptions[profile.primaryType];

  // 根據活動類型生成理由
  if (tags?.activityType.includes('outdoor')) {
    if (profile.primaryType === 'explorer') {
      reasons.push('戶外探險活動完美契合孩子的探索精神');
    } else {
      reasons.push('戶外環境有助於孩子拓展舒適圈');
    }
  }

  if (tags?.activityType.includes('steam')) {
    if (profile.primaryType === 'builder') {
      reasons.push('STEAM 課程結構完善，符合孩子的學習風格');
    } else {
      reasons.push('結構化的科技課程培養解決問題能力');
    }
  }

  if (tags?.activityType.includes('sports')) {
    reasons.push('運動訓練培養團隊合作與紀律');
  }

  if (tags?.activityType.includes('creative')) {
    reasons.push('創意課程激發孩子的藝術潛能');
  }

  if (tags?.activityType.includes('language')) {
    reasons.push('沉浸式英語環境提升語言自信');
  }

  // 根據社交強度生成理由
  if (tags?.socialIntensity === 'high') {
    if (profile.primaryType === 'connector' || profile.dimensionScores.socialOrientation >= 4) {
      reasons.push('豐富的團體活動發揮孩子的社交優勢');
    } else {
      reasons.push('團隊活動幫助孩子建立社交自信');
    }
  }

  // 根據成長目標生成理由
  const goalAnswer = answers['growth_goal'] as string;
  if (goalAnswer === 'independence' && tags?.structureLevel !== 'high') {
    reasons.push('活動設計培養獨立自主能力');
  }
  if (goalAnswer === 'confidence') {
    reasons.push('多元展示機會增強自信表達');
  }
  if (goalAnswer === 'global') {
    reasons.push('國際化環境拓展全球視野');
  }

  // 根據過往經驗生成理由
  const expAnswer = answers['previous_experience'] as string;
  if (expAnswer === 'none' || expAnswer === 'day') {
    if (tags?.structureLevel === 'high') {
      reasons.push('完善的支持系統適合首次參加者');
    }
  } else if (expAnswer === 'international') {
    if (tags?.structureLevel === 'low') {
      reasons.push('自由度高的活動適合有經驗的學員');
    }
  }

  // 確保至少有 3 個理由
  while (reasons.length < 3) {
    const defaultReasons = [
      '專業師資團隊提供優質教學',
      '安全完善的營地設施',
      '符合孩子年齡層的活動設計'
    ];
    for (const r of defaultReasons) {
      if (!reasons.includes(r) && reasons.length < 3) {
        reasons.push(r);
      }
    }
  }

  return reasons.slice(0, 4);
}

// 營隊推薦結果
export interface CampRecommendation {
  camp: Camp;
  matchScore: number;
  reasons: string[];
}

// 獲取營隊推薦
export function getRecommendations(
  camps: Camp[],
  profile: ChildProfile,
  answers: Record<string, string | string[]>,
  count: number = 3
): CampRecommendation[] {
  const recommendations: CampRecommendation[] = camps.map(camp => ({
    camp,
    matchScore: calculateCampScore(camp, profile, answers),
    reasons: generateReasons(camp, profile, answers)
  }));

  // 依分數排序並返回前 N 個
  return recommendations
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, count);
}
