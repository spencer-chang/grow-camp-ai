import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  User,
  Plus,
  FileText,
  Sparkles,
  ChevronRight,
  Calendar,
  CheckCircle,
  Clock,
  TrendingUp,
} from "lucide-react";

// Mock data - will be replaced with real data from Supabase
const mockChildren = [
  {
    id: "child-1",
    name: "王小明",
    birthYear: 2012,
    gender: "male",
    englishLevel: 4,
    preSurveyCompleted: true,
    postSurveyCompleted: false,
    hasRecommendations: true,
    growthReports: [{ year: 2024 }],
  },
  {
    id: "child-2",
    name: "王小美",
    birthYear: 2015,
    gender: "female",
    englishLevel: 3,
    preSurveyCompleted: true,
    postSurveyCompleted: true,
    hasRecommendations: true,
    growthReports: [{ year: 2024 }],
  },
];

const mockRecommendations = [
  { campName: "瑞士阿爾卑斯探險營", matchScore: 95 },
  { campName: "北歐自然與領導力營", matchScore: 90 },
];

export default function Dashboard() {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-card border-b border-border">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  家長儀表板
                </h1>
                <p className="text-muted-foreground">
                  管理孩子的資料、問卷與成長報告
                </p>
              </div>
              <Button variant="hero">
                <Plus className="w-4 h-4 mr-2" />
                新增孩子
              </Button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Children List */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="font-display text-xl font-semibold text-foreground">
                我的孩子
              </h2>

              {mockChildren.map((child) => (
                <div
                  key={child.id}
                  className="bg-card rounded-2xl border border-border p-6 card-elevated"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-foreground">
                          {child.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {new Date().getFullYear() - child.birthYear} 歲 ·
                          英文程度 {child.englishLevel}/5
                        </p>
                      </div>
                    </div>
                    <Link to={`/dashboard/child/${child.id}`}>
                      <Button variant="ghost" size="sm">
                        編輯資料
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>

                  {/* Survey Status */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 bg-secondary/50 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        {child.preSurveyCompleted ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : (
                          <Clock className="w-5 h-5 text-amber-500" />
                        )}
                        <span className="font-medium text-sm">營前問卷</span>
                      </div>
                      <Badge
                        variant={
                          child.preSurveyCompleted ? "default" : "secondary"
                        }
                      >
                        {child.preSurveyCompleted ? "已完成" : "待填寫"}
                      </Badge>
                    </div>
                    <div className="p-4 bg-secondary/50 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        {child.postSurveyCompleted ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : (
                          <Clock className="w-5 h-5 text-muted-foreground" />
                        )}
                        <span className="font-medium text-sm">營後問卷</span>
                      </div>
                      <Badge
                        variant={
                          child.postSurveyCompleted ? "default" : "outline"
                        }
                      >
                        {child.postSurveyCompleted ? "已完成" : "尚未開放"}
                      </Badge>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3">
                    {child.hasRecommendations && (
                      <Link to="/survey/results">
                        <Button variant="outline" size="sm">
                          <Sparkles className="w-4 h-4 mr-2" />
                          查看 AI 推薦
                        </Button>
                      </Link>
                    )}
                    {child.growthReports.length > 0 && (
                      <Link
                        to={`/growth-report/${child.id}/${child.growthReports[0].year}`}
                      >
                        <Button variant="outline" size="sm">
                          <TrendingUp className="w-4 h-4 mr-2" />
                          查看成長報告
                        </Button>
                      </Link>
                    )}
                    {!child.preSurveyCompleted && (
                      <Link to="/survey/pre">
                        <Button size="sm">填寫營前問卷</Button>
                      </Link>
                    )}
                  </div>
                </div>
              ))}

              {/* Empty State */}
              {mockChildren.length === 0 && (
                <div className="bg-card rounded-2xl border border-border p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                    <User className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    尚未新增孩子資料
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    新增孩子的基本資料，開始使用 AI 適性配對功能
                  </p>
                  <Button variant="hero">
                    <Plus className="w-4 h-4 mr-2" />
                    新增孩子
                  </Button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <h3 className="font-display font-semibold text-lg mb-4">
                  快速操作
                </h3>
                <div className="space-y-3">
                  <Link to="/survey/pre" className="block">
                    <Button variant="outline" className="w-full justify-start">
                      <Sparkles className="w-4 h-4 mr-3" />
                      開始 AI 適性配對
                    </Button>
                  </Link>
                  <Link to="/camps" className="block">
                    <Button variant="outline" className="w-full justify-start">
                      <Calendar className="w-4 h-4 mr-3" />
                      瀏覽夏令營
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="w-4 h-4 mr-3" />
                    填寫營後問卷
                  </Button>
                </div>
              </div>

              {/* Latest Recommendations */}
              {mockRecommendations.length > 0 && (
                <div className="bg-card rounded-2xl border border-border p-6">
                  <h3 className="font-display font-semibold text-lg mb-4">
                    最新 AI 推薦
                  </h3>
                  <div className="space-y-3">
                    {mockRecommendations.map((rec, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-secondary/50 rounded-xl"
                      >
                        <span className="text-sm font-medium">
                          {rec.campName}
                        </span>
                        <Badge variant="secondary">{rec.matchScore}%</Badge>
                      </div>
                    ))}
                  </div>
                  <Link to="/survey/results">
                    <Button variant="ghost" size="sm" className="w-full mt-4">
                      查看完整推薦
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              )}

              {/* Help */}
              <div className="bg-primary/5 rounded-2xl p-6">
                <h3 className="font-display font-semibold text-lg mb-2">
                  需要協助？
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  我們的專業顧問可以幫助您選擇最適合的營隊
                </p>
                <Button variant="outline" className="w-full">
                  聯絡顧問
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
