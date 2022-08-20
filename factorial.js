function factorial(n){
    let factorial = 1;
    if (n == 0 || n == 1){
      return factorial;
    }else{
      for(var i = n; i >= 1; i--){
        factorial = factorial * i;
      }
      return factorial;
    }  
  }
  let n = 5;
  let ans = factorial(n)
  console.log("The factorial of " + n + " is " + ans);
