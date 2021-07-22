function solution(dartResult) {
  var answer = 0;
  let s = dartResult;
  let i;
  let start = 0;
  let arr = []
  if (s.length == 0) {
    return 0;
  }
  for (i = 2; i < s.length; i++) {
    if (/\d/.test(s[i])) {
      arr.push(s.slice(start, i))
      start = i
      i += 1
    }
  }
  arr.push(s.slice(start, i))
  let newArr = []

  arr.forEach((el, i) => {
    let line = [];
    line.push(el.match(/10|\d/)[0])
    line.push(el.match(/[SDT]/)[0])
    if (/[*#]/.test(el)) {
      line.push(el.match(/[*#]/)[0])
    }
    newArr.push(line)
  })
  newArr.forEach((el, i) => {
    if (el[1] === 'D') {
      el[0] **= 2
    } else if (el[1] === 'T') {
      el[0] **= 3
    }
    el[0] *= 1

    if (el[2] === '*') {
      if (i === 0) {
        el[0] *= 2
      }
      else {
        el[0] *= 2
        newArr[i - 1][0] *= 2
      }
    } else if (el[2] === '#') {
      el[0] *= -1
    }
  })
  newArr.forEach(e => {
    answer += e[0]
  })

  return answer;
}

console.log(solution('1S2D*3T'))
console.log(37)

console.log(solution('1D2S#10S'))
console.log(9)

console.log(solution('1D2S0T'))
console.log(3)

console.log(solution('1S*2T*3S'))
console.log(23)

console.log(solution('1D2S3T*'))
console.log(59)
