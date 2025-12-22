// ================================
// 測驗評估模型 - Survey Assessment Model
// ================================

// 三種主要孩子型態
export type ProfileType = 'explorer' | 'builder' | 'connector';

// 型態分數
export interface ProfileScores {
  explorer: number;
  builder: number;
  connector: number;
}

// 維度分數（保留用於顯示）
export interface DimensionScores {
  languageActivation: number;
  adaptability: number;
  socialOrientation: number;
  learningModality: number;
  growthIntention: number;
  exposureLevel: number;
}

// 選項定義
export interface SurveyOption {
  value: string;
  label: string;
  weights: Partial<DimensionScores>;
  profileBonus: Partial<ProfileScores>;
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
  typeScores: ProfileScores;
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

// ================================
// 問卷題目定義（依照指定加權表）
// ================================
export const surveyQuestions: SurveyQuestion[] = [
  {
    id: 'english_confidence',
    question: '孩子對使用英文溝通的自信程度？',
    type: 'single',
    options: [
      {
        value: '1',
        label: '1 - 非常不自信',
        weights: { languageActivation: 1 },
        profileBonus: { builder: 2 }
      },
      {
        value: '2',
        label: '2 - 有些不自信',
        weights: { languageActivation: 2 },
        profileBonus: { builder: 1, connector: 1 }
      },
      {
        value: '3',
        label: '3 - 普通',
        weights: { languageActivation: 3 },
        profileBonus: { explorer: 1, builder: 1, connector: 1 }
      },
      {
        value: '4',
        label: '4 - 相當自信',
        weights: { languageActivation: 4 },
        profileBonus: { explorer: 2, connector: 2 }
      },
      {
        value: '5',
        label: '5 - 非常自信',
        weights: { languageActivation: 5 },
        profileBonus: { explorer: 3, connector: 3 }
      }
    ]
  },
  {
    id: 'adaptability',
    question: '孩子適應新環境的能力如何？',
    type: 'single',
    options: [
      {
        value: '1',
        label: '1 - 需要較長時間適應',
        weights: { adaptability: 1 },
        profileBonus: { builder: 3 }
      },
      {
        value: '2',
        label: '2 - 適應較慢',
        weights: { adaptability: 2 },
        profileBonus: { builder: 2, connector: 1 }
      },
      {
        value: '3',
        label: '3 - 一般',
        weights: { adaptability: 3 },
        profileBonus: { explorer: 1, builder: 1, connector: 1 }
      },
      {
        value: '4',
        label: '4 - 適應較快',
        weights: { adaptability: 4 },
        profileBonus: { explorer: 2, connector: 2 }
      },
      {
        value: '5',
        label: '5 - 非常快適應',
        weights: { adaptability: 5 },
        profileBonus: { explorer: 3, connector: 3 }
      }
    ]
  },
  {
    id: 'social_style',
    question: '孩子的社交風格是？',
    type: 'single',
    options: [
      {
        value: 'introvert',
        label: '內向 - 喜歡獨處或小團體',
        weights: { socialOrientation: 1 },
        profileBonus: { builder: 3 }
      },
      {
        value: 'ambivert',
        label: '中性 - 視情況而定',
        weights: { socialOrientation: 3 },
        profileBonus: { explorer: 1, builder: 1, connector: 1 }
      },
      {
        value: 'extrovert',
        label: '外向 - 喜歡大團體活動',
        weights: { socialOrientation: 5 },
        profileBonus: { explorer: 2, connector: 3 }
      }
    ]
  },
  {
    id: 'interests',
    question: '孩子最感興趣的活動類型？（可複選）',
    type: 'multiple',
    options: [
      {
        value: 'STEAM',
        label: '🔬 STEAM 科技創新',
        weights: { learningModality: 3 },
        profileBonus: { builder: 3 }
      },
      {
        value: 'Outdoor',
        label: '🏕️ 戶外探險',
        weights: { learningModality: 3 },
        profileBonus: { explorer: 3, connector: 1 }
      },
      {
        value: 'Sports',
        label: '⚽ 運動專項',
        weights: { learningModality: 3 },
        profileBonus: { explorer: 2, connector: 2 }
      },
      {
        value: 'Arts',
        label: '🎨 藝術創意',
        weights: { learningModality: 3 },
        profileBonus: { explorer: 1, builder: 2, connector: 1 }
      },
      {
        value: 'English',
        label: '📚 語言學習',
        weights: { learningModality: 2 },
        profileBonus: { builder: 1, connector: 2 }
      }
    ]
  },
  {
    id: 'goals',
    question: '參加營隊的主要目標是？',
    type: 'single',
    options: [
      {
        value: 'english',
        label: '提升英文能力',
        weights: { growthIntention: 4 },
        profileBonus: { builder: 2, connector: 2 }
      },
      {
        value: 'international',
        label: '拓展國際視野',
        weights: { growthIntention: 4 },
        profileBonus: { explorer: 3, connector: 1 }
      },
      {
        value: 'social',
        label: '增進社交能力',
        weights: { growthIntention: 4 },
        profileBonus: { explorer: 1, connector: 3 }
      },
      {
        value: 'independence',
        label: '培養獨立自主',
        weights: { growthIntention: 4 },
        profileBonus: { explorer: 3, builder: 1 }
      }
    ]
  },
  {
    id: 'previous_experience',
    question: '孩子過去是否參加過類似的營隊活動？',
    type: 'single',
    options: [
      {
        value: 'no',
        label: '從未參加過',
        weights: { exposureLevel: 0 },
        profileBonus: { builder: 2 }
      },
      {
        value: 'local',
        label: '參加過國內營隊',
        weights: { exposureLevel: 2 },
        profileBonus: { explorer: 1, builder: 1, connector: 1 }
      },
      {
        value: 'international',
        label: '參加過國際營隊',
        weights: { exposureLevel: 5 },
        profileBonus: { explorer: 2, connector: 2 }
      }
    ]
  }
];

// ================================
// 計算分析結果
// ================================
export function calculateProfile(answers: Record<string, string | string[]>): ChildProfile {
  // 初始化型態分數
  const profileScores: ProfileScores = {
    explorer: 0,
    builder: 0,
    connector: 0
  };

  // 初始化維度分數
  const dimensionScores: DimensionScores = {
    languageActivation: 0,
    adaptability: 0,
    socialOrientation: 0,
    learningModality: 0,
    growthIntention: 0,
    exposureLevel: 0
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
      if (option.weights) {
        Object.entries(option.weights).forEach(([dim, score]) => {
          if (score !== undefined) {
            dimensionScores[dim as keyof DimensionScores] += score;
          }
        });
      }

      // 累加型態分數（使用指定的加權表）
      if (option.profileBonus) {
        if (option.profileBonus.explorer) {
          profileScores.explorer += option.profileBonus.explorer;
        }
        if (option.profileBonus.builder) {
          profileScores.builder += option.profileBonus.builder;
        }
        if (option.profileBonus.connector) {
          profileScores.connector += option.profileBonus.connector;
        }
      }
    });
  });

  // 決定主要與次要型態
  const sortedProfiles = Object.entries(profileScores)
    .sort((a, b) => b[1] - a[1]) as [ProfileType, number][];

  const primaryType = sortedProfiles[0][0];
  const primaryScore = sortedProfiles[0][1];
  const secondaryScore = sortedProfiles[1][1];
  
  // 只有當次要型態分數達到主要型態的 50% 以上時才顯示
  const secondaryType = secondaryScore >= primaryScore * 0.5
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
  const langScore = scores.languageActivation;
  const languageActivation = langScore >= 4
    ? '英文使用意願高，敢於表達'
    : langScore >= 3
    ? '英文使用中等，需要一些鼓勵'
    : '英文使用較為謹慎，需要較多支持';

  // 適應力描述
  const adaptScore = scores.adaptability;
  const adaptability = adaptScore >= 4
    ? '適應力強，能快速融入新環境'
    : adaptScore >= 3
    ? '適應力中等，需要一些時間調整'
    : '適應較慢，需要較多時間與支持';

  // 社交風格描述
  const socialScore = scores.socialOrientation;
  const socialOrientation = socialScore >= 4
    ? '外向活潑，喜歡團體互動'
    : socialScore >= 2
    ? '社交適中，能與人互動但也享受獨處'
    : '偏向內向，喜歡小團體或獨處';

  // 學習偏好
  const activityAnswer = answers['interests'];
  const activities = Array.isArray(activityAnswer) ? activityAnswer : [];
  const activityLabels: Record<string, string> = {
    Outdoor: '戶外探險',
    Sports: '運動競技',
    STEAM: 'STEAM 科技',
    Arts: '藝術創意',
    English: '語言文化'
  };
  const learningPreferences = activities.map(a => activityLabels[a] || a);

  // 成長目標
  const goalAnswer = answers['goals'] as string;
  const goalLabels: Record<string, string> = {
    english: '提升英文能力',
    international: '拓展國際視野',
    social: '增進社交能力',
    independence: '培養獨立自主'
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
  const adaptAnswer = answers['adaptability'] as string;
  if (adaptAnswer === '5' || adaptAnswer === '4') {
    summary += '孩子能快速融入新環境，這對參加國際營隊是很大的優勢。';
  } else if (adaptAnswer === '1' || adaptAnswer === '2') {
    summary += '考慮到孩子需要較多時間適應新環境，建議選擇結構較完善、支持較多的營隊。';
  }

  const socialAnswer = answers['social_style'] as string;
  if (socialAnswer === 'extrovert') {
    summary += '孩子在團體中表現積極，適合有豐富團隊活動的營隊。';
  } else if (socialAnswer === 'introvert') {
    summary += '孩子偏好較小的團體，建議選擇班級規模較小的營隊。';
  }

  const goalAnswer = answers['goals'] as string;
  if (goalAnswer === 'independence') {
    summary += '培養獨立自主是主要目標，推薦有生活自理訓練的營隊。';
  } else if (goalAnswer === 'social') {
    summary += '增進社交能力是主要目標，推薦有豐富團體互動的營隊。';
  } else if (goalAnswer === 'international') {
    summary += '拓展國際視野是主要目標，推薦多國學員混合的營隊。';
  }

  if (secondaryInfo) {
    summary += `同時，孩子也展現出「${secondaryInfo.nameZh}」的特質傾向，可以考慮結合這兩種特質選擇營隊。`;
  }

  // 加入分數資訊讓結果更透明
  const scores = profile.typeScores;
  summary += ` （型態分數：Explorer ${scores.explorer}、Builder ${scores.builder}、Connector ${scores.connector}）`;

  return summary;
}
