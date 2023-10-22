// export function* randomNumbers(min: number, max: number): Generator<number, void> {
//   let inLeftSide = true;
//   let left = useRandom(100, 999);
//   let ratio = inLeftSide ? useRandom(min + 0.1, max, true) : useRandom(1, max, true);
//   let right = Math.floor(left * ratio);
//   let answer = [left, right];

//   while (true) {
//     yield answer.shift()!;
//     if (!answer.length) {
//       inLeftSide = !inLeftSide;
//       left = useRandom(100, 999);
//       ratio = inLeftSide ? useRandom(min + 0.1, max, true) : useRandom(1, max, true);
//       right = Math.floor(left * ratio);
//       answer = [left, right];

//       if ((left / right) > 2 || (left / right) < 0.5)
//         console.log(left, right, left / right, ratio);
//     }
//   }
// }
