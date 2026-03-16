import type { SchemaTypeDefinition } from "sanity";

const waitlist = {
  name: "waitlist",
  title: "Waitlist Signups",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "email", title: "Email", type: "string" },
    {
      name: "intent",
      title: "Intent",
      type: "string",
      options: { list: ["beta_testing", "early_access", "both"] },
    },
    { name: "useCase", title: "Use Case", type: "text" },
    { name: "submittedAt", title: "Submitted At", type: "datetime" },
  ],
};

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [waitlist],
};
