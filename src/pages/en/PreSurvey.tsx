import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { SurveyQuestion } from "@/lib/surveyModel";

// English version of survey questions with same weights as Chinese version
const surveyQuestionsEN: SurveyQuestion[] = [
  {
    id: 'english_willingness',
    question: 'How does your child react when meeting foreigners?',
    type: 'single',
    options: [
      { value: 'eager', label: 'Eagerly greets them in English, not afraid of mistakes', weights: { languageActivation: 5, socialOrientation: 4 }, profileBonus: { explorer: 3, connector: 2 } },
      { value: 'cautious', label: 'Observes first, then tries to communicate in English', weights: { languageActivation: 3, socialOrientation: 2 }, profileBonus: { builder: 2 } },
      { value: 'shy', label: 'Gets shy, needs adult help to speak', weights: { languageActivation: 1, socialOrientation: 1 }, profileBonus: { builder: 3 } },
      { value: 'avoid', label: 'Prefers not to use English, uses gestures instead', weights: { languageActivation: 0, socialOrientation: 1 }, profileBonus: { builder: 2 } }
    ]
  },
  {
    id: 'new_environment',
    question: 'When your child goes to a completely new place (like a new school or camp), they usually:',
    type: 'single',
    options: [
      { value: 'quick', label: 'Quickly makes new friends and adapts', weights: { adaptability: 5, socialOrientation: 4 }, profileBonus: { explorer: 3, connector: 2 } },
      { value: 'moderate', label: 'Needs a day or two to adjust, then they are fine', weights: { adaptability: 3, socialOrientation: 2 }, profileBonus: { builder: 1, explorer: 1 } },
      { value: 'slow', label: 'Takes longer to adapt, may feel homesick initially', weights: { adaptability: 1, socialOrientation: 1 }, profileBonus: { builder: 3 } },
      { value: 'difficult', label: 'Feels very anxious, needs constant adult support', weights: { adaptability: 0, socialOrientation: 0 }, profileBonus: { builder: 2 } }
    ]
  },
  {
    id: 'social_preference',
    question: 'In group activities, what role does your child usually take?',
    type: 'single',
    options: [
      { value: 'leader', label: 'Naturally becomes the leader, organizes activities', weights: { socialOrientation: 5, adaptability: 3 }, profileBonus: { connector: 3, explorer: 2 } },
      { value: 'active', label: "Actively participates, but doesn't need to lead", weights: { socialOrientation: 4, adaptability: 3 }, profileBonus: { connector: 2, explorer: 2 } },
      { value: 'observer', label: 'Observes first, prefers small group interactions', weights: { socialOrientation: 2, adaptability: 2 }, profileBonus: { builder: 3 } },
      { value: 'independent', label: 'Prefers independent activities, uncomfortable in large groups', weights: { socialOrientation: 1, adaptability: 1 }, profileBonus: { builder: 2 } }
    ]
  },
  {
    id: 'activity_preference',
    question: 'Which activity types attract your child the most? (Select multiple)',
    type: 'multiple',
    options: [
      { value: 'outdoor', label: '🏕️ Outdoor Adventure (hiking, camping, survival)', weights: { learningModality: 3, adaptability: 2 }, profileBonus: { explorer: 3 } },
      { value: 'sports', label: '⚽ Sports (football, basketball, swimming)', weights: { learningModality: 3, socialOrientation: 2 }, profileBonus: { explorer: 2, connector: 1 } },
      { value: 'steam', label: '🔬 STEAM (coding, robotics, science)', weights: { learningModality: 3, growthIntention: 2 }, profileBonus: { builder: 3 } },
      { value: 'creative', label: '🎨 Arts & Creativity (painting, music, drama)', weights: { learningModality: 3, growthIntention: 2 }, profileBonus: { builder: 2, connector: 1 } },
      { value: 'language', label: '📚 Language & Culture (English, cultural exchange)', weights: { learningModality: 2, languageActivation: 2 }, profileBonus: { connector: 2, builder: 1 } }
    ]
  },
  {
    id: 'growth_goal',
    question: 'What growth do you most hope your child gains from an international camp?',
    type: 'single',
    options: [
      { value: 'independence', label: 'Develop independence and problem-solving skills', weights: { growthIntention: 4, adaptability: 2 }, profileBonus: { explorer: 3 } },
      { value: 'skills', label: 'Learn new skills and improve in a specific area', weights: { growthIntention: 4, learningModality: 2 }, profileBonus: { builder: 3 } },
      { value: 'confidence', label: 'Build confidence and communication skills', weights: { growthIntention: 4, socialOrientation: 2 }, profileBonus: { connector: 3 } },
      { value: 'global', label: 'Expand global perspective and make international friends', weights: { growthIntention: 3, languageActivation: 2 }, profileBonus: { explorer: 2, connector: 2 } }
    ]
  },
  {
    id: 'previous_experience',
    question: "What is your child's previous experience with camps or international activities?",
    type: 'single',
    options: [
      { value: 'international', label: 'Has attended international camps or study abroad programs', weights: { exposureLevel: 5, adaptability: 2, languageActivation: 2 }, profileBonus: { explorer: 2 } },
      { value: 'overnight', label: 'Has attended overnight camps locally', weights: { exposureLevel: 3, adaptability: 1 }, profileBonus: { explorer: 1, builder: 1 } },
      { value: 'day', label: 'Only attended day camps or courses', weights: { exposureLevel: 1 }, profileBonus: { builder: 2 } },
      { value: 'none', label: 'No previous camp experience', weights: { exposureLevel: 0 }, profileBonus: { builder: 1 } }
    ]
  }
];

export default function PreSurveyEN() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});

  const currentQuestion = surveyQuestionsEN[currentStep];
  const progress = ((currentStep + 1) / surveyQuestionsEN.length) * 100;

  const handleSelect = (value: string) => {
    if (currentQuestion.type === "multiple") {
      const current = (answers[currentQuestion.id] as string[]) || [];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      setAnswers((prev) => ({ ...prev, [currentQuestion.id]: updated }));
    } else {
      setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }));
    }
  };

  const isSelected = (value: string) => {
    const answer = answers[currentQuestion.id];
    return Array.isArray(answer) ? answer.includes(value) : answer === value;
  };

  const canProceed = () => {
    const answer = answers[currentQuestion.id];
    return currentQuestion.type === "multiple"
      ? Array.isArray(answer) && answer.length > 0
      : !!answer;
  };

  const handleNext = () => {
    if (currentStep < surveyQuestionsEN.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      sessionStorage.setItem('surveyAnswers', JSON.stringify(answers));
      toast({
        title: "Survey Complete!",
        description: "AI is analyzing your answers and generating recommendations...",
      });
      navigate("/en/survey/results");
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <Layout showFooter={false}>
      <div className="min-h-screen bg-background flex flex-col">
        {/* Progress Header */}
        <div className="border-b border-border bg-card">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-muted-foreground">
                AI Camp Matching Survey
              </span>
              <span className="text-sm font-medium">
                {currentStep + 1} / {surveyQuestionsEN.length}
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>

        {/* Question Content */}
        <div className="flex-1 container mx-auto px-4 py-12 flex flex-col justify-center max-w-2xl">
          <div className="animate-fade-in" key={currentStep}>
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4" />
                Question {currentStep + 1}
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                {currentQuestion.question}
              </h2>
            </div>

            <div className="space-y-3">
              {currentQuestion.options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleSelect(option.value)}
                  className={cn(
                    "w-full p-4 rounded-xl border-2 text-left transition-all",
                    isSelected(option.value)
                      ? "border-primary bg-primary/5"
                      : "border-border bg-card hover:border-primary/50"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0",
                        isSelected(option.value)
                          ? "border-primary bg-primary"
                          : "border-muted-foreground"
                      )}
                    >
                      {isSelected(option.value) && (
                        <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                      )}
                    </div>
                    <span className="font-medium">{option.label}</span>
                  </div>
                </button>
              ))}
            </div>

            {currentQuestion.type === "multiple" && (
              <p className="text-sm text-muted-foreground mt-4">
                * You can select multiple options
              </p>
            )}
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="border-t border-border bg-card">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between max-w-2xl mx-auto">
              <Button
                variant="ghost"
                onClick={handleBack}
                disabled={currentStep === 0}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>

              <Button
                variant="hero"
                onClick={handleNext}
                disabled={!canProceed()}
              >
                {currentStep === surveyQuestionsEN.length - 1 ? (
                  <>
                    View AI Recommendations
                    <Sparkles className="w-4 h-4 ml-2" />
                  </>
                ) : (
                  <>
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
