var random = new Array();

random[0] = "mailto:contact@hamzat.xyz";
random[1] = "mailto:chief@hamzat.xyz";
random[2] = "mailto:him@hamzat.xyz";
random[3] = "mailto:him@hamzat.xyz";

function randomlink() {
  window.location = random[Math.floor(Math.random()*random.length)];
  }
