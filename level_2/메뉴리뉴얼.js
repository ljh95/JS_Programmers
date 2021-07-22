function solution(orders, course) {
  const orderedCountMap = new Map();
  const maxCountMap = new Map();
  const courseSet = new Set(course);
  console.log(orderedCountMap)
  console.log(maxCountMap)


  function combination(result, index, str) {
    if (courseSet.has(result.length)) {
      let count = orderedCountMap.get(result) || 0;
      orderedCountMap.set(result, ++count);

      const max = maxCountMap.get(result.length) || 0;
      if (max < count) {
        maxCountMap.set(result.length, count);
      }
    }

    for (let i = index; i < str.length; i++) {
      combination(result + str[i], i + 1, str);
    }
  }

  orders.map(order => order.split("").sort().join(""))
    .forEach(e => combination("", 0, e));
  console.log(orderedCountMap)

  console.log(maxCountMap)
  // return course
  //   .map(length => {
  //     const max = maxCountMap.get(length);
  //     return Array.from(orderedCountMap)
  //       .filter(e =>
  //         e[0].length === length && e[1] >= 2 && e[1] === max
  //       )
  //       .map(e => e[0]);
  //   })
  //   .flatMap(e => e)
  //   .sort();
}

console.log(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4]));
// console.log(`result: ${["AC", "ACDE", "BCFG", "CDE"]}`)

// console.log(solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5]));
// console.log(`result: ${["ACD", "AD", "ADE", "CD", "XYZ"]}`)

// console.log(solution(["XYZ", "XWY", "WXA"], [2, 3, 4]))
// console.log(`result: ${["WX", "XY"]}`)