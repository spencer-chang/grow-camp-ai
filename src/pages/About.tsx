import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  Sparkles,
  Heart,
  Users,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "精準配對",
    description:
      "我們相信每個孩子都是獨特的，透過 AI 技術分析孩子的特質，精準推薦最適合的營隊體驗。",
  },
  {
    icon: Eye,
    title: "看見成長",
    description:
      "成長不只是感受，更需要被記錄。我們的評估系統讓孩子的進步清晰可見，成為珍貴的成長紀錄。",
  },
  {
    icon: Heart,
    title: "以孩子為本",
    description:
      "每個決策都從孩子的角度出發，確保每一次國際體驗都能帶來正面且持久的影響。",
  },
];

const differences = [
  {
    traditional: "一般代辦",
    ours: "EduGrowth",
    items: [
      { traditional: "推薦熱門營隊", ours: "AI 分析孩子特質後推薦" },
      { traditional: "營隊結束即服務結束", ours: "營後成長追蹤與報告" },
      { traditional: "以佣金為導向", ours: "以孩子成長為核心" },
      { traditional: "資訊不透明", ours: "完整資訊 + 真實評價" },
    ],
  },
];

export default function About() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 hero-gradient opacity-5" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                讓孩子的國際體驗
                <br />
                <span className="text-gradient">更有意義</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                EduGrowth 不只是一個營隊搜尋平台。我們運用 AI 技術，
                幫助家長為孩子找到真正適合的國際學習體驗，
                並透過科學化的評估系統，讓每一次成長都能被看見。
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="p-8 bg-background rounded-2xl card-elevated">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  我們的使命
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  透過科技的力量，讓每位台灣孩子都能找到最適合自己的國際學習體驗，
                  並在過程中獲得真實且可衡量的成長。我們致力於打破傳統留遊學代辦的
                  資訊不對稱，讓家長能做出更明智的選擇。
                </p>
              </div>

              <div className="p-8 bg-background rounded-2xl card-elevated">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-accent" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  我們的願景
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  成為亞洲最受信賴的 AI 教育成長平台，讓「國際體驗」不再只是
                  履歷上的一行字，而是孩子人生中真正有意義的成長里程碑。
                  我們期望每個孩子都能透過適合的體驗，發現自己的潛能。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                核心價值
              </h2>
              <p className="text-lg text-muted-foreground">
                這些價值觀指引著我們每一個決策
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="p-8 bg-card rounded-2xl border border-border text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We're Different */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                我們與傳統代辦的不同
              </h2>
              <p className="text-lg text-muted-foreground">
                不只是找營隊，更是陪伴孩子成長
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="bg-background rounded-2xl overflow-hidden border border-border">
                <div className="grid grid-cols-2 bg-muted/50">
                  <div className="p-4 text-center font-medium text-muted-foreground">
                    一般代辦
                  </div>
                  <div className="p-4 text-center font-medium text-primary border-l border-border">
                    EduGrowth
                  </div>
                </div>
                {differences[0].items.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-2 border-t border-border"
                  >
                    <div className="p-4 text-muted-foreground text-sm">
                      {item.traditional}
                    </div>
                    <div className="p-4 text-foreground text-sm font-medium border-l border-border flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary flex-shrink-0" />
                      {item.ours}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* AI Role */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                    <Sparkles className="w-4 h-4" />
                    AI 技術
                  </div>
                  <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                    AI 在 EduGrowth 扮演的角色
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      我們的 AI
                      不是用來取代人的判斷，而是協助家長更全面地了解孩子的特質，
                      並從眾多營隊中找出最適合的選擇。
                    </p>
                    <p>
                      透過問卷分析，AI 能夠識別孩子的學習風格、社交傾向、興趣取向，
                      並與營隊特色進行匹配，提供個人化的推薦理由。
                    </p>
                    <p>
                      營後，AI 會根據評估數據生成成長報告，幫助家長看見孩子
                      在各方面的進步，並提供未來發展的建議。
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 bg-card rounded-2xl border border-border text-center">
                    <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-foreground">
                      1,200+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      家庭使用
                    </div>
                  </div>
                  <div className="p-6 bg-card rounded-2xl border border-border text-center">
                    <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-foreground">95%</div>
                    <div className="text-sm text-muted-foreground">滿意度</div>
                  </div>
                  <div className="p-6 bg-card rounded-2xl border border-border text-center col-span-2">
                    <Sparkles className="w-8 h-8 text-accent mx-auto mb-3" />
                    <div className="text-2xl font-bold text-foreground">
                      50+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      精選歐洲營隊
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              準備好開始了嗎？
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              只需 3 分鐘填寫問卷，讓 AI 為您的孩子推薦最適合的夏令營體驗
            </p>
            <Link to="/survey/pre">
              <Button variant="hero" size="xl">
                開始 AI 適性配對
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
