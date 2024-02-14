function Mapping(arra, callbackFunction ) {
    let res = [];
    let multiplication = 1;
  
    for (let i = 0; i < arra.length; i++) {
      multiplication=multiplication * arra[i];
      callbackFunction(multiplication);
    }
  
    
  }
  
  function callbackFunction(res) {
    console.log(res);
  }
  
  
  const arra = [10, 20, 30, 40, 50];
  const res = Mapping(arra, callbackFunction);
  console.log(res);
  