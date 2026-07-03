import { ViewTransition } from "react";
import type { ReactNode } from "react";

/**
 * Transição de rota via View Transitions API (React + Next experimental).
 * Links marcam a direção com transitionTypes={['nav-forward' | 'nav-back']};
 * navegações sem tipo (load inicial, etc.) não animam.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <ViewTransition
      enter={{
        "nav-forward": "nav-forward",
        "nav-back": "nav-back",
        default: "none",
      }}
      exit={{
        "nav-forward": "nav-forward",
        "nav-back": "nav-back",
        default: "none",
      }}
      default="none"
    >
      {children}
    </ViewTransition>
  );
}
