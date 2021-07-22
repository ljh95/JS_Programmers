function solution(left, right) {
  var answer = 0;
  for(let v = left; v<= right; v++) {
      let k = Math.floor(Math.sqrt(v));
      if(k*k === v) answer -= v;
      else answer += v;
  }
  return answer;
}
