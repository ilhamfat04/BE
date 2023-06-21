let cardElement = document.getElementById("card")

let data = [
    {
        name: "ilham",
        age: 23
    },
    {
        name: "surya",
        age: 20
    }
]


cardElement.innerHTML = ''
for (let i = 0; i < data.length; i++) {
    cardElement.innerHTML += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${data[i].name}</h5>
                <p class="card-text">${data[i].age}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        `
}
