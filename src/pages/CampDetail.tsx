import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { camps } from "@/data/camps";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Calendar,
  Users,
  Star,
  CheckCircle,
  ArrowLeft,
  Heart,
  Share2,
} from "lucide-react";

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

export default function CampDetail() {
  const { id } = useParams();
  const camp = camps.find((c) => c.id === id);

  if (!camp) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">找不到此營隊</h1>
          <Link to="/camps">
            <Button>返回營隊列表</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const scheduleWeeks = [
    { week: "第一週", activities: ["抵達與迎新", "基礎課程", "團隊建立活動"] },
    { week: "第二週", activities: ["進階技能訓練", "實作專案", "文化體驗"] },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Image */}
        <div className="relative h-[40vh] md:h-[50vh] bg-muted">
          <img
            src={camp.image}
            alt={camp.nameZh}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />

          {/* Back Button */}
          <Link
            to="/camps"
            className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 rounded-full bg-card/90 backdrop-blur-sm text-foreground hover:bg-card transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            返回列表
          </Link>

          {/* Action Buttons */}
          <div className="absolute top-6 right-6 flex gap-2">
            <button className="p-3 rounded-full bg-card/90 backdrop-blur-sm text-foreground hover:bg-card transition-colors">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-3 rounded-full bg-card/90 backdrop-blur-sm text-foreground hover:bg-card transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <div className="container mx-auto">
              <Badge className={`${categoryColors[camp.category]} mb-4`}>
                {categoryLabels[camp.category]}
              </Badge>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-card mb-2">
                {camp.nameZh}
              </h1>
              <p className="text-lg text-card/80">{camp.name}</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Quick Info */}
              <div className="flex flex-wrap gap-6 p-6 bg-card rounded-2xl border border-border">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>
                    {camp.city}, {camp.country}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>{camp.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span>
                    {camp.ageMin}-{camp.ageMax} 歲
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  <span>
                    {camp.rating} ({camp.reviews} 則評價)
                  </span>
                </div>
              </div>

              {/* Description */}
              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  營隊介紹
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {camp.descriptionZh}
                </p>
              </section>

              {/* Highlights */}
              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  課程亮點
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {camp.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Schedule */}
              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  行程安排
                </h2>
                <div className="space-y-4">
                  {scheduleWeeks.map((week) => (
                    <div
                      key={week.week}
                      className="p-6 bg-card rounded-xl border border-border"
                    >
                      <h3 className="font-semibold text-lg mb-3">{week.week}</h3>
                      <ul className="space-y-2">
                        {week.activities.map((activity, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-muted-foreground"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Suitable For */}
              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  適合對象
                </h2>
                <div className="p-6 bg-secondary/50 rounded-xl">
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>
                        對{categoryLabels[camp.category]}有興趣的孩子
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>年齡 {camp.ageMin}-{camp.ageMax} 歲</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>具備基礎英語溝通能力</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>願意嘗試新事物、結交國際朋友</span>
                    </li>
                  </ul>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Booking Card */}
                <div className="bg-card rounded-2xl border border-border p-6 card-elevated">
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-foreground">
                      €{camp.priceEUR.toLocaleString()}
                    </span>
                    <span className="text-muted-foreground ml-2">/ 人</span>
                  </div>

                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">課程費用</span>
                      <span>包含</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">住宿餐食</span>
                      <span>包含</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">保險</span>
                      <span>包含</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-muted-foreground">機票</span>
                      <span className="text-muted-foreground">不包含</span>
                    </div>
                  </div>

                  <Link to="/auth">
                    <Button variant="hero" size="lg" className="w-full mb-3">
                      登入後報名
                    </Button>
                  </Link>
                  <Link to="/survey/pre">
                    <Button variant="outline" size="lg" className="w-full">
                      AI 適性配對
                    </Button>
                  </Link>
                </div>

                {/* Help Box */}
                <div className="bg-secondary/50 rounded-2xl p-6">
                  <h3 className="font-semibold mb-2">需要協助？</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    我們的專業顧問可以幫助您選擇最適合孩子的營隊
                  </p>
                  <Button variant="outline" className="w-full">
                    聯絡顧問
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
