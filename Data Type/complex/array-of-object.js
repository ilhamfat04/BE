let cardElement = document.getElementById("card-list");

let data = [
  {
    name: "Ilham Fathullah",
    image: "./assets/ilham.jpg",
    age: 23,
  },
  {
    name: "Cintara Surya Elidanto",
    image: "./assets/cintara.jpg",
    age: 20,
  },
];

cardElement.innerHTML = "";
for (let i = 0; i < data.length; i++) {
  cardElement.innerHTML += `
        <div class="card col-sm-4">
            <div class="card-body">
                <h5 class="card-title">${data[i].name}</h5>
                <img src="${data[i].image}" class="card-img">
                <p class="card-text">Age : ${data[i].age}</p>
                <a href="#" class="btn btn-primary">Like <i class="fa-regular fa-thumbs-up"></i></a>
            </div>
        </div>`;
}
