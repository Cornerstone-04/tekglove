export const site = {
  name: "Tek Glove",
  tagline: "Your Apple Watch, Reinvented.",
  description:
    "The world's first performance glove with an integrated Apple Watch mount. Built for athletes, adventurers, and professionals who refuse to compromise.",
  url: "https://tekglove.co.uk",
  email: "hello@tekglove.co.uk",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/about", label: "About" },
  { href: "/signup", label: "Get Early Access" },
];

export const features = [
  {
    id: "01",
    title: "EMS + TENS + Vibration",
    desc: "Three proven therapies in one glove. Electrical muscle stimulation, transcutaneous nerve stimulation, and vibration therapy — delivered simultaneously.",
  },
  {
    id: "02",
    title: "Apple Watch Integration",
    desc: "Data is seamlessly transmitted to your Apple Watch via Bluetooth for real-time analysis, session tracking, and therapy monitoring.",
  },
  {
    id: "03",
    title: "Hex-Grip Construction",
    desc: "Hexagonal grip texture across the palm delivers superior comfort and hold. Engineered for extended wear during recovery sessions.",
  },
  {
    id: "04",
    title: "Portable & Wearable",
    desc: "Compact, lightweight, and self-contained. Advanced therapy wherever you are — gym, clinic, or home. No wires, no setup, no compromise.",
  },
];

export const specs = [
  { label: "Therapy Modes", value: "EMS · TENS · Vibration · Heat" },
  { label: "Connectivity", value: "Bluetooth — Apple Watch" },
  { label: "Compatible Watches", value: "Apple Watch Series / Ultra" },
  { label: "Material", value: "Performance nylon · Hex-grip" },
  { label: "Water Resistance", value: "IPX4" },
  { label: "Sizes", value: "S / M / L / XL" },
  {
    label: "Target Conditions",
    value: "Arthritis · Parkinson's · Carpal Tunnel",
  },
  { label: "Origin", value: "United Kingdom" },
];

export const products = [
  {
    id: "01",
    name: "Tek Gloves",
    version: "V1",
    desc: "The original. A precision-engineered performance glove with an integrated Apple Watch mount. Built for athletes, adventurers, and professionals who refuse to compromise.",
    price: "TBC",
    image: "/images/tekglove-front.jpg",
    cutout: "/images/tekglove_front_cutout.png",
    tag: "Original",
    available: true,
  },
  {
    id: "02",
    name: "Tek Gloves V2",
    version: "V2",
    desc: "The world's first therapy glove. Combines EMS, TENS, vibration, and heat in one wearable device. Pairs with Apple Watch for real-time therapy monitoring and data analysis. Designed for arthritis, injury recovery, Parkinson's, carpal tunnel, and daily hand fatigue.",
    price: "Coming 2026",
    image: "/images/tekv2_front.jpg",
    cutout: "/images/tekv2_front_cutout.png",
    tag: "Flagship",
    available: true,
  },
  {
    id: "03",
    name: "Winter Tek Gloves",
    version: "Winter",
    desc: "All the therapy and Apple Watch functionality of the V2, engineered for cold weather. Insulated for harsh conditions without sacrificing treatment efficacy or wearability.",
    price: "TBC",
    image: "/images/tekglove-angle.jpg",
    cutout: "/images/tekglove_angle_cutout.png",
    tag: "Winter Edition",
    available: true,
  },
  {
    id: "04",
    name: "Tek Gloves V4",
    version: "V4",
    desc: "Next-generation interaction. Advanced motion sensing, instantaneous somatosensory input, and refined haptic feedback. Gesture recognition for proprietary Morse code, neuroadaptive XR training, and assistive robotics control. Built for sports, healthcare, and military applications.",
    price: "In Development",
    image: "/images/tekv2_side.jpg",
    cutout: "/images/tekv2_side_cutout.png",
    tag: "Coming Soon",
    available: false,
  },
];

export const conditions = [
  {
    name: "Arthritis",
    desc: "Reduces joint inflammation and restores grip strength through targeted EMS and heat therapy.",
  },
  {
    name: "Parkinson's",
    desc: "Vibration and electrical stimulation support motor function and reduce tremor severity.",
  },
  {
    name: "Carpal Tunnel",
    desc: "TENS therapy targets nerve pain pathways, relieving pressure and restoring sensation.",
  },
  {
    name: "Injury Recovery",
    desc: "Accelerates rehabilitation by stimulating muscle tissue and improving circulation.",
  },
  {
    name: "Hand Fatigue",
    desc: "Daily wear relieves tension from repetitive strain — ideal for athletes and desk workers.",
  },
  {
    name: "Mild Strokes",
    desc: "Supports neurological recovery by re-engaging muscle pathways through controlled stimulation.",
  },
];

export const principles = [
  {
    title: "Human-First Design",
    desc: "Every Tek Glove product starts with the human wearing it. We design for real conditions, real environments, and real recovery — not lab benchmarks.",
  },
  {
    title: "Multi-Modal Therapy",
    desc: "Where existing products offer one modality, we deliver three or more. EMS, TENS, vibration, and heat working together produce outcomes no single technology can achieve alone.",
  },
  {
    title: "Seamless Integration",
    desc: "Technology should disappear into the experience. Our gloves connect to Apple Watch, XR systems, and robotics without friction — data flows where you need it, when you need it.",
  },
  {
    title: "Adaptive Intelligence",
    desc: "From gesture recognition to neuroadaptive feedback, Tek Glove learns from the wearer. The V4 bridges machine learning, human touch, and digital interaction.",
  },
];

export const about = {
  story:
    "Tek Glove was born from a simple observation: people recovering from hand injuries, arthritis, and neurological conditions had no single wearable that addressed their needs comprehensively. Designed by Keniye Koroye, the original Tek Glove integrated an Apple Watch mount to bring data to the hand. The V2 went further — combining EMS, TENS, vibration, and heat into a single therapy device that syncs with Apple Watch via Bluetooth. Now in development, the V4 pushes into new territory entirely: advanced motion sensing, somatosensory input, haptic feedback, and gesture-based control for sports, healthcare, and military applications.",
  mission:
    "To build the world's most advanced wearable therapy and interaction system — making recovery, performance, and human-machine communication as natural as putting on a glove.",
  vision:
    "A world where technology disappears into the human body seamlessly. Where a glove can heal an arthritic hand in the morning, train a surgeon's precision in the afternoon, and guide a drone with gesture in the evening. Tek Glove is building towards that future — one version at a time.",
};

export const team = [
  {
    name: "Keniye B. Koroye",
    role: "Founder & Designer",
    bio: "An industrial designer, product analyst, and entrepreneur celebrated for merging African cultural narratives with global innovation. A SCAD alum and Tech Nation Global Talent ambassador, Keniye has designed for brands like Tecno Mobile and AFA Sports, and holds a patent for the Tek Glove. Based in London, he specializes in bridging the gap between high-impact hardware and fintech strategy.",
  },
  // {
  //   name: "Evangel Iheukwumere",
  //   role: "Co-Founder",
  //   bio: "Software engineer with experience across full-stack development, AI integration, and real-time systems. Previously at Eli Lilly, where he built AI-enhanced chatbot infrastructure, and founded Kevvlar — an all-in-one project management platform. Currently completing a BSc in Software Engineering at the University of Portsmouth.",
  // },
];
