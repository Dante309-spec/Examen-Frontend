/*
==================================
MiniBlog
==================================
*/

console.log("Hola mundo");

/*
==================================
Publicaciones
==================================
*/

const publicaciones = [

    {
        titulo: "¿Qué es HTML?",
        contenido:
            "HTML es el lenguaje utilizado para crear la estructura de las páginas web."
    },

    {
        titulo: "¿Qué es CSS?",
        contenido:
            "CSS permite diseñar y dar estilos visuales a una página web."
    },

    {
        titulo: "¿Qué es JavaScript?",
        contenido:
            "JavaScript agrega interactividad y dinamismo a los sitios web."
    },

    {
        titulo: "¿Qué es Bootstrap?",
        contenido:
            "Bootstrap es un framework CSS que facilita el diseño responsive."
    }

];

/*
==================================
Mostrar publicaciones
==================================
*/

const contenedor =
    document.getElementById("contenedor-posts");

publicaciones.forEach(publicacion => {

    contenedor.innerHTML += `

        <div class="col-md-6 col-lg-3 mb-4">

            <div class="card h-100 shadow">

                <div class="card-body">

                    <h5 class="card-title">
                        ${publicacion.titulo}
                    </h5>

                    <p class="card-text">
                        ${publicacion.contenido}
                    </p>

                </div>

            </div>

        </div>

    `;

});