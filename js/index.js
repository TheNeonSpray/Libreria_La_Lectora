// ARRAY DE LIBROS
const libros = [{
    titulo: "Orgullo y prejuicio",
    autor:"Jane Austen",
    precio:1000,
    url: "https://www.anayainfantilyjuvenil.com/images/libros/grande/9788469833346-orgullo-y-prejuicio-clasicos-a-medida.jpg"
},{
    titulo: "La señora Dalloway",
    autor:"Virginia Woolf",
    precio:800,
    url: "https://kbimages1-a.akamaihd.net/82f546c2-2d64-4f73-a4ed-be9f03c9c137/1200/1200/False/mrs-dalloway-191.jpg"
},{
    titulo: "Tala",
    autor:"Gabriela Mistral",
    precio:600,
    url: "http://www.depoetas.com/libros/portadas/tala-libro-de-poemas-de-gabriela-mistral.jpg"
},
{
    titulo: "La Casa de los Espiritus",
    autor:"Isabel Allende",
    precio:1000,
    url: "https://www.penguinlibros.com/es/38396/la-casa-de-los-espiritus.jpg"
},
{
    titulo: "Poesía Completa",
    autor:"Alejandra Pizarnik",
    precio:400,
    url: "https://images-na.ssl-images-amazon.com/images/I/81ZanErrODL.jpg"
},
{
    titulo: "Asesinato en el Orient Express",
    autor:"Agatha Christie",
    precio:800,
    url: "https://m.media-amazon.com/images/I/51h2jCW8vkL.jpg"
},
{
    titulo: "Orlando",
    autor:"Virginia Woolf",
    precio:400,
    url: "https://www.naoslibros.es/media/img/portadas/_visd_0000JPG021XA.jpg"
}];

//Codigo JS

// La función filtrarAutor, recorre el array libros y retorna la lista filtrada por nombre de autor

function filtrarAutor(arreglo,autor) {
    const librosFiltrados = arreglo.filter((libro) => libro.autor === autor)
    return librosFiltrados;
}

function mostrarFiltrados() {
    // Aquí obtengo los elementos del index.html por medio del metodo getElement
    let inputAutor = document.getElementById("autor");
    let contenedorLibros = document.getElementById("libros");

    // Creo una variable que contiene a la función filtrarAutor la cual contine dos parametros,
    // esta llama al array libros y a la variable inputAutor que a su vez contiene la selección 
    // de autores disponibles en el archivo HTML
    const arrLibros = filtrarAutor(libros,inputAutor.value);

    // En el innerHTML lo igualo a un string vacio para que reinicie cada vez que selecciono un nuevo valor
    contenedorLibros.innerHTML = "";

    // Por medio del método forEach recorro el array que contiene la seleccione de autores y luego con el innerHTML 
    // renderizo la selección del libro.

    arrLibros.forEach((element) => {
        contenedorLibros.innerHTML += `<div class="card border rounded border-3 border-primary" style="width: 18rem;">
        <img src="${element.url}" class="card-img-top image-fluid" alt="...">
        <div class="card-body bg-primary text-light">
          <h5 class="card-title">Titulo: ${element.titulo}</h5>
          <p class="card-text">Autora: ${element.autor}</p>
          <p class="card-text">Precio: ${element.precio}</p>
        </div>
      </div>`
    });
}





