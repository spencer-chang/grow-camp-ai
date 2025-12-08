import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Globe2, Users, TrendingUp, Brain, Search, BarChart3, FileText, CheckCircle } from "lucide-react";
import { CampCard } from "@/components/camps/CampCard";
import { camps } from "@/data/camps";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Matching",
    description: "Our intelligent questionnaire analyzes your child's unique traits to recommend the top 3-5 most suitable camps with detailed reasoning.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Search,
    title: "Camp Discovery",
    description: "Comprehensive database of premium European summer camps with multi-dimensional filtering for easy comparison.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: BarChart3,
    title: "Growth Tracking",
    description: "Pre and post-camp assessment system to measure your child's development across multiple competencies.",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: FileText,
    title: "AI Growth Reports",
    description: "Personalized reports generated from assessment data, highlighting progress and providing actionable recommendations.",
    color: "bg-amber-500/10 text-amber-600",
  },
];

const benefits = [
  "Free AI matching consultation",
  "3-minute assessment questionnaire",
  "Personalized camp recommendations",
  "Expert advisor follow-up support",
];

export default function HomeEN() {
  const featuredCamps = camps.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-5" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              AI-Powered International Education Platform
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-slide-up">
              Transform Your Child's
              <br />
              <span className="text-gradient">International Experience</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Leverage AI-powered matching to find the perfect European summer camp for your child.
              From pre-camp assessment to post-camp growth reports, we track every step of your child's international learning journey.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Link to="/auth">
                <Button variant="hero" size="xl">
                  Start AI Matching
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/en/camps">
                <Button variant="outline-primary" size="xl">
                  Explore All Camps
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10">
                  <Globe2 className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Premium European Camps</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-xl bg-accent/10">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-foreground">1,200+</div>
                <div className="text-sm text-muted-foreground">Families Trust Us</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-xl bg-green-500/10">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-foreground">95%</div>
                <div className="text-sm text-muted-foreground">Parent Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Four Core Features
            </h2>
            <p className="text-lg text-muted-foreground">
              From camp selection to growth tracking, we provide comprehensive AI-assisted services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-background card-elevated animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-5 transition-transform group-hover:scale-110`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Camps Preview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Featured European Summer Camps
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl">
                Carefully selected premium camps across Europe, covering STEAM, languages, sports, outdoor adventures and more
              </p>
            </div>
            <Link to="/en/camps" className="mt-6 md:mt-0">
              <Button variant="outline-primary">
                View All Camps
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCamps.map((camp, index) => (
              <div 
                key={camp.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CampCard camp={camp} isEnglish />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-95" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Find the Perfect Camp for Your Child?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Complete our 3-minute questionnaire and let AI recommend the most suitable 
              European summer camp based on your child's unique personality and interests.
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

            <Link to="/auth">
              <Button 
                size="xl" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg"
              >
                Start AI Matching Now
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
