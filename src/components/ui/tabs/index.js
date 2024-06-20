import { cva } from "class-variance-authority";

export { default as Tabs } from "./Tabs.vue";
export { default as TabsTrigger } from "./TabsTrigger.vue";
export { default as TabsList } from "./TabsList.vue";
export { default as TabsContent } from "./TabsContent.vue";

export const tabsListVariants = cva(
  "inline-flex items-center justify-center",
  {
    variants: {
      variant: {
        default:
          "rounded-md bg-muted text-muted-foreground h-10 gap-3 p-1 mb-3",
        secondary:
          "rounded-md bg-secondary text-secondary-foreground",
        destructive:
          "rounded-md bg-destructive text-destructive-foreground",
        outline: "text-foreground",
        big: "h-20 gap-3 p-1 mb-3",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export const tabsTriggertVariants = cva(
  "inline-flex items-start justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "rounded-md bg-muted p-1 text-muted-foreground hover:bg-background hover:text-foreground hover:shadow-sm data-[state=active]:bg-background/80 data-[state=active]:text-foreground data-[state=active]:shadow-sm",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md bg-muted p-1 text-muted-foreground",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        big: "rounded-xl text-foreground text-xl font-normal hover:text-2xl hover:font-bold data-[state=active]:text-3xl data-[state=active]:font-bold data-[state=active]:bg-background/50 data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);