let searcah = document.location.search.slice(3);

let max = 0;
let res = 0;

searcah = searcah.replace(/%20/g, " ");
searcah = searcah.replace(/%C3%B1/g, "ñ")

document.title = "Search - " + searcah;
document.getElementById("search").value = searcah;

let searchs = [
    {
        "Title":"Lite Web",
        "Comments":"Web de Lite. Sistemas operativos, dispositivos y muchas cosas mas.",
        "URL":"https://litech.w3spaces.com",
        "Ad":false
    },
    {
        "Title":"Lite Search",
        "Comments":"Motor de búsqueda de Lite",
        "URL":"?",
        "Ad":false
    },
    {
        "Title":"Google España",
        "Comments":"",
        "URL":"https://www.google.es",
        "Ad":false
    },
    {
        "Title":"Lite Systems",
        "Comments":"Sector de Lite que hace sistemas operativos",
        "URL":"https://litech.w3spaces.com/lite-systems.html",
        "Ad":false
    }, {
        "Title":"Lite CatOS",
        "Comments":"Unico sistema operativo que no está hecho en españa, descargar y probar.",
        "URL":"https://litech.w3spaces.com/lite-catos.html",
        "Ad":false
    }, {
        "Title":"EducaMadrid Inicio",
        "Comments":"Herramientas de uso educativo para madrid.",
        "URL":"https://www.educa2.madrid.org/educamadrid/",
        "Ad":false
    }, {
        "Title":"EducaMadrid - Buscador de aulas virtuales",
        "Comments":"Buscar aulas virtuales de colegios de madrid",
        "URL":"https://www.educa2.madrid.org/educamadrid/aula-virtual",
        "Ad":false
    }, {
        "Title":"EducaMadrid - Correo",
        "Comments":"Usar el correo de educamadrid",
        "URL":"https://correoweb.educa.madrid.org/",
        "Ad":false
    }, {
        "Title":"EducaMadrid - Cloud",
        "Comments":"Cloud educamadrid para guardar archivos",
        "URL":"https://cloud.educa.madrid.org/index.php/login",
        "Ad":false
    }, {
        "Title":"Madread",
        "Comments":"Libros digitales para usuarios de educamadrid",
        "URL":"https://madread.educa.madrid.org/",
        "Ad":false
    }
];

search(searcah);

function search(saearch) {
    
let start = Date.now();
if(searcah == "@all") {
    searchs.forEach(saearchs => {
                document.querySelector("#searchs").innerHTML += "<div><h2>" + saearchs.Title + "</h1><p>" + saearchs.Comments + "</p><a href='" + saearchs.URL + "'>" + saearchs.URL + "</a>";
            res++;
        
    });
} else {
    searchs.forEach(saearchs => {
        if(saearchs.Title.toUpperCase().includes(saearch) || saearchs.Title.includes(saearch) || saearchs.Comments.toUpperCase().includes(saearch) || saearchs.Comments.includes(saearch)) {
                document.querySelector("#searchs").innerHTML += "<div><h2>" + saearchs.Title + "</h1><p>" + saearchs.Comments + "</p><a href='" + saearchs.URL + "'>" + saearchs.URL + "</a>";
            res++;
        } else {
            max++;
        }
    });
    if(max == searchs.length) {
        document.querySelector("#searchs").innerHTML = "<h4>Ningún enlace coincide con tu búsqueda</h4>";
    }
}
let timeTaken = Date.now() - start;
document.querySelector("#searchs").innerHTML = "<p>Se han encontrado " + res + " resultados en " + timeTaken + " milisegundo(s)." + document.querySelector("#searchs").innerHTML;
}

let input = document.querySelector("#search");



document.addEventListener("keypress", (e) =>{
   if(e.key == "Enter") {
    window.location.href = "search.html?m=" + input.value;
   } 
})
