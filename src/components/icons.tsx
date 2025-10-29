import React from "react";

type IconProps = { className?: string };

export const IconCSharp = ({ className = "w-5 h-5" }: IconProps) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect width="48" height="48" rx="8" fill="#68217A" />
    <text x="24" y="30" textAnchor="middle" fontSize="18" fontFamily="Arial" fill="#fff">C#</text>
  </svg>
);

export const IconJava = ({ className = "w-5 h-5" }: IconProps) => (
  <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect width="48" height="48" rx="8" fill="#007396" />
    <text x="24" y="30" textAnchor="middle" fontSize="14" fontFamily="Arial" fill="#fff">Java</text>
  </svg>
);

export const IconCpp = ({ className = "w-5 h-5" }: IconProps) => (
  <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect width="48" height="48" rx="8" fill="#00599C" />
    <text x="24" y="30" textAnchor="middle" fontSize="14" fontFamily="Arial" fill="#fff">C++</text>
  </svg>
);

export const IconJS = ({ className = "w-5 h-5" }: IconProps) => (
  <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect width="48" height="48" rx="8" fill="#F7DF1E" />
    <text x="24" y="32" textAnchor="middle" fontSize="12" fontFamily="Arial" fill="#000">JS</text>
  </svg>
);

export const IconDotNet = ({ className = "w-5 h-5" }: IconProps) => (
  <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect width="48" height="48" rx="8" fill="#512BD4" />
    <text x="24" y="30" textAnchor="middle" fontSize="12" fontFamily="Arial" fill="#fff">.NET</text>
  </svg>
);

export const IconSqlServer = ({ className = "w-5 h-5" }: IconProps) => (
  <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect width="48" height="48" rx="8" fill="#CC2927" />
    <text x="24" y="30" textAnchor="middle" fontSize="10" fontFamily="Arial" fill="#fff">MSSQL</text>
  </svg>
);

export const IconHTML = ({ className = "w-5 h-5" }: IconProps) => (
  <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect width="48" height="48" rx="8" fill="#E34F26" />
    <text x="24" y="32" textAnchor="middle" fontSize="12" fontFamily="Arial" fill="#fff">HTML</text>
  </svg>
);

export const IconCSS = ({ className = "w-5 h-5" }: IconProps) => (
  <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect width="48" height="48" rx="8" fill="#1572B6" />
    <text x="24" y="32" textAnchor="middle" fontSize="12" fontFamily="Arial" fill="#fff">CSS</text>
  </svg>
);

export const IconBootstrap = ({ className = "w-5 h-5" }: IconProps) => (
  <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect width="48" height="48" rx="8" fill="#7952B3" />
    <text x="24" y="32" textAnchor="middle" fontSize="12" fontFamily="Arial" fill="#fff">B</text>
  </svg>
);

export const IconGitHubActions = ({ className = "w-5 h-5" }: IconProps) => (
  <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect width="48" height="48" rx="8" fill="#2088FF" />
    <text x="24" y="30" textAnchor="middle" fontSize="10" fontFamily="Arial" fill="#fff">GHA</text>
  </svg>
);

export const IconJenkins = ({ className = "w-5 h-5" }: IconProps) => (
  <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect width="48" height="48" rx="8" fill="#D24939" />
    <text x="24" y="30" textAnchor="middle" fontSize="10" fontFamily="Arial" fill="#fff">Jenkins</text>
  </svg>
);

// Simple institution logos
export const IconUniversityPlovdiv = ({ className = "w-10 h-10" }: IconProps) => (
  <svg className={className} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect width="64" height="64" rx="12" fill="#0B5FFF" />
    <text x="32" y="38" textAnchor="middle" fontSize="12" fontFamily="Arial" fill="#fff">UP</text>
  </svg>
);

export const IconSoftUni = ({ className = "w-10 h-10" }: IconProps) => (
  <svg className={className} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect width="64" height="64" rx="12" fill="#00A859" />
    <text x="32" y="38" textAnchor="middle" fontSize="10" fontFamily="Arial" fill="#fff">SoftUni</text>
  </svg>
);

export default {} as Record<string, never>;
