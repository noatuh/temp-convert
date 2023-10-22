function convertTemperature() {
  const temperature = parseFloat(document.getElementById("temperature").value);
  const scale = document.getElementById("scale").value;
  let convertedTemperature;

  if (scale === "celsius") {
      convertedTemperature = (temperature * 9/5) + 32;
      document.getElementById("result").textContent = `${temperature}° Celsius is ${convertedTemperature.toFixed(2)}° Fahrenheit`;
  } else if (scale === "fahrenheit") {
      convertedTemperature = (temperature - 32) * 5/9;
      document.getElementById("result").textContent = `${temperature}° Fahrenheit is ${convertedTemperature.toFixed(2)}° Celsius`;
  } else if (scale === "kelvin") {
      let celsiusEquivalent = temperature - 273.15;
      let fahrenheitEquivalent = temperature * 9/5 - 459.67;
      document.getElementById("result").textContent = `${temperature}° Kelvin is ${celsiusEquivalent.toFixed(2)}° Celsius and ${fahrenheitEquivalent.toFixed(2)}° Fahrenheit`;
  }
}
