function solution(s) {
  var answer = '';
  // 문자열을 조회하면서 
  // 해당 인덱스가 숫자인지 문자인주 구분을 한다.
  // 숫자면 그대로 더하고
  // 문자면 문자 배열에서 동일한 문자와 매핑한 숫자를 더하는데,
  
  // 1. 문자인지 숫자인지 구분한다 => ascii코드 값을 이용한다.
  
  // 2. 해당 문자가 어디까지 어떤 문자인지 구분한다. => 최소 3자리니까 해당 것 까지 비교해서 알아낸다.
  // 객체에 key는 문자, value는 숫자를 넣는다.
  // 그래서 해당 key를 찾고, 그 key의 length까지 인덱스를 넘긴다.
  let StringObject = {
      'zero': 0,
      'one' : 1,
      'two' : 2,
      'three' : 3,
      'four' : 4,
      'five' : 5,
      'six' : 6,
      'seven' : 7,
      'eight' : 8,
      'nine' : 9,
  }
  
  for(let i = 0; i < s.length; i++) {
      let ascii = s[i].charCodeAt();
      if (ascii > 47 && ascii < 58) {
          answer += s[i]
      } else {
          let threeS = s[i]+s[i+1]+s[i+2];
          for(let j in StringObject) {
              if(j.includes(threeS)){
                  answer += StringObject[j];
                  i += (j.length -1) 
              }
          }
      }
  }
  return answer*1;
}
let s = "23four5six7";
console.log(solution(s));