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
  Globe,
  Award,
  Shield,
  Lightbulb,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Precision Matching",
    description:
      "Every child is unique. Our AI technology analyzes personality traits, learning styles, and aspirations to deliver recommendations that truly fit—not generic suggestions based on popularity or price.",
  },
  {
    icon: Eye,
    title: "Visible Growth",
    description:
      "International experiences should produce measurable outcomes. Our assessment framework captures development across key competencies, creating a documented record of your child's transformation.",
  },
  {
    icon: Heart,
    title: "Child-First Philosophy",
    description:
      "Every decision we make starts with one question: 'What's best for the child?' We prioritize developmental impact over transaction volume, ensuring authentic, lasting growth.",
  },
];

const differences = [
  { traditional: "Recommend based on popularity and commission", ours: "AI-driven matching based on child's unique profile" },
  { traditional: "Relationship ends after enrollment", ours: "Continuous engagement with growth tracking and reports" },
  { traditional: "Commission-focused business model", ours: "Child growth outcomes as our primary metric" },
  { traditional: "Limited visibility into camp quality", ours: "Rigorous vetting process with transparent standards" },
  { traditional: "Generic information for all families", ours: "Personalized guidance and recommendations" },
];

const team = [
  {
    icon: Globe,
    title: "Cross-Cultural Expertise",
    description: "Our team combines deep knowledge of Asian family expectations with extensive European education network connections.",
  },
  {
    icon: Lightbulb,
    title: "EdTech Innovation",
    description: "We pioneer the application of AI in educational matching, continuously refining our algorithms based on outcome data.",
  },
  {
    icon: Shield,
    title: "Trusted Partnerships",
    description: "We maintain long-term relationships with premium European camps, ensuring quality standards and preferential access for our families.",
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                Asia's Trusted Partner for International Education
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Making International Education
                <br />
                <span className="text-gradient">Meaningful & Measurable</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                EduGrowth is not just another camp booking platform. We are a technology-driven education company 
                on a mission to transform how Asian families access and benefit from international learning experiences. 
                Through AI-powered matching and scientific assessment, we ensure every child finds their ideal program—and 
                every experience delivers documented growth.
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
                  To democratize access to transformative international education for Asian families. 
                  We leverage technology to break down information asymmetries, provide personalized guidance, 
                  and ensure every child's international experience translates into measurable personal growth. 
                  We believe the right program can change a child's trajectory—and we're committed to finding 
                  that perfect match for every family we serve.
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
                  To become Asia's most trusted platform for international education, where "international experience" 
                  is no longer just a line on a resume but a documented milestone of personal transformation. 
                  We envision a future where every child discovers their potential through carefully matched 
                  experiences, and where growth is visible, measurable, and celebrated.
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
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground">
                These principles guide every decision we make and every recommendation we provide
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
                We're not a traditional agency. We're a technology company reimagining international education.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="bg-background rounded-2xl overflow-hidden border border-border">
                <div className="grid grid-cols-2 bg-muted/50">
                  <div className="p-4 text-center font-medium text-muted-foreground">
                    Traditional Agencies
                  </div>
                  <div className="p-4 text-center font-medium text-primary border-l border-border">
                    EduGrowth Approach
                  </div>
                </div>
                {differences.map((item, index) => (
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

        {/* Our Approach */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                    <Sparkles className="w-4 h-4" />
                    Powered by AI
                  </div>
                  <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                    The Role of Technology in Our Approach
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Our AI doesn't replace human judgment—it enhances it. By analyzing over 20 factors 
                      across personality, learning style, and developmental goals, our algorithm identifies 
                      patterns and matches that would be impossible to detect manually.
                    </p>
                    <p>
                      Through our pre-camp assessment questionnaire, we capture your child's unique profile: 
                      English confidence, social tendencies, adaptability, interests, and aspirations. 
                      This data powers personalized recommendations with clear reasoning.
                    </p>
                    <p>
                      Post-camp, our AI generates comprehensive growth reports by comparing pre and post 
                      assessments, highlighting areas of development, and providing actionable recommendations 
                      for continued growth.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {team.map((item) => (
                    <div key={item.title} className="p-6 bg-card rounded-2xl border border-border">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
              <div>
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground">1,200+</div>
                <div className="text-sm text-muted-foreground">Families Served</div>
              </div>
              <div>
                <Globe className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Partner Programs</div>
              </div>
              <div>
                <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground">95%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
              <div>
                <Award className="w-8 h-8 text-amber-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground">8</div>
                <div className="text-sm text-muted-foreground">European Countries</div>
              </div>
            </div>
          </div>
        </section>

        {/* For Camp Partners */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                For Camp Partners
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Are you a premium European summer program looking to connect with motivated Asian families? 
                EduGrowth provides qualified leads through our AI-matching system, ensuring families who 
                reach you are genuinely aligned with your program's offerings. Our growth tracking also 
                provides valuable outcome data to demonstrate your program's impact.
              </p>
              <Link to="/en/contact">
                <Button variant="outline-primary" size="lg">
                  Partner With Us
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              Ready to Begin?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Discover how our AI-powered platform can help your child find their perfect international 
              experience and document their growth journey.
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
