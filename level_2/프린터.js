function solution(priorities, location) {
  var answer = 0;

  let max = Math.max(...priorities);
  let length = priorities.length;
  let i = 0;
  while(true) {
    if(priorities[i] === max && i === location) {
      answer++;
      break;
    } else if(priorities[i] === max) {
      priorities[i] = -1;
      answer++;
      i = (i+1) % length;
      max = Math.max(...priorities);
    } else {
      i = (i+1) % length;
    }
  }
  
  return answer;
}

let priorities = [1, 1, 9, 1, 1, 1]
let location = 0;
// let priorities = [2, 1, 3, 2]
// let location = 2;
console.log(solution(priorities, location));


/**
 * 1. 시간이 너무 오래 걸렸다.
 * 
 * 2. 문제를 제대로 파악하지 못했다.
 * 
 * 3. 분기 조건에 대해 잘 정리가 되지 않았다.
 * 
 * 4. 아이디어 구현 자체는 쉬웠다.
 * 
 * 5. 실제로 값을 넣거나 빼지 않고 -1로 바꾸는 방법은 좋은 방법이었다.
 * 
 * 
 */


/**
 * function solution(priorities, location) {
  var answer = 0;

  let max = Math.max(...priorities);
  let length = priorities.length;
  let i = 0;
  while(true) {
    if(priorities[i] === max && i === location) {
      answer++;
      break;
    } else if(priorities[i] === max) {
      priorities[i] = -1;
      answer++;
      i = (i+1) % length;
      max = Math.max(...priorities);
    } else {
      i = (i+1) % length;
    }
  }
  
  return answer;
}
}
 */