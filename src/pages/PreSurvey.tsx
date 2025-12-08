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
    question: "孩子對使用英文溝通的自信程度？",
    type: "scale",
    options: [
      { value: "1", label: "1 - 非常不自信" },
      { value: "2", label: "2 - 有些不自信" },
      { value: "3", label: "3 - 普通" },
      { value: "4", label: "4 - 相當自信" },
      { value: "5", label: "5 - 非常自信" },
    ],
  },
  {
    id: "adaptability",
    question: "孩子適應新環境的能力如何？",
    type: "scale",
    options: [
      { value: "1", label: "1 - 需要較長時間適應" },
      { value: "2", label: "2 - 適應較慢" },
      { value: "3", label: "3 - 一般" },
      { value: "4", label: "4 - 適應較快" },
      { value: "5", label: "5 - 非常快適應" },
    ],
  },
  {
    id: "social_style",
    question: "孩子的社交風格是？",
    type: "single",
    options: [
      { value: "introvert", label: "內向 - 喜歡獨處或小團體" },
      { value: "ambivert", label: "中性 - 視情況而定" },
      { value: "extrovert", label: "外向 - 喜歡大團體活動" },
    ],
  },
  {
    id: "interests",
    question: "孩子最感興趣的活動類型？（可複選）",
    type: "multiple",
    options: [
      { value: "STEAM", label: "🔬 STEAM 科技創新" },
      { value: "Outdoor", label: "🏕️ 戶外探險" },
      { value: "Sports", label: "⚽ 運動專項" },
      { value: "Arts", label: "🎨 藝術創意" },
      { value: "English", label: "📚 語言學習" },
    ],
  },
  {
    id: "goals",
    question: "參加營隊的主要目標是？",
    type: "single",
    options: [
      { value: "english", label: "提升英文能力" },
      { value: "international", label: "拓展國際視野" },
      { value: "social", label: "增進社交能力" },
      { value: "independence", label: "培養獨立自主" },
    ],
  },
  {
    id: "previous_experience",
    question: "孩子過去是否參加過類似的營隊活動？",
    type: "single",
    options: [
      { value: "no", label: "從未參加過" },
      { value: "local", label: "參加過國內營隊" },
      { value: "international", label: "參加過國際營隊" },
    ],
  },
];

export default function PreSurvey() {
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
      // Submit and show results
      toast({
        title: "問卷完成！",
        description: "AI 正在分析您的回答並生成推薦結果...",
      });
      // In a real app, this would call the AI action and redirect to results
      navigate("/survey/results");
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
                AI 適性配對問卷
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
                問題 {currentStep + 1}
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
                * 可選擇多個選項
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
                上一題
              </Button>

              <Button
                variant="hero"
                onClick={handleNext}
                disabled={!canProceed()}
              >
                {currentStep === questions.length - 1 ? (
                  <>
                    查看 AI 推薦
                    <Sparkles className="w-4 h-4 ml-2" />
                  </>
                ) : (
                  <>
                    下一題
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
