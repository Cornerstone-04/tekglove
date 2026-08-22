import {
  Baby,
  Crosshair,
  Hand,
  Headphones,
  HeartPulse,
  MousePointer2,
} from "lucide-react";
import type {
  ProductDetailConfig,
  PublishedProductName,
} from "./product-detail-types";

export type {
  ProductDetailConfig,
  ProductVisual,
  PublishedProductName,
} from "./product-detail-types";

export const productDetailConfigs = {
  Kinetix: {
    name: "Kinetix",
    accentColor: "kinetix",
    accentSource: "#60a922",
    mark: "KINETIX™",
    eyebrow: "KINETIX™ · Flagship",
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
      { label: "Core Technology", value: "Smart Dorsal Sensor" },
      { label: "Specialist Module", value: "Performance sensing glove" },
      { label: "Data", value: "Motion · Grip · Gesture · Biometrics" },
      { label: "Connectivity", value: "Bluetooth / Wi-Fi" },
      { label: "Accessory Support", value: "Watch · Wireless earbuds" },
      {
        label: "Construction",
        value: "Performance materials · Grip-focused design",
      },
      { label: "Protection", value: "Weather-ready design in development" },
      { label: "Companion", value: "KINETIX app · AI coaching" },
    ],
    showcases: [
      {
        image: "/images/kinetix-sensor-front.webp",
        icon: Crosshair,
        kicker: "Left Hand · Shared Interface",
        title: "Smart Interface Glove",
        description:
          "The Smart Dorsal Sensor captures movement, grip, gestures, biometrics, and hand position while keeping the palm and fingers free to move naturally.",
      },
      {
        image: "/images/kinetix-biometric-front.webp",
        icon: Headphones,
        kicker: "Right Hand · Specialist Module",
        title: "Performance & Accessory Glove",
        description:
          "The specialist glove extends performance sensing and can securely hold connected accessories such as wireless earbuds, keeping them available without making them the core product.",
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
    accentColor: "kradle",
    accentSource: "#d86398",
    mark: "KRADLE™",
    eyebrow: "KRADLE™ · Maternal Health",
    title: "Connected",
    titleAccent: "Care",
    subtitle: "Important Signals, Held Close.",
    introduction:
      "The maternal health expression of the TekGlove platform, combining the Smart Dorsal Sensor with a Doppler module to bring maternal and fetal signals closer to the people who need them.",
    shader: "sensor",
    signalLabel: "Smart Dorsal Sensor",
    signalValue: "Movement · Gesture · Biometrics · Alerts",
    heroVisual: { icon: HeartPulse },
    specifications: [
      { label: "Purpose", value: "Maternal and health monitoring" },
      { label: "Core Technology", value: "Smart Dorsal Sensor" },
      { label: "Specialist Module", value: "Doppler sensor glove" },
      { label: "Maternal Signals", value: "Heart rate · SpO₂ · Temperature" },
      { label: "Pregnancy Insight", value: "Heartbeat · Movement context" },
      { label: "Care Network", value: "Kradle Centres · Remote clinicians" },
      { label: "Connectivity", value: "Bluetooth / Wi-Fi" },
      { label: "Support", value: "AI guidance · Care alerts in development" },
    ],
    showcases: [
      {
        icon: HeartPulse,
        kicker: "Left Hand · Shared Interface",
        title: "Smart Interface Glove",
        description:
          "The Smart Dorsal Sensor supports maternal biometrics, gestures, feedback, alerts, and connectivity while keeping important information close at hand.",
      },
      {
        icon: Baby,
        kicker: "Right Hand · Specialist Module",
        title: "Doppler Sensor Glove",
        description:
          "The specialist Doppler module is designed to support fetal heartbeat detection and add movement context to KRADLE's connected maternal care system.",
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
          title: "Pregnancy Context",
          description:
            "Bring fetal movement context, reminders, and care alerts into one connected view.",
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
    accentColor: "kursor",
    accentSource: "#0f52c9",
    mark: "KURSOR™",
    eyebrow: "KURSOR™ · Human Interaction",
    title: "Natural",
    titleAccent: "Control",
    subtitle: "Your Hand Becomes the Interface.",
    introduction:
      "The human-computer interaction expression of the TekGlove platform, combining the Smart Dorsal Sensor with a wearable mouse module for intuitive digital control.",
    shader: "intelligence",
    signalLabel: "Smart Dorsal Sensor",
    signalValue: "Movement · Gesture · Position · Intent",
    heroVisual: { icon: MousePointer2 },
    specifications: [
      { label: "Purpose", value: "Human-computer interaction" },
      { label: "Core Technology", value: "Smart Dorsal Sensor" },
      { label: "Specialist Module", value: "Wearable mouse" },
      { label: "Input", value: "Cursor · Click · Scroll · Gesture" },
      { label: "Precision", value: "Adjustable optical sensing concept" },
      { label: "Feedback", value: "Haptic response" },
      { label: "Connectivity", value: "PC · Tablet · Smart TV" },
      { label: "Pairing", value: "Multiple connected devices" },
    ],
    showcases: [
      {
        icon: Hand,
        kicker: "Left Hand · Shared Interface",
        title: "Smart Interface Glove",
        description:
          "The Smart Dorsal Sensor interprets movement, gesture, position, and intent while providing haptic feedback and connected device control.",
      },
      {
        icon: MousePointer2,
        kicker: "Right Hand · Specialist Module",
        title: "Wearable Mouse Glove",
        description:
          "The specialist mouse module adds optical tracking, clicking, scrolling, precision control, and multi-device pairing for work, creation, and accessibility.",
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
          title: "Productivity Shortcuts",
          description:
            "Access presentation, CAD, design, and common workflow controls through mapped gestures.",
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
