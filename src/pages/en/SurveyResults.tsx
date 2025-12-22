import { useMemo, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { camps } from "@/data/camps";
import {
  Sparkles,
  CheckCircle,
  Star,
  MapPin,
  Users,
  ArrowRight,
  RefreshCw,
  TrendingUp,
} from "lucide-react";
import {
  calculateProfile,
  ProfileType,
  ChildProfile,
} from "@/lib/surveyModel";
import { getRecommendations, CampRecommendation } from "@/lib/campMatching";

const categoryColors: Record<string, string> = {
  STEAM: "bg-purple-100 text-purple-700",
  Sports: "bg-green-100 text-green-700",
  English: "bg-blue-100 text-blue-700",
  Outdoor: "bg-amber-100 text-amber-700",
  Arts: "bg-pink-100 text-pink-700",
};

const categoryLabels: Record<string, string> = {
  STEAM: "STEAM & Tech",
  Sports: "Sports",
  English: "English Immersion",
  Outdoor: "Outdoor Adventure",
  Arts: "Arts & Creativity",
};

// English profile descriptions
const profileDescriptionsEN: Record<ProfileType, {
  name: string;
  emoji: string;
  description: string;
  characteristics: string[];
  suitableEnvironments: string[];
}> = {
  explorer: {
    name: 'Explorer',
    emoji: '🌟',
    description: "Your child is a natural explorer! With high curiosity and adaptability, they love taking on new challenges and thrive in dynamic environments.",
    characteristics: [
      'Highly adaptable, quickly fits into new environments',
      'Passionate about outdoor and hands-on activities',
      'Willing to use English, not afraid of making mistakes',
      'Loves exploring the unknown and accepting challenges'
    ],
    suitableEnvironments: [
      'Outdoor adventure and nature exploration camps',
      'Activities requiring teamwork',
      'Learning environments with moderate challenges',
      'International, multicultural camps'
    ]
  },
  builder: {
    name: 'Builder',
    emoji: '🔧',
    description: "Your child is a thoughtful builder! They prefer structured learning environments and excel at learning new skills step by step, especially in STEAM and hands-on activities.",
    characteristics: [
      'Prefers clear structure and steady pace',
      'Excels in STEAM, crafts, and small group work',
      'Strong English comprehension, more cautious in speaking',
      'Needs time to adjust to new environments'
    ],
    suitableEnvironments: [
      'Camps with clear curriculum structure',
      'STEAM and maker-type camps',
      'Small class sizes with more individual attention',
      'Step-by-step learning progression'
    ]
  },
  connector: {
    name: 'Connector',
    emoji: '🤝',
    description: "Your child is a natural social butterfly! They excel at connecting with others and thrive in group activities, building confidence through social interactions.",
    characteristics: [
      'High social motivation, loves group interactions',
      'Uses English primarily as a social tool',
      'Gains growth motivation through interpersonal connections',
      'Growth goals focus on confidence and expression'
    ],
    suitableEnvironments: [
      'Camps emphasizing group activities and interaction',
      'Environments rich in social opportunities',
      'International camps with mixed nationalities',
      'Activities requiring presentation and performance'
    ]
  }
};

// Generate English summary
function generateSummaryEN(profile: ChildProfile, answers: Record<string, string | string[]>): string {
  const typeInfo = profileDescriptionsEN[profile.primaryType];
  const secondaryInfo = profile.secondaryType ? profileDescriptionsEN[profile.secondaryType] : null;

  let summary = `Based on the survey analysis, your child is an "${typeInfo.name}" type. `;

  const envAnswer = answers['new_environment'] as string;
  if (envAnswer === 'quick') {
    summary += 'Your child adapts quickly to new environments, which is a great advantage for international camps. ';
  } else if (envAnswer === 'slow' || envAnswer === 'difficult') {
    summary += 'Since your child needs more time to adjust, we recommend camps with strong support systems. ';
  }

  const socialAnswer = answers['social_preference'] as string;
  if (socialAnswer === 'leader' || socialAnswer === 'active') {
    summary += 'They perform actively in groups and would benefit from camps with rich team activities. ';
  } else if (socialAnswer === 'observer' || socialAnswer === 'independent') {
    summary += 'They prefer smaller groups, so we recommend camps with smaller class sizes. ';
  }

  if (secondaryInfo) {
    summary += `Additionally, your child shows "${secondaryInfo.name}" tendencies, which can help guide camp selection.`;
  }

  return summary;
}

// Generate English traits
function generateTraitsEN(profile: ChildProfile): {
  languageActivation: string;
  adaptability: string;
  socialOrientation: string;
  growthGoals: string[];
} {
  const scores = profile.dimensionScores;
  
  return {
    languageActivation: scores.languageActivation >= 4
      ? 'High willingness to use English'
      : scores.languageActivation >= 2
      ? 'Cautious with English, needs encouragement'
      : 'Lower English willingness, needs support',
    adaptability: scores.adaptability >= 4
      ? 'Highly adaptable'
      : scores.adaptability >= 2
      ? 'Moderate adaptability'
      : 'Needs more adjustment time',
    socialOrientation: scores.socialOrientation >= 4
      ? 'Outgoing, loves group activities'
      : scores.socialOrientation >= 2
      ? 'Balanced social style'
      : 'Prefers small groups or solo time',
    growthGoals: profile.traits.growthGoals.map(g => {
      const goalMap: Record<string, string> = {
        '培養獨立自主': 'Independence',
        '學習專業技能': 'Skill Development',
        '建立自信表達': 'Confidence Building',
        '拓展國際視野': 'Global Perspective'
      };
      return goalMap[g] || g;
    })
  };
}

export default function SurveyResultsEN() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});

  useEffect(() => {
    const savedAnswers = sessionStorage.getItem('surveyAnswers');
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    } else {
      navigate('/en/survey/pre');
    }
  }, [navigate]);

  const profile: ChildProfile | null = useMemo(() => {
    if (Object.keys(answers).length === 0) return null;
    return calculateProfile(answers);
  }, [answers]);

  const summary = useMemo(() => {
    if (!profile) return '';
    return generateSummaryEN(profile, answers);
  }, [profile, answers]);

  const traitsEN = useMemo(() => {
    if (!profile) return null;
    return generateTraitsEN(profile);
  }, [profile]);

  const recommendations: CampRecommendation[] = useMemo(() => {
    if (!profile) return [];
    return getRecommendations(camps, profile, answers, 3);
  }, [profile, answers]);

  const handleRetake = () => {
    sessionStorage.removeItem('surveyAnswers');
    navigate('/en/survey/pre');
  };

  if (!profile || !traitsEN) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-4 animate-pulse" />
            <p className="text-muted-foreground">Loading analysis results...</p>
          </div>
        </div>
      </Layout>
    );
  }

  const typeInfo = profileDescriptionsEN[profile.primaryType];
  const secondaryInfo = profile.secondaryType 
    ? profileDescriptionsEN[profile.secondaryType] 
    : null;

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="hero-gradient py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              AI Analysis Complete
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Your Personalized Camp Recommendations
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Based on your survey responses, AI has selected the best camps for your child
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Child Profile Card */}
            <section className="mb-12">
              <div className="bg-card rounded-2xl p-8 border border-border relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                
                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-5xl">{typeInfo.emoji}</div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h2 className="font-display text-2xl font-bold text-foreground">
                          {typeInfo.name}
                        </h2>
                      </div>
                      {secondaryInfo && (
                        <p className="text-sm text-muted-foreground">
                          Secondary tendency: {secondaryInfo.name}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="p-4 bg-primary/5 rounded-xl mb-6">
                    <p className="text-foreground leading-relaxed">
                      {typeInfo.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-4 bg-secondary/50 rounded-xl">
                      <div className="text-sm text-muted-foreground mb-1">English Activation</div>
                      <div className="font-semibold text-sm">{traitsEN.languageActivation}</div>
                    </div>
                    <div className="text-center p-4 bg-secondary/50 rounded-xl">
                      <div className="text-sm text-muted-foreground mb-1">Adaptability</div>
                      <div className="font-semibold text-sm">{traitsEN.adaptability}</div>
                    </div>
                    <div className="text-center p-4 bg-secondary/50 rounded-xl">
                      <div className="text-sm text-muted-foreground mb-1">Social Style</div>
                      <div className="font-semibold text-sm">{traitsEN.socialOrientation}</div>
                    </div>
                    <div className="text-center p-4 bg-secondary/50 rounded-xl">
                      <div className="text-sm text-muted-foreground mb-1">Growth Goals</div>
                      <div className="font-semibold text-sm">{traitsEN.growthGoals.join(', ')}</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      Why Your Child is This Type
                    </h3>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {typeInfo.characteristics.map((char, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {char}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-foreground mb-3">
                      Suitable Learning Environments
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {typeInfo.suitableEnvironments.map((env, i) => (
                        <Badge key={i} variant="outline" className="text-xs">{env}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* AI Summary */}
            <section className="mb-12">
              <div className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl border border-primary/20">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-foreground mb-2">AI Personalized Analysis</h3>
                    <p className="text-muted-foreground leading-relaxed">{summary}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Recommendations */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Top 3 Recommended Camps
                </h2>
                <Button variant="outline" size="sm" onClick={handleRetake}>
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Retake Survey
                </Button>
              </div>

              <div className="space-y-6">
                {recommendations.map((rec, index) => (
                  <div
                    key={rec.camp.id}
                    className="bg-card rounded-2xl border border-border overflow-hidden card-elevated animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-64 h-48 md:h-auto bg-muted relative">
                        <img src={rec.camp.image} alt={rec.camp.name} className="w-full h-full object-cover" />
                        <div className="absolute top-4 left-4">
                          <div className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                            #{index + 1} Pick
                          </div>
                        </div>
                      </div>

                      <div className="flex-1 p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <Badge className={`${categoryColors[rec.camp.category]} mb-2`}>
                              {categoryLabels[rec.camp.category]}
                            </Badge>
                            <h3 className="font-display text-xl font-bold text-foreground">
                              {rec.camp.name}
                            </h3>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-muted-foreground">Match</div>
                            <div className="text-2xl font-bold text-primary">{rec.matchScore}%</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {rec.camp.city}, {rec.camp.country}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            Ages {rec.camp.ageMin}-{rec.camp.ageMax}
                          </span>
                          <span className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                            {rec.camp.rating}
                          </span>
                        </div>

                        <div className="mb-4">
                          <div className="text-sm font-medium text-foreground mb-2">
                            Why it's right for your child:
                          </div>
                          <ul className="space-y-1">
                            {rec.reasons.map((reason, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                {reason}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-border">
                          <div>
                            <span className="text-2xl font-bold text-foreground">
                              €{rec.camp.priceEUR.toLocaleString()}
                            </span>
                            <span className="text-sm text-muted-foreground ml-1">
                              / {rec.camp.duration}
                            </span>
                          </div>
                          <Link to={`/en/camps/${rec.camp.id}`}>
                            <Button>
                              View Details
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <div className="mt-12 text-center p-8 bg-card rounded-2xl border border-border">
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                Need Expert Guidance?
              </h3>
              <p className="text-muted-foreground mb-6">
                Our education consultants can provide personalized advice based on your AI recommendations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline-primary" size="lg">Book Consultation</Button>
                <Link to="/auth">
                  <Button variant="hero" size="lg">Sign In to Save Results</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
