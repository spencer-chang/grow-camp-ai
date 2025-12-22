import { useMemo, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  TrendingUp,
} from "lucide-react";
import {
  calculateProfile,
  generateSummary,
  profileDescriptions,
  ChildProfile,
} from "@/lib/surveyModel";
import { getRecommendations, CampRecommendation } from "@/lib/campMatching";

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
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});

  // 從 sessionStorage 讀取答案
  useEffect(() => {
    const savedAnswers = sessionStorage.getItem('surveyAnswers');
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    } else {
      // 如果沒有答案，重新導向問卷頁
      navigate('/survey/pre');
    }
  }, [navigate]);

  // 計算孩子特質分析
  const profile: ChildProfile | null = useMemo(() => {
    if (Object.keys(answers).length === 0) return null;
    return calculateProfile(answers);
  }, [answers]);

  // 生成分析摘要
  const summary = useMemo(() => {
    if (!profile) return '';
    return generateSummary(profile, answers);
  }, [profile, answers]);

  // 獲取營隊推薦
  const recommendations: CampRecommendation[] = useMemo(() => {
    if (!profile) return [];
    return getRecommendations(camps, profile, answers, 3);
  }, [profile, answers]);

  // 重新測驗
  const handleRetake = () => {
    sessionStorage.removeItem('surveyAnswers');
    navigate('/survey/pre');
  };

  if (!profile) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-4 animate-pulse" />
            <p className="text-muted-foreground">正在載入分析結果...</p>
          </div>
        </div>
      </Layout>
    );
  }

  const typeInfo = profileDescriptions[profile.primaryType];
  const secondaryInfo = profile.secondaryType 
    ? profileDescriptions[profile.secondaryType] 
    : null;

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
            {/* 孩子型態卡片 */}
            <section className="mb-12">
              <div className="bg-card rounded-2xl p-8 border border-border relative overflow-hidden">
                {/* 背景裝飾 */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                
                <div className="relative">
                  {/* 型態標題 */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-5xl">{typeInfo.emoji}</div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h2 className="font-display text-2xl font-bold text-foreground">
                          {typeInfo.nameZh}
                        </h2>
                        <Badge variant="secondary" className="text-xs">
                          {typeInfo.name}
                        </Badge>
                      </div>
                      {secondaryInfo && (
                        <p className="text-sm text-muted-foreground">
                          次要傾向：{secondaryInfo.nameZh}（{secondaryInfo.name}）
                        </p>
                      )}
                    </div>
                  </div>

                  {/* 型態描述 */}
                  <div className="p-4 bg-primary/5 rounded-xl mb-6">
                    <p className="text-foreground leading-relaxed">
                      {typeInfo.description}
                    </p>
                  </div>

                  {/* 特質分析 */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-4 bg-secondary/50 rounded-xl">
                      <div className="text-sm text-muted-foreground mb-1">
                        英文啟動度
                      </div>
                      <div className="font-semibold text-sm">
                        {profile.traits.languageActivation}
                      </div>
                    </div>
                    <div className="text-center p-4 bg-secondary/50 rounded-xl">
                      <div className="text-sm text-muted-foreground mb-1">
                        適應能力
                      </div>
                      <div className="font-semibold text-sm">
                        {profile.traits.adaptability}
                      </div>
                    </div>
                    <div className="text-center p-4 bg-secondary/50 rounded-xl">
                      <div className="text-sm text-muted-foreground mb-1">
                        社交風格
                      </div>
                      <div className="font-semibold text-sm">
                        {profile.traits.socialOrientation}
                      </div>
                    </div>
                    <div className="text-center p-4 bg-secondary/50 rounded-xl">
                      <div className="text-sm text-muted-foreground mb-1">
                        成長目標
                      </div>
                      <div className="font-semibold text-sm">
                        {profile.traits.growthGoals.join('、')}
                      </div>
                    </div>
                  </div>

                  {/* 主要特質 */}
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      為什麼孩子屬於此型態
                    </h3>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {typeInfo.characteristics.map((char, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {char}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 適合環境 */}
                  <div>
                    <h3 className="text-sm font-medium text-foreground mb-3">
                      適合的學習與營隊環境
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {typeInfo.suitableEnvironments.map((env, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {env}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* AI 分析摘要 */}
            <section className="mb-12">
              <div className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl border border-primary/20">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-foreground mb-2">AI 個人化分析</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {summary}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Recommendations */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-2xl font-bold text-foreground">
                  推薦營隊 TOP 3
                </h2>
                <Button variant="outline" size="sm" onClick={handleRetake}>
                  <RefreshCw className="w-4 h-4 mr-2" />
                  重新分析
                </Button>
              </div>

              <div className="space-y-6">
                {recommendations.map((rec, index) => (
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
