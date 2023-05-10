function calculate(operation) {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result;
  
    switch (operation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        result = "خطأ";
    }
  
    document.getElementById("result").value = result;
  }
  
  // حاسبة أسعار الذهب
  function calculatePrice() {
    const weight = parseFloat(document.getElementById("weight").value);
    const carat = parseFloat(document.getElementById("carat").value);
    const price = parseFloat(document.getElementById("price").value);
    const result = weight * (carat / 24) * price;
    document.getElementById("priceResult").value = result;
  }
  