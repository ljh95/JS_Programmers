function solution(n, arr1, arr2) {
  var answer = [];

  let b_arr1 = toBinary(arr1, n);
  let b_arr2 = toBinary(arr2, n);

  // console.log(b_arr1)
  // console.log(b_arr2)

  for (let i = 0; i < n; i++) {
    let line = ""
    for (let j = 0; j < n; j++) {
      // console.log(`b_arr1[i][j]: ${b_arr1[i][j]}, b_arr2[i][j]: ${b_arr2[i][j]}`)
      // console.log(``)
      if (b_arr1[i][j] === '0' && b_arr2[i][j] === '0') {
        line += " "
      } else {
        line += "#"
      }
    }
    answer.push(line)
  }

  return answer;
}

// let n = 5;
// let arr1 = [9, 20, 28, 18, 11];
// let arr2 = [30, 1, 21, 17, 28]
// let expected = ["#####", "# # #", "### #", "# ##", "#####"]

let n = 6;
let arr1 = [46, 33, 33, 22, 31, 50];
let arr2 = [27, 56, 19, 14, 14, 10]
let expected = ["######", "### #", "## ##", " #### ", " #####", "### # "]

console.log(expected)
console.log(solution(n, arr1, arr2))
// solution(n, arr1, arr2)
// let a = 10
// console.log(a.toString(2))

toBinary(arr1, 5)
function toBinary(arr, n) {
  let b_arr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toString(2).length < n) {
      let plus_z = n - arr[i].toString(2).length;
      let p_z = ""
      for (let j = 0; j < plus_z; j++) {
        p_z += "0"
      }
      b_arr[i] = p_z + arr[i].toString(2);
    } else {
      b_arr[i] = arr[i].toString(2)
    }
  }
  return b_arr;
}

// 일단 성공
