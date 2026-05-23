import type { CSSProperties, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const revealClassName = ["reveal", className].filter(Boolean).join(" ");
  const style = { "--reveal-delay": `${delay}s` } as CSSProperties;

  return (
    <div className={revealClassName} style={style}>
      {children}
    </div>
  );
}

export default Reveal;
