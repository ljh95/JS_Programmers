function solution(n) {
  // 1부터 n까지의 소수의 개수를 리턴
  // 에라토노스체를 이용
  // 에라토노스체는 해당 값의 배수를 삭제해 나가는 방식
  // 우선 모두 true == 소수 로 채우고
  // 2부터 차례로 에라토노스체 적용
  // 1은 false로 바꿈
  // 해당 수가 true이면 해당 수를 제곱한 것부터, n전까지 반복해서 해당 수를 false로 바꿈
  let arr = [];
  for(let i=0;i <= n;i++) {
    arr.push(true)
  }

  arr[0] = false; // 0
  arr[1] = false; // 1
  for(let i = 2 ; i <= n;i++) { 
    if(arr[i]) {
      for(let j = i*i; j <= n; j+=i) {
        arr[j] = false;
      }
    }
  }
  return arr.filter(v => v).length
}
console.log(solution(100));