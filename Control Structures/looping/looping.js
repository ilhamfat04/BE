let data = [
  {
    name: "ilham",
    image: "./assets/ilham.jpg",
    age: 23,
  },
  {
    name: "surya",
    image: "./assets/cintara.jpg",
    age: 20,
  },
];

let cardElement = document.getElementById("card-list");
cardElement.innerHTML = "";

// for loop
// for (let i = 0; i < data.length; i++) {
//   cardElement.innerHTML += `
//      <div class="card col-sm-4">
//       <div class="card-body">
//         <h5 class="card-title">${data[i].name}</h5>
//         <img src="${data[i].image}" class="card-img">        
//         <h5 class="card-title">${data[i].age}</h5>
//         <a href="#" class="btn btn-primary">Like <i class="fa-regular fa-thumbs-up"></i></a>
//       </div>
//     </div>
//     `;
// }

// while loop
// let i = 0;
// while (i < data.length) {
//   cardElement.innerHTML += `
//      <div class="card col-sm-4">
//       <div class="card-body">
//         <h5 class="card-title">${data[i].name}</h5>
//         <img src="${data[i].image}" class="card-img">
//         <h5 class="card-title">${data[i].age}</h5>
//         <a href="#" class="btn btn-primary">Like <i class="fa-regular fa-thumbs-up"></i></a>
//       </div>
//     </div>
//     `;
//   i++;
// }

// for in
// for (let i in data) {
//   console.log(i);
//   cardElement.innerHTML += `
//      <div class="card col-sm-4">
//       <div class="card-body">
//         <h5 class="card-title">${data[i].name}</h5>
//         <img src="${data[i].image}" class="card-img">
//         <h5 class="card-title">${data[i].age}</h5>
//         <a href="#" class="btn btn-primary">Like <i class="fa-regular fa-thumbs-up"></i></a>
//       </div>
//     </div>
//         `;
// }

// for of
// for (let i of data) {
//   console.log(i);
//   cardElement.innerHTML += `
//     <div class="card col-sm-4">
//       <div class="card-body">
//         <h5 class="card-title">${i.name}</h5>
//         <img src="${i.image}" class="card-img">
//         <h5 class="card-title">${i.age}</h5>
//         <a href="#" class="btn btn-primary">Like <i class="fa-regular fa-thumbs-up"></i></a>
//       </div>
//     </div>
//     `;
// }

// do while
// let i = 0;
// do {
//   cardElement.innerHTML += `
//     <div class="card col-sm-4">
//       <div class="card-body">
//         <h5 class="card-title">${data[i].name}</h5>
//         <img src="${data[i].image}" class="card-img">
//         <h5 class="card-title">${data[i].age}</h5>
//         <a href="#" class="btn btn-primary">Like <i class="fa-regular fa-thumbs-up"></i></a>
//       </div>
//     </div>
//   `;
//   i++;
// } while (i < data.length);
