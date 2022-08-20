function convertToF(celsius) {
    let fahrenheit = celsius * 9/5 + 32;
    return fahrenheit;


  }

  function convertToC(fahrenheit) {
    let cel =( ( fahrenheit - 32) * 5 )/ 9;
    return cel;


  }

  
  
  let celsius  = 60;
  let fah = convertToF(celsius); 
  console.log(`${celsius} celsius is ${fah} fahrenheit`);


  let fahrenheit = 45;
  let cel = convertToC(fahrenheit);
  console.log(`${fahrenheit} fahrenheit is ${cel} celsius `);