/* function solution(numbers, target) {
  let sum = numbers.reduce((a, c) => a +c, 0);
  let na = (sum - target)/2;
  if(na !== Math.floor(na)) return 0;
  
  let count = 0;
  let nums = numbers.filter(a => {
      if(a === na) count++;
      if(a < na) return true;
  })
  
  
  for(let i = 2 ; i <= nums.length;i++) {
      let combi = getCombi(nums, i);
      combi.forEach(c => {
          let s = c.reduce((a, c) => a+c,0);
          if(s === na) {
              count++
          };
      })
  }
  
  return count;
}

function getCombi(nums, selectNum) {
  const results = []
  if(selectNum === 1) return nums.map(v => [v]);
  
  nums.forEach((f, i) => {
      const rest = nums.slice(i+1);
      const combinations = getCombi(rest, selectNum - 1);
      const attached = combinations.map(c => [f, ...c]);
      results.push(...attached)
  })
  return results;
} */

// function solution(numbers, target) {
//   let answer = 0;
//   getAnswer(0,0);
//   function getAnswer(x, value) {
//     if(x < numbers.length) {
//       getAnswer(x+1, value + numbers[x])
//       getAnswer(x+1, value - numbers[x]);
//     } else {
//       if(value === target) {
//         answer++;
//       }
//     }
//   }
//   return answer
// }

function solution(nums, target) {
  let answer = 0;
  let length = nums.length;
  getAnswer(0, 0);
  function getAnswer(idx, value) {
    if(idx < length) {
      getAnswer(idx + 1, value + nums[idx]);
      getAnswer(idx + 1, value - nums[idx]);
    } else {
      if(value === target) {
        answer++;
      }
    }
  }
  return answer
}

console.log(solution([1, 2, 3, 4, 5], 7));