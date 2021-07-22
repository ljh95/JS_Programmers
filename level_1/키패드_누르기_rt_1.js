function solution(numbers, hand) {
  hand = (hand[0] === 'r') ? 'R' : 'L';

  const position = [1, 4, 4, 4, 3, 3, 3, 2, 2, 2];
  let h = {
    L: [1, 1],
    R: [1, 1]
  }
  return numbers.map(x => {
    if (/[147]/.test(x)) {
      h.L = [position[x], 1]
      return "L"
    }
    if (/[369]/.test(x)) {
      h.R = [position[x], 1]
      return "R"
    }
  })
}