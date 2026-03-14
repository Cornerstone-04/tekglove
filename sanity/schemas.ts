// Sanity schema definitions
// Run `sanity init` in a /studio directory to set up the CMS
// Then paste these schemas into your schema.ts file

export const waitlistSchema = {
  name: "waitlist",
  title: "Waitlist Signups",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "email", title: "Email", type: "string" },
    { name: "intent", title: "Intent", type: "string", options: { list: ["beta_testing", "early_access", "both"] } },
    { name: "useCase", title: "Use Case", type: "text" },
    { name: "submittedAt", title: "Submitted At", type: "datetime" },
  ],
};

export const productSchema = {
  name: "product",
  title: "Products",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "tagline", title: "Tagline", type: "string" },
    { name: "desc", title: "Description", type: "text" },
    { name: "price", title: "Price", type: "string" },
    { name: "tag", title: "Tag", type: "string" },
    { name: "image", title: "Image", type: "image", options: { hotspot: true } },
    { name: "specs", title: "Specs", type: "array", of: [{ type: "object", fields: [{ name: "label", type: "string" }, { name: "value", type: "string" }] }] },
  ],
};
