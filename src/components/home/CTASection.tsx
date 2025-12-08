import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  "完全免費使用 AI 配對功能",
  "3 分鐘完成適性問卷",
  "獲得個人化營隊推薦",
  "專業顧問後續諮詢",
];

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-95" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            準備好為孩子找到最適合的夏令營了嗎？
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            只需 3 分鐘填寫問卷，AI 將根據孩子的特質與興趣，
            推薦最適合的歐洲夏令營體驗。
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm"
              >
                <CheckCircle className="w-4 h-4" />
                {benefit}
              </div>
            ))}
          </div>

          <Link to="/survey/pre">
            <Button 
              size="xl" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg"
            >
              立即開始 AI 配對
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
