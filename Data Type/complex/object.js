let data = {
    name: "ilham",
    age: 23
}

let cardElement = document.getElementById("card")


cardElement.innerHTML = ''
for (let i = 0; i < 1; i++) {
    cardElement.innerHTML += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${data.name}</h5>
                <p class="card-text">${data.age}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        `
}
