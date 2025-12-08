import { Brain, Search, BarChart3, FileText } from "lucide-react";

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
    icon: BarChart3,
    title: "成長追蹤評估",
    description: "營前營後問卷系統，記錄孩子各項能力的變化，讓成長軌跡清晰可見。",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: FileText,
    title: "AI 成長報告",
    description: "根據評估數據，AI 自動生成個人化成長報告，分析進步亮點並提供未來建議。",
    color: "bg-amber-500/10 text-amber-600",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-card">
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
