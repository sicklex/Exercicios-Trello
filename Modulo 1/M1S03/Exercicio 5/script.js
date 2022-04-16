const ligadoEl = document.querySelector(".ligado-img");
const desligadoEl = document.querySelector(".desligado-img");
const body = document.querySelector("body");
const h1 = document.querySelector("h1");

function switchbtn() {
  const switchEl = document.querySelector("#switch");
  {
    if (switchEl.value == "on") {
      ligadoEl.style.display = "none";
      desligadoEl.style.display = "block";
      body.style.backgroundColor = "black";
      h1.style.color = "white";
      switchEl.style.backgroundColor = "black";
      switchEl.style.color = "white";
      switchEl.style.borderColor = "white";
      switchEl.value = "off";
    } else if (switchEl.value == "off") {
      ligadoEl.style.display = "block";
      desligadoEl.style.display = "none";
      body.style.backgroundColor = "#fff";
      h1.style.color = "#000";
      switchEl.value = "on";
      switchEl.style.backgroundColor = "white";
      switchEl.style.color = "black";
      switchEl.style.borderColor = "black";
    }
  }
}
