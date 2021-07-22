// 첫 풀이

function solution(numbers, hand) {
  var answer = '';
  const keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [-1, 0, -1]
  ];

  let lx = 0;
  let rx = 2;
  let ly = 3;
  let ry = 3;

  for (let index = 0; index < numbers.length; index++) {
    for (let i = 0; i < keypad.length; i++) {
      for (let j = 0; j < keypad.length; j++) {
        if (numbers[index] == keypad[i][j]) {
          if (j == 0) {
            lx = j;
            ly = i;
            answer += 'L';
          } else if (j == 2) {
            rx = j;
            ry = i;
            answer += 'R';
          }
          else {
            let d_l = Math.abs(lx - j) + Math.abs(ly - i);
            let d_r = Math.abs(rx - j) + Math.abs(ry - i);
            if (d_l < d_r) {
              lx = j;
              ly = i;
              answer += 'L';
            } else if (d_l > d_r) {
              rx = j;
              ry = i;
              answer += 'R';
            } else {
              if (d_l == d_r && hand == 'left') {
                lx = j;
                ly = i;
                answer += 'L';
              } else {
                rx = j;
                ry = i;
                answer += 'R';
              }
            }
          }
        }
      }
    }
  }
  return answer;
}


// 1등 답지
function solution2(numbers, hand) {
  hand = hand[0] === "r" ? "R" : "L";

  let position = [1, 4, 4, 4, 3, 3, 3, 2, 2, 2]
  let h = { L: [1, 1], R: [1, 1] }
  return numbers.map(x => {
    if (/[147]/.test(x)) {
      h.L = [position[x], 1]
      return "L"
    }
    if (/[369]/.test(x)) {
      h.R = [position[x], 1]
      return "R"
    }
    let distL = Math.abs(position[x] - h.L[0]) + h.L[1]
    let distR = Math.abs(position[x] - h.R[0]) + h.R[1]
    if (distL === distR) {
      h[hand] = [position[x], 0]
      return hand
    }
    if (distL < distR) {
      h.L = [position[x], 0]
      return "L"
    }
    h.R = [position[x], 0]
    return "R"
  }).join("")
}


console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"))
console.log("LRLLLRLLRRL")
console.log([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5].join(''))
console.log()
console.log(solution2([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"))
console.log("LRLLLRLLRRL")
console.log([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5].join(''))