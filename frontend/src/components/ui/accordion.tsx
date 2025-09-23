// src/components/ui/accordion.tsx
"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"
import { cn } from "@/lib/utils"

function Accordion({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "rounded-md border p-1 shadow-sm transition-[box-shadow] data-[state=open]:ring-[3px] data-[state=open]:ring-ring/50",
        className
      )}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header
      data-slot="accordion-header"
      className="flex w-full"
    >
      <AccordionPrimitive.Trigger
        className={cn(
          "data-[state=open]:text-foreground data-[state=open]:rounded-b-none data-[state=open]:bg-accent dark:data-[state=open]:bg-accent/50 data-[state=open]:[>svg]:rotate-180 flex flex-1 items-center justify-between rounded-md p-3 text-sm font-medium transition-[background-color,color,border-radius] [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg]:transition-transform [&_svg]:duration-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="text-muted-foreground transition-transform" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  dangerouslySetInnerHTML,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  // Choose which to render, children or dangerouslySetInnerHTML, never both
  const contentProps = {
    "data-slot": "accordion-content",
    className: cn(
      "bg-accent dark:bg-accent/50 text-muted-foreground overflow-hidden rounded-b-md text-sm transition-[height,padding] data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down p-3",
      className
    ),
    ...props,
  };

  if (dangerouslySetInnerHTML) {
    return (
      <AccordionPrimitive.Content
        {...contentProps}
        dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      />
    );
  }

  return (
    <AccordionPrimitive.Content {...contentProps}>
      {children}
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
