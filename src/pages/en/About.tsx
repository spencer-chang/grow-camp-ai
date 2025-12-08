import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  Sparkles,
  Heart,
  Users,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Precision Matching",
    description:
      "We believe every child is unique. Using AI technology to analyze your child's characteristics, we provide precisely matched camp recommendations.",
  },
  {
    icon: Eye,
    title: "Visible Growth",
    description:
      "Growth isn't just a feeling—it needs to be documented. Our assessment system makes your child's progress clearly visible, creating valuable growth records.",
  },
  {
    icon: Heart,
    title: "Child-Centered",
    description:
      "Every decision starts from the child's perspective, ensuring each international experience delivers positive and lasting impact.",
  },
];

const differences = [
  {
    traditional: "Traditional Agencies",
    ours: "EduGrowth",
    items: [
      { traditional: "Recommend popular camps", ours: "AI analyzes child traits for recommendations" },
      { traditional: "Service ends after camp", ours: "Post-camp growth tracking & reports" },
      { traditional: "Commission-driven", ours: "Child growth-focused" },
      { traditional: "Limited transparency", ours: "Complete information + authentic reviews" },
    ],
  },
];

export default function AboutEN() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 hero-gradient opacity-5" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Making International Experiences
                <br />
                <span className="text-gradient">Truly Meaningful</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                EduGrowth is more than a camp search platform. We leverage AI technology 
                to help parents find truly suitable international learning experiences for their children, 
                and through scientific assessment systems, make every growth milestone visible.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="p-8 bg-background rounded-2xl card-elevated">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Our Mission
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Through the power of technology, we enable every child to find 
                  international learning experiences that truly suit them, achieving 
                  genuine and measurable growth. We are committed to breaking the 
                  information asymmetry in traditional study abroad services, 
                  empowering parents to make more informed decisions.
                </p>
              </div>

              <div className="p-8 bg-background rounded-2xl card-elevated">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-accent" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Our Vision
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To become Asia's most trusted AI education growth platform, 
                  transforming "international experience" from just a line on a resume 
                  into truly meaningful growth milestones in a child's life. 
                  We envision every child discovering their potential through 
                  suitable experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Core Values
              </h2>
              <p className="text-lg text-muted-foreground">
                These values guide every decision we make
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="p-8 bg-card rounded-2xl border border-border text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We're Different */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                How We're Different
              </h2>
              <p className="text-lg text-muted-foreground">
                More than finding camps—we accompany your child's growth
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="bg-background rounded-2xl overflow-hidden border border-border">
                <div className="grid grid-cols-2 bg-muted/50">
                  <div className="p-4 text-center font-medium text-muted-foreground">
                    Traditional Agencies
                  </div>
                  <div className="p-4 text-center font-medium text-primary border-l border-border">
                    EduGrowth
                  </div>
                </div>
                {differences[0].items.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-2 border-t border-border"
                  >
                    <div className="p-4 text-muted-foreground text-sm">
                      {item.traditional}
                    </div>
                    <div className="p-4 text-foreground text-sm font-medium border-l border-border flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary flex-shrink-0" />
                      {item.ours}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* AI Role */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                    <Sparkles className="w-4 h-4" />
                    AI Technology
                  </div>
                  <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                    The Role of AI at EduGrowth
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Our AI doesn't replace human judgment—it helps parents 
                      gain a more comprehensive understanding of their child's 
                      characteristics and find the most suitable options among 
                      numerous camps.
                    </p>
                    <p>
                      Through questionnaire analysis, AI identifies your child's 
                      learning style, social tendencies, and interest areas, 
                      then matches these with camp features to provide 
                      personalized recommendation reasons.
                    </p>
                    <p>
                      After camp, AI generates growth reports based on assessment 
                      data, helping parents see their child's progress across 
                      various dimensions and providing recommendations for 
                      future development.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 bg-card rounded-2xl border border-border text-center">
                    <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-foreground">
                      1,200+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Families Served
                    </div>
                  </div>
                  <div className="p-6 bg-card rounded-2xl border border-border text-center">
                    <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-foreground">95%</div>
                    <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                  </div>
                  <div className="p-6 bg-card rounded-2xl border border-border text-center col-span-2">
                    <Sparkles className="w-8 h-8 text-accent mx-auto mb-3" />
                    <div className="text-2xl font-bold text-foreground">
                      50+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Premium European Camps
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Complete our 3-minute questionnaire and let AI recommend the most suitable summer camp experience for your child
            </p>
            <Link to="/auth">
              <Button variant="hero" size="xl">
                Start AI Matching
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
