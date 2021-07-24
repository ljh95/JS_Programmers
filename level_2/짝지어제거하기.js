function solution(s){
  let answer = 1;
  // 뭔가 이게 괄호 닫기 같은 문제같은디..
  // 문자열 s를 배열 s로 만들고.
  // 한개씩 새로운 배열에 넣으면서
  // 위에것이 같으면 pop하는 식으로 구현
  // 최종적으로 배열의 길이가 0이면 1을 아니면 0을 리턴
  s = s.split('')
  console.log('split s', s);
  let stack = []
  let start = 0;
  for(let i = 0; i< s.length;i++) {
      if(start === 0) {
          stack[start] = s[i];
          start++;
          continue;
      };

      if(stack[start-1] === s[i]){
          stack.pop();
          start--;
      } else{
          stack.push(s[i])
          start++;
      }

  }
  return (stack.length === 0) ? 1 : 0;

  return answer;
}