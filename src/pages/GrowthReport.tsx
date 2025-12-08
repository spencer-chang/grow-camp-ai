import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Sparkles,
  TrendingUp,
  Star,
  Target,
  Lightbulb,
  Calendar,
  Share2,
  Download,
} from "lucide-react";

// Mock report data - will be replaced with AI-generated data
const mockReport = {
  childName: "王小明",
  year: 2024,
  campName: "瑞士阿爾卑斯探險營",
  campCategory: "Outdoor",
  summary:
    "小明在今年的瑞士探險營中展現了顯著的成長。他從一開始對陌生環境的緊張，逐漸轉變為能夠主動與國際夥伴交流。在戶外活動中表現出色的團隊合作精神，並在挑戰性任務中展現了超乎預期的問題解決能力。",
  skills: [
    { name: "英語溝通", before: 3, after: 4 },
    { name: "社交主動性", before: 2, after: 4 },
    { name: "團隊合作", before: 3, after: 5 },
    { name: "獨立自主", before: 2, after: 4 },
    { name: "問題解決", before: 3, after: 4 },
  ],
  topImprovements: [
    {
      title: "社交勇氣大躍進",
      description:
        "從害羞到主動，小明學會了用英文自我介紹並結交了來自5個國家的朋友。",
    },
    {
      title: "團隊領導初體驗",
      description: "在登山任務中主動擔任小組導航員，展現出色的方向感與領導潛力。",
    },
    {
      title: "獨立生活能力提升",
      description: "自己打理行李、整理床鋪，並學會了基本的野外生存技能。",
    },
  ],
  areasToStrengthen: [
    {
      area: "英文寫作表達",
      suggestion: "建議平時多練習英文日記寫作，記錄生活點滴。",
    },
    {
      area: "情緒管理",
      suggestion: "面對挫折時偶爾會有情緒波動，可透過運動或藝術活動來調適。",
    },
  ],
  nextYearRecommendations: [
    { category: "STEAM", reason: "可嘗試科技類營隊，發展邏輯思考能力" },
    { category: "English", reason: "進階英語營，強化口語與寫作能力" },
  ],
  favoriteActivity: "高山健行與星空露營",
  childQuote: "我最喜歡和新朋友一起爬山，看到山頂的風景時超感動的！",
  parentObservation:
    "回來後明顯變得更有自信，會主動分享營隊的故事，也更願意嘗試新事物了。",
};

export default function GrowthReport() {
  const { childId, year } = useParams();

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="hero-gradient py-12">
          <div className="container mx-auto px-4">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              返回儀表板
            </Link>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5 text-primary-foreground" />
                  <span className="text-primary-foreground/80">
                    AI 成長評估報告
                  </span>
                </div>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
                  {mockReport.childName} - {mockReport.year} 年度報告
                </h1>
                <p className="text-primary-foreground/80 mt-2">
                  {mockReport.campName}
                </p>
              </div>
              <div className="flex gap-3">
                <Button
                  variant="secondary"
                  className="bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  分享
                </Button>
                <Button
                  variant="secondary"
                  className="bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30"
                >
                  <Download className="w-4 h-4 mr-2" />
                  下載
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Summary */}
            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-primary" />
                成長摘要
              </h2>
              <div className="bg-card rounded-2xl border border-border p-6">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {mockReport.summary}
                </p>
              </div>
            </section>

            {/* Skills Radar (Text Version) */}
            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Target className="w-6 h-6 text-primary" />
                能力成長雷達
              </h2>
              <div className="bg-card rounded-2xl border border-border p-6">
                <div className="space-y-4">
                  {mockReport.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{skill.before}/5</Badge>
                          <span className="text-muted-foreground">→</span>
                          <Badge variant="default">{skill.after}/5</Badge>
                          {skill.after > skill.before && (
                            <span className="text-green-500 text-sm font-medium">
                              +{skill.after - skill.before}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-500"
                          style={{ width: `${(skill.after / 5) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Top Improvements */}
            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Star className="w-6 h-6 text-amber-500" />
                三大進步亮點
              </h2>
              <div className="grid gap-4">
                {mockReport.topImprovements.map((item, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-2xl border border-border p-6 flex gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-amber-600 font-bold">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Areas to Strengthen */}
            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-primary" />
                建議強化方向
              </h2>
              <div className="bg-card rounded-2xl border border-border p-6">
                <div className="space-y-4">
                  {mockReport.areasToStrengthen.map((item, index) => (
                    <div
                      key={index}
                      className="p-4 bg-secondary/50 rounded-xl"
                    >
                      <h4 className="font-medium mb-1">{item.area}</h4>
                      <p className="text-sm text-muted-foreground">
                        {item.suggestion}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Quotes */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-primary/5 rounded-2xl p-6">
                <h3 className="font-semibold mb-3">孩子說</h3>
                <blockquote className="text-muted-foreground italic">
                  "{mockReport.childQuote}"
                </blockquote>
              </div>
              <div className="bg-accent/5 rounded-2xl p-6">
                <h3 className="font-semibold mb-3">家長觀察</h3>
                <blockquote className="text-muted-foreground italic">
                  "{mockReport.parentObservation}"
                </blockquote>
              </div>
            </section>

            {/* Next Year Recommendations */}
            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-primary" />
                明年營隊建議
              </h2>
              <div className="bg-card rounded-2xl border border-border p-6">
                <p className="text-muted-foreground mb-4">
                  根據今年的成長表現，AI 建議明年可考慮以下類型的營隊：
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {mockReport.nextYearRecommendations.map((rec, index) => (
                    <div
                      key={index}
                      className="p-4 bg-secondary/50 rounded-xl"
                    >
                      <Badge className="mb-2">{rec.category}</Badge>
                      <p className="text-sm text-muted-foreground">
                        {rec.reason}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA */}
            <div className="text-center p-8 bg-card rounded-2xl border border-border">
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                準備好為明年選擇營隊了嗎？
              </h3>
              <p className="text-muted-foreground mb-6">
                使用 AI 適性配對，找到最適合孩子下一階段成長的營隊
              </p>
              <Link to="/survey/pre">
                <Button variant="hero" size="lg">
                  <Sparkles className="w-4 h-4 mr-2" />
                  開始新的 AI 配對
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
