import { Link } from "react-router-dom";
import { Globe, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Globe className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <span className="font-display font-bold text-lg">EduGrowth</span>
                <span className="text-xs text-muted block -mt-1">AI 國際教育平台</span>
              </div>
            </Link>
            <p className="text-sm text-muted leading-relaxed">
              用 AI 幫孩子找到最適合的國際夏令營體驗，讓孩子的成長可以被看見。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">快速連結</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/camps" className="text-muted hover:text-background transition-colors">
                  探索夏令營
                </Link>
              </li>
              <li>
                <Link to="/survey/pre" className="text-muted hover:text-background transition-colors">
                  AI 適性配對
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted hover:text-background transition-colors">
                  關於我們
                </Link>
              </li>
              <li>
                <Link to="/auth" className="text-muted hover:text-background transition-colors">
                  家長登入
                </Link>
              </li>
            </ul>
          </div>

          {/* Camp Categories */}
          <div>
            <h4 className="font-display font-semibold mb-4">營隊類別</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/camps?category=STEAM" className="text-muted hover:text-background transition-colors">
                  STEAM 科技營
                </Link>
              </li>
              <li>
                <Link to="/camps?category=English" className="text-muted hover:text-background transition-colors">
                  英語沉浸營
                </Link>
              </li>
              <li>
                <Link to="/camps?category=Sports" className="text-muted hover:text-background transition-colors">
                  運動專項營
                </Link>
              </li>
              <li>
                <Link to="/camps?category=Outdoor" className="text-muted hover:text-background transition-colors">
                  戶外探險營
                </Link>
              </li>
              <li>
                <Link to="/camps?category=Arts" className="text-muted hover:text-background transition-colors">
                  藝術創意營
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">聯絡我們</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted">
                <Mail className="w-4 h-4" />
                hello@edugrowth.tw
              </li>
              <li className="flex items-center gap-2 text-muted">
                <Phone className="w-4 h-4" />
                +886 2 2345 6789
              </li>
              <li className="flex items-start gap-2 text-muted">
                <MapPin className="w-4 h-4 mt-0.5" />
                台北市大安區敦化南路二段100號
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted">
            © 2024 EduGrowth AI 國際教育成長平台. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-muted hover:text-background transition-colors">
              隱私權政策
            </Link>
            <Link to="/terms" className="text-muted hover:text-background transition-colors">
              服務條款
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
