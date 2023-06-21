let data = ["Ilham Fathullah", "Cintara Surya Elidanto"];

let cardElement = document.getElementById("card-list");

cardElement.innerHTML = "";
for (let i = 0; i < data.length; i++) {
  cardElement.innerHTML += `
    <div class="card col-sm-4">
        <div class="card-body">
            <h5 class="card-title">${data[i]}</h5>
            <a href="#" class="btn btn-primary">Like <i class="fa-regular fa-thumbs-up"></i></a>
        </div>
    </div>`;
}
