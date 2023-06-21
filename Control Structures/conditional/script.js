const theme = "mono"

// if (theme == "dark") {
//     document.getElementById("body").setAttribute("style", "background-color:black;")
// } else {
//     document.getElementById("body").setAttribute("style", "background-color:white;")
// }


// if (theme == "dark") {
//     document.getElementById("body").setAttribute("style", "background-color:black;")
// } else if (theme == "mono") {
//     document.getElementById("body").setAttribute("style", "background-color:gray;")
// } else {
//     document.getElementById("body").setAttribute("style", "background-color:white;")
// }

switch (theme) {
    case "dark":
        document.getElementById("body").setAttribute("style", "background-color:black;")
        break
    case "mono":
        document.getElementById("body").setAttribute("style", "background-color:gray;")
        break
    default:
        document.getElementById("body").setAttribute("style", "background-color:white;")
        break
}