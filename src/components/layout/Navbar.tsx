import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe, Menu, X, User, LogOut } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isLoggedIn = false;
  
  // Determine if we're on English pages
  const isEnglish = location.pathname.startsWith("/en");
  
  const navLinks = isEnglish
    ? [
        { href: "/en/home", label: "Home" },
        { href: "/en/camps", label: "Camps" },
        { href: "/en/about", label: "About" },
        { href: "/en/contact", label: "Contact" },
      ]
    : [
        { href: "/", label: "首頁" },
        { href: "/camps", label: "夏令營" },
        { href: "/about", label: "關於我們" },
        { href: "/contact", label: "聯絡我們" },
      ];

  const getLanguageSwitchPath = () => {
    const path = location.pathname;
    if (isEnglish) {
      // Switch to Chinese
      if (path === "/en/home") return "/";
      if (path.startsWith("/en/camp/")) return path.replace("/en/camp/", "/camps/");
      return path.replace("/en", "") || "/";
    } else {
      // Switch to English
      if (path === "/") return "/en/home";
      if (path.startsWith("/camps/")) return path.replace("/camps/", "/en/camp/");
      return `/en${path}`;
    }
  };

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  // Placeholder for auth state - will be replaced with real auth
  const isLoggedIn = false;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl hero-gradient flex items-center justify-center">
              <Globe className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <span className="font-display font-bold text-lg text-foreground">EduGrowth</span>
              <span className="text-xs text-muted-foreground block -mt-1">AI 國際教育平台</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  location.pathname === link.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Globe className="w-4 h-4" />
                  <span>{isEnglish ? "EN" : "中文"}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link to={isEnglish ? getLanguageSwitchPath() : location.pathname} className={!isEnglish ? "bg-primary/10 text-primary" : ""}>
                    中文
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to={!isEnglish ? getLanguageSwitchPath() : location.pathname} className={isEnglish ? "bg-primary/10 text-primary" : ""}>
                    English
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {isLoggedIn ? (
              <>
                <Link to="/dashboard">
                  <Button variant="ghost" size="sm">
                    <User className="w-4 h-4 mr-2" />
                    {isEnglish ? "Dashboard" : "我的儀表板"}
                  </Button>
                </Link>
                <Button variant="outline" size="sm">
                  <LogOut className="w-4 h-4 mr-2" />
                  {isEnglish ? "Logout" : "登出"}
                </Button>
              </>
            ) : (
              <>
                <Link to="/auth">
                  <Button variant="ghost" size="sm">{isEnglish ? "Login" : "登入"}</Button>
                </Link>
                <Link to="/auth?mode=register">
                  <Button variant="default" size="sm">{isEnglish ? "Sign Up" : "免費註冊"}</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                    location.pathname === link.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-border my-2" />
              {isLoggedIn ? (
                <>
                  <Link to="/dashboard" onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start">
                      <User className="w-4 h-4 mr-2" />
                      我的儀表板
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full justify-start">
                    <LogOut className="w-4 h-4 mr-2" />
                    登出
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/auth" onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" className="w-full">登入</Button>
                  </Link>
                  <Link to="/auth?mode=register" onClick={() => setIsOpen(false)}>
                    <Button variant="default" className="w-full">免費註冊</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
