import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Globe, Mail, Lock, User, Phone, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Auth() {
  const [searchParams] = useSearchParams();
  const isRegister = searchParams.get("mode") === "register";
  const [mode, setMode] = useState<"login" | "register">(
    isRegister ? "register" : "login"
  );
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This will be replaced with real auth when Supabase is connected
    toast({
      title: mode === "login" ? "登入功能開發中" : "註冊功能開發中",
      description: "請連接 Supabase 以啟用完整的認證功能",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout showFooter={false}>
      <div className="min-h-screen flex">
        {/* Left Side - Form */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 mb-10">
              <div className="w-10 h-10 rounded-xl hero-gradient flex items-center justify-center">
                <Globe className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <span className="font-display font-bold text-lg text-foreground">
                  EduGrowth
                </span>
                <span className="text-xs text-muted-foreground block -mt-1">
                  AI 國際教育平台
                </span>
              </div>
            </Link>

            {/* Title */}
            <div className="mb-8">
              <h1 className="font-display text-2xl font-bold text-foreground mb-2">
                {mode === "login" ? "歡迎回來" : "建立帳號"}
              </h1>
              <p className="text-muted-foreground">
                {mode === "login"
                  ? "登入以管理孩子的成長紀錄"
                  : "註冊以開始使用 AI 適性配對服務"}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {mode === "register" && (
                <div className="space-y-2">
                  <Label htmlFor="name">家長姓名</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="請輸入姓名"
                      value={formData.name}
                      onChange={handleChange}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">電子郵件</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">密碼</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              {mode === "register" && (
                <div className="space-y-2">
                  <Label htmlFor="phone">手機號碼（選填）</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="0912-345-678"
                      value={formData.phone}
                      onChange={handleChange}
                      className="pl-10"
                    />
                  </div>
                </div>
              )}

              <Button variant="hero" size="lg" className="w-full" type="submit">
                {mode === "login" ? "登入" : "建立帳號"}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>

            {/* Switch Mode */}
            <div className="mt-6 text-center text-sm text-muted-foreground">
              {mode === "login" ? (
                <>
                  還沒有帳號？{" "}
                  <button
                    onClick={() => setMode("register")}
                    className="text-primary font-medium hover:underline"
                  >
                    立即註冊
                  </button>
                </>
              ) : (
                <>
                  已經有帳號？{" "}
                  <button
                    onClick={() => setMode("login")}
                    className="text-primary font-medium hover:underline"
                  >
                    登入
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Right Side - Image/Decoration */}
        <div className="hidden lg:flex flex-1 hero-gradient items-center justify-center p-12">
          <div className="max-w-md text-primary-foreground">
            <h2 className="font-display text-3xl font-bold mb-6">
              開啟孩子的國際視野
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
              加入 EduGrowth，讓 AI 幫您找到最適合孩子的歐洲夏令營體驗。
              從營前評估到營後成長報告，完整記錄孩子的每一步成長。
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
                  ✓
                </div>
                <span>AI 智慧配對，精準推薦</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
                  ✓
                </div>
                <span>完整成長追蹤系統</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
                  ✓
                </div>
                <span>專業顧問一對一諮詢</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
