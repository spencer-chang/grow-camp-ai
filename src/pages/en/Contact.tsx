import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Building } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactEN() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", organization: "", subject: "", message: "" });
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
                Partner With Us
              </h1>
              <p className="text-lg text-muted-foreground">
                Connect with Asia's leading AI-powered international education platform. 
                Whether you're a camp operator, educational partner, or parent seeking guidance, 
                we're here to help.
              </p>
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-12 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Building className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">Camp Partners</h3>
                <p className="text-muted-foreground text-sm">
                  Join our curated network of premium European camps and connect with Asian families
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">Educational Partners</h3>
                <p className="text-muted-foreground text-sm">
                  Collaborate on educational programs and cross-cultural learning initiatives
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">Media & Press</h3>
                <p className="text-muted-foreground text-sm">
                  Get in touch for interviews, features, and EdTech industry insights
                </p>
              </div>
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
                  <h3 className="font-display font-semibold text-lg mb-2">Email</h3>
                  <div className="space-y-2">
                    <div>
                      <p className="text-muted-foreground text-sm">General Inquiries</p>
                      <a href="mailto:hello@edugrowth.tw" className="text-primary hover:underline">
                        hello@edugrowth.tw
                      </a>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm">Partnership</p>
                      <a href="mailto:partners@edugrowth.tw" className="text-primary hover:underline">
                        partners@edugrowth.tw
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-card rounded-2xl border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">Phone</h3>
                  <p className="text-muted-foreground mb-2">Mon-Fri 9:00-18:00 (GMT+8)</p>
                  <a href="tel:+886223456789" className="text-primary hover:underline">
                    +886 2 2345 6789
                  </a>
                </div>

                <div className="p-6 bg-card rounded-2xl border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">Office</h3>
                  <p className="text-muted-foreground">
                    10F, No. 100, Dunhua South Road, Sec. 2
                    <br />
                    Da'an District, Taipei City
                    <br />
                    Taiwan 106
                  </p>
                </div>

                <div className="p-6 bg-card rounded-2xl border border-border">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">Business Hours</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Monday - Friday: 09:00 - 18:00</p>
                    <p>Saturday: By Appointment</p>
                    <p>Sunday: Closed</p>
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
                    <div>
                      <h2 className="font-display text-2xl font-bold">Send a Message</h2>
                      <p className="text-sm text-muted-foreground">We typically respond within 1-2 business days</p>
                    </div>
                  </div>

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
                        <label className="block text-sm font-medium mb-2">Organization (Optional)</label>
                        <Input
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          placeholder="Company or camp name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Subject *</label>
                      <Input
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="How can we help?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Message *</label>
                      <Textarea
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please describe your inquiry or partnership interest in detail..."
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
      </div>
    </Layout>
  );
}
