import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { camps } from "@/data/camps";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Calendar,
  Users,
  Star,
  CheckCircle,
  ArrowLeft,
  Heart,
  Share2,
  Sparkles,
  Shield,
  Award,
  Globe,
} from "lucide-react";

const categoryColors: Record<string, string> = {
  STEAM: "bg-purple-100 text-purple-700",
  Sports: "bg-green-100 text-green-700",
  English: "bg-blue-100 text-blue-700",
  Outdoor: "bg-amber-100 text-amber-700",
  Arts: "bg-pink-100 text-pink-700",
};

const categoryLabels: Record<string, string> = {
  STEAM: "STEAM & Technology",
  Sports: "Sports Excellence",
  English: "English Immersion",
  Outdoor: "Outdoor Adventure",
  Arts: "Arts & Creativity",
};

export default function CampDetailEN() {
  const { id } = useParams();
  const camp = camps.find((c) => c.id === id);

  if (!camp) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Program Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The program you're looking for doesn't exist or may have been removed.
          </p>
          <Link to="/en/camps">
            <Button>Browse All Programs</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const scheduleWeeks = [
    { 
      week: "Week 1: Foundation", 
      activities: [
        "Arrival, orientation, and welcome ceremony",
        "Core skills assessment and group formation", 
        "Introductory workshops and team-building activities",
        "Cultural integration and local exploration"
      ] 
    },
    { 
      week: "Week 2: Immersion", 
      activities: [
        "Advanced skill development and specialization",
        "Hands-on projects and collaborative challenges", 
        "Cultural excursions and expert guest sessions",
        "Showcase preparation and closing celebration"
      ] 
    },
  ];

  const inclusions = [
    { item: "Tuition & Program Fees", included: true },
    { item: "Accommodation (Shared)", included: true },
    { item: "All Meals", included: true },
    { item: "Travel Insurance", included: true },
    { item: "Learning Materials", included: true },
    { item: "Excursions & Activities", included: true },
    { item: "International Flights", included: false },
    { item: "Personal Expenses", included: false },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Image */}
        <div className="relative h-[40vh] md:h-[50vh] bg-muted">
          <img
            src={camp.image}
            alt={camp.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />

          {/* Back Button */}
          <Link
            to="/en/camps"
            className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 rounded-full bg-card/90 backdrop-blur-sm text-foreground hover:bg-card transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All Programs
          </Link>

          {/* Action Buttons */}
          <div className="absolute top-6 right-6 flex gap-2">
            <button className="p-3 rounded-full bg-card/90 backdrop-blur-sm text-foreground hover:bg-card transition-colors">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-3 rounded-full bg-card/90 backdrop-blur-sm text-foreground hover:bg-card transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <div className="container mx-auto">
              <Badge className={`${categoryColors[camp.category]} mb-4`}>
                {categoryLabels[camp.category]}
              </Badge>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-card mb-2">
                {camp.name}
              </h1>
              <div className="flex items-center gap-4 text-card/90">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {camp.city}, {camp.country}
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  {camp.rating} ({camp.reviews} reviews)
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Quick Info */}
              <div className="flex flex-wrap gap-6 p-6 bg-card rounded-2xl border border-border">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Location</div>
                    <div className="font-medium">{camp.city}, {camp.country}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Duration</div>
                    <div className="font-medium">{camp.duration}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Ages</div>
                    <div className="font-medium">{camp.ageMin}-{camp.ageMax} years</div>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-sm">
                  <Shield className="w-4 h-4" />
                  Verified Partner
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm">
                  <Award className="w-4 h-4" />
                  Quality Assured
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-purple-50 text-purple-700 rounded-full text-sm">
                  <Globe className="w-4 h-4" />
                  International Community
                </div>
              </div>

              {/* Description */}
              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  About This Program
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                  {camp.description}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This program is part of EduGrowth's curated network of premium European summer experiences. 
                  Each program in our network is carefully vetted for educational quality, safety standards, 
                  and cultural enrichment value. Our partner programs welcome participants from diverse 
                  international backgrounds, creating a truly global learning environment.
                </p>
              </section>

              {/* Highlights */}
              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Program Highlights
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {camp.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Schedule */}
              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Sample Program Schedule
                </h2>
                <p className="text-muted-foreground mb-6">
                  Below is a representative schedule. Actual activities may vary based on weather, 
                  group composition, and learning objectives.
                </p>
                <div className="space-y-4">
                  {scheduleWeeks.map((week) => (
                    <div
                      key={week.week}
                      className="p-6 bg-card rounded-xl border border-border"
                    >
                      <h3 className="font-semibold text-lg mb-4">{week.week}</h3>
                      <ul className="space-y-3">
                        {week.activities.map((activity, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-muted-foreground"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Ideal Participant */}
              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Ideal Participant Profile
                </h2>
                <div className="p-6 bg-secondary/50 rounded-xl">
                  <p className="text-muted-foreground mb-4">
                    This program is designed for young learners who are curious, open-minded, and ready 
                    to step outside their comfort zone. Ideal participants include:
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>
                        Students aged {camp.ageMin}-{camp.ageMax} with a genuine interest in {categoryLabels[camp.category].toLowerCase()}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>Intermediate to advanced English communication skills for full participation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>Willingness to engage with peers from different cultural backgrounds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>Readiness to try new activities and embrace challenges</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Learning Outcomes */}
              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Expected Learning Outcomes
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Enhanced confidence in English communication",
                    "Improved cross-cultural awareness and sensitivity",
                    "Strengthened independence and self-management skills",
                    "Expanded global perspective and worldview",
                    "Development of specific skills in program focus area",
                    "Lasting international friendships and networks",
                  ].map((outcome) => (
                    <div key={outcome} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border">
                      <Sparkles className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{outcome}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Booking Card */}
                <div className="bg-card rounded-2xl border border-border p-6 card-elevated">
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-foreground">
                      €{camp.priceEUR.toLocaleString()}
                    </span>
                    <span className="text-muted-foreground ml-2">/ participant</span>
                  </div>

                  <div className="space-y-2 mb-6 text-sm">
                    {inclusions.map((item) => (
                      <div key={item.item} className="flex justify-between py-2 border-b border-border last:border-0">
                        <span className="text-muted-foreground">{item.item}</span>
                        <span className={item.included ? "text-green-600 font-medium" : "text-muted-foreground"}>
                          {item.included ? "Included" : "Not included"}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link to="/auth">
                    <Button variant="hero" size="lg" className="w-full mb-3">
                      Express Interest
                    </Button>
                  </Link>
                  <Link to="/auth">
                    <Button variant="outline" size="lg" className="w-full">
                      <Sparkles className="w-4 h-4 mr-2" />
                      Check AI Match Score
                    </Button>
                  </Link>
                  
                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Log in to see personalized fit analysis and AI recommendations
                  </p>
                </div>

                {/* Help Box */}
                <div className="bg-secondary/50 rounded-2xl p-6">
                  <h3 className="font-semibold mb-2">Have Questions?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our education advisors are here to help you understand if this program 
                    is the right fit for your child's goals and development needs.
                  </p>
                  <Link to="/en/contact">
                    <Button variant="outline" className="w-full">
                      Contact an Advisor
                    </Button>
                  </Link>
                </div>

                {/* AI Matching CTA */}
                <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-primary">Not Sure If This Is Right?</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Take our 3-minute assessment and let AI recommend the most suitable 
                    programs based on your child's unique profile.
                  </p>
                  <Link to="/auth">
                    <Button variant="default" size="sm" className="w-full">
                      Start AI Matching
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
