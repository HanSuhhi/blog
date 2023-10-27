export function useSlogan() {
  const slogans = [
    "你说海棠生于悬崖",
    "从来没有大哭就能杀死敌人的事"
  ];

  const one_slogan = (): string => useSample(slogans);

  return { one_slogan };
}
