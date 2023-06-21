let data = document.getElementById("name");
let dataType = document.getElementById("type-name");

// complete this code
let yourData = "Cintara SUrya Elidanto";

data.textContent = `Halo nama saya ${yourData}`;
dataType.innerHTML = `<p>tipe data nama kamu itu <mark>${typeof yourData}</mark></p>`;
