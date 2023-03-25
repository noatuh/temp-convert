function convertTemperature() {
    const temperature = document.getElementById("temperature").value;
    const scale = document.getElementById("scale").value;
  
    if (scale === "celsius") {
      const convertedTemperature = (temperature * 9/5) + 32;
      document.getElementById("result").textContent = `${temperature} Celsius is ${convertedTemperature} Fahrenheit`;
    } else {
      const convertedTemperature = (temperature - 32) * 5/9;
      document.getElementById("result").textContent = `${temperature} Fahrenheit is ${convertedTemperature} Celsius`;
    }
  }
  