export const waitlistRoles = [
  "Personal use",
  "Healthcare professional",
  "Coach or trainer",
  "Research or education",
  "Business or organisation",
  "Other",
];

export const waitlistStepContent = {
  1: { label: "Your details", description: "Required information" },
  2: { label: "Your interests", description: "Choose what matters to you" },
  3: { label: "A little more context", description: "Completely optional" },
} as const;
