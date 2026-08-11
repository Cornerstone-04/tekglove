export const motionEaseOut = [0.23, 1, 0.32, 1] as const;

export type AlternatingCardCustom = {
  index: number;
  reduceMotion: boolean;
  delay?: number;
};

export const staggeredCardGroup = {
  hidden: {},
  visible: (reduceMotion: boolean) => ({
    transition: {
      staggerChildren: reduceMotion ? 0 : 0.06,
      delayChildren: reduceMotion ? 0 : 0.08,
    },
  }),
};

export const alternatingCardReveal = {
  hidden: ({ index, reduceMotion }: AlternatingCardCustom) => ({
    opacity: 0,
    transform: reduceMotion
      ? "translateX(0px)"
      : `translateX(${index % 2 === 0 ? -24 : 24}px)`,
  }),
  visible: ({ reduceMotion, delay = 0 }: AlternatingCardCustom) => ({
    opacity: 1,
    transform: "translateX(0px)",
    transition: {
      duration: reduceMotion ? 0.2 : 0.5,
      delay: reduceMotion ? 0 : delay,
      ease: motionEaseOut,
    },
  }),
};
