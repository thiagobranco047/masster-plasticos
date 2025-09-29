"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type CommonProps = {
  isLoading?: boolean;
  variant?: "primary" | "secondary" | "ghost";
  asChild?: boolean; // reserved for future Slot support
  className?: string;
  children?: React.ReactNode;
};

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
};

type AnchorProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

type Props = ButtonProps | AnchorProps;

// Overloads to improve JSX inference
export default function Button(props: AnchorProps): JSX.Element;
export default function Button(props: ButtonProps): JSX.Element;
export default function Button(props: Props): JSX.Element {
  const { isLoading, variant = "primary", className, children, href, ...rest } = props as any;

  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors",
    variant === "primary" && "bg-brand-yellow text-black hover:brightness-95",
    variant === "secondary" && "bg-black text-white hover:bg-zinc-900",
    variant === "ghost" && "bg-transparent text-black hover:bg-brand-ice",
    "disabled:opacity-60 disabled:cursor-not-allowed"
  );

  if (href) {
    return (
      <Link href={href} className={cn(classes, className)} {...(rest as any)}>
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </Link>
    );
  }

  return (
    <button className={cn(classes, className)} {...(rest as any)}>
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </button>
  );
}

