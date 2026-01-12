import React from 'react';

interface LogoProps {
  variant?: 'A' | 'B' | 'C';
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
  showTagline?: boolean;
  taglineText?: string;
  className?: string;
}

const sizes = {
  small: { icon: 32, text: 'text-lg', tagline: 'text-[10px]' },
  medium: { icon: 40, text: 'text-xl', tagline: 'text-xs' },
  large: { icon: 60, text: 'text-2xl', tagline: 'text-sm' },
};

// 方案 A: Arc Bridge - 弧形橋樑
const LogoVariantA: React.FC<{ size: number }> = ({ size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* 優雅弧線橋樑 */}
    <path
      d="M8 32C8 32 16 12 24 12C32 12 40 32 40 32"
      stroke="#1E3A5F"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />
    {/* 起點圓點 */}
    <circle cx="8" cy="32" r="4" fill="#1E3A5F" />
    {/* 終點圓點 - 成長色 */}
    <circle cx="40" cy="32" r="4" fill="#0EA5E9" />
    {/* 橋頂端點 */}
    <circle cx="24" cy="12" r="3" fill="#0EA5E9" />
  </svg>
);

// 方案 B: Connected Nodes - 連結節點
const LogoVariantB: React.FC<{ size: number }> = ({ size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* 連接曲線 */}
    <path
      d="M12 30C12 30 18 14 24 14C30 14 36 30 36 30"
      stroke="#2563EB"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    {/* 左側節點 */}
    <circle cx="12" cy="30" r="6" fill="#2563EB" />
    <circle cx="12" cy="30" r="3" fill="white" />
    {/* 右側節點 */}
    <circle cx="36" cy="30" r="6" fill="#2563EB" />
    <circle cx="36" cy="30" r="3" fill="white" />
    {/* 中心連接點 */}
    <circle cx="24" cy="14" r="4" fill="#0EA5E9" />
  </svg>
);

// 方案 C: Growth Path - 成長路徑
const LogoVariantC: React.FC<{ size: number }> = ({ size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="growthGradient" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#1E40AF" />
        <stop offset="100%" stopColor="#0891B2" />
      </linearGradient>
    </defs>
    {/* 成長曲線路徑 */}
    <path
      d="M6 38C6 38 14 34 20 26C26 18 32 14 38 10"
      stroke="url(#growthGradient)"
      strokeWidth="3.5"
      strokeLinecap="round"
      fill="none"
    />
    {/* 起點 */}
    <circle cx="6" cy="38" r="3" fill="#1E40AF" />
    {/* 終點目標 */}
    <circle cx="38" cy="10" r="5" fill="#0891B2" />
    <circle cx="38" cy="10" r="2.5" fill="white" />
  </svg>
);

const CampBridgeLogo: React.FC<LogoProps> = ({
  variant = 'A',
  size = 'medium',
  showText = true,
  showTagline = false,
  taglineText = 'AI International Camp Matching',
  className = '',
}) => {
  const { icon, text, tagline } = sizes[size];

  const LogoIcon = {
    A: LogoVariantA,
    B: LogoVariantB,
    C: LogoVariantC,
  }[variant];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <LogoIcon size={icon} />
      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold ${text} text-foreground tracking-tight`}>
            Camp Bridge
          </span>
          {showTagline && (
            <span className={`${tagline} text-muted-foreground -mt-0.5`}>
              {taglineText}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export { CampBridgeLogo, LogoVariantA, LogoVariantB, LogoVariantC };
export default CampBridgeLogo;
