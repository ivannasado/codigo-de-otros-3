// Tenemos un li de productos 
//Se cambiaron los var por let

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

const li = document.querySelector("#lista-de-productos"); //Se agregó selector de id y se cambió por queryselector
const $i = document.querySelector('.input');

for (let i = 0; i < productos.length; i++) {
  let d = document.createElement("div")
  d.classList.add("producto")

  let ti = document.createElement("p")
  ti.classList.add("titulo")
  ti.textContent = productos[i].nombre
  
  let imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti)
  d.appendChild(imagen)

  li.appendChild(d)
}

//displayProductos(productos) se quitó esta funcion que no estba definida
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = $i.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    let d = document.createElement("div")
    d.classList.add("producto")
  
    let ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    let imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d)
  }

  $i.value = ""; //Se agrgó para limpiar la búsqueda y agregar otra búsqueda
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto.toLowerCase()) || item.color.includes(texto.toLowerCase())); //se agregó toLowerCase para filtrar aunque esté escrita con mayúsculas
}  