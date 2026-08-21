import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Baby,
  Crosshair,
  Hand,
  HeartPulse,
  MousePointer2,
  Radio,
} from "lucide-react";

export type PublishedProductName = "Kradle" | "Kinetix" | "Kursor";

export type ProductVisual = {
  image?: string;
  icon: LucideIcon;
};

export type ProductDetailConfig = {
  name: PublishedProductName;
  mark: string;
  eyebrow: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  introduction: string;
  shader: "sensor" | "intelligence";
  signalLabel: string;
  signalValue: string;
  heroVisual: ProductVisual;
  specifications: Array<{ label: string; value: string }>;
  showcases: Array<
    ProductVisual & {
      kicker: string;
      title: string;
      description: string;
    }
  >;
  intelligence: {
    kicker: string;
    title: string;
    titleAccent: string;
    description: string;
    capabilities: Array<{ title: string; description: string }>;
  };
  useCases: {
    kicker: string;
    title: string;
    titleAccent: string;
    items: string[];
  };
  cta: {
    kicker: string;
    title: string;
    titleAccent: string;
    description: string;
    visual: ProductVisual;
  };
};

export const productDetailConfigs = {
  Kinetix: {
    name: "Kinetix",
    mark: "KINETIX™",
    eyebrow: "Flagship · KINETIX™",
    title: "TekGlove",
    titleAccent: "V1",
    subtitle: "Data in the Palm of Your Hand.",
    introduction:
      "The performance expression of the TekGlove platform, interpreting movement, grip, gestures, biometrics, and hand position without restricting how you move.",
    shader: "sensor",
    signalLabel: "Smart Dorsal Sensor",
    signalValue: "Motion · Grip · Gesture · Position",
    heroVisual: { image: "/images/kinetix-hero.webp", icon: Crosshair },
    specifications: [
      { label: "Product", value: "KINETIX™ / TekGlove V1" },
      { label: "Core Technology", value: "Smart Dorsal Sensor" },
      { label: "Data", value: "Motion · Grip · Gesture · Position" },
      { label: "Connectivity", value: "Bluetooth / Wi-Fi" },
      { label: "Material", value: "Performance nylon · Hex-grip" },
      { label: "Water Resistance", value: "IPX4" },
      { label: "Sizes", value: "S / M / L / XL" },
      { label: "Origin", value: "United Kingdom" },
    ],
    showcases: [
      {
        image: "/images/kinetix-sensor-front.webp",
        icon: Crosshair,
        kicker: "Integrated Sensor System",
        title: "Built Into the Glove.",
        description:
          "The Smart Dorsal Sensor sits on the back of the hand, keeping the palm and fingers free for natural grip and movement.",
      },
      {
        image: "/images/kinetix-biometric-front.webp",
        icon: Activity,
        kicker: "Live Performance Signals",
        title: "Feedback at a Glance.",
        description:
          "KINETIX brings key training signals into view, helping people connect movement and effort with useful performance context.",
      },
    ],
    intelligence: {
      kicker: "Hand-First Performance",
      title: "The Hand Holds",
      titleAccent: "Actionable Data.",
      description:
        "Every movement, grip, gesture, and physical response contains information. KINETIX captures that information at the hand and transforms it into insight you can use.",
      capabilities: [
        {
          title: "Motion Tracking",
          description:
            "Measure movement, orientation, speed, and hand position through every session.",
        },
        {
          title: "Grip Sensing",
          description:
            "Understand grip force, control, fatigue, and interaction with equipment.",
        },
        {
          title: "Biometric Context",
          description:
            "Connect physical response with movement data for a more complete view.",
        },
        {
          title: "Performance Insight",
          description:
            "Turn live signals into coaching feedback, trends, and useful alerts.",
        },
      ],
    },
    useCases: {
      kicker: "Performance Use Cases",
      title: "Built to Measure",
      titleAccent: "How You Move.",
      items: ["Boxing", "Cycling", "Tennis", "Football", "Golf", "Running"],
    },
    cta: {
      kicker: "KINETIX Early Access",
      title: "Be First to",
      titleAccent: "Move Smarter.",
      description:
        "Join the TekGlove early access list for KINETIX development updates, beta opportunities, and product availability.",
      visual: { image: "/images/kinetix-angle.webp", icon: Crosshair },
    },
  },
  Kradle: {
    name: "Kradle",
    mark: "KRADLE™",
    eyebrow: "Maternal Health · KRADLE™",
    title: "Connected",
    titleAccent: "Care",
    subtitle: "Important Signals, Held Close.",
    introduction:
      "The maternal health expression of the TekGlove platform, bringing fetal heartbeat, maternal biometrics, and emergency communication closer to the people who need them.",
    shader: "sensor",
    signalLabel: "Connected Health Interface",
    signalValue: "Heartbeat · SpO₂ · Temperature · Alerts",
    heroVisual: { icon: HeartPulse },
    specifications: [
      { label: "Product", value: "KRADLE™" },
      { label: "Purpose", value: "Maternal and health monitoring" },
      { label: "Core Signal", value: "Doppler fetal heartbeat" },
      { label: "Biometrics", value: "Heart rate · SpO₂ · Temperature" },
      { label: "Alerts", value: "Gestural emergency communication" },
      { label: "Care Network", value: "Kradle Centres" },
      { label: "Connectivity", value: "Bluetooth / Wi-Fi" },
      { label: "Support", value: "AI assistant · Telemedicine" },
    ],
    showcases: [
      {
        icon: Baby,
        kicker: "Maternal Monitoring",
        title: "Care in the Hand.",
        description:
          "KRADLE brings fetal heartbeat detection and maternal signals into one wearable system designed for more accessible monitoring.",
      },
      {
        icon: Radio,
        kicker: "Connected Intervention",
        title: "Support When It Matters.",
        description:
          "Gestural alerts, telemedicine connectivity, and Kradle Centres help turn important changes into timely communication and care.",
      },
    ],
    intelligence: {
      kicker: "Hand-Connected Care",
      title: "Signals Become",
      titleAccent: "Earlier Awareness.",
      description:
        "KRADLE brings maternal and fetal signals into a connected hand-worn system, helping caregivers see useful changes and respond with better context.",
      capabilities: [
        {
          title: "Fetal Heartbeat",
          description:
            "Use Doppler sensing to support accessible fetal heartbeat detection.",
        },
        {
          title: "Maternal Biometrics",
          description:
            "Monitor heart rate, blood oxygen, and body temperature together.",
        },
        {
          title: "Emergency Gestures",
          description:
            "Turn intentional hand gestures into discreet requests for assistance.",
        },
        {
          title: "Connected Care",
          description:
            "Link wearable signals with telemedicine support and Kradle Centres.",
        },
      ],
    },
    useCases: {
      kicker: "Care Use Cases",
      title: "Designed Around",
      titleAccent: "Maternal Care.",
      items: [
        "Pregnant Women",
        "Midwives",
        "Doctors",
        "Rural Health Workers",
        "Maternal Health NGOs",
        "Kradle Centres",
      ],
    },
    cta: {
      kicker: "KRADLE Early Access",
      title: "Help Shape",
      titleAccent: "Connected Care.",
      description:
        "Join the TekGlove early access list for KRADLE development updates, collaboration opportunities, and future availability.",
      visual: { icon: HeartPulse },
    },
  },
  Kursor: {
    name: "Kursor",
    mark: "KURSOR™",
    eyebrow: "Human Interaction · KURSOR™",
    title: "Natural",
    titleAccent: "Control",
    subtitle: "Your Hand Becomes the Interface.",
    introduction:
      "The human-computer interaction expression of the TekGlove platform, translating natural hand movement, gestures, and commands into intuitive control.",
    shader: "intelligence",
    signalLabel: "Gesture Control Interface",
    signalValue: "Point · Select · Navigate · Command",
    heroVisual: { icon: MousePointer2 },
    specifications: [
      { label: "Product", value: "KURSOR™" },
      { label: "Purpose", value: "Human-computer interaction" },
      { label: "Input", value: "Gesture and cursor control" },
      { label: "Typing", value: "Virtual keyboard" },
      { label: "Feedback", value: "Haptic response" },
      { label: "Commands", value: "Gesture · Voice" },
      { label: "Connectivity", value: "PC · Tablet · Smart TV" },
      { label: "Environments", value: "Desktop · AR · VR" },
    ],
    showcases: [
      {
        icon: MousePointer2,
        kicker: "Gesture Control",
        title: "Point Without a Mouse.",
        description:
          "KURSOR turns natural hand movement into cursor control, selection, presentation navigation, and connected display input.",
      },
      {
        icon: Hand,
        kicker: "Responsive Feedback",
        title: "Control You Can Feel.",
        description:
          "Haptic feedback, voice commands, and virtual input give each interaction useful confirmation without returning to a desk.",
      },
    ],
    intelligence: {
      kicker: "Hand-First Interaction",
      title: "Movement Becomes",
      titleAccent: "Digital Intent.",
      description:
        "KURSOR interprets pointing, gestures, and commands at the hand, creating a direct connection between what you intend and what a device does.",
      capabilities: [
        {
          title: "Air Mouse",
          description:
            "Translate hand position and movement into accurate cursor control.",
        },
        {
          title: "Gesture Commands",
          description:
            "Use familiar hand actions for selection, navigation, and control.",
        },
        {
          title: "Virtual Input",
          description:
            "Access keyboard and presentation controls without conventional hardware.",
        },
        {
          title: "Haptic Response",
          description:
            "Receive tactile confirmation as digital actions are recognised.",
        },
      ],
    },
    useCases: {
      kicker: "Interaction Use Cases",
      title: "Built for the Way",
      titleAccent: "People Create.",
      items: [
        "Office Work",
        "Design",
        "Engineering",
        "Gaming",
        "AR and VR",
        "Accessible Input",
      ],
    },
    cta: {
      kicker: "KURSOR Early Access",
      title: "Experience",
      titleAccent: "Natural Control.",
      description:
        "Join the TekGlove early access list for KURSOR development updates, testing opportunities, and future availability.",
      visual: { icon: MousePointer2 },
    },
  },
} satisfies Record<PublishedProductName, ProductDetailConfig>;
