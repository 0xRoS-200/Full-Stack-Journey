function invertedMountain(n) {
    for (let i = n; i >= 1; i--) { 
      let pattern = "";
  
      // Add i stars to the pattern
      for (let j = 0; j < i; j++) {
        pattern += "*";
      }
  
      console.log(pattern); // Print each row
    }
  }
  
invertedMountain(10)