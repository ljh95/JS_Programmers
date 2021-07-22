function solution(new_id) {
  var answer = '';
  
  answer = new_id.toLowerCase();
  
  let regex = /[^(\d|\w|\.|\-|\_|\(|\))]/g;
  answer = answer.replace(regex, '');
  
  regex = /\.{2,}/g;
  answer = answer.replace(regex, '.');
  
  if(answer[0] == '.'){
      answer = answer.slice(1);
  }
  if(answer[answer.length-1] == '.'){
      answer = answer.slice(0, answer.length-1);
  }
  if(answer.length === 0){
    return 'aaa';
  }
  if(answer.length > 15){
    answer = answer.slice(0, 15);
    if(answer[answer.length-1] == '.'){
      answer = answer.slice(0, answer.length-1);
    }
  }
  while(answer.length < 3){
    answer = answer + answer[answer.length-1];
  }
  
  return answer;
}
// 첫 번째 풀이
// 코드가 많이 더럽고 좀 그렇다.
// replace가 상위 브라우저에서만 동작하는지 처음 알았다.

// "...!@BaT#*..y.abcdefghijklm" => "bat.y.abcdefghi"
console.log(solution("...!@BaT#*..y.abcdefghijklm"))
// expected: "bat.y.abcdefghi"
