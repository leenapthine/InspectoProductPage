interface InspectoLogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function InspectoLogo({ className = '', showText = true, size = 'md' }: InspectoLogoProps) {
  const sizes = {
    sm: { width: 220, height: 50 },
    md: { width: 330, height: 75 },
    lg: { width: 440, height: 100 },
    xl: { width: 660, height: 150 }
  };

  const dimensions = sizes[size];

  return (
    <svg 
      width={showText ? dimensions.width : dimensions.height * 0.7} 
      height={dimensions.height} 
      viewBox={showText ? "0 0 660 150" : "0 0 105 150"}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Phone Frame - Royal Blue */}
      <g transform="translate(0, 0)">
        <rect 
          x="10" 
          y="10" 
          width="85" 
          height="130" 
          rx="18" 
          ry="18" 
          fill="none" 
          stroke="#1464FF" 
          strokeWidth="10"
        />
        
        {/* Phone Notch */}
        <rect 
          x="35" 
          y="10" 
          width="35" 
          height="12" 
          rx="6" 
          ry="6" 
          fill="#1464FF"
        />
        
        {/* Phone Screen */}
        <rect 
          x="20" 
          y="24" 
          width="65" 
          height="110" 
          rx="8" 
          ry="8" 
          fill="white"
        />
        
        {/* House Icon - Orange with distinct jutting roof */}
        <g transform="translate(52.5, 80)">
          {/* Main House Base/Body - Square */}
          <rect
            x="-20"
            y="-5"
            width="40"
            height="35"
            fill="#FF7A1A"
            rx="2"
            ry="2"
          />
          
          {/* Distinct Jutting Roof - Triangle extending beyond base */}
          <path
            d="M -28,-18 L 0,-35 L 28,-18 L 22,-12 L 0,-23 L -22,-12 Z"
            fill="#FF7A1A"
          />
          
          {/* Door - White cutout */}
          <rect
            x="-8"
            y="8"
            width="16"
            height="22"
            fill="white"
            rx="1.5"
            ry="1.5"
          />
          
          {/* Window - Small square */}
          <rect
            x="-6"
            y="-2"
            width="12"
            height="8"
            fill="white"
            rx="1"
            ry="1"
          />
        </g>
      </g>
      
      {/* INSPECTO Text - Horizontal layout */}
      {showText && (
        <text
          x="125"
          y="95"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
          fontSize="72"
          fontWeight="800"
          fill="#1464FF"
          letterSpacing="-2"
        >
          inspecto
        </text>
      )}
    </svg>
  );
}
