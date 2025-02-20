document.getElementById("celsius").addEventListener("input", function () {
  let celsius = parseFloat(this.value);
  if (!isNaN(celsius)) {
    document.getElementById("fahrenheit").value = (
      (celsius * 9) / 5 +
      32
    ).toFixed(2);
  } else {
    document.getElementById("fahrenheit").value = "";
  }
});

document.getElementById("fahrenheit").addEventListener("input", function () {
  let fahrenheit = parseFloat(this.value);
  if (!isNaN(fahrenheit)) {
    document.getElementById("celsius").value = (
      ((fahrenheit - 32) * 5) /
      9
    ).toFixed(2);
  } else {
    document.getElementById("celsius").value = "";
  }
});

function clearFields() {
  document.getElementById("celsius").value = "";
  document.getElementById("fahrenheit").value = "";
}












