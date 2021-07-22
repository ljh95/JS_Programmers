function solution(participant, completion) {
  for (let p of participant) {
    if (completion.includes(p) == false) {
      return p
    }
    completion.splice(completion.indexOf(p), 1)
  }
}
// 첫 풀이
// 전부 시간초과가 났다.
// js 문법에서 어떤 문장들이 큰 시간초과를 초래하는 지 알아야 겠다.
var solution = (participant, completion) => {
  completion.map(name =>
    completion[name] = (completion[name] | 0) + 1
  );
  return participant.find((name) => !completion[name]--);
};

let answer = participant.find((el, index) => el !== completion[index]);

///
var solution = (_, $) => _.find(_ => !$[_]--, $.map(_ => $[_] = ($[_] | 0) + 1))