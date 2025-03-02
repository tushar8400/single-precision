document.getElementById('convertBtn').addEventListener('click', function() {
    var input = document.getElementById('inputNumber').value;
    var num = parseFloat(input);
    
    if (isNaN(num)) {
      document.getElementById('result').innerHTML = "Please enter a valid number.";
      return;
    }
    
    // Create a Float32Array and use a Uint32Array to access the binary representation
    var floatArray = new Float32Array(1);
    floatArray[0] = num;
    var uintArray = new Uint32Array(floatArray.buffer);
    var bits = uintArray[0];
    
    // Convert the bits to a 32-bit binary string
    var binaryString = bits.toString(2).padStart(32, '0');
    
    // Extract sign (1 bit), exponent (8 bits), and fraction (23 bits)
    var sign = binaryString[0];
    var exponent = binaryString.substr(1, 8);
    var fraction = binaryString.substr(9, 23);
    
    // Display the results
    var resultHtml = "<p><strong>IEEE 754 Binary Representation:</strong><br>" + binaryString + "</p>";
    resultHtml += "<p><strong>Sign Bit:</strong> " + sign + "</p>";
    resultHtml += "<p><strong>Exponent Bits:</strong> " + exponent + " (Decimal: " + parseInt(exponent, 2) + ")</p>";
    resultHtml += "<p><strong>Fraction Bits:</strong> " + fraction + "</p>";
    
    document.getElementById('result').innerHTML = resultHtml;
  });
  