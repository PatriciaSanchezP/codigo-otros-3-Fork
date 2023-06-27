// Tenemos un li de productos

// En la constante productos se creó un array de objetos con todos los productos existentes
const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }
]

//Se cambia el getElementByName por getElementsByClassName para que traiga a toda la clase creada en el html
const li = document.getElementsByClassName("lista-de-productos")[0];
const $i = document.getElementsByClassName('input')[0];
//Se cambió el querySelector por get elements by class name.
//Tanto en la constante li como en la $i  se agregan índices 0 para empezar en ese.

//Se crea la función displayProductos porque más abajo se manda llamar y no existe, esta función toma como parámetro el arreglo de productos para usarlos dentro.

function displayProductos(productos) {

  //Este ciclo for va desde el índice 0 hasta el último elemento del arreglo de productos
  for (let i = 0; i < productos.length; i++) {

    //Aquí se crea un elemento div en el html con la variable d y se le agrega la clase "producto"
    var d = document.createElement("div");
    d.classList.add("producto");

    //Después se crea un párrafo y se le asigna a la variable ti a la cuál se le agrega la clase "titulo"
    var ti = document.createElement("p");
    ti.classList.add("titulo");

    //En la variable creada "ti" se le agrega un texto equivalente al nombre de cada objeto del arreglo, gracias al ciclo for.
    ti.textContent = productos[i].nombre;


    //A continuación se crea un elemento "img" y se asigna a la variable imagen
    var imagen = document.createElement("img");

    //El método setAttribute establece el atributo src de la imagen con la ruta correspondiente al producto actual del arreglo 
    imagen.setAttribute('src', productos[i].img);

    //Se agregan el párrafo ti y la imagen como hijos del div "d"
    d.appendChild(ti);
    d.appendChild(imagen);

    //Se agrega el div d como hijo de un elemento lista en el html
    li.appendChild(d);
  }
}


//Se llama a la función displayProductos
displayProductos(productos);

//Se llama al botón desde el html, como en el html no tiene clase ni id se opta por llamarlo desde el TagName
const botonDeFiltro = document.getElementsByTagName("button")[0]; //También se inicializa en 0

//Este evento se activa al darle click al botón y activa la función consecuente
botonDeFiltro.onclick = function () {
  while (li.firstChild) {
    li.removeChild(li.firstChild); //Primero, se eliminan todos los elementos hijos del elemento "li".
  }

  //Se obtiene el valor de $i y se almacena en la variable "texto"
  const texto = $i.value;

  //Se muestra en la consola el valor de "texto"
  console.log(texto);

  //Se llama a la función "filtrado" con parámetros de productos y texto y  se almacena el resultado en la variable "produuctosFiltrados"
  const productosFiltrados = filtrado(productos, texto);

//Se itera sobre "productosFiltrados"
  for (let i = 0; i < productosFiltrados.length; i++) {

    //Se crean elementos en html para cada producto 
    var d = document.createElement("div")
    d.classList.add("producto")

    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre

    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);

    //Se agregan ti e imagen como hijos del div d 
    d.appendChild(ti)
    d.appendChild(imagen)


    //Se agrega d como hijo de li
    li.appendChild(d)
  }
}

//Esta es la función "filtrado" que se usó anteriormente, está recibe como parámetros un arreglo vacío de productos y la variable texto
const filtrado = (productos = [], texto) => {

  //Se utiliza el método filter para crear un nuevo arreglo con los elementos que cumplen una condición, la cual se define con la función flecha, la cual recibe un parámetro  "item" que represenata cada objeto de productos, después evalúa si el valor de item.tipo incluye el valor de texto o si el atributo color del item incluye el valor de "texto". Si alguno de las dos condiciones resulta verdadera, significa que item cumple el criterio de filtrado y se incluye en el nuevo arreglo y lo devuelve la función.
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  