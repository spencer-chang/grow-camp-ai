import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("訊息已送出，我們會盡快回覆您！");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 hero-gradient opacity-5" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                聯絡我們
              </h1>
              <p className="text-lg text-muted-foreground">
                有任何問題或需要協助？我們的專業團隊隨時為您服務
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="p-6 bg-card rounded-2xl border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">電子郵件</h3>
                  <p className="text-muted-foreground mb-2">一般諮詢</p>
                  <a href="mailto:hello@edugrowth.tw" className="text-primary hover:underline">
                    hello@edugrowth.tw
                  </a>
                </div>

                <div className="p-6 bg-card rounded-2xl border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">電話諮詢</h3>
                  <p className="text-muted-foreground mb-2">週一至週五 9:00-18:00</p>
                  <a href="tel:+886223456789" className="text-primary hover:underline">
                    +886 2 2345 6789
                  </a>
                </div>

                <div className="p-6 bg-card rounded-2xl border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">辦公室地址</h3>
                  <p className="text-muted-foreground">
                    台北市大安區敦化南路二段100號
                    <br />
                    10樓
                  </p>
                </div>

                <div className="p-6 bg-card rounded-2xl border border-border">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">服務時間</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>週一至週五：09:00 - 18:00</p>
                    <p>週六：10:00 - 14:00（預約制）</p>
                    <p>週日：休息</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-card rounded-2xl border border-border p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="font-display text-2xl font-bold">發送訊息</h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">姓名 *</label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="請輸入您的姓名"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">電子郵件 *</label>
                        <Input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">電話（選填）</label>
                        <Input
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="0912-345-678"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">主旨 *</label>
                        <Input
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder="請簡述您的問題"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">訊息內容 *</label>
                      <Textarea
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="請詳細描述您的問題或需求..."
                      />
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      <Send className="w-4 h-4 mr-2" />
                      送出訊息
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
