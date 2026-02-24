import { Brain, Search, Camera, Gift } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI 適性配對",
    description: "透過專業問卷分析孩子特質，AI 自動推薦最適合的 3-5 個營隊，每個推薦都有詳細說明。",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Search,
    title: "營隊搜尋比較",
    description: "完整的歐洲夏令營資料庫，支援多維度篩選，輕鬆比較不同營隊的特色與價格。",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Camera,
    title: "旅程適應與亮點記錄",
    description: "除了安全與快樂，我們更為您捕捉孩子在陌生環境中的適應點與閃光時刻。捨棄繁瑣的教育指標，只紀錄這段國際旅程中最有意義的成長片段。",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: Gift,
    title: "孩子的天賦側寫與發現",
    description: "透過 AI 深度轉譯營隊中的行為表現，為您呈現孩子未曾被發現的天賦潛力與性格特質。這不只是報告，更是一份幫助您更懂孩子的專屬禮物。",
    color: "bg-amber-500/10 text-amber-600",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            四大核心功能
          </h2>
          <p className="text-lg text-muted-foreground">
            從選營到成長追蹤，我們提供完整的 AI 輔助服務
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl bg-background card-elevated animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-5 transition-transform group-hover:scale-110`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
