const elements = document.querySelectorAll(".img-container");

console.log("elements", elements)

// elements.map( (nodo) => {
//  console.log("nodo", nodo)
// })

// const nuevoArreglo = Array.of(elements);

// console.log("nuevoArreglo", nuevoArreglo)

// nuevoArreglo.map( (nodo) => {
//   console.log("nodo", nodo)
//  })


const button = document.querySelector("button");

function aleatorio() {
  return Math.random() * (9 - 1) + 1;
}


button.addEventListener("click", function() {
  elements[aleatorio()].style.gridArea = `elem${aleatorio()}`
})

