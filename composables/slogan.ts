export function useSlogan() {
  const slogans = [
    "你说海棠生于悬崖"
  ];

  const one_slogan = () => useSample(slogans);

  return { one_slogan };
}
