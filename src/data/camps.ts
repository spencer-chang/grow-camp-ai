export interface Camp {
  id: string;
  name: string;
  nameZh: string;
  city: string;
  country: string;
  category: 'STEAM' | 'Sports' | 'English' | 'Outdoor' | 'Arts';
  ageMin: number;
  ageMax: number;
  priceEUR: number;
  duration: string;
  description: string;
  descriptionZh: string;
  highlights: string[];
  image: string;
  rating: number;
  reviews: number;
}

export const camps: Camp[] = [
  {
    id: "camp-1",
    name: "Swiss Alps Adventure Camp",
    nameZh: "瑞士阿爾卑斯探險營",
    city: "Zermatt",
    country: "Switzerland",
    category: "Outdoor",
    ageMin: 10,
    ageMax: 16,
    priceEUR: 4500,
    duration: "2 weeks",
    description: "Experience the majestic Swiss Alps through hiking, climbing, and outdoor survival skills. Perfect for adventurous children who love nature.",
    descriptionZh: "透過健行、攀岩和野外求生技能體驗雄偉的瑞士阿爾卑斯山。非常適合熱愛大自然的冒險兒童。",
    highlights: ["Mountain hiking", "Rock climbing basics", "Nature photography", "Team building"],
    image: "/placeholder.svg",
    rating: 4.9,
    reviews: 127
  },
  {
    id: "camp-2",
    name: "London English Immersion Academy",
    nameZh: "倫敦英語沉浸學院",
    city: "London",
    country: "United Kingdom",
    category: "English",
    ageMin: 8,
    ageMax: 14,
    priceEUR: 3800,
    duration: "3 weeks",
    description: "Immerse yourself in British culture while improving English skills through interactive lessons, cultural visits, and drama workshops.",
    descriptionZh: "透過互動課程、文化參觀和戲劇工作坊，沉浸在英國文化中同時提升英語能力。",
    highlights: ["Native English teachers", "British Museum visits", "Drama & Theatre", "Weekend excursions"],
    image: "/placeholder.svg",
    rating: 4.8,
    reviews: 203
  },
  {
    id: "camp-3",
    name: "Berlin STEAM Innovation Lab",
    nameZh: "柏林STEAM創新實驗室",
    city: "Berlin",
    country: "Germany",
    category: "STEAM",
    ageMin: 12,
    ageMax: 17,
    priceEUR: 4200,
    duration: "2 weeks",
    description: "Explore robotics, coding, and engineering in Germany's tech capital. Build real projects and develop 21st-century skills.",
    descriptionZh: "在德國科技首都探索機器人、程式設計和工程。建立真實專案並發展21世紀技能。",
    highlights: ["Robotics programming", "3D printing", "AI basics", "Tech company visits"],
    image: "/placeholder.svg",
    rating: 4.7,
    reviews: 89
  },
  {
    id: "camp-4",
    name: "Barcelona Football Academy",
    nameZh: "巴塞隆納足球學院",
    city: "Barcelona",
    country: "Spain",
    category: "Sports",
    ageMin: 9,
    ageMax: 15,
    priceEUR: 3500,
    duration: "2 weeks",
    description: "Train like the pros at world-class facilities. Professional coaches, tactical training, and Spanish football culture.",
    descriptionZh: "在世界級設施中像職業選手一樣訓練。專業教練、戰術訓練和西班牙足球文化。",
    highlights: ["Professional coaching", "Stadium tours", "Match analysis", "Spanish language basics"],
    image: "/placeholder.svg",
    rating: 4.9,
    reviews: 156
  },
  {
    id: "camp-5",
    name: "Florence Art & Renaissance Camp",
    nameZh: "佛羅倫斯藝術與文藝復興營",
    city: "Florence",
    country: "Italy",
    category: "Arts",
    ageMin: 11,
    ageMax: 17,
    priceEUR: 3900,
    duration: "2 weeks",
    description: "Discover the birthplace of Renaissance art. Learn painting, sculpture, and art history in the world's greatest open-air museum.",
    descriptionZh: "探索文藝復興藝術的發源地。在世界最偉大的露天博物館學習繪畫、雕塑和藝術史。",
    highlights: ["Painting workshops", "Museum tours", "Sculpture basics", "Italian culture"],
    image: "/placeholder.svg",
    rating: 4.8,
    reviews: 94
  },
  {
    id: "camp-6",
    name: "Nordic Nature & Leadership Camp",
    nameZh: "北歐自然與領導力營",
    city: "Stockholm",
    country: "Sweden",
    category: "Outdoor",
    ageMin: 13,
    ageMax: 18,
    priceEUR: 4800,
    duration: "3 weeks",
    description: "Develop leadership skills in the pristine Nordic wilderness. Kayaking, camping, and collaborative challenges in Scandinavia.",
    descriptionZh: "在純淨的北歐荒野中發展領導力技能。在斯堪地納維亞進行皮划艇、露營和協作挑戰。",
    highlights: ["Leadership training", "Kayaking expeditions", "Wilderness camping", "Team projects"],
    image: "/placeholder.svg",
    rating: 4.9,
    reviews: 67
  }
];

export const categories = ['STEAM', 'Sports', 'English', 'Outdoor', 'Arts'] as const;
export const cities = ['Zermatt', 'London', 'Berlin', 'Barcelona', 'Florence', 'Stockholm'] as const;
