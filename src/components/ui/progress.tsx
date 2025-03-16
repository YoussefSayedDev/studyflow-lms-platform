"use client";

import * as ProgressPrimitive from "@radix-ui/react-progress";
import { useParams } from "next/navigation";
import * as React from "react";

import { cn } from "@/lib/utils";

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const isRTL = locale === "ar";

  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        dir={isRTL ? "rtl" : "ltr"}
        className="bg-primary h-full w-full flex-1 transition-all"
        style={{
          transform: isRTL
            ? `translateX(${100 - (value || 0)}%)`
            : `translateX(-${100 - (value || 0)}%)`,
        }}
      />
    </ProgressPrimitive.Root>
  );
}

export { Progress };
