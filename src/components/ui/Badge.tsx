import { cn } from "@/lib/utils";

interface BadgeProps {
  variant: "sale" | "rent" | "new" | "hot" | "reduced";
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<string, string> = {
  sale: "bg-brand-500 text-white",
  rent: "bg-badge-rent text-white",
  new: "bg-badge-new text-white",
  hot: "bg-badge-hot text-white",
  reduced: "bg-badge-reduced text-white",
};

export function Badge({ variant, children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-md uppercase tracking-wider",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
