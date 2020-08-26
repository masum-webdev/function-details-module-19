function explain_callback(name,age,task){
  console.log("My name is ",name);
  console.log("Age: ",age);
  task();
  console.log(arguments);
    
}

 function washHand(){
  console.log("Wash Hand");
}

 function takeShower(){
  console.log("Take shower");
}

explain_callback("Masum","28",takeShower);
explain_callback("Tafrin","22",washHand);