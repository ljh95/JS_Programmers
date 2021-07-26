function solution(r, c, queries) {
  var answer = [];
  let min = r*c + 1;

  let arr = [];
  let newArr = [];
  for (let i = 0; i < r; i++) {
    arr[i] = [];
    newArr[i] = [];
    for (let j = 0; j < c; j++) {
      arr[i][j] = i*c + j + 1;
      newArr[i][j] = i*c + j + 1;
    }
  }
  
  
  queries.forEach(query => {
    let [x1, y1, x2, y2] = query;
    x1--; y1--;x2--;y2--;
    for (let i = 0; i < r; i++) {
      for (let j = 0; j < c; j++) {
        // 좌 -> 우
        if(i === x1 && j >= y1 && j < y2) {
          newArr[i][j+1] = arr[i][j]
          if(arr[i][j] < min) min = arr[i][j];
        // 상 -> 하
        } else if(j === y2 && i >= x1 && i < x2){
          newArr[i+1][j] = arr[i][j];
          if(arr[i][j] < min) min = arr[i][j];
        // 우 -> 좌
        } else if(i === x2 && j >= y1+1 && j <= y2){
          newArr[i][j-1] = arr[i][j];
          if(arr[i][j] < min) min = arr[i][j];
        // 하 -> 상
        } else if(j === y1 && i >= x1+1 && i <= x2) {
          newArr[i-1][j] = arr[i][j]
          if(arr[i][j] < min) min = arr[i][j];
        // 그 외
        } else {
          newArr[i][j] = arr[i][j];
        }
      }
    }
    newArr.forEach((v, i) => {
      v.forEach((k, j) => {
        arr[i][j] = k
      })
    })

    answer.push(min);
    min = r*c + 1;
  })

  return answer;
}

let queries = [[2,2,5,4],[3,3,5,5],[5,1,5,3]];
let r = 6;
let c = 6;

console.log(solution(r, c, queries));
console.log([8, 10, 25]);