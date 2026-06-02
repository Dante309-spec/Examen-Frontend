/*
====================================
MiniBlog
====================================
*/

console.log("Hola mundo");

/*
====================================
Publicaciones
====================================
*/

const publicaciones = [

    {
        titulo: "¿Qué es HTML?",
        contenido:
            "HTML es el lenguaje que estructura el contenido de una página web."
    },

    {
        titulo: "¿Qué es CSS?",
        contenido:
            "CSS permite personalizar la apariencia visual de una página."
    },

    {
        titulo: "¿Qué es JavaScript?",
        contenido:
            "JavaScript agrega interactividad y dinamismo a los sitios web."
    },

    {
        titulo: "¿Qué es Bootstrap?",
        contenido:
            "Bootstrap facilita el desarrollo de sitios web responsive."
    }

];

/*
====================================
Mostrar publicaciones
====================================
*/

const contenedor =
    document.getElementById("contenedor-posts");

publicaciones.forEach(publicacion => {

    contenedor.innerHTML += `

        <div class="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">

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