const getCombinations = function(arr, selectNum) {
  const results = [];
  if(selectNum === 1) return arr.map(v => [v]);

  arr.forEach((fixed, i) => {
    // const rest = arr.slice(i + 1);
    const rest = arr.filter((_, j) => i !== j);
    // const rest = arr;
    const combinations = getCombinations(rest, selectNum - 1);
    const attached = combinations.map(c => [fixed, ...c]);
    results.push(...attached);
  })
  return results;
}

const example = [1, 2, 3, 4];
const result = getCombinations(example, 4);
console.log(result);