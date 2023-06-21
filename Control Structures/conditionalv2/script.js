let theme = "mono";

switch (theme) {
  case "dark":
    document
      .getElementById("body")
      .setAttribute("style", "background-color:black;");
    document.getElementById("theme").innerText = "dark";
    document.getElementById("theme").style.color = "white";
    break;
  case "mono":
    document
      .getElementById("body")
      .setAttribute("style", "background-color:gray;");
    document.getElementById("theme").innerHTML = "mono";
    document.getElementById("theme").style.color = "white";
    break;
  default:
    document
      .getElementById("body")
      .setAttribute("style", "background-color:white;");
    document.getElementById("theme").innerText = "default";
    document.getElementById("theme").style.color = "black";
    break;
}
