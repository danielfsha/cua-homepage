import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-[18px] font-medium transition-all overflow-hidden disabled:pointer-events-none disabled:opacity-50 py-4",
  {
    variants: {
      variant: {
        default:
          "bg-linear-to-b from-[#0A67F8] to-[#063D92] text-white rounded-full shadow-xl shadow-[0px_10px_20px_-7px_rgba(78,255,246,0.25) inset-shadow-xl inset-shadow-[0px_0px_20px_0px_rgba(235,235,235,1),0px_-4px_5px_0px_rgba(140,140,140,_0.25)]",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-[#3F3F3F] border border-[1px] border-[#5C5C5C] text-white shadow-xl shadow-[-4px_-4px_10px_0px_rgba(110,110,110,0.4), 5px_5px_10px_0px_rgba(0,0,0,0.4)] inset-shadow-xl inset-shadow-[-5px_-5px_10px_0px_rgba(0,0,0,0.25),5px_5px_5px_0px_rgba(110,110,110,1)]",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 gap-1.5 px-3",
        lg: "h-11 px-6 ",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
