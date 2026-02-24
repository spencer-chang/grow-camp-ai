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
import { CampBridgeLogo } from "./CampBridgeLogo";

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
      if (path === "/en/home") return "/";
      if (path.startsWith("/en/camp/")) return path.replace("/en/camp/", "/camps/");
      return path.replace("/en", "") || "/";
    } else {
      if (path === "/") return "/en/home";
      if (path.startsWith("/camps/")) return path.replace("/camps/", "/en/camp/");
      return `/en${path}`;
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to={isEnglish ? "/en/home" : "/"} className="flex items-center">
            <CampBridgeLogo 
              variant="A" 
              size="medium" 
              showText={true}
              showTagline={false}
            />
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
                  <Link 
                    to={isEnglish ? getLanguageSwitchPath() : location.pathname} 
                    className={cn("w-full", !isEnglish && "bg-primary/10 text-primary")}
                  >
                    中文
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link 
                    to={!isEnglish ? getLanguageSwitchPath() : location.pathname} 
                    className={cn("w-full", isEnglish && "bg-primary/10 text-primary")}
                  >
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
                <Link to="/survey/pre">
                  <Button variant="default" size="sm">{isEnglish ? "Free Assessment" : "開始免費適性分析"}</Button>
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
              
              {/* Mobile Language Switcher */}
              <div className="border-t border-border my-2 pt-2">
                <Link
                  to={getLanguageSwitchPath()}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted flex items-center gap-2"
                >
                  <Globe className="w-4 h-4" />
                  {isEnglish ? "切換至中文" : "Switch to English"}
                </Link>
              </div>
              
              <div className="border-t border-border my-2" />
              {isLoggedIn ? (
                <>
                  <Link to="/dashboard" onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start">
                      <User className="w-4 h-4 mr-2" />
                      {isEnglish ? "Dashboard" : "我的儀表板"}
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full justify-start">
                    <LogOut className="w-4 h-4 mr-2" />
                    {isEnglish ? "Logout" : "登出"}
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/auth" onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" className="w-full">
                      {isEnglish ? "Login" : "登入"}
                    </Button>
                  </Link>
                  <Link to="/survey/pre" onClick={() => setIsOpen(false)}>
                    <Button variant="default" className="w-full">
                      {isEnglish ? "Free Assessment" : "開始免費適性分析"}
                    </Button>
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
