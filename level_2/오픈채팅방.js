// function solution(record) {
//   let answer = [];
//   let changeArr = record.filter(r => {
//     if(r[0] === 'E' || r[0] === 'C'){
//       return true;
//     }
//   })
//   let changeObj = {}
//   changeArr.forEach((v, i) => {
//     v = v.split(' ');
//     changeObj[v[1]] = v[2]
//   })

//   let resultArr = record.filter(r => {
//     if(r[0] === 'E' || r[0] === 'L'){ 
//       return true;
//     }
//   })
//   resultArr.forEach(v => {
//     v = v.split(' ');
//     if(v[0][0] === 'L') {
//       answer.push(`${changeObj[v[1]]}님이 나갔습니다.`)
//     }
//     else {
//       answer.push(`${changeObj[v[1]]}님이 들어왔습니다.`)
//     }
//   })
//   return answer
// }
// let r = ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"];
// console.log(solution(r))


// 다른 풀이
function solution(record) {
  const userInfo = {};
  const action = [];
  const stateMapping = {
      'Enter': '님이 들어왔습니다.',
      'Leave': '님이 나갔습니다.'
  }

  record.forEach((v) => {
      const [state, id, nick] = v.split(' ');

      if(state !== "Change") {
          action.push([state, id]);
      }

      if(nick) {
          userInfo[id] = nick;
      }
  })

  return action.map(([state, uid]) => {
      return `${userInfo[uid]}${stateMapping[state]}`;    
  })
}
let r = ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"];
console.log(solution(r))