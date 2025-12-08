import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { camps } from "@/data/camps";
import {
  Sparkles,
  CheckCircle,
  Star,
  MapPin,
  Users,
  ArrowRight,
  RefreshCw,
} from "lucide-react";

// Mock AI analysis result - in real app this would come from AI action
const mockAnalysis = {
  childProfile: {
    englishLevel: "中等偏上",
    socialStyle: "外向活潑",
    adaptability: "適應力強",
    interests: ["戶外探險", "運動"],
    goals: "培養獨立自主與國際視野",
  },
  summary:
    "根據問卷分析，您的孩子具有良好的社交能力和適應力，對戶外活動和運動有濃厚興趣。建議選擇結合自然探索與團隊合作的營隊，能幫助孩子在舒適圈外成長，同時發揮社交優勢。",
  recommendations: [
    {
      camp: camps[0], // Swiss Alps
      matchScore: 95,
      reasons: [
        "戶外探險活動完美契合興趣",
        "團隊合作機會多，適合外向性格",
        "適度挑戰性，有助培養獨立性",
      ],
    },
    {
      camp: camps[5], // Nordic
      matchScore: 90,
      reasons: [
        "領導力培訓符合成長目標",
        "自然環境豐富的探索活動",
        "國際化團隊增進視野",
      ],
    },
    {
      camp: camps[3], // Barcelona Football
      matchScore: 85,
      reasons: [
        "專業運動訓練契合興趣",
        "團隊運動培養社交能力",
        "西班牙文化體驗拓展視野",
      ],
    },
  ],
};

const categoryColors: Record<string, string> = {
  STEAM: "bg-purple-100 text-purple-700",
  Sports: "bg-green-100 text-green-700",
  English: "bg-blue-100 text-blue-700",
  Outdoor: "bg-amber-100 text-amber-700",
  Arts: "bg-pink-100 text-pink-700",
};

const categoryLabels: Record<string, string> = {
  STEAM: "科技創新",
  Sports: "運動專項",
  English: "英語沉浸",
  Outdoor: "戶外探險",
  Arts: "藝術創意",
};

export default function SurveyResults() {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="hero-gradient py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              AI 分析完成
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              專屬營隊推薦結果
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              根據您填寫的問卷，AI 已為您的孩子精選最適合的營隊
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Child Profile Summary */}
            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                孩子特質分析
              </h2>
              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-secondary/50 rounded-xl">
                    <div className="text-sm text-muted-foreground mb-1">
                      英文程度
                    </div>
                    <div className="font-semibold">
                      {mockAnalysis.childProfile.englishLevel}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-secondary/50 rounded-xl">
                    <div className="text-sm text-muted-foreground mb-1">
                      社交風格
                    </div>
                    <div className="font-semibold">
                      {mockAnalysis.childProfile.socialStyle}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-secondary/50 rounded-xl">
                    <div className="text-sm text-muted-foreground mb-1">
                      適應能力
                    </div>
                    <div className="font-semibold">
                      {mockAnalysis.childProfile.adaptability}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-secondary/50 rounded-xl">
                    <div className="text-sm text-muted-foreground mb-1">
                      主要目標
                    </div>
                    <div className="font-semibold text-sm">
                      {mockAnalysis.childProfile.goals}
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-primary/5 rounded-xl">
                  <p className="text-muted-foreground leading-relaxed">
                    <Sparkles className="w-4 h-4 inline mr-2 text-primary" />
                    {mockAnalysis.summary}
                  </p>
                </div>
              </div>
            </section>

            {/* Recommendations */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-2xl font-bold text-foreground">
                  推薦營隊 TOP 3
                </h2>
                <Button variant="outline" size="sm">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  重新分析
                </Button>
              </div>

              <div className="space-y-6">
                {mockAnalysis.recommendations.map((rec, index) => (
                  <div
                    key={rec.camp.id}
                    className="bg-card rounded-2xl border border-border overflow-hidden card-elevated animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex flex-col md:flex-row">
                      {/* Image */}
                      <div className="md:w-64 h-48 md:h-auto bg-muted relative">
                        <img
                          src={rec.camp.image}
                          alt={rec.camp.nameZh}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <div className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                            #{index + 1} 推薦
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <Badge
                              className={`${categoryColors[rec.camp.category]} mb-2`}
                            >
                              {categoryLabels[rec.camp.category]}
                            </Badge>
                            <h3 className="font-display text-xl font-bold text-foreground">
                              {rec.camp.nameZh}
                            </h3>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-muted-foreground">
                              契合度
                            </div>
                            <div className="text-2xl font-bold text-primary">
                              {rec.matchScore}%
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {rec.camp.city}, {rec.camp.country}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {rec.camp.ageMin}-{rec.camp.ageMax} 歲
                          </span>
                          <span className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                            {rec.camp.rating}
                          </span>
                        </div>

                        {/* Reasons */}
                        <div className="mb-4">
                          <div className="text-sm font-medium text-foreground mb-2">
                            為什麼適合您的孩子：
                          </div>
                          <ul className="space-y-1">
                            {rec.reasons.map((reason, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-sm text-muted-foreground"
                              >
                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                {reason}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-border">
                          <div>
                            <span className="text-2xl font-bold text-foreground">
                              €{rec.camp.priceEUR.toLocaleString()}
                            </span>
                            <span className="text-sm text-muted-foreground ml-1">
                              / {rec.camp.duration}
                            </span>
                          </div>
                          <Link to={`/camps/${rec.camp.id}`}>
                            <Button>
                              查看詳情
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <div className="mt-12 text-center p-8 bg-card rounded-2xl border border-border">
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                需要專業顧問協助？
              </h3>
              <p className="text-muted-foreground mb-6">
                我們的教育顧問可以根據 AI
                推薦結果，提供更深入的諮詢與報名協助
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline-primary" size="lg">
                  預約諮詢
                </Button>
                <Link to="/auth">
                  <Button variant="hero" size="lg">
                    登入儲存結果
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
