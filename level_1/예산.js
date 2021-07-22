function solution(d, budget) {
  if(d.reduce((a, c) => a+c,0) <= budget) return d.length;
  
  d.sort((a, b) => a - b);
  if(d[0] > budget) return 0;
  
  let sumD = [];
  d.forEach((_, i) => {
      let arr = d.slice(0, i+1);
      sumD.push(arr.reduce((a, c) => a+c,0))
  })
  
  for(let i = 0;i < sumD.length; i++) {
      if(sumD[i] === budget) return i+1;
      else if(sumD[i] > budget){
          return i;
      }
  }
}