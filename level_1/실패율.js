// 입력 파라미터
let N = 5;
// let stages = [2, 1, 2, 6, 2, 4, 3, 3];
let stages = [2, 1, 2, 4, 2, 4, 3, 3];
//  내 풀이
function solution(N, stages) {
  var answer = [];
  let arr = [];
  for (let i = 0; i < N + 2; i++) {
    arr[i] = 0;
  }

  for (let i = 0; i < stages.length; i++) {
    let val = stages[i];
    if (arr[val] == false) {
      arr[val] = 1
    } else {
      arr[val] += 1
    }
  }
  let len = arr.reduce((f, b) => f + b);
  answer[0] = -1
  for (let i = 1; i < arr.length - 1; i++) {
    if (len == 0) {
      answer[i] = 0;
      continue;
    }
    answer[i] = arr[i] / len;
    len -= arr[i]
  }
  let notsortedArr = [...answer].slice(1);
  let sortedArr = answer.sort((a, b) => b - a).slice(0, arr.length - 2);
  let newArr = [];
  for (let i = 0; i < sortedArr.length; i++) {
    for (let j = 0; j < notsortedArr.length; j++) {
      if (sortedArr[i] == notsortedArr[j] && !newArr.includes(j + 1)) {
        newArr[i] = j + 1;
        break;
      }
    }
  }
  return newArr;
}

// 본 받고 싶은 풀이 1
// function solution(N, stages) {
//   let ans = []

//   for (let i = 1; i <= N; ++i) {
//     let usersReachedCurrentStage = stages.reduce((acc, curStage) => acc + ((curStage >= i) ? 1 : 0), 0)
//     let usersStagnatedCurrentStage = stages.reduce((acc, curStage) => acc + ((curStage == i) ? 1 : 0), 0)
//     if (usersReachedCurrentStage === 0) {
//       ans.push({ 'stage': i, 'failRate': 0 })
//       continue
//     }
//     ans.push({ 'stage': i, 'failRate': (usersStagnatedCurrentStage / usersReachedCurrentStage) })
//   }

//   return ans.sort((a, b) => {
//     if (a.failRate > b.failRate) return -1
//     if (a.failRate < b.failRate) return 1
//     return a.stage - b.stage;
//   }).map(entry => entry.stage)
// }

// 패터쓴님 풀이
function solution(N, stages) {
  let records = [];
  let i;
  for (i = 0; i < N + 1; i++) {
    records.push([0, 0, i + 1]); //수, 실패율, 스테이지
  }

  stages.forEach(num => records[num - 1][0]++);

  let ppl = 0;
  for (i = 0; i < N + 1; i++) {
    records[i][1] = records[i][0] / (stages.length - ppl);
    ppl += records[i][0];
  }

  return records.slice(0, N).sort((a, b) => b[1] - a[1]).map(el => el[2]);
}
// 

// function solution(N, stages) {
//   // 1. records 배열 선언
//   let records = [];
//   let i;

//   // 2. 수, 실패율, 스테이지로 초기화
//   for (i = 0; i < N + 1; i++) {
//     records[i] = [0, 0, i + 1];
//   }

//   // 3. 스테이지 돌면서, 몇 번째 인덱스의 몇 번재 값을 증가시킨다.
//   stages.forEach(num => records[num - 1][0]++);

//   // 4. 실패율을 구한다.
//   let ppl = stages.length;
//   for (i = 0; i < records.length; i++) {
//     records[i][1] = records[i][0] / ppl;
//     ppl -= records[i][0]
//   }

//   return records.slice(0, N).sort((a, b) => b[1] - a[1]).map(el => el[2])
// }

// 


console.log(solution(N, stages))