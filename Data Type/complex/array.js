let data = ["ilham", "surya"
]

let cardElement = document.getElementById("card")

cardElement.innerHTML = ''
for (let i = 0; i < data.length; i++) {
    cardElement.innerHTML += `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${data[i]}</h5>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            `
}
