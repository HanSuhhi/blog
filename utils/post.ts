export function randomNumbers(min: number, max: number): [number, number] {
  const firstNumber = Math.floor(Math.random() * (max - min + 1) + min);
  const secondNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return [firstNumber, secondNumber];
}
