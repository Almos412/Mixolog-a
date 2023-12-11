//CONSTANTES/SECCIONES
const sectionIntroduccion = document.getElementById("introduccion")
const botonInformacion = document.getElementById("botonInformacion")
const botonJuego = document.getElementById("botonJuego")
//Sección Guía
const sectionGuia = document.getElementById ("guia")
const botonSeleccionar = document.getElementById("botonSeleccionar")
const botonRegreso = document.getElementById("botonRegreso")
//Sección Información
const sectionInformacionBebidas = document.getElementById("informacionBebidas")
const sectionSeleccion = document.getElementById("bebidaSe")
const botonRegreso2 = document.getElementById("botonRegreso2")
const sectionImagenSe = document.getElementById("imagenSe")
const sectionPaisSe = document.getElementById("paisSe")
const sectionTituloSe = document.getElementById("tituloSe")
const sectionAñoSe = document.getElementById("añoSe")
//Sección Juego
const sectionJuego = document.getElementById("juego")
const contenedorBebidas2 = document.getElementById ("contenedorBebidas2")
const botonRegreso3 = document.getElementById("botonRegreso3")
const botonJuego2 = document.getElementById("botonJuego2")
//Sección Juego2
const sectionJuego2 = document.getElementById("juego2")
const contenedorJuego = document.getElementById("contenedorJuego")
const contenedorJuego2 = document.getElementById("contenedorJuego2")
const contenedorJuego3 = document.getElementById("contenedorJuego3")
const sectionTituloJuego = document.getElementById("tituloJuego")
const sectionImagenJuego = document.getElementById("imagenJuego")
const sectionPaisJuego = document.getElementById("paisJuego")
const sectionAñoJuego = document.getElementById("añoJuego")
const botonRegreso4 = document.getElementById("botonRegreso4")
const botonJuego3 = document.getElementById("botonJuego3")
let nombreBebida
let inputMargarita2
let inputMartini2
let inputMojito2
let inputOldFashioned2
let inputNegroni2
let inputPiñaColada2
let inputCaipirinha2
let inputCosmopolitan2
let inputWhiskySour2
let inputManhattan2
let inputDaiquiri2
let inputMaiTai2
let inputMoscowMule2
let inputAperolSpritz2
let inputTomCollins2

let inputTequila
let inputGinebra
let inputVodka
let inputRonBlanco
let inputWhiskyBourbon
let inputChaca
let inputRonOscuro
let inputAperol
let inputVinoEspumoso
let inputWhisky

let inputTripleSec
let inputJugoLimon
let inputVermutSeco
let inputJarabeAzucar
let inputJugoLima
let inputAguaMineral
let inputAngosturaBitters
let inputVermutRojo
let inputCampari
let inputCremaCoco
let inputJugoPina
let inputLicorArandano
let inputClaraHuevo
let inputVermutDulce
let inputLicorAlmendra
let inputLicorNaranja
let inputAguaGengibre

let inputSal 
let inputRodajaLimon
let inputHielo
let inputAceituna
let inputHojaMenta
let inputRodajaLima
let inputCereza
let inputCascaraNaranja
let inputRodajaNaranja
let inputRodajaPina
let inputCascaraLimon
let inputTerronAzucar

//SECCION MEDIDAS
const sectionMedidas = document.getElementById("medidas")
const contenedorIngredientes = document.getElementById("contenedorIngredientes")
const contenedorImagen = document.getElementById("contenedorImagen")
const contenedorTituloBebida = document.getElementById("tituloBebida2")


//IMPRIMIR BEBIDAS
const contenedorBebidas = document.getElementById("contenedorBebidas")
let inputMargarita
let inputMartini
let inputMojito
let inputOldFashioned
let inputNegroni
let inputPiñaColada
let inputCaipirinha
let inputCosmopolitan
let inputWhiskySour
let inputManhattan
let inputDaiquiri
let inputMaiTai
let inputMoscowMule
let inputAperolSpritz
let inputTomCollins



//VARIABLES 
let tragos = []
let opcionDeTragos
let bebidaUsuario
let listaDesplegada
let fotosDesplegadas
let alcoholesRandom
let liquidosRandom
let solidosRandom


class Bebidas{
    constructor(id, id2, nombre, foto, pais, año){
        this.id = id
        this.id2 = id2
        this.nombre = nombre
        this.foto = foto
        this.pais = pais
        this.año = año
        this.ingredientes = []
    }
}

let Margarita = new Bebidas ("Margarita","Margarita2", "Margarita", "./images/margarita.jpeg", "México 🇲🇽", 1930)
let Martini = new Bebidas ("Martini", "Martini2", "Martini", "./images/martini.jpeg", "Estados Unidos 🇺🇸", 1905)
let Mojito = new Bebidas ("Mojito", "Mojito2", "Mojito", "./images/mojito.webp", "Cuba 🇨🇺", 1950)
let OldFashioned = new Bebidas ("Old_Fashioned", "Old_Fashioned2", "Old Fashioned", "./images/old_fashioned.jpeg", "Estados Unidos 🇺🇸", 1800)
let Negroni = new Bebidas ("Negroni", "Negroni2", "Negroni", "./images/negroni.jpeg", "Italia 🇮🇹", 1919)
let PiñaColada = new Bebidas ("Piña_Colada", "Piña_Colada2", "Piña Colada", "./images/piña_colada.webp", "Puerto Rico 🇵🇷", 1954)
let Caipirinha = new Bebidas ("Caipirinha", "Caipirinha2", "Caipirinha", "./images/caipirinha.webp", "Brasil 🇧🇷", 1910)
let Cosmopolitan = new Bebidas ("Cosmopolitan", "Cosmopolitan2", "Cosmopolitan", "./images/cosmopolitan.webp", "Estados Unidos 🇺🇸", 1930)
let WhiskySour = new Bebidas ("Whisky_Sour", "Whisky_Sour2", "Whisky Sour", "./images/whiskey_sour.jpeg", "Estados Unidos 🇺🇸", 1800)
let Manhattan = new Bebidas ("Manhattan", "Manhattan2", "Manhattan", "./images/manhattan.jpeg", "Estados Unidos 🇺🇸", 1870)
let Daiquiri = new Bebidas ("Daiquiri", "Daiquiri2", "Daiquiri", "./images/daiquiri.jpeg", "Cuba 🇨🇺", 1898)
let MaiTai = new Bebidas ("Mai_Tai", "Mai_Tai2", "Mai Tai", "./images/mai_tai.jpeg", "Estados Unidos 🇺🇸", 1940)
let MoscowMule = new Bebidas ("Moscow_Mule", "Moscow_Mule2", "Moscow Mule", "./images/moscow_mule.jpeg", "Estados Unidos 🇺🇸", 1941)
let AperolSpritz = new Bebidas ("Aperol_Spritz", "Aperol_Spritz2", "Aperol Spritz", "./images/aperol.jpeg", "Italia 🇮🇹", 1919)
let TomCollins = new Bebidas ("Tom_Collins", "Tom_Collins2", "Tom Collins", "./images/tom_collins.jpeg", "Estados Unidos 🇺🇸", 1850)

Margarita.ingredientes.push(
    {liquido:"Tequila", cantidad:"2 oz"},
    {liquido:"Triple sec", cantidad:"1 oz"},
    {liquido:"Jugo de limón", cantidad:"1 oz"},
    {solido:"Sal", cantidad:"1 g"},
    {solido:"Hielo", cantidad:"5 g"},
    {solido:"Rodaja de limón", cantidad:"1"},
)

Martini.ingredientes.push(
    {liquido:"Ginebra o Vodka", cantidad:"2 1/2 oz"},
    {liquido:"Vermut seco", cantidad: "1/2 oz"},
    {solido:"Hielo", cantidad:"5 g"},
    {solido:"Aceituna o Cáscara de limón", cantidad:"1"},
)

Mojito.ingredientes.push(
    {liquido:"Ron blanco", cantidad:"2 oz"},
    {liquido:"Jarabe de azucar", cantidad:"1 oz"},
    {liquido:"Jugo de lima", cantidad:"1 oz"},
    {liquido:"Agua mineral", cantidad:"1/4 oz"},
    {solido:"Hoja de menta fresca", cantidad:"6-8"},
    {solido:"Hielo", cantidad:"5 g"},
    {solido:"Rodajas de lima", cantidad:"1"},
)

OldFashioned.ingredientes.push(
    {liquido:"Whiskey bourbon", cantidad:"2 oz"},
    {liquido:"Angostura bitters", cantidad:"2-3 dashes"},
    {liquido:"Jarabe de azucar", cantidad:"1/2 oz"},
    {solido:"Azucar", cantidad:"1 terron"},
    {solido:"Cáscara de naranja o cereza", cantidad:"1"},
)

Negroni.ingredientes.push(
    {liquido:"Ginebra", cantidad:"1 oz"},
    {liquido:"Vermut rojo", cantidad:"1 oz"},
    {liquido:"Campari", cantidad:"1 oz"},
    {solido:"Hielo", cantidad:"5 g"},
    {solido:"Cáscara de naranja", cantidad:"1"},
)

PiñaColada.ingredientes.push(
    {liquido:"Ron blanco", cantidad:"2 oz"},
    {liquido:"Crema de coco", cantidad:"3 oz"},
    {liquido:"Jugo de piña", cantidad:"3 oz"},
    {solido:"Hielo", cantidad:"5 g"},
    {solido:"Rodaja de piña o cereza", cantidad:"1"},
)

Caipirinha.ingredientes.push(
    {liquido:"Cachaca", cantidad:"2 oz"},
    {solido:"Azucar", cantidad:"2 cucharadas"},
    {solido:"Hielo", cantidad:"5 g"},
    {solido:"Limón", cantidad:"1/2"},
)

Cosmopolitan.ingredientes.push(
    {liquido:"Vodka", cantidad:"1 1/2 oz"},
    {liquido:"Triple sec", cantidad:"1 oz"},
    {liquido:"Licor de arándano", cantidad:"1/2 oz"},
    {liquido:"Jugo de limón", cantidad:"1/2 oz"},
    {solido:"Hielo", cantidad:"5 g"},
    {solido:"Rodaja de limón o cáscara de naranja", cantidad:"1"},
)

WhiskySour.ingredientes.push(
    {liquido:"Whisky", cantidad:"2 oz"},
    {liquido:"Jarabe de azucar", cantidad:"3/4 oz"},
    {liquido:"Jugo de limón", cantidad:"3/4 oz"},
    {liquido:"Clara de huevo", cantidad:"1"},
    {solido:"Hielo", cantidad:"5 g"},
    {solido:"Rodaja de naranja o cereza", cantidad:"1"},
)

Manhattan.ingredientes.push(
    {liquido:"Whisky", cantidad:"2 oz"},
    {liquido:"Vermut dulce", cantidad:"1 oz"},
    {liquido:"Angostura bitters", cantidad:"2-3 dashes"},
    {solido:"Hielo", cantidad:"5 g"},
    {solido:"Cereza", cantidad:"1"},
)

Daiquiri.ingredientes.push(
    {liquido:"Ron blanco", cantidad:"2 oz"},
    {liquido:"Jarabe de azucar", cantidad:"3/4 oz"},
    {liquido:"Jugo de limón", cantidad:"3/4 oz"},
    {solido:"Hielo", cantidad:"5 g"},
    {solido: "Rodaja de limón", cantidad:"1"}
)

MaiTai.ingredientes.push(
    {liquido:"Ron oscuro", cantidad:"2 oz"},
    {liquido:"Licor de almendra", cantidad:"3/4 oz"},
    {liquido:"Licor de naranja", cantidad:"3/4 oz"},
    {liquido:"Ron blanco", cantidad:"1 oz"},
    {liquido:"Jugo de limón", cantidad:"1 oz"},
    {solido:"Hielo", cantidad:"5 g"},
    {solido:"Rodaja de piña o cereza", cantidad:"1"},
)

MoscowMule.ingredientes.push(
    {liquido:"Vodka", cantidad:"2 oz"},
    {liquido:"Jugo de lima", cantidad:"1 oz"},
    {liquido:"Agua de gengibre", cantidad:"al gusto"},
    {solido:"Hielo", cantidad:"5 g"},
    {solido:"Rodaja de lima", cantidad:"1"},
)

AperolSpritz.ingredientes.push(
    {liquido:"Aperol", cantidad:"3 oz"},
    {liquido:"Vino espumoso (prosecco)", cantidad:"3 oz"},
    {liquido:"Agua mineral", cantidad:"al gusto"},
    {solido:"Hielo", cantidad:"5 g"},
    {solido:"Rodaja de naranja", cantidad:"1"},
)

TomCollins.ingredientes.push(
    {liquido:"Ginebra", cantidad:"2 oz"},
    {liquido:"Jarabe de azucar", cantidad:"3/4 oz"},
    {liquido:"Jugo de limón", cantidad:"3/4 oz"},
    {liquido:"Agua mineral", cantidad:"al gusto"},
    {solido:"Hielo", cantidad:"5 g"},
    {solido:"Rodaja de naranja y cereza", cantidad:"1"},
)

//LISTAS PARA EL JUEGO

const alcoholes = [
    {nombre:"Tequila", id:"label-tequila"},
    {nombre:"Ginebra", id:"label-ginebra"},
    {nombre:"Vodka", id:"label-vodka"},
    {nombre:"Ron Blanco", id:"label-ron_blanco"},
    {nombre:"Whisky Bourbon", id:"label-whisky_bourbon"},
    {nombre:"Cachaca", id:"label-cachaca"},
    {nombre:"Ron Oscuro", id:"label-ron_oscuro"},
    {nombre:"Aperol", id:"label-aperol"},
    {nombre:"Vino espumoso", id:"label-vino"},
    {nombre:"Whisky", id:"label-whisky"},
]

const liquidos = [
    {nombre:"Triple sec", id:"label-triple"},
    {nombre:"Juego de limón", id:"label-jugo_limon"},
    {nombre:"Vermut seco", id:"label-vermut"},
    {nombre:"Jarabe de azucar", id:"label-jarabe_azucar"},
    {nombre:"Jugo de lima", id:"label-jugo_lima"},
    {nombre:"Agua mineral", id:"label-agua_mineral"},
    {nombre:"Angostura bitters", id:"label-angostura_bitters"},
    {nombre:"Vermut rojo", id:"label-vermut_rojo"},
    {nombre:"Campari", id:"label-campari"},
    {nombre:"Crema de coco", id:"label-crema_coco"},
    {nombre:"Jugo de piña", id:"label-jugo_pina"},
    {nombre:"Licor de arandano", id:"label-licor_arandano"},
    {nombre:"Clara de huevo", id:"label-clara"},
    {nombre:"Vermut dulce", id:"label-vermut_dulce"},
    {nombre:"Licor de almendra", id:"label-licor_almendra"},
    {nombre:"Licor de naranja", id:"label-licor_naranja"},
    {nombre:"Agua de gengibre", id:"label-agua_gengibre"},
]

const solidos =[
    {nombre:"Sal", id:"label-sal"},
    {nombre:"Rodaja de limón", id:"label-rodaja_limon"},
    {nombre:"Hielo", id:"label-hielo"},
    {nombre:"Aceituna", id:"label-aceituna"},
    {nombre:"Hoja de menta fresca", id:"label-menta"},
    {nombre:"Rodajas de lima", id:"label-rodaja_lima"},
    {nombre:"Cereza", id:"label-cereza"},
    {nombre:"Cáscara de naranja", id:"label-cascara_naranja"},
    {nombre:"Rodaja de naranja", id:"label-rodaja_naranja"},
    {nombre:"Rodaja de piña", id:"label-rodaja_pina"},
    {nombre:"Cáscara de limón", id:"label-cascara_limon"},
    {nombre:"Terrón de azucar", id:"label-terron_azucar"}
]

const onzas =[
    {nombre:"1/4 oz", id:"label-1/4"},
    {nombre:"1/2 oz", id:"label-1/2"},
    {nombre:"3/4 oz", id:"label-3/4"},
    {nombre:"1 oz", id:"label-1"},
    {nombre:"1 1/2 oz", id:"label-11/2"},
    {nombre:"2 oz", id:"label-2"},
    {nombre:"2 1/2 oz", id:"label-21/2"},
    {nombre:"3 oz", id:"label-3"},
]

const cantidades =[
    {nombre:"1", id:"label-1c"},
    {nombre:"2", id:"label-2c"},
    {nombre:"3", id:"label-3c"},
]

tragos.push(Margarita, Martini, Mojito, OldFashioned, Negroni, PiñaColada, Caipirinha, Cosmopolitan, WhiskySour, Manhattan, Daiquiri, MaiTai, MoscowMule, AperolSpritz, TomCollins)

function iniciarPagina(){
sectionIntroduccion.style.display = "block"
sectionGuia.style.display = "none"
sectionInformacionBebidas.style.display = "none"
sectionJuego.style.display="none"
sectionJuego2.style.display="none"
sectionMedidas.style.display="none"

}

function iniciarInputs(contenedor, drinks, nombreDeClase){
    contenedor.innerHTML = ""
    drinks.forEach((drink) =>{
        opcionDeTragos =`
        <input  type="radio" id=${drink.id} name="pisto"/>
        <label class=${nombreDeClase}  for=${drink.id} >
            <p>${drink.nombre}</p>
            <img src=${drink.foto}  alt=${drink.id}}>
        </label>
        `
        contenedor.innerHTML += opcionDeTragos

})
}

function iniciarInputs2(contenedor, drinks, nombreDeClase){
    contenedor.innerHTML = ""
    drinks.forEach((drink) =>{
        opcionDeTragos =`
        <input  type="radio" id=${drink.id2} name="pisto2"/>
        <label class=${nombreDeClase}  for=${drink.id2} >
            <p>${drink.nombre}</p>
            <img src=${drink.foto}  alt=${drink.id2}}>
        </label>
        `
        contenedor.innerHTML += opcionDeTragos

})

}

function regresarAlJuego(){
    sectionJuego2.style.display="none"
    sectionJuego.style.display ="flex"
}



botonInformacion.addEventListener("click", iniciarGuia)
botonRegreso.addEventListener("click", iniciarPagina)
botonRegreso2.addEventListener("click", regresarGuia)
botonJuego.addEventListener("click", iniciarJuego)
botonRegreso3.addEventListener("click", iniciarPagina)
botonRegreso4.addEventListener("click", regresarAlJuego)


function iniciarGuia(){
    sectionIntroduccion.style.display = "none"
    sectionGuia.style.display ="flex"

    iniciarInputs(contenedorBebidas, tragos, "tarjetasBebidas")
   
    inputMargarita = document.getElementById("Margarita")
    inputMartini = document.getElementById("Martini")
    inputMojito = document.getElementById("Mojito")
    inputOldFashioned = document.getElementById("Old_Fashioned")
    inputNegroni = document.getElementById("Negroni")
    inputPiñaColada = document.getElementById("Piña_Colada")
    inputCaipirinha = document.getElementById("Caipirinha")
    inputCosmopolitan = document.getElementById("Cosmopolitan")
    inputWhiskySour = document.getElementById("Whisky_Sour")
    inputManhattan = document.getElementById("Manhattan")
    inputDaiquiri = document.getElementById("Daiquiri")
    inputMaiTai = document.getElementById("Mai_Tai")
    inputMoscowMule = document.getElementById("Moscow_Mule")
    inputAperolSpritz = document.getElementById ("Aperol_Spritz")
    inputTomCollins = document.getElementById("Tom_Collins")
    botonSeleccionar.addEventListener("click", seleccionarBebida)
}

function iniciarJuego(){
    sectionIntroduccion.style.display = "none"
    sectionJuego.style.display ="flex"

    iniciarInputs2(contenedorBebidas2, tragos, "tarjetasBebidas2")

    inputMargarita2 = document.getElementById("Margarita2")
    inputMartini2 = document.getElementById("Martini2")
    inputMojito2 = document.getElementById("Mojito2")
    inputOldFashioned2 = document.getElementById("Old_Fashioned2")
    inputNegroni2 = document.getElementById("Negroni2")
    inputPiñaColada2 = document.getElementById("Piña_Colada2")
    inputCaipirinha2 = document.getElementById("Caipirinha2")
    inputCosmopolitan2 = document.getElementById("Cosmopolitan2")
    inputWhiskySour2 = document.getElementById("Whisky_Sour2")
    inputManhattan2 = document.getElementById("Manhattan2")
    inputDaiquiri2 = document.getElementById("Daiquiri2")
    inputMaiTai2 = document.getElementById("Mai_Tai2")
    inputMoscowMule2 = document.getElementById("Moscow_Mule2")
    inputAperolSpritz2 = document.getElementById ("Aperol_Spritz2")
    inputTomCollins2 = document.getElementById("Tom_Collins2")
    botonJuego2.addEventListener("click", iniciarJuego2)
}

function seleccionarBebida(){

    if (inputMargarita.checked == true){
        bebidaUsuario = inputMargarita.id
    }else if(inputMartini.checked == true){
        bebidaUsuario = inputMartini.id
    }else if(inputMojito.checked == true){
        bebidaUsuario = inputMojito.id
    }else if (inputOldFashioned.checked == true){
        bebidaUsuario = inputOldFashioned.id
    }else if(inputNegroni.checked == true){
        bebidaUsuario = inputNegroni.id
    }else if(inputPiñaColada.checked == true){
        bebidaUsuario = inputPiñaColada.id
    }else if(inputCaipirinha.checked == true){
        bebidaUsuario = inputCaipirinha.id
    }else if(inputCosmopolitan.checked == true){
        bebidaUsuario = inputCosmopolitan.id
    }else if(inputWhiskySour.checked == true){
        bebidaUsuario = inputWhiskySour.id
    }else if(inputManhattan.checked == true){
        bebidaUsuario = inputManhattan.id
    }else if (inputDaiquiri.checked == true){
        bebidaUsuario = inputDaiquiri.id
    }else if(inputMaiTai.checked == true){
        bebidaUsuario = inputMaiTai.id
    }else if(inputMoscowMule.checked == true){
        bebidaUsuario = inputMoscowMule.id
    }else if(inputAperolSpritz.checked == true){
        bebidaUsuario = inputAperolSpritz.id
    }else if(inputTomCollins.checked == true){
        bebidaUsuario = inputTomCollins.id
    }else{
        alert("No seleccionaste ninguna bebida ")
        return
    }
    sectionGuia.style.display ="none"
    extraerInformacion(bebidaUsuario)
    sectionInformacionBebidas.style.display ="flex"

}

function extraerInformacion(bebidaUsuario){
    let listaIngredientes
    let paisOrigen
    let añoCreacion
    let imagenBebida
    let nombreBebida
    for (let i = 0; i < tragos.length; i++) {
        if(bebidaUsuario === tragos[i].id){
            listaIngredientes = tragos[i].ingredientes
            paisOrigen = tragos[i].pais
            añoCreacion = tragos[i].año
            imagenBebida = tragos[i].foto
            nombreBebida = tragos[i].nombre
            break;
        }
    }
    imprimirTitulo(nombreBebida, sectionTituloSe)
    imprimirImagen(imagenBebida, sectionImagenSe)
    imprimirPais(paisOrigen, sectionPaisSe)
    imprimirAño(añoCreacion, sectionAñoSe)
    mostrarInformacionBebida(listaIngredientes)
    console.log(nombreBebida)
    console.log(listaIngredientes)
    console.log(paisOrigen)
    console.log(añoCreacion)
    console.log(imagenBebida)
}

function mostrarInformacionBebida(listaIngredientes){
    sectionSeleccion.innerHTML = ""

    listaIngredientes.forEach((lista)=>{
        listaDesplegada=`
        <div id="descripcion" class="descripcion1">
        ${lista.liquido ? `<p> Lleva ${lista.liquido} en una cantidad de ${lista.cantidad}</p>` : ''}
        ${lista.solido ? `<p> Lleva ${lista.solido} en una cantidad de ${lista.cantidad}</p>` : ''}
        </div>
        `
        sectionSeleccion.innerHTML += listaDesplegada
    })
}

function imprimirTitulo (nombreBebida, section){
    section.innerHTML=""

    let nuevoTitulo = document.createElement("h2")
    nuevoTitulo.classList.add("titulo2")
    nuevoTitulo.textContent = nombreBebida
    section.appendChild(nuevoTitulo)
}

function imprimirImagen (imagenBebida, section){
section.innerHTML =""

let nuevaImagen = document.createElement("img")
nuevaImagen.src = imagenBebida
nuevaImagen.alt = "bebidaSeleccionada"
nuevaImagen.classList.add("miImagen")
section.appendChild (nuevaImagen)

}

function imprimirPais(paisOrigen, section){
section.innerHTML=""

let nuevoPais = document.createElement("p")
nuevoPais.classList.add("pais")
nuevoPais.textContent = paisOrigen
section.appendChild(nuevoPais)
}

function imprimirAño(añoCreacion, section){
    section.innerHTML=""
    
    let nuevoAño = document.createElement("p")
    nuevoAño.classList.add("año")
    nuevoAño.textContent = añoCreacion
    section.appendChild(nuevoAño)
    }

function regresarGuia(){
    sectionInformacionBebidas.style.display="none"
    sectionGuia.style.display ="flex"
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}


function imprimirListas(contenedor, lista, nombreDeClase){
    shuffleArray(lista)
    contenedor.innerHTML = ""
    lista.forEach((valor) =>{
        opcionMateriales =`
        <input  type="checkbox" id=${valor.id} name="pisto"/>
        <label class=${nombreDeClase}  for=${valor.id} >
            <p>${valor.nombre}</p>
        </label>
        `
        contenedor.innerHTML += opcionMateriales

})
inputTequila = document.getElementById("label-tequila")
inputGinebra = document.getElementById("label-ginebra")
inputVodka = document.getElementById("label-vodka")
inputRonBlanco = document.getElementById("label-ron_blanco")
inputWhiskyBourbon = document.getElementById("label-whisky_bourbon")
inputChaca = document.getElementById("label-chaca")
inputRonOscuro = document.getElementById("label-ron_oscuro")
inputAperol = document.getElementById("label-aperol")
inputVinoEspumoso = document.getElementById("label-vino")
inputWhisky = document.getElementById("label-whisky")

inputTripleSec = document.getElementById("label-triple")
inputJugoLimon = document.getElementById("label-jugo_limon")
inputVermutSeco = document.getElementById("label-vermut")
inputJarabeAzucar = document.getElementById("label-jarabe_azucar")
inputJugoLima = document.getElementById("label-jugo_lima")
inputAguaMineral = document.getElementById("label-agua_mineral")
inputAngosturaBitters = document.getElementById("label-angostura_bitters")
inputVermutRojo = document.getElementById("label-vermut_rojo")
inputCampari = document.getElementById("label-campari")
inputCremaCoco = document.getElementById("label-crema_coco")
inputJugoPina = document.getElementById("label-jugo_pina")
inputLicorArandano = document.getElementById("label-licor_arandano")
inputClaraHuevo = document.getElementById("label-clara")
inputVermutDulce = document.getElementById("label-vermut_dulce")
inputLicorAlmendra = document.getElementById("label-licor_almendra")
inputLicorNaranja = document.getElementById("label-licor_naranja")
inputAguaGengibre = document.getElementById("label-agua_gengibre")

inputSal = document.getElementById("label-sal")
inputRodajaLimon = document.getElementById("label-rodaja_limon")
inputHielo = document.getElementById("label-hielo")
inputAceituna = document.getElementById("label-aceituna")
inputHojaMenta = document.getElementById("label-menta")
inputRodajaLima = document.getElementById("label-rodaja_lima")
inputCereza = document.getElementById("label-cereza")
inputCascaraNaranja = document.getElementById("label-cascara_naranja")
inputRodajaNaranja = document.getElementById("label-rodaja_naranja")
inputRodajaPina = document.getElementById("label-rodaja_pina")
inputCascaraLimon = document.getElementById("label-cascara_limon")
inputTerronAzucar = document.getElementById("label-terron_azucar")
}

function seleccionarBebidaJuego(){

    if (inputMargarita2.checked == true){
        bebidaJuego = inputMargarita2.id
    }else if(inputMartini2.checked == true){
        bebidaJuego = inputMartini2.id
    }else if(inputMojito2.checked == true){
        bebidaJuego = inputMojito2.id
    }else if (inputOldFashioned2.checked == true){
        bebidaJuego = inputOldFashioned2.id
    }else if(inputNegroni2.checked == true){
        bebidaJuego = inputNegroni2.id
    }else if(inputPiñaColada2.checked == true){
        bebidaJuego = inputPiñaColada2.id
    }else if(inputCaipirinha2.checked == true){
        bebidaJuego = inputCaipirinha2.id
    }else if(inputCosmopolitan2.checked == true){
        bebidaJuego = inputCosmopolitan2.id
    }else if(inputWhiskySour2.checked == true){
        bebidaJuego = inputWhiskySour2.id
    }else if(inputManhattan2.checked == true){
        bebidaJuego = inputManhattan2.id
    }else if (inputDaiquiri2.checked == true){
        bebidaJuego = inputDaiquiri2.id
    }else if(inputMaiTai2.checked == true){
        bebidaJuego = inputMaiTai2.id
    }else if(inputMoscowMule2.checked == true){
        bebidaJuego = inputMoscowMule2.id
    }else if(inputAperolSpritz2.checked == true){
        bebidaJuego = inputAperolSpritz2.id
    }else if(inputTomCollins2.checked == true){
        bebidaJuego = inputTomCollins2.id
    }else{
        alert("No seleccionaste ninguna bebida ")
        return
    }
    extraerInformacionJuego(bebidaJuego)
    imprimirListas(contenedorJuego, alcoholes, "alcoholes")
    imprimirListas(contenedorJuego2, liquidos, "liquidos")
    imprimirListas(contenedorJuego3, solidos, "solidos")
    sectionJuego.style.display="none"
    sectionJuego2.style.display="flex"
}

function extraerInformacionJuego(bebidaJuego){
    let paisOrigen
    let añoCreacion
    let imagenBebida
    //let nombreBebida
    for (let i = 0; i < tragos.length; i++) {
        if(bebidaJuego === tragos[i].id2){
            paisOrigen = tragos[i].pais
            añoCreacion = tragos[i].año
            imagenBebida = tragos[i].foto
            nombreBebida = tragos[i].nombre
            break;
        }
    }
    imprimirTitulo(nombreBebida, sectionTituloJuego)
    imprimirImagen(imagenBebida, sectionImagenJuego)
    imprimirPais(paisOrigen, sectionPaisJuego)
    imprimirAño(añoCreacion, sectionAñoJuego)
    //console.log(nombreBebida)
    console.log(imagenBebida)
    console.log(paisOrigen)
    console.log(añoCreacion)
}

function iniciarJuego2(){
    seleccionarBebidaJuego()
    console.log(nombreBebida)
    botonJuego3.addEventListener("click", comenzarJuego)
}

function revisarIngredientes(nombreBebida, ingredientesRequeridos){
    const seleccionIngredientes = ingredientesRequeridos.every((ingrediente)=> ingrediente.checked);

    if(seleccionIngredientes){
        alert ("Es correcto, ya sabes como preparar un/una "+nombreBebida)
        return true;
    }else{
        alert("No seleccionaste los ingredientes correctos, vuelve a intentarlo")
        return false;
    }
}

function comenzarJuego(){
let ingredientesCorrectos = false

    switch(nombreBebida){
        case "Margarita":
        ingredientesCorrectos = revisarIngredientes(nombreBebida, [inputTequila, inputTripleSec, inputJugoLimon, inputSal, inputHielo, inputRodajaLimon]);
        break;

        case "Martini":
            ingredientesCorrectos = revisarIngredientes(nombreBebida, [inputGinebra, inputVodka, inputVermutSeco, inputHielo, inputAceitun/una, inputCascaraLimon]);
            break;

        case "Mojito":
            ingredientesCorrectos = revisarIngredientes(nombreBebida, [inputRonBlanco, inputJarabeAzucar, inputJugoLima, inputAguaMineral, inputHojaMenta, inputHielo, inputRodajaLima]);
            break;

        case "Old Fashioned":
            ingredientesCorrectos = revisarIngredientes(nombreBebida,[inputWhiskyBourbon, inputAngosturaBitters, inputJarabeAzucar, inputTerronAzucar, inputCascaraNaranja, inputCereza]);
            break;

        case "Negroni":
            ingredientesCorrectos = revisarIngredientes(nombreBebida, [inputGinebra, inputVermutRojo, inputCampari, inputHielo, inputCascaraNaranja]);
            break;
            
        case "Piña Colada":
            ingredientesCorrectos = revisarIngredientes(nombreBebida, [inputRonBlanco, inputCremaCoco, inputJugoPina, inputHielo, inputRodajaPina, inputCereza]);
            break;
            
        case "Caipirinha":
            ingredientesCorrectos = revisarIngredientes(nombreBebida, [inputChaca, inputJarabeAzucar, inputHielo, inputJugoLimon]);
            break;
            
        case "Cosmopolitan":
            ingredientesCorrectos = revisarIngredientes(nombreBebida, [inputVodka, inputTripleSec, inputLicorArandano, inputJugoLimon, inputHielo, inputRodajaLimon, inputCascaraNaranja]);
            break;

        case "Whisky Sour":
            ingredientesCorrectos = revisarIngredientes(nombreBebida, [inputWhisky, inputJarabeAzucar, inputJugoLimon, inputClaraHuevo, inputHielo, inputRodajaNaranja, inputCereza]);
            break;

        case "Manhattan":
            ingredientesCorrectos = revisarIngredientes(nombreBebida, [inputWhisky, inputVermutDulce, inputAngosturaBitters, inputHielo, inputCereza]);
            break;

        case "Daiquiri":
            ingredientesCorrectos = revisarIngredientes(nombreBebida, [inputRonBlanco, inputJarabeAzucar, inputJugoLimon, inputHielo, inputRodajaLimon]);
            break;

        case "Mai Tai":
            ingredientesCorrectos = revisarIngredientes(nombreBebida, [inputRonOscuro, inputLicorAlmendra, inputLicorNaranja, inputRonBlanco, inputJugoLimon, inputHielo, inputRodajaPina, inputCereza]);
            break;

        case "Moscow Mule":
            ingredientesCorrectos = revisarIngredientes(nombreBebida, [inputVodka, inputJugoLima, inputAguaGengibre, inputHielo, inputRodajaLima]);
            break;

        case "Aperol Spritz":
            ingredientesCorrectos = revisarIngredientes(nombreBebida, [inputAperol, inputVinoEspumoso, inputAguaMineral, inputHielo, inputRodajaNaranja]);
            break;

        case "Tom Collins":
            ingredientesCorrectos = revisarIngredientes(nombreBebida, [inputGinebra, inputJarabeAzucar, inputJugoLimon, inputAguaMineral, inputJugoLimon, inputHielo, inputRodajaNaranja, inputCereza]);
            break;

        default:
            alert("No seleccionastes ningun ingrediente");

    }
    if(ingredientesCorrectos){
        sectionJuego2.style.display = "none"
        sectionJuego.style.display = "flex"
    }

}

function extraerInformacionMedidas(bebidaJuego){
let listaIngredientes
let imagenBebida
    for (let i = 0; i < tragos.length; i++) {
        if(bebidaJuego === tragos[i].id2){
            nombreBebida = tragos [i].nombre
            listaIngredientes = tragos[i].ingredientes
            imagenBebida = tragos[i].foto

            break;
        }
    }
    imprimirImagen(imagenBebida, contenedorImagen)
    imprimirTitulo(nombreBebida, contenedorTituloBebida)
    mostrarInformacionBebida2(listaIngredientes)
}

function mostrarInformacionBebida2(listaIngredientes){
    contenedorIngredientes.innerHTML = ""

    listaIngredientes.forEach((lista)=>{
        listaDesplegada=`
        <div id="descripcion" class="descripcion1">
        ${lista.liquido ? `<p> Lleva ${lista.liquido} en una cantidad de: </p>` : ''}
        ${lista.solido ? `<p> Lleva ${lista.solido} en una cantidad de: </p>` : ''}
        </div>
        `
        contenedorIngredientes.innerHTML += listaDesplegada
    })
}

function juegoMedidas(){

}

window.addEventListener("load", iniciarPagina)