import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/app/lib/cn";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-bold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 whitespace-nowrap shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-gold-500 text-navy-900 hover:bg-gold-400 shadow-[0_4px_14px_rgba(242,185,28,0.32)] hover:shadow-[0_6px_20px_rgba(242,185,28,0.45)] hover:-translate-y-px active:translate-y-0",
        secondary:
          "border-2 border-navy-800/20 text-navy-800 hover:border-gold-500 hover:text-gold-500 bg-transparent",
        ghost:
          "text-navy-800 hover:text-gold-500 hover:bg-gold-500/8",
        dark:
          "bg-white text-navy-900 hover:bg-gold-500 hover:text-navy-900 shadow-sm",
        outline_white:
          "border-2 border-white/40 text-white hover:bg-white/10",
      },
      size: {
        sm: "text-xs px-4 py-2",
        md: "text-sm px-5 py-2.5",
        lg: "text-base px-7 py-3.5",
        xl: "text-base px-8 py-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  }
);

type ButtonProps = VariantProps<typeof buttonVariants> & {
  href?: string;
  children: React.ReactNode;
  className?: string;
  arrow?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export function Button({ href, children, className, variant, size, arrow, onClick, type }: ButtonProps) {
  const cls = cn(buttonVariants({ variant, size }), className);

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
        {arrow && (
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        )}
      </Link>
    );
  }
  return (
    <button type={type ?? "button"} onClick={onClick} className={cls}>
      {children}
      {arrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </button>
  );
}
