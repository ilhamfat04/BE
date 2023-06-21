let data = {
  name: "Ilham Fathullah",
  image: "./assets/ilham.jpg",
  age: 23,
};

let cardElement = document.getElementById("card-list");

cardElement.innerHTML = "";
for (let i = 0; i < 1; i++) {
  cardElement.innerHTML += `
        <div class="card col-sm-4">
            <div class="card-body">
                <h5 class="card-title">${data.name}</h5>
                <img src="${data.image}" class="card-img">
                <p class="card-text">Age : ${data.age}</p>
                <a href="#" class="btn btn-primary">Like <i class="fa-regular fa-thumbs-up"></i></a>
            </div>
        </div>
        `;
}
