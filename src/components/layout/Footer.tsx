import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { CampBridgeLogo } from "./CampBridgeLogo";
export function Footer() {
  const { isEnglish, t, getLocalizedPath } = useLanguage();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to={getLocalizedPath("/")}>
              <CampBridgeLogo 
                variant="A" 
                size="medium" 
                showText={true} 
                showTagline={true}
                taglineText={t("AI 國際夏令營配對平台", "AI Camp Matching Platform")}
              />
            </Link>
            <p className="text-sm text-muted leading-relaxed">
              {t(
                "用 AI 幫孩子找到最適合的國際夏令營體驗，讓孩子的成長可以被看見。",
                "Using AI to help children find the perfect international summer camp experience, making their growth visible and measurable."
              )}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">
              {t("快速連結", "Quick Links")}
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to={getLocalizedPath("/camps")} className="text-muted hover:text-background transition-colors">
                  {t("探索夏令營", "Explore Camps")}
                </Link>
              </li>
              <li>
                <Link to={isEnglish ? "/en/contact" : "/survey/pre"} className="text-muted hover:text-background transition-colors">
                  {t("AI 適性配對", "Partner With Us")}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath("/about")} className="text-muted hover:text-background transition-colors">
                  {t("關於我們", "About Us")}
                </Link>
              </li>
              <li>
                <Link to={isEnglish ? "/en/contact" : "/auth"} className="text-muted hover:text-background transition-colors">
                  {t("家長登入", "Contact Us")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Camp Categories */}
          <div>
            <h4 className="font-display font-semibold mb-4">
              {t("營隊類別", "Program Categories")}
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to={getLocalizedPath("/camps") + "?category=STEAM"} className="text-muted hover:text-background transition-colors">
                  {t("STEAM 科技營", "STEAM Technology")}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath("/camps") + "?category=English"} className="text-muted hover:text-background transition-colors">
                  {t("英語沉浸營", "English Immersion")}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath("/camps") + "?category=Sports"} className="text-muted hover:text-background transition-colors">
                  {t("運動專項營", "Sports Excellence")}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath("/camps") + "?category=Outdoor"} className="text-muted hover:text-background transition-colors">
                  {t("戶外探險營", "Outdoor Adventure")}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath("/camps") + "?category=Arts"} className="text-muted hover:text-background transition-colors">
                  {t("藝術創意營", "Arts & Creativity")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">
              {t("聯絡我們", "Contact Us")}
            </h4>
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
                {t(
                  "台北市大安區敦化南路二段100號",
                  "No. 100, Sec. 2, Dunhua S. Rd., Da'an Dist., Taipei, Taiwan"
                )}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted">
            {t(
              "© 2024 Camp Bridge AI 國際夏令營配對平台. All rights reserved.",
              "© 2024 Camp Bridge AI Camp Matching Platform. All rights reserved."
            )}
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-muted hover:text-background transition-colors">
              {t("隱私權政策", "Privacy Policy")}
            </Link>
            <Link to="/terms" className="text-muted hover:text-background transition-colors">
              {t("服務條款", "Terms of Service")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
