function solution(places) {
  var answer = [];
  let isDone = false; // 반복을 덜 하기 위한 flag 변수
  
  // 거리두기가 위반될 경우의 좌표 종류
  let directArr = [[0, 2], [1, 1], [2, 0], [1, -1], [0, -2], [-1, -1], [-2, 0], [-1, 1], [1, 0], [0, 1], [-1, 0], [0, -1]];

  places.forEach(place => {
    place = place.map(v => v.split(''));
    
    for(let i = 0; i < 5; i++ ){
      for(let j = 0; j < 5; j++) {
        if(place[i][j] === 'P') {
          // 거리부터 확인
          let i2, j2;
          for(let k = 0; k < directArr.length; k++) {
            i2 = directArr[k][0] + i;
            j2 = directArr[k][1] + j;

            if(i2 < 0 || i2 > 4 || j2 < 0 || j2 > 4){
              continue;
            }
  
            if(place[i2][j2] === 'P') {
              let dx = i > i2 ? i - i2 : i2 - i
              let dy = j > j2 ? j - j2 : j2 - j
              let d = dx + dy;
  
              if(d === 1) { // 1. 바로 인접한 경우
                isDone = true; 
                break;
              } else if(dx === 2 || dy === 2) { // 2. 직선으로 위반한 경우
                if((dx === 2 && place[Math.min(i, i2) + 1][j] !== 'X') || (dy === 2 && place[i][Math.min(j, j2) + 1] !== 'X')) {
                  isDone = true;
                  break;
                } 
              } else { // 3. 대각으로 위반한 경우
                if(!((place[i][j2] === 'X') && (place[i2][j] === 'X'))){
                  isDone = true;
                  break;
                }
              }
            }
          }
          if(isDone) break;
        }
      }
      if(isDone) break;
    }

    if(isDone) answer.push(0)
    else answer.push(1);

    isDone = false;
  })
  return answer;
}


let places = [
  ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], 
  ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], 
  ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], 
  ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], 
  ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]
];
let result = [1, 0, 1, 1, 1];
console.log('my Answer: ',solution(places));
console.log('Real Answer: ', result);