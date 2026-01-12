import React, { useState } from 'react';
import { CampBridgeLogo } from '@/components/layout/CampBridgeLogo';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const LogoPreview: React.FC = () => {
  const [selectedVariant, setSelectedVariant] = useState<'A' | 'B' | 'C' | null>(null);
  const [darkBg, setDarkBg] = useState(false);

  const variants: Array<{ id: 'A' | 'B' | 'C'; name: string; description: string }> = [
    {
      id: 'A',
      name: '方案 A：弧形橋樑 (Arc Bridge)',
      description: '優雅的弧線連接兩個圓點，象徵連結孩子與世界的橋樑。主色深藍配藍綠色點綴，溫暖且專業。',
    },
    {
      id: 'B',
      name: '方案 B：連結節點 (Connected Nodes)',
      description: '兩個圓形節點由曲線連接，代表 AI 智慧配對。幾何簡潔風格，科技感但不冰冷。',
    },
    {
      id: 'C',
      name: '方案 C：成長路徑 (Growth Path)',
      description: '向右上延伸的動態曲線，象徵成長旅程。漸層從深藍到藍綠色，充滿活力與希望。',
    },
  ];

  const bgClass = darkBg ? 'bg-slate-900' : 'bg-white';
  const textClass = darkBg ? 'text-white' : 'text-foreground';

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Camp Bridge Logo 設計預覽
          </h1>
          <p className="text-muted-foreground">
            請選擇您最喜歡的 Logo 設計方案
          </p>
        </div>

        {/* Background Toggle */}
        <div className="flex justify-center mb-8">
          <div className="flex gap-2 p-1 bg-muted rounded-lg">
            <Button
              variant={darkBg ? 'ghost' : 'default'}
              size="sm"
              onClick={() => setDarkBg(false)}
            >
              淺色背景
            </Button>
            <Button
              variant={darkBg ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setDarkBg(true)}
            >
              深色背景
            </Button>
          </div>
        </div>

        {/* Logo Variants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {variants.map((variant) => (
            <Card
              key={variant.id}
              className={`cursor-pointer transition-all duration-200 ${
                selectedVariant === variant.id
                  ? 'ring-2 ring-primary shadow-lg'
                  : 'hover:shadow-md'
              }`}
              onClick={() => setSelectedVariant(variant.id)}
            >
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{variant.name}</CardTitle>
                  {selectedVariant === variant.id && (
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                  )}
                </div>
                <CardDescription className="text-sm">
                  {variant.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Preview Area */}
                <div className={`rounded-lg p-6 ${bgClass} transition-colors duration-200`}>
                  {/* Large Preview */}
                  <div className="flex justify-center mb-6">
                    <div className={textClass}>
                      <CampBridgeLogo
                        variant={variant.id}
                        size="large"
                        showText={true}
                        showTagline={true}
                      />
                    </div>
                  </div>

                  {/* Size Variations */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs ${darkBg ? 'text-slate-400' : 'text-muted-foreground'}`}>
                        Medium
                      </span>
                      <div className={textClass}>
                        <CampBridgeLogo variant={variant.id} size="medium" showText={true} />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs ${darkBg ? 'text-slate-400' : 'text-muted-foreground'}`}>
                        Small
                      </span>
                      <div className={textClass}>
                        <CampBridgeLogo variant={variant.id} size="small" showText={true} />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs ${darkBg ? 'text-slate-400' : 'text-muted-foreground'}`}>
                        Icon Only
                      </span>
                      <div className={textClass}>
                        <CampBridgeLogo variant={variant.id} size="medium" showText={false} />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Navbar Preview */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4 text-center">
            導航列預覽效果
          </h2>
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-white/95 backdrop-blur-sm border-b px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-8">
                <CampBridgeLogo
                  variant={selectedVariant || 'A'}
                  size="medium"
                  showText={true}
                  showTagline={false}
                />
                <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
                  <span className="hover:text-foreground cursor-pointer">首頁</span>
                  <span className="hover:text-foreground cursor-pointer">夏令營</span>
                  <span className="hover:text-foreground cursor-pointer">關於我們</span>
                  <span className="hover:text-foreground cursor-pointer">聯絡我們</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="sm">登入</Button>
                <Button size="sm">免費配對測驗</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Selection Summary */}
        {selectedVariant && (
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center">
            <p className="text-foreground mb-2">
              您選擇了 <strong>方案 {selectedVariant}</strong>
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              請在聊天視窗中告訴我「我要選 {selectedVariant}」，我會幫您套用到整個網站
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LogoPreview;
