// 입력 파라미터


// function solution(N, stages) {
//   let records = []
//   let i;
//   for (i = 0; i < N + 1; i++) {
//     records.push([0, 0, i + 1]) // 수, 실패율, 스테이지
//   }
//   console.log(records)

//   stages.forEach(num => records[num - 1][0]++);
//   console.log(records)

//   let ppl = stages.length;
//   for (i = 0; i < N + 1; i++) {
//     records[i][1] = records[i][0] / ppl;
//     ppl -= records[i][0]
//   }
//   console.log(records)


//   return records.slice(0, N).sort((a, b) => b[1] - a[1]).map(el => el[2]);
// }
let N = 5;
let stages = [2, 1, 2, 6, 2, 4, 3, 3];
let stages2 = [2, 1, 2, 4, 2, 4, 3, 3];

function solution(N, stages) {
  let arr = [];

  for (let i = 0; i < N + 1; i++) {
    arr.push([0, 0, i + 1])
  }
  console.log(arr)
  stages.forEach(el => arr[el - 1][0]++)
  console.log(arr)

  let len = stages.length;
  for (let i = 0; i < arr.length; i++) {
    arr[i][1] = arr[i][0] / len;
    len -= arr[i][0]
  }
  console.log(arr)

  // arr.slice()
  console.log(arr.slice(0, arr.length - 1).sort((a, b) => b[1] - a[1]).map(el => el[2]))
}

// let stages = [2, 1, 2, 4, 2, 4, 3, 3];
console.log(solution(N, stages));
// console.log(solution(N, stages2));