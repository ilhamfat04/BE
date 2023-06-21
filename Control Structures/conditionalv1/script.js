let theme = "dark";

function toggleTheme(color) {
  theme = color;
  changeTheme();
}

function changeTheme() {
  switch (theme) {
    case "dark":
      document
        .getElementById("body")
        .setAttribute("style", "background-color:black;");
      break;
    case "mono":
      document
        .getElementById("body")
        .setAttribute("style", "background-color:gray;");
      break;
    default:
      document
        .getElementById("body")
        .setAttribute("style", "background-color:white;");
      break;
  }
}
