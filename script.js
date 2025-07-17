function changeColor() {
    // Generate random RGB values (0–255)
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
  
    var color = "rgb(" + r + "," + g + "," + b + ")";
  
    // Change the background color
    document.body.style.backgroundColor = color;
  }
  