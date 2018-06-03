window.onload = function(){
var bulb = document.querySelector("#bulb");
var sukhum = document.querySelector("#sukhum");
sukhum.onclick = function(){
  bulb.style.backgroundImage = "url('images/light-bulb-bg.png')";
  this.style.background = "#7f0000";
};
}
