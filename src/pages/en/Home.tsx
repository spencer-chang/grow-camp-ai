import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Globe2, Users, TrendingUp, Brain, Search, Camera, Gift, CheckCircle, Award, Shield, Heart } from "lucide-react";
import { CampCard } from "@/components/camps/CampCard";
import { camps } from "@/data/camps";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Matching",
    description: "Our proprietary algorithm analyzes your child's unique personality traits, learning style, and interests to recommend the most suitable programs from our curated network of European camps.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Search,
    title: "Curated Camp Network",
    description: "We partner exclusively with vetted, premium European summer programs. Each camp in our network meets rigorous standards for safety, educational quality, and cultural enrichment.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Camera,
    title: "Journey Highlights & Adaptation Insights",
    description: "Beyond safety and fun, we capture your child's unique moments of adaptation and joy in a new environment. No rigid KPIs, just meaningful highlights of their international journey.",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: Gift,
    title: "Potential Spotlight & Discovery Memo",
    description: "A personalized AI-powered memo that translates camp experiences into insights about your child's hidden potentials and unique personality traits. A gift of discovery for every parent.",
    color: "bg-amber-500/10 text-amber-600",
  },
];

const benefits = [
  "Complimentary AI matching consultation",
  "3-minute assessment questionnaire",
  "Personalized program recommendations",
  "Dedicated advisor support throughout",
];

const trustFactors = [
  {
    icon: Shield,
    title: "Verified Partners",
    description: "Every camp undergoes our rigorous vetting process",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "We maintain the highest standards for educational excellence",
  },
  {
    icon: Heart,
    title: "Child-Centered",
    description: "Every recommendation prioritizes your child's growth and wellbeing",
  },
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
              AI Learning Fit · Talent Insights · Growth Observations
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-slide-up">
              Find the International Camp Experience
              <br />
              <span className="text-gradient">That Truly Fits Your Child</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              More than just a camp directory. We use AI-powered learning fit analysis, talent insights, and growth observations to help families make confident, long-term decisions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Link to="/en/survey/pre">
                <Button variant="hero" size="xl">
                  Start Your Child's Journey
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/en/camps">
                <Button variant="outline-primary" size="xl">
                  Explore Our Programs
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10">
                  <Globe2 className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Premium European Programs</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-xl bg-accent/10">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-foreground">1,200+</div>
                <div className="text-sm text-muted-foreground">Families Served</div>
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

      {/* Trust Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {trustFactors.map((factor) => (
              <div key={factor.title} className="flex items-start gap-4 p-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <factor.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{factor.title}</h3>
                  <p className="text-sm text-muted-foreground">{factor.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              A Complete Ecosystem for International Education
            </h2>
            <p className="text-lg text-muted-foreground">
              We go beyond simple camp listings. Our integrated platform provides end-to-end support—from intelligent matching to measurable growth outcomes.
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

      {/* How It Works */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Your Journey to Meaningful Growth
            </h2>
            <p className="text-lg text-muted-foreground">
              Our streamlined process ensures the right match and measurable outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Complete Assessment", desc: "Answer our 3-minute questionnaire about your child's personality, interests, and goals" },
              { step: "02", title: "Receive Recommendations", desc: "Our AI analyzes 20+ factors to match your child with ideal programs" },
              { step: "03", title: "Experience & Grow", desc: "Your child attends a transformative international program in Europe" },
              { step: "04", title: "Measure Progress", desc: "Receive a comprehensive growth report documenting their development" },
            ].map((item, index) => (
              <div key={item.step} className="text-center relative">
                <div className="text-6xl font-bold text-primary/10 mb-4">{item.step}</div>
                <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
                {index < 3 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 w-8 h-8 text-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Camps Preview */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Featured European Programs
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl">
                Explore our curated selection of premium summer programs across Europe—each vetted for quality, safety, and educational excellence.
              </p>
            </div>
            <Link to="/en/camps" className="mt-6 md:mt-0">
              <Button variant="outline-primary">
                View All Programs
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
              Ready to Transform Your Child's Future?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Join thousands of families who have discovered the power of personalized international education. 
              Our AI-driven approach ensures every child finds their perfect program—and every experience delivers measurable growth.
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

            <Link to="/en/survey/pre">
              <Button 
                size="xl" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg"
              >
                Begin Your Child's Journey
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
