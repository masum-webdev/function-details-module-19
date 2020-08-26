function addNumber(numbers){
  let sum=0;
  console.log(arguments);
  
  for (let i = 0; i < arguments.length; i++) {
    const element = arguments[i];
    sum=sum+element;

  }
  return sum;
}

console.log(addNumber(4,5,10));