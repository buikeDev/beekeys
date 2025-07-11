import React from "react";
interface LogoProps {
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div>
        <img src="/icons/bk-logo.png" alt="Beekeys" width={35} height={35} />
      </div>
    </div>
  );
};
