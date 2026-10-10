import { type ReactNode } from "react";
import { FadeUp } from "./ui/motion";

interface SectionHeaderProps {
  eyebrow: string;
  heading: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  /** Pass true when rendered on a dark (navy) background */
  light?: boolean;
  className?: string;
}

/**
 * Two-column section header used across the site.
 *
 * Left col (7/12): eyebrow → short gold rule → heading
 * Right col (5/12): description baseline-aligned to heading bottom, optional action
 * Mobile: stacks heading → description with tight spacing
 */
export default function SectionHeader({
  eyebrow,
  heading,
  description,
  action,
  light = false,
  className = "",
}: SectionHeaderProps) {
  const headingColor = light ? "text-white" : "text-navy-900";
  const descColor    = light ? "text-white/70" : "text-ink-700";
  const hasRight     = description || action;

  return (
    <FadeUp className={`mb-14 ${className}`}>
      <div className={`grid grid-cols-12 gap-x-8 gap-y-4 ${hasRight ? "items-end" : ""}`}>

        {/* LEFT: eyebrow + rule + heading — cols 1–7 */}
        <div className={hasRight ? "col-span-12 md:col-span-6" : "col-span-12 md:col-span-9"}>
          <p className="eyebrow text-gold-500 mb-2">{eyebrow}</p>
          {/* Short gold accent rule */}
          <div className="w-12 h-[2px] bg-gold-500 mb-4" />
          <h2 className={`font-display font-black tracking-tight text-4xl md:text-5xl ${headingColor} leading-[1.08]`}>
            {heading}
          </h2>
        </div>

        {/* RIGHT: description — cols 8–11, baseline-aligned (items-end on grid) */}
        {hasRight && (
          <div className="col-span-12 md:col-span-4 md:col-start-8 flex flex-col justify-end md:pb-1">
            <div className="flex gap-4 items-stretch">
              {/* Thin vertical connecting rule */}
              {description && (
                <div className="hidden md:block w-px bg-line-200 flex-shrink-0" />
              )}
              <div>
                {description && (
                  <p className={`text-[0.9375rem] leading-[1.65] ${descColor} max-w-[38ch]`}>
                    {description}
                  </p>
                )}
                {action && <div className={description ? "mt-4" : ""}>{action}</div>}
              </div>
            </div>
          </div>
        )}

      </div>
    </FadeUp>
  );
}
