// This component shows the Beekeys logo image.
import React from "react";
interface LogoProps {
  className?: string; // Extra CSS classes
  showText?: boolean; // (not used here)
}

// Shows the logo image. You can add extra classes if you want.
export const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div>
        <img src="/icons/bk-logo.png" alt="Beekeys" width={35} height={35} />
      </div>
    </div>
  );
};
