function isPrime(num) {
  if(num === 2) return true;
  if(num < 2 || num % 2 === 0) return false;

  let result = true;

  for(let i = 3; i<=Math.floor(Math.sqrt(num)); i+=2){
    if(num % i === 0){
      result = false;
      break;
    }
  }
  return result;
}

for(let i = -1000 ; i < 30; i++){
  if(isPrime(i)){
    console.log(`${i}: ${isPrime(i)}`);
  }
}