import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Building, Users, Handshake, Newspaper } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const partnerTypes = [
  {
    icon: Building,
    title: "Summer Camp Partners",
    description: "Join our curated network of premium European programs. We provide qualified, motivated families matched through our AI system.",
    benefits: [
      "Access to engaged Asian family network",
      "AI-matched referrals for better fit",
      "Outcome data to demonstrate impact",
      "Marketing support in Asian markets",
    ],
  },
  {
    icon: Users,
    title: "Educational Institutions",
    description: "Collaborate on cross-cultural learning initiatives, student exchange programs, and educational partnerships.",
    benefits: [
      "Joint program development",
      "Cultural exchange opportunities",
      "Research collaboration",
      "Brand alignment with innovation",
    ],
  },
  {
    icon: Newspaper,
    title: "Media & Press",
    description: "Get insights on EdTech innovation, AI in education, and the future of international learning experiences.",
    benefits: [
      "Expert commentary available",
      "Case studies and success stories",
      "Industry trend analysis",
      "Interview opportunities",
    ],
  },
];

export default function ContactEN() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    inquiryType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your inquiry. Our team will respond within 1-2 business days.");
    setFormData({ name: "", email: "", phone: "", organization: "", inquiryType: "", message: "" });
  };

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 hero-gradient opacity-5" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Handshake className="w-4 h-4" />
                Partnership & Collaboration
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Let's Build the Future of International Education Together
              </h1>
              <p className="text-lg text-muted-foreground">
                Whether you're a premium European camp seeking Asian families, an educational institution 
                exploring partnerships, or a journalist covering EdTech innovation—we'd love to connect.
              </p>
            </div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Partnership Opportunities
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're actively seeking partners who share our commitment to transformative international education
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {partnerTypes.map((type) => (
                <div key={type.title} className="bg-background rounded-2xl border border-border p-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <type.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-3">{type.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {/* Contact Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-display font-semibold text-lg mb-4">Get in Touch</h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    Our team is based in Taipei with partnerships across Europe. 
                    We respond to all inquiries within 1-2 business days.
                  </p>
                </div>

                <div className="p-5 bg-card rounded-xl border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <div className="space-y-1 text-sm">
                        <div>
                          <span className="text-muted-foreground">General: </span>
                          <a href="mailto:hello@edugrowth.tw" className="text-primary hover:underline">
                            hello@edugrowth.tw
                          </a>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Partnerships: </span>
                          <a href="mailto:partners@edugrowth.tw" className="text-primary hover:underline">
                            partners@edugrowth.tw
                          </a>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Press: </span>
                          <a href="mailto:press@edugrowth.tw" className="text-primary hover:underline">
                            press@edugrowth.tw
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-card rounded-xl border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Phone</h4>
                      <p className="text-sm text-muted-foreground mb-1">Mon-Fri 9:00-18:00 (GMT+8)</p>
                      <a href="tel:+886223456789" className="text-primary hover:underline">
                        +886 2 2345 6789
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-card rounded-xl border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Office</h4>
                      <p className="text-sm text-muted-foreground">
                        10F, No. 100, Dunhua South Road, Sec. 2<br />
                        Da'an District, Taipei City<br />
                        Taiwan 106
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-card rounded-xl border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Business Hours</h4>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>Monday - Friday: 09:00 - 18:00</p>
                        <p>Saturday: By Appointment</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-card rounded-2xl border border-border p-8">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl font-bold">Send Us a Message</h2>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Tell us about your organization and how we might work together. 
                    We typically respond within 1-2 business days.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Full Name *</label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email Address *</label>
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
                        <label className="block text-sm font-medium mb-2">Phone (Optional)</label>
                        <Input
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Organization *</label>
                        <Input
                          required
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          placeholder="Company, camp, or institution name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Inquiry Type *</label>
                      <select
                        required
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select inquiry type</option>
                        <option value="camp-partnership">Summer Camp Partnership</option>
                        <option value="educational-institution">Educational Institution</option>
                        <option value="media-press">Media & Press</option>
                        <option value="investment">Investment Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Message *</label>
                      <Textarea
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please describe your organization, your interest in partnering with EduGrowth, and any specific questions you have..."
                      />
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* For Families Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Looking for Camp Recommendations for Your Child?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              If you're a parent seeking the right international summer program for your child, 
              visit our main site to explore programs or try our AI matching system.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/en/camps">
                <Button variant="outline" size="lg">
                  Browse Programs
                </Button>
              </a>
              <a href="/auth">
                <Button variant="hero" size="lg">
                  Start AI Matching
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
