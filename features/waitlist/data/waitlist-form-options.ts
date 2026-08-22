export const waitlistRoles = [
  "Personal use",
  "Healthcare professional",
  "Coach or trainer",
  "Research or education",
  "Business or organisation",
  "Other",
];

export const waitlistRoleValues: Record<
  (typeof waitlistRoles)[number],
  | "personal_use"
  | "healthcare_professional"
  | "coach_or_trainer"
  | "research_or_education"
  | "business_or_organisation"
  | "other"
> = {
  "Personal use": "personal_use",
  "Healthcare professional": "healthcare_professional",
  "Coach or trainer": "coach_or_trainer",
  "Research or education": "research_or_education",
  "Business or organisation": "business_or_organisation",
  Other: "other",
};

export const waitlistStepContent = {
  1: { label: "Your details", description: "Required information" },
  2: { label: "Your interests", description: "Choose what matters to you" },
  3: { label: "A little more context", description: "Completely optional" },
} as const;
