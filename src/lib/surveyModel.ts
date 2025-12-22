// ================================
// 測驗評估模型 - Survey Assessment Model
// ================================

// 六個核心評估維度
export type Dimension = 
  | 'languageActivation'    // 英文使用啟動度
  | 'adaptability'          // 新環境適應力
  | 'socialOrientation'     // 社交啟動風格
  | 'learningModality'      // 學習與活動偏好
  | 'growthIntention'       // 成長動機目標
  | 'exposureLevel';        // 過往國際/營隊經驗

// 三種主要孩子型態
export type ProfileType = 'explorer' | 'builder' | 'connector';

// 維度分數
export interface DimensionScores {
  languageActivation: number;
  adaptability: number;
  socialOrientation: number;
  learningModality: number;
  growthIntention: number;
  exposureLevel: number;
}

// 型態權重配置
export interface ProfileWeights {
  explorer: number;
  builder: number;
  connector: number;
}

// 選項定義
export interface SurveyOption {
  value: string;
  label: string;
  weights: Partial<DimensionScores>;
  profileBonus?: Partial<ProfileWeights>;
}

// 問題定義
export interface SurveyQuestion {
  id: string;
  question: string;
  type: 'single' | 'multiple';
  options: SurveyOption[];
}

// 孩子特質分析結果
export interface ChildProfile {
  primaryType: ProfileType;
  secondaryType?: ProfileType;
  typeScores: ProfileWeights;
  dimensionScores: DimensionScores;
  traits: {
    languageActivation: string;
    adaptability: string;
    socialOrientation: string;
    learningPreferences: string[];
    growthGoals: string[];
  };
}

// 營隊標籤
export interface CampTags {
  activityType: ('outdoor' | 'steam' | 'sports' | 'creative' | 'language')[];
  structureLevel: 'high' | 'medium' | 'low';
  socialIntensity: 'high' | 'medium' | 'low';
  englishRequirement: 'high' | 'medium' | 'low';
}

// 型態描述
export const profileDescriptions: Record<ProfileType, {
  name: string;
  nameZh: string;
  emoji: string;
  description: string;
  characteristics: string[];
  suitableEnvironments: string[];
}> = {
  explorer: {
    name: 'Explorer',
    nameZh: '探索成長型',
    emoji: '🌟',
    description: '您的孩子是天生的探險家！具有高度好奇心和適應力，喜歡挑戰新事物，在動態環境中能快速融入並表現出色。',
    characteristics: [
      '適應力強，能快速融入新環境',
      '對戶外和實作型活動充滿熱情',
      '英文使用意願高，敢於表達',
      '喜歡探索未知、接受挑戰'
    ],
    suitableEnvironments: [
      '戶外探險與自然探索類營隊',
      '需要團隊合作的活動',
      '有適度挑戰性的學習環境',
      '國際化、多元文化背景的營隊'
    ]
  },
  builder: {
    name: 'Builder',
    nameZh: '穩定建構型',
    emoji: '🔧',
    description: '您的孩子是細心的建構者！偏好有結構的學習環境，擅長按部就班地學習新技能，在 STEAM 和手作活動中表現出色。',
    characteristics: [
      '偏好結構清楚、節奏穩定的活動',
      '擅長 STEAM、手作與小組合作',
      '英文理解力強，輸出較為謹慎',
      '需要一定時間適應新環境'
    ],
    suitableEnvironments: [
      '有明確課程結構的營隊',
      'STEAM 與創客類型營隊',
      '小班制、個別關注較多的環境',
      '循序漸進的學習進程'
    ]
  },
  connector: {
    name: 'Connector',
    nameZh: '社交啟動型',
    emoji: '🤝',
    description: '您的孩子是天生的社交達人！擅長與人互動，在團體活動中如魚得水，透過社交建立自信與表達能力。',
    characteristics: [
      '社交動機高，喜歡團體互動',
      '英文主要作為社交工具使用',
      '透過人際互動獲得成長動力',
      '成長目標偏向自信與表達能力'
    ],
    suitableEnvironments: [
      '強調團體活動與互動的營隊',
      '有豐富社交機會的環境',
      '國際化、多國學員混合的營隊',
      '需要表達與展示的活動'
    ]
  }
};

// 問卷題目定義
export const surveyQuestions: SurveyQuestion[] = [
  {
    id: 'english_willingness',
    question: '當遇到外國人時，孩子會如何反應？',
    type: 'single',
    options: [
      {
        value: 'eager',
        label: '主動用英文打招呼，不怕說錯',
        weights: { languageActivation: 5, socialOrientation: 4 },
        profileBonus: { explorer: 3, connector: 2 }
      },
      {
        value: 'cautious',
        label: '觀察一陣子後會嘗試用英文溝通',
        weights: { languageActivation: 3, socialOrientation: 2 },
        profileBonus: { builder: 2 }
      },
      {
        value: 'shy',
        label: '會害羞，需要大人協助才開口',
        weights: { languageActivation: 1, socialOrientation: 1 },
        profileBonus: { builder: 3 }
      },
      {
        value: 'avoid',
        label: '不太願意使用英文，寧願用中文或比手畫腳',
        weights: { languageActivation: 0, socialOrientation: 1 },
        profileBonus: { builder: 2 }
      }
    ]
  },
  {
    id: 'new_environment',
    question: '孩子到一個完全陌生的地方（如新學校、新夏令營）時，通常會：',
    type: 'single',
    options: [
      {
        value: 'quick',
        label: '很快就認識新朋友，融入新環境',
        weights: { adaptability: 5, socialOrientation: 4 },
        profileBonus: { explorer: 3, connector: 2 }
      },
      {
        value: 'moderate',
        label: '需要一兩天適應，之後就沒問題',
        weights: { adaptability: 3, socialOrientation: 2 },
        profileBonus: { builder: 1, explorer: 1 }
      },
      {
        value: 'slow',
        label: '需要較長時間適應，前期可能會想家',
        weights: { adaptability: 1, socialOrientation: 1 },
        profileBonus: { builder: 3 }
      },
      {
        value: 'difficult',
        label: '會非常焦慮，需要大人持續陪伴',
        weights: { adaptability: 0, socialOrientation: 0 },
        profileBonus: { builder: 2 }
      }
    ]
  },
  {
    id: 'social_preference',
    question: '在團體活動中，孩子通常是什麼角色？',
    type: 'single',
    options: [
      {
        value: 'leader',
        label: '自然成為帶領者，主動組織活動',
        weights: { socialOrientation: 5, adaptability: 3 },
        profileBonus: { connector: 3, explorer: 2 }
      },
      {
        value: 'active',
        label: '積極參與，但不一定要當領導',
        weights: { socialOrientation: 4, adaptability: 3 },
        profileBonus: { connector: 2, explorer: 2 }
      },
      {
        value: 'observer',
        label: '先觀察再行動，喜歡小團體互動',
        weights: { socialOrientation: 2, adaptability: 2 },
        profileBonus: { builder: 3 }
      },
      {
        value: 'independent',
        label: '偏好獨立活動，大團體會感到不自在',
        weights: { socialOrientation: 1, adaptability: 1 },
        profileBonus: { builder: 2 }
      }
    ]
  },
  {
    id: 'activity_preference',
    question: '以下哪些活動類型最能吸引孩子？（可複選）',
    type: 'multiple',
    options: [
      {
        value: 'outdoor',
        label: '🏕️ 戶外探險（登山、露營、野外求生）',
        weights: { learningModality: 3, adaptability: 2 },
        profileBonus: { explorer: 3 }
      },
      {
        value: 'sports',
        label: '⚽ 運動競技（足球、籃球、游泳等）',
        weights: { learningModality: 3, socialOrientation: 2 },
        profileBonus: { explorer: 2, connector: 1 }
      },
      {
        value: 'steam',
        label: '🔬 STEAM 科技（程式、機器人、科學實驗）',
        weights: { learningModality: 3, growthIntention: 2 },
        profileBonus: { builder: 3 }
      },
      {
        value: 'creative',
        label: '🎨 藝術創意（繪畫、音樂、戲劇）',
        weights: { learningModality: 3, growthIntention: 2 },
        profileBonus: { builder: 2, connector: 1 }
      },
      {
        value: 'language',
        label: '📚 語言文化（英語學習、文化交流）',
        weights: { learningModality: 2, languageActivation: 2 },
        profileBonus: { connector: 2, builder: 1 }
      }
    ]
  },
  {
    id: 'growth_goal',
    question: '您最希望孩子透過國際營隊獲得什麼成長？',
    type: 'single',
    options: [
      {
        value: 'independence',
        label: '培養獨立自主能力，學會自己解決問題',
        weights: { growthIntention: 4, adaptability: 2 },
        profileBonus: { explorer: 3 }
      },
      {
        value: 'skills',
        label: '學習新技能，在特定領域有所精進',
        weights: { growthIntention: 4, learningModality: 2 },
        profileBonus: { builder: 3 }
      },
      {
        value: 'confidence',
        label: '建立自信心，提升表達與溝通能力',
        weights: { growthIntention: 4, socialOrientation: 2 },
        profileBonus: { connector: 3 }
      },
      {
        value: 'global',
        label: '拓展國際視野，認識不同文化的朋友',
        weights: { growthIntention: 3, languageActivation: 2 },
        profileBonus: { explorer: 2, connector: 2 }
      }
    ]
  },
  {
    id: 'previous_experience',
    question: '孩子過去參加營隊或國際活動的經驗？',
    type: 'single',
    options: [
      {
        value: 'international',
        label: '曾參加過國際營隊或海外遊學',
        weights: { exposureLevel: 5, adaptability: 2, languageActivation: 2 },
        profileBonus: { explorer: 2 }
      },
      {
        value: 'overnight',
        label: '參加過國內過夜營隊',
        weights: { exposureLevel: 3, adaptability: 1 },
        profileBonus: { explorer: 1, builder: 1 }
      },
      {
        value: 'day',
        label: '只參加過日間營隊或課程',
        weights: { exposureLevel: 1 },
        profileBonus: { builder: 2 }
      },
      {
        value: 'none',
        label: '沒有參加過任何營隊活動',
        weights: { exposureLevel: 0 },
        profileBonus: { builder: 1 }
      }
    ]
  }
];

// 計算分析結果
export function calculateProfile(answers: Record<string, string | string[]>): ChildProfile {
  // 初始化分數
  const dimensionScores: DimensionScores = {
    languageActivation: 0,
    adaptability: 0,
    socialOrientation: 0,
    learningModality: 0,
    growthIntention: 0,
    exposureLevel: 0
  };

  const profileScores: ProfileWeights = {
    explorer: 0,
    builder: 0,
    connector: 0
  };

  // 遍歷每個問題
  surveyQuestions.forEach(question => {
    const answer = answers[question.id];
    if (!answer) return;

    const selectedValues = Array.isArray(answer) ? answer : [answer];

    selectedValues.forEach(value => {
      const option = question.options.find(opt => opt.value === value);
      if (!option) return;

      // 累加維度分數
      Object.entries(option.weights).forEach(([dim, score]) => {
        dimensionScores[dim as keyof DimensionScores] += score || 0;
      });

      // 累加型態分數
      if (option.profileBonus) {
        Object.entries(option.profileBonus).forEach(([profile, bonus]) => {
          profileScores[profile as ProfileType] += bonus || 0;
        });
      }
    });
  });

  // 決定主要與次要型態
  const sortedProfiles = Object.entries(profileScores)
    .sort((a, b) => b[1] - a[1]) as [ProfileType, number][];

  const primaryType = sortedProfiles[0][0];
  const secondaryType = sortedProfiles[1][1] > sortedProfiles[0][1] * 0.6
    ? sortedProfiles[1][0]
    : undefined;

  // 生成特質描述
  const traits = generateTraits(dimensionScores, answers);

  return {
    primaryType,
    secondaryType,
    typeScores: profileScores,
    dimensionScores,
    traits
  };
}

// 生成特質描述
function generateTraits(
  scores: DimensionScores, 
  answers: Record<string, string | string[]>
): ChildProfile['traits'] {
  // 英文啟動度描述
  const languageActivation = scores.languageActivation >= 4
    ? '英文使用意願高，敢於表達'
    : scores.languageActivation >= 2
    ? '英文使用較為謹慎，需要鼓勵'
    : '英文使用意願較低，需要較多支持';

  // 適應力描述
  const adaptability = scores.adaptability >= 4
    ? '適應力強，能快速融入新環境'
    : scores.adaptability >= 2
    ? '適應力中等，需要一些時間調整'
    : '適應較慢，需要較多時間與支持';

  // 社交風格描述
  const socialOrientation = scores.socialOrientation >= 4
    ? '外向活潑，喜歡團體互動'
    : scores.socialOrientation >= 2
    ? '社交適中，能與人互動但也享受獨處'
    : '偏向內向，喜歡小團體或獨處';

  // 學習偏好
  const activityAnswer = answers['activity_preference'];
  const activities = Array.isArray(activityAnswer) ? activityAnswer : [];
  const activityLabels: Record<string, string> = {
    outdoor: '戶外探險',
    sports: '運動競技',
    steam: 'STEAM 科技',
    creative: '藝術創意',
    language: '語言文化'
  };
  const learningPreferences = activities.map(a => activityLabels[a] || a);

  // 成長目標
  const goalAnswer = answers['growth_goal'] as string;
  const goalLabels: Record<string, string> = {
    independence: '培養獨立自主',
    skills: '學習專業技能',
    confidence: '建立自信表達',
    global: '拓展國際視野'
  };
  const growthGoals = [goalLabels[goalAnswer] || '全面發展'];

  return {
    languageActivation,
    adaptability,
    socialOrientation,
    learningPreferences,
    growthGoals
  };
}

// 生成動態分析摘要
export function generateSummary(profile: ChildProfile, answers: Record<string, string | string[]>): string {
  const typeInfo = profileDescriptions[profile.primaryType];
  const secondaryInfo = profile.secondaryType ? profileDescriptions[profile.secondaryType] : null;

  let summary = `根據問卷分析，您的孩子屬於「${typeInfo.nameZh}（${typeInfo.name}）」型態。`;

  // 根據回答添加具體說明
  const envAnswer = answers['new_environment'] as string;
  if (envAnswer === 'quick') {
    summary += '從適應能力來看，孩子能快速融入新環境，這對參加國際營隊是很大的優勢。';
  } else if (envAnswer === 'slow' || envAnswer === 'difficult') {
    summary += '考慮到孩子需要較多時間適應新環境，建議選擇結構較完善、支持較多的營隊。';
  }

  const socialAnswer = answers['social_preference'] as string;
  if (socialAnswer === 'leader' || socialAnswer === 'active') {
    summary += '孩子在團體中表現積極，適合有豐富團隊活動的營隊。';
  } else if (socialAnswer === 'observer' || socialAnswer === 'independent') {
    summary += '孩子偏好較小的團體，建議選擇班級規模較小的營隊。';
  }

  if (secondaryInfo) {
    summary += `同時，孩子也展現出「${secondaryInfo.nameZh}」的特質傾向，可以考慮結合這兩種特質選擇營隊。`;
  }

  return summary;
}
