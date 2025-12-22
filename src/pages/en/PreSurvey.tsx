import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { SurveyQuestion } from "@/lib/surveyModel";

// English version - same IDs and values as Chinese for consistent scoring
const surveyQuestionsEN: SurveyQuestion[] = [
  {
    id: 'english_confidence',
    question: "How confident is your child in communicating in English?",
    type: 'single',
    options: [
      { value: '1', label: '1 - Not confident at all', weights: { languageActivation: 1 }, profileBonus: { builder: 2 } },
      { value: '2', label: '2 - Somewhat unconfident', weights: { languageActivation: 2 }, profileBonus: { builder: 1, connector: 1 } },
      { value: '3', label: '3 - Neutral', weights: { languageActivation: 3 }, profileBonus: { explorer: 1, builder: 1, connector: 1 } },
      { value: '4', label: '4 - Fairly confident', weights: { languageActivation: 4 }, profileBonus: { explorer: 2, connector: 2 } },
      { value: '5', label: '5 - Very confident', weights: { languageActivation: 5 }, profileBonus: { explorer: 3, connector: 3 } }
    ]
  },
  {
    id: 'adaptability',
    question: 'How well does your child adapt to new environments?',
    type: 'single',
    options: [
      { value: '1', label: '1 - Needs a long time to adjust', weights: { adaptability: 1 }, profileBonus: { builder: 3 } },
      { value: '2', label: '2 - Adapts slowly', weights: { adaptability: 2 }, profileBonus: { builder: 2, connector: 1 } },
      { value: '3', label: '3 - Average', weights: { adaptability: 3 }, profileBonus: { explorer: 1, builder: 1, connector: 1 } },
      { value: '4', label: '4 - Adapts quickly', weights: { adaptability: 4 }, profileBonus: { explorer: 2, connector: 2 } },
      { value: '5', label: '5 - Adapts very quickly', weights: { adaptability: 5 }, profileBonus: { explorer: 3, connector: 3 } }
    ]
  },
  {
    id: 'social_style',
    question: "What is your child's social style?",
    type: 'single',
    options: [
      { value: 'introvert', label: 'Introverted - Prefers alone time or small groups', weights: { socialOrientation: 1 }, profileBonus: { builder: 3 } },
      { value: 'ambivert', label: 'Ambivert - Depends on the situation', weights: { socialOrientation: 3 }, profileBonus: { explorer: 1, builder: 1, connector: 1 } },
      { value: 'extrovert', label: 'Extroverted - Enjoys large group activities', weights: { socialOrientation: 5 }, profileBonus: { explorer: 2, connector: 3 } }
    ]
  },
  {
    id: 'interests',
    question: 'What types of activities interest your child the most? (Select all that apply)',
    type: 'multiple',
    options: [
      { value: 'STEAM', label: '🔬 STEAM & Technology', weights: { learningModality: 3 }, profileBonus: { builder: 3 } },
      { value: 'Outdoor', label: '🏕️ Outdoor Adventure', weights: { learningModality: 3 }, profileBonus: { explorer: 3, connector: 1 } },
      { value: 'Sports', label: '⚽ Sports & Athletics', weights: { learningModality: 3 }, profileBonus: { explorer: 2, connector: 2 } },
      { value: 'Arts', label: '🎨 Arts & Creativity', weights: { learningModality: 3 }, profileBonus: { explorer: 1, builder: 2, connector: 1 } },
      { value: 'English', label: '📚 Language Learning', weights: { learningModality: 2 }, profileBonus: { builder: 1, connector: 2 } }
    ]
  },
  {
    id: 'goals',
    question: 'What is the primary goal for attending the camp?',
    type: 'single',
    options: [
      { value: 'english', label: 'Improve English skills', weights: { growthIntention: 4 }, profileBonus: { builder: 2, connector: 2 } },
      { value: 'international', label: 'Broaden international perspective', weights: { growthIntention: 4 }, profileBonus: { explorer: 3, connector: 1 } },
      { value: 'social', label: 'Enhance social skills', weights: { growthIntention: 4 }, profileBonus: { explorer: 1, connector: 3 } },
      { value: 'independence', label: 'Develop independence', weights: { growthIntention: 4 }, profileBonus: { explorer: 3, builder: 1 } }
    ]
  },
  {
    id: 'previous_experience',
    question: 'Has your child participated in similar camp activities before?',
    type: 'single',
    options: [
      { value: 'no', label: 'Never attended', weights: { exposureLevel: 0 }, profileBonus: { builder: 2 } },
      { value: 'local', label: 'Attended local camps', weights: { exposureLevel: 2 }, profileBonus: { explorer: 1, builder: 1, connector: 1 } },
      { value: 'international', label: 'Attended international camps', weights: { exposureLevel: 5 }, profileBonus: { explorer: 2, connector: 2 } }
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
