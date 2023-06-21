let data = {
    name: "ilham",
    age: 23
}

let cardElement = document.getElementById("card")


cardElement.innerHTML = ''
for (let i in data) {
    cardElement.innerHTML += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${data[i]}</h5>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        `
}
