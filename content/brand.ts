export const brand = {
  name: "TekGlove",
  tagline: "One Platform. Endless Possibilities.",
  accent: {
    name: "TekGlove Orange",
    source: "#f97316",
    anchor: 500,
  },
  proposition:
    "A connected wearable platform that captures and interprets the data held in the hand.",
  coreTechnology: {
    name: "Smart Dorsal Sensor",
    description:
      "The shared sensing and intelligence system that captures and interprets hand data across every TekGlove product.",
    position: "Dorsal side of the hand",
    signals: ["Movement", "Grip", "Gesture", "Position", "Biometrics", "Touch"],
  },
  technologyLayers: [
    {
      title: "Sense & Respond",
      description:
        "Capture hand signals and return immediate physical feedback.",
      technologies: ["Gesture Recognition", "Haptic Feedback"],
    },
    {
      title: "Interpret",
      description:
        "Transform raw signals into useful patterns and intelligence.",
      technologies: [
        "AI & Machine Learning",
        "Edge Computing",
        "Digital Twin Analytics",
      ],
    },
    {
      title: "Connect",
      description: "Carry insight into the wider TekGlove wearable ecosystem.",
      technologies: [
        "Bluetooth / Wi-Fi",
        "Mobile App Integration",
        "Cloud Dashboard",
      ],
    },
  ],
  architecture: {
    core: "Smart Dorsal Sensor",
    model:
      "One shared sensing and intelligence foundation with product-specific modules and accessory integrations.",
  },
} as const;
