export type ProductAccent =
  "kradle" | "kinetix" | "kursor" | "kovert" | "kapture" | "konnect";

export type EcosystemProduct = {
  id: string;
  slug: ProductAccent;
  name: string;
  mark: string;
  category: string;
  purpose: string;
  accent: string;
  accentColor: ProductAccent;
  accentSource: `#${string}`;
  accentAnchor: 500 | 600 | 700;
  tagline?: string;
  href: string | null;
  image: string | null;
  focus: "primary" | "ecosystem";
  features: string[];
  users: string[];
  applications: string[];
  value: string;
  architecture: {
    core: "Smart Dorsal Sensor";
    specialistModule: string;
    accessoryIntegrations: string[];
  };
};

export const ecosystemProducts = [
  {
    id: "01",
    slug: "kradle",
    name: "Kradle",
    mark: "KRADLE™",
    category: "Maternal & Health Monitoring",
    purpose: "Maternal and healthcare monitoring",
    accent: "Health",
    accentColor: "kradle",
    accentSource: "#d86398",
    accentAnchor: 500,
    href: "/product/kradle",
    image: null,
    focus: "primary",
    features: [
      "Doppler fetal heartbeat detection",
      "Fetal movement & contraction monitoring",
      "Maternal heart rate, SpO₂ & temperature",
      "Gestural emergency alerts",
      "AI pregnancy guidance & reminders",
      "Remote clinician & Kradle Centre connectivity",
    ],
    users: [
      "Pregnant women",
      "Midwives",
      "Doctors",
      "Rural healthcare workers",
      "Maternal health NGOs",
    ],
    applications: [
      "Pregnancy monitoring",
      "Remote maternal care",
      "High-risk pregnancy support",
      "Kradle Centre connectivity",
      "Rural and community healthcare",
    ],
    value:
      "Reducing maternal and infant mortality through wearable monitoring and early intervention.",
    architecture: {
      core: "Smart Dorsal Sensor",
      specialistModule: "Doppler sensor glove",
      accessoryIntegrations: ["Smart display", "Mobile app", "Telemedicine"],
    },
  },
  {
    id: "02",
    slug: "kinetix",
    name: "Kinetix",
    mark: "KINETIX™",
    category: "Movement & Performance",
    purpose: "Movement, fitness, and performance insight",
    accent: "Performance",
    accentColor: "kinetix",
    accentSource: "#60a922",
    accentAnchor: 500,
    href: "/product/kinetix",
    image: null,
    focus: "primary",
    features: [
      "Motion & biometric tracking",
      "Grip-force sensing",
      "Real-time AI coaching",
      "Performance analytics & injury prediction",
      "Voice, music & navigation control",
      "Watch & wireless earbud support",
    ],
    users: [
      "Boxers",
      "Cyclists",
      "Runners",
      "Golfers",
      "Tennis players",
      "Coaches and teams",
    ],
    applications: [
      "Boxing",
      "Cycling",
      "Running",
      "Football",
      "Tennis",
      "Everyday training",
    ],
    value: "Turning every training session into measurable performance data.",
    architecture: {
      core: "Smart Dorsal Sensor",
      specialistModule: "Performance sensing glove",
      accessoryIntegrations: ["Smart display", "Earbud dock", "BRB app"],
    },
  },
  {
    id: "03",
    slug: "kursor",
    name: "Kursor",
    mark: "KURSOR™",
    category: "Human–Computer Interaction",
    purpose: "Human-computer interaction",
    accent: "Interaction",
    accentColor: "kursor",
    accentSource: "#0f52c9",
    accentAnchor: 700,
    href: "/product/kursor",
    image: null,
    focus: "primary",
    features: [
      "Air mouse & gesture cursor control",
      "Click & scroll interaction",
      "Presentation, CAD & design navigation",
      "Multi-device pairing",
      "Haptic feedback & productivity shortcuts",
      "Accessible computer control",
    ],
    users: [
      "Office workers",
      "Designers",
      "Engineers",
      "Gamers",
      "VR users",
      "People with accessibility needs",
    ],
    applications: [
      "Desktop navigation",
      "Presentation control",
      "CAD and design workflows",
      "Gaming",
      "AR and VR interaction",
      "Accessible computing",
    ],
    value:
      "Replacing traditional mouse and keyboard interaction with intuitive hand gestures.",
    architecture: {
      core: "Smart Dorsal Sensor",
      specialistModule: "Wearable mouse",
      accessoryIntegrations: ["Smart display", "PC", "Tablet", "Smart TV"],
    },
  },
  {
    id: "04",
    slug: "kovert",
    name: "Kovert",
    mark: "KOVERT™",
    category: "Tactical Intelligence",
    purpose: "Defence, security, and field operations",
    accent: "Defence",
    accentColor: "kovert",
    accentSource: "#b6a36a",
    accentAnchor: 500,
    tagline: "Mission Ready. Hands Connected.",
    href: null,
    image: null,
    focus: "ecosystem",
    features: [
      "Secure hands-free communications",
      "Silent haptic alerts",
      "Team location & biometric awareness",
      "Drone & robotic system control",
      "AR glasses & night-operation integration",
      "Gesture-based command interface",
    ],
    users: [
      "Armed forces",
      "Law enforcement",
      "Border security",
      "Search and rescue",
      "Disaster response",
      "Security patrols",
    ],
    applications: [
      "Infantry operations",
      "Border security",
      "Special forces",
      "Search and rescue",
      "Disaster response",
      "Security patrols",
    ],
    value:
      "Mission-ready intelligence and control without taking hands off the task.",
    architecture: {
      core: "Smart Dorsal Sensor",
      specialistModule: "Tactical command interface",
      accessoryIntegrations: [
        "Secure communications",
        "AR smart glasses",
        "Drone and robotic systems",
      ],
    },
  },
  {
    id: "05",
    slug: "kapture",
    name: "Kapture",
    mark: "KAPTURE™",
    category: "Recovery & Rehabilitation",
    purpose: "Physiotherapy, rehabilitation, and sports recovery",
    accent: "Recovery",
    accentColor: "kapture",
    accentSource: "#8b5cf6",
    accentAnchor: 600,
    tagline: "Recovery. Reinvented.",
    href: null,
    image: null,
    focus: "ecosystem",
    features: [
      "EMS & TENS therapy",
      "Heat & vibration therapy",
      "Grip-strength monitoring",
      "Muscle recovery analytics",
      "Smart Dorsal Sensor connectivity",
      "AI recovery coaching",
    ],
    users: [
      "Stroke rehabilitation",
      "Hand injury recovery",
      "Arthritis support",
      "Sports therapy",
      "Occupational therapy",
      "Post-surgery rehabilitation",
    ],
    applications: [
      "Stroke rehabilitation",
      "Hand injury recovery",
      "Arthritis support",
      "Sports therapy",
      "Occupational therapy",
      "Post-surgery rehabilitation",
    ],
    value:
      "Guided recovery built around measurable hand function and progress.",
    architecture: {
      core: "Smart Dorsal Sensor",
      specialistModule: "Recovery and therapy system",
      accessoryIntegrations: ["Smart display", "Mobile app", "AI coaching"],
    },
  },
  {
    id: "06",
    slug: "konnect",
    name: "Konnect",
    mark: "KONNECT™",
    category: "Productivity & Workforce",
    purpose: "Manufacturing, warehousing, and logistics",
    accent: "Industry",
    accentColor: "konnect",
    accentSource: "#14b8a6",
    accentAnchor: 500,
    tagline: "Connected Hands. Smarter Work.",
    href: null,
    image: null,
    focus: "ecosystem",
    features: [
      "Digital work instructions & training",
      "Barcode & RFID interaction",
      "Gesture-based controls",
      "Worker safety alerts",
      "Hands-free communication",
      "Productivity & digital twin analytics",
    ],
    users: [
      "Manufacturing plants",
      "Warehouses",
      "Construction sites",
      "Distribution centres",
      "Oil and gas facilities",
      "Industrial maintenance",
    ],
    applications: [
      "Manufacturing plants",
      "Warehouses",
      "Construction sites",
      "Distribution centres",
      "Oil and gas facilities",
      "Industrial maintenance",
    ],
    value: "Fewer errors, safer teams, and better operational visibility.",
    architecture: {
      core: "Smart Dorsal Sensor",
      specialistModule: "Workforce interaction system",
      accessoryIntegrations: [
        "Barcode and RFID systems",
        "Digital work instructions",
        "Digital twins",
      ],
    },
  },
] satisfies EcosystemProduct[];
