function reverseString(s) {
  
  // let seperate = s.split("");
  // let reverse = seperate.reverse();
  //  let str = reverse.join("")

  try {
      let seperate = s.split("");
  let reverse = seperate.reverse();
    str = reverse.join("")
  }

  catch (e) {
    console.log(e.message);
  }

    
  return str
}




console.log(reverseString (1234));
