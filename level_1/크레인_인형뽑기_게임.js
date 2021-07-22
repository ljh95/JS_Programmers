function solution(board, moves) {
  let answer = 0;
  let arr = [];

  for (let i = 0; i < moves.length; i++) {
    let move = moves[i] - 1;
    let findVal = 0;
    for (let j = 0; j < board.length; j++) {
      if (board[j][move] !== 0) {
        if (arr[arr.length - 1] === board[j][move]) {
          arr.pop();
          answer += 2;
        } else {
          arr.push(board[j][move]);
        }
        board[j][move] = 0;
        break;
      }
    }
  }
  return answer;
}