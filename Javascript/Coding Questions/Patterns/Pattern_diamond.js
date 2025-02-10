function shinyDiamondRug(n) {
    for (let i = 1; i <= (2 * n - 1); i++) {
      let starCount;
      
      // Determine the number of stars for the current row
      if (i <= n) {
        starCount = 2 * i - 1; // Upper half including middle row
      } else {
        starCount = 2 * (2 * n - i) - 1; // Lower half
      }
  
      let spaceCount = (2 * n - 1 - starCount) / 2; // Spaces for centering
      let row = "";
  
      // Add spaces
      for (let j = 0; j < spaceCount; j++) {
        row += " ";
      }
  
      // Add stars
      for (let k = 0; k < starCount; k++) {
        row += "*";
      }
  
      // Print the row without an extra newline at the end
      console.log(row);
    }
  }

shinyDiamondRug(4)