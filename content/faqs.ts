export type FaqItem = {
  question: string;
  answer: string;
};

export const platformFaqs: FaqItem[] = [
  {
    question: "What is TekGlove?",
    answer:
      "TekGlove is a wearable technology platform powered by the Smart Dorsal Sensor. It captures and interprets hand data across a family of connected gloves designed for health, movement, computing, recovery, defence, and industry.",
  },
  {
    question: "Why does TekGlove focus on the hand?",
    answer:
      "The hand is a rich source of movement, grip, gesture, position, touch, and physical-response data. It also allows TekGlove to sense, respond, and connect without interrupting the task at hand.",
  },
  {
    question: "What is the Smart Dorsal Sensor?",
    answer:
      "The Smart Dorsal Sensor is the shared intelligence layer positioned on the back of the hand. It supports sensing, connectivity, gesture recognition, haptic feedback, and data processing across the TekGlove ecosystem.",
  },
  {
    question: "Is TekGlove one product or a family of products?",
    answer:
      "TekGlove is one core platform expressed through six specialised gloves: Kradle, Kinetix, Kursor, Kovert, Kapture, and Konnect. Each product applies the shared platform to a different field.",
  },
  {
    question: "Are TekGlove products available now?",
    answer:
      "TekGlove products are currently in development. Kradle, Kinetix, and Kursor are the initial focus products, while the wider six-glove ecosystem continues to evolve.",
  },
  {
    question: "How can I get early access?",
    answer:
      "Join the TekGlove waitlist to receive development updates, testing opportunities, partnership information, and future availability announcements.",
  },
];

export const productFaqs = {
  Kinetix: [
    {
      question: "Who is Kinetix designed for?",
      answer:
        "Kinetix is designed for people who want to understand how they move, from everyday training and fitness to coaching and organised sport. It is not limited to professional athletes.",
    },
    {
      question: "What data does Kinetix capture?",
      answer:
        "Kinetix is being developed to interpret movement, grip, gestures, biometrics, and hand position, turning those signals into useful performance context.",
    },
    {
      question: "Does Kinetix replace a smartwatch?",
      answer:
        "No. Kinetix is centred on the glove and its Smart Dorsal Sensor. Compatible watches, displays, and wireless earbuds may serve as optional accessories within the experience.",
    },
  ],
  Kradle: [
    {
      question: "What is Kradle designed to support?",
      answer:
        "Kradle is being developed to support connected maternal monitoring by combining the Smart Dorsal Sensor with a specialist Doppler module and care-network connectivity.",
    },
    {
      question: "Who is Kradle intended for?",
      answer:
        "Kradle is intended for pregnant women and the people supporting their care, including midwives, doctors, rural health workers, maternal health organisations, and Kradle Centres.",
    },
    {
      question: "Does Kradle replace professional medical care?",
      answer:
        "No. Kradle is intended to support monitoring and connected care. It is not a replacement for qualified medical advice, diagnosis, treatment, or emergency services.",
    },
  ],
  Kursor: [
    {
      question: "What can Kursor control?",
      answer:
        "Kursor is being designed for cursor movement, clicking, scrolling, gesture commands, presentation control, and other mapped interactions across compatible computers and connected devices.",
    },
    {
      question: "Who is Kursor designed for?",
      answer:
        "Kursor is intended for office workers, designers, engineers, gamers, spatial-computing users, and people who may benefit from alternative computer input methods.",
    },
    {
      question: "Does Kursor require a traditional mouse?",
      answer:
        "Kursor is being developed as a wearable input option that can reduce reliance on a traditional mouse for supported actions. Final compatibility and control options will depend on the connected device and application.",
    },
  ],
} satisfies Record<"Kradle" | "Kinetix" | "Kursor", FaqItem[]>;
