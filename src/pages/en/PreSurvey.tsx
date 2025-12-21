import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface Question {
  id: string;
  question: string;
  type: "scale" | "single" | "multiple";
  options: { value: string; label: string }[];
}

const questions: Question[] = [
  {
    id: "english_confidence",
    question: "How confident is your child in communicating in English?",
    type: "scale",
    options: [
      { value: "1", label: "1 - Not confident at all" },
      { value: "2", label: "2 - Somewhat unconfident" },
      { value: "3", label: "3 - Neutral" },
      { value: "4", label: "4 - Fairly confident" },
      { value: "5", label: "5 - Very confident" },
    ],
  },
  {
    id: "adaptability",
    question: "How well does your child adapt to new environments?",
    type: "scale",
    options: [
      { value: "1", label: "1 - Needs a long time to adjust" },
      { value: "2", label: "2 - Adapts slowly" },
      { value: "3", label: "3 - Average" },
      { value: "4", label: "4 - Adapts quickly" },
      { value: "5", label: "5 - Adapts very quickly" },
    ],
  },
  {
    id: "social_style",
    question: "What is your child's social style?",
    type: "single",
    options: [
      { value: "introvert", label: "Introverted - Prefers alone time or small groups" },
      { value: "ambivert", label: "Ambivert - Depends on the situation" },
      { value: "extrovert", label: "Extroverted - Enjoys large group activities" },
    ],
  },
  {
    id: "interests",
    question: "What types of activities interest your child the most? (Select all that apply)",
    type: "multiple",
    options: [
      { value: "STEAM", label: "🔬 STEAM & Technology" },
      { value: "Outdoor", label: "🏕️ Outdoor Adventure" },
      { value: "Sports", label: "⚽ Sports & Athletics" },
      { value: "Arts", label: "🎨 Arts & Creativity" },
      { value: "English", label: "📚 Language Learning" },
    ],
  },
  {
    id: "goals",
    question: "What is the primary goal for attending the camp?",
    type: "single",
    options: [
      { value: "english", label: "Improve English skills" },
      { value: "international", label: "Broaden international perspective" },
      { value: "social", label: "Enhance social skills" },
      { value: "independence", label: "Develop independence" },
    ],
  },
  {
    id: "previous_experience",
    question: "Has your child participated in similar camp activities before?",
    type: "single",
    options: [
      { value: "no", label: "Never attended" },
      { value: "local", label: "Attended local camps" },
      { value: "international", label: "Attended international camps" },
    ],
  },
];

export default function PreSurveyEN() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

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
    if (Array.isArray(answer)) {
      return answer.includes(value);
    }
    return answer === value;
  };

  const canProceed = () => {
    const answer = answers[currentQuestion.id];
    if (currentQuestion.type === "multiple") {
      return Array.isArray(answer) && answer.length > 0;
    }
    return !!answer;
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
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
                AI Matching Questionnaire
              </span>
              <span className="text-sm font-medium">
                {currentStep + 1} / {questions.length}
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
                        "w-5 h-5 rounded-full border-2 flex items-center justify-center",
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
                {currentStep === questions.length - 1 ? (
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
