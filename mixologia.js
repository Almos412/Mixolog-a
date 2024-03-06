//PROYECTO NEW YORK PARA BARES 
//CONSTANTES/SECCIONES
const sectionIntroduccion = document.getElementById("front-page")
const botonInformacion = document.getElementById("linkDrinks")
const botonJuego = document.getElementById("linkGame")
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
const botonRegreso4 = document.getElementById("botonRegreso4")
const botonJuego3 = document.getElementById("botonJuego3")
let nombreBebida
let listaDeInputsAlcoholes = []
let listaDeInputsLiquidos = []
let listaDeInputsSolidos = []
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
let inputCarajillo2

//SECCION MEDIDAS
const sectionMedidas = document.getElementById("medidas")
const contenedorImagen = document.getElementById("contenedorImagen")
const contenedorTituloBebida = document.getElementById("tituloBebida2")
const contenedorIngredientes = document.getElementById("contenedorIngredientes")
const contenedorIngredientes2 = document.getElementById("contenedorIngredientes2")
let idsLiquidos = []
let idsSolidos = []
const botonJuego4 = document.getElementById("botonJuego4")
const botonRegreso5 = document.getElementById("botonRegreso5")

//SECCION EMPLOYEES INFO
const sectionEmployees = document.getElementById('Employees_Info')
const sectionEmployeesLink = document.getElementById('employee_info')
//SECCION DRINKS INFO
const sectionDrinksInfo = document.getElementById('Drinks_Data')
const sectionDrinksLink = document.getElementById('drinks-info')
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
let inputCarajillo



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
    constructor(id, id2, nombre, foto, pais, año, price){
        this.id = id
        this.id2 = id2
        this.nombre = nombre
        this.foto = foto
        this.pais = pais
        this.año = año
        this.price = price
        this.ingredientes = []
    }
}

let Margarita = new Bebidas ("Margarita","Margarita2", "Margarita", "./images/margarita.jpeg", "Mexico 🇲🇽", 1930, 15)
let Martini = new Bebidas ("Martini", "Martini2", "Martini", "./images/martini.jpeg", "United States 🇺🇸", 1905, 20)
let Mojito = new Bebidas ("Mojito", "Mojito2", "Mojito", "./images/mojito.webp", "Cuba 🇨🇺", 1950, 18)
let OldFashioned = new Bebidas ("Old_Fashioned", "Old_Fashioned2", "Old Fashioned", "./images/old_fashioned.jpeg", "United States 🇺🇸", 1800, 20)
let Negroni = new Bebidas ("Negroni", "Negroni2", "Negroni", "./images/negroni.jpeg", "Italy 🇮🇹", 1919, 20)
let PiñaColada = new Bebidas ("Piña_Colada", "Piña_Colada2", "Piña Colada", "./images/piña_colada.webp", "Puerto Rico 🇵🇷", 1954, 14)
let Caipirinha = new Bebidas ("Caipirinha", "Caipirinha2", "Caipirinha", "./images/caipirinha.webp", "Brazil 🇧🇷", 1910, 14)
let Cosmopolitan = new Bebidas ("Cosmopolitan", "Cosmopolitan2", "Cosmopolitan", "./images/cosmopolitan.webp", "United States 🇺🇸", 1930, 20)
let WhiskySour = new Bebidas ("Whisky_Sour", "Whisky_Sour2", "Whisky Sour", "./images/whiskey_sour.jpeg", "United States 🇺🇸", 1800, 20)
let Manhattan = new Bebidas ("Manhattan", "Manhattan2", "Manhattan", "./images/manhattan.jpeg", "United States 🇺🇸", 1870, 24)
let Daiquiri = new Bebidas ("Daiquiri", "Daiquiri2", "Daiquiri", "./images/daiquiri.jpeg", "Cuba 🇨🇺", 1898, 24)
let MaiTai = new Bebidas ("Mai_Tai", "Mai_Tai2", "Mai Tai", "./images/mai_tai.jpeg", "United States 🇺🇸", 1940, 22)
let MoscowMule = new Bebidas ("Moscow_Mule", "Moscow_Mule2", "Moscow Mule", "./images/moscow_mule.jpeg", "United States 🇺🇸", 1941, 18)
let AperolSpritz = new Bebidas ("Aperol_Spritz", "Aperol_Spritz2", "Aperol Spritz", "./images/aperol.jpeg", "Italy 🇮🇹", 1919, 15)
let TomCollins = new Bebidas ("Tom_Collins", "Tom_Collins2", "Tom Collins", "./images/tom_collins.jpeg", "United States 🇺🇸", 1850, 20)
let Carajillo = new Bebidas('Carajillo', 'Carajillo2', 'Carajillo', './images/carajillo.jpeg', 'Spain 🇪🇸', 1980, 22)

Margarita.ingredientes.push(
    {liquido:"Tequila", cantidad:"2 oz"},
    {liquido:"Triple sec", cantidad:"1 oz"},
    {liquido:"lime juice", cantidad:"1 oz"},
    {solido:"Salt", cantidad:"1 g"},
    {solido:"Ice", cantidad:"5 g"},
    {solido:"Lime slice", cantidad:"1"},
)

Martini.ingredientes.push(
    {liquido:"Gin or Vodka", cantidad:"2 1/2 oz"},
    {liquido:"Dry vermut", cantidad: "1/2 oz"},
    {solido:"Ice", cantidad:"5 g"},
    {solido:"Olives or lime slice", cantidad:"1"},
)

Mojito.ingredientes.push(
    {liquido:"White Rum", cantidad:"2 oz"},
    {liquido:"Syrup", cantidad:"1 oz"},
    {liquido:"Lemon juice", cantidad:"1 oz"},
    {liquido:"Sparkling water", cantidad:"1/4 oz"},
    {solido:"Fresh mint", cantidad:"6-8"},
    {solido:"Ice", cantidad:"5 g"},
    {solido:"Lemon slice", cantidad:"1"},
)

OldFashioned.ingredientes.push(
    {liquido:"Whiskey bourbon", cantidad:"2 oz"},
    {liquido:"Angostura bitters", cantidad:"2-3 dashes"},
    {liquido:"Syrup", cantidad:"1/2 oz"},
    {solido:"Sugar", cantidad:"1 terron"},
    {solido:"Orange peel or cherry", cantidad:"1"},
)

Negroni.ingredientes.push(
    {liquido:"Gin", cantidad:"1 oz"},
    {liquido:"Red vermut", cantidad:"1 oz"},
    {liquido:"Campari", cantidad:"1 oz"},
    {solido:"Ice", cantidad:"5 g"},
    {solido:"Orange peel", cantidad:"1"},
)

PiñaColada.ingredientes.push(
    {liquido:"White Rum", cantidad:"2 oz"},
    {liquido:"Coconut cream", cantidad:"3 oz"},
    {liquido:"Pinaple juice", cantidad:"3 oz"},
    {solido:"Ice", cantidad:"5 g"},
    {solido:"Pinaple slice or cherry", cantidad:"1"},
)

Caipirinha.ingredientes.push(
    {liquido:"Cachaca", cantidad:"2 oz"},
    {solido:"Sugar", cantidad:"2 cucharadas"},
    {solido:"Ice", cantidad:"5 g"},
    {solido:"Lime", cantidad:"1/2"},
)

Cosmopolitan.ingredientes.push(
    {liquido:"Vodka", cantidad:"1 1/2 oz"},
    {liquido:"Triple sec", cantidad:"1 oz"},
    {liquido:"Cranberry liquor", cantidad:"1/2 oz"},
    {liquido:"lime juice", cantidad:"1/2 oz"},
    {solido:"Ice", cantidad:"5 g"},
    {solido:"Lime slice or orange peel", cantidad:"1"},
)

WhiskySour.ingredientes.push(
    {liquido:"Whisky", cantidad:"2 oz"},
    {liquido:"Syrup", cantidad:"3/4 oz"},
    {liquido:"lime juice", cantidad:"3/4 oz"},
    {liquido:"Egg white", cantidad:"1"},
    {solido:"Ice", cantidad:"5 g"},
    {solido:"Orange slice or cherry", cantidad:"1"},
)

Manhattan.ingredientes.push(
    {liquido:"Whisky", cantidad:"2 oz"},
    {liquido:"Sweet vermut", cantidad:"1 oz"},
    {liquido:"Angostura bitters", cantidad:"2-3 dashes"},
    {solido:"Ice", cantidad:"5 g"},
    {solido:"Cherry", cantidad:"1"},
)

Daiquiri.ingredientes.push(
    {liquido:"White Rum", cantidad:"2 oz"},
    {liquido:"Syrup", cantidad:"3/4 oz"},
    {liquido:"lime juice", cantidad:"3/4 oz"},
    {solido:"Ice", cantidad:"5 g"},
    {solido: "Lime slice", cantidad:"1"}
)

MaiTai.ingredientes.push(
    {liquido:"Dark rum", cantidad:"2 oz"},
    {liquido:"Almond liquor", cantidad:"3/4 oz"},
    {liquido:"Orange liquor", cantidad:"3/4 oz"},
    {liquido:"White Rum", cantidad:"1 oz"},
    {liquido:"lime juice", cantidad:"1 oz"},
    {solido:"Ice", cantidad:"5 g"},
    {solido:"Pinaple slice or cherry", cantidad:"1"},
)

MoscowMule.ingredientes.push(
    {liquido:"Vodka", cantidad:"2 oz"},
    {liquido:"Lemon juice", cantidad:"1 oz"},
    {liquido:"Ginger beer", cantidad:"al gusto"},
    {solido:"Ice", cantidad:"5 g"},
    {solido:"Lemon slice", cantidad:"1"},
)

AperolSpritz.ingredientes.push(
    {liquido:"Aperol", cantidad:"3 oz"},
    {liquido:"Prosecco", cantidad:"3 oz"},
    {liquido:"Sparkling water", cantidad:"al gusto"},
    {solido:"Ice", cantidad:"5 g"},
    {solido:"Orange slice", cantidad:"1"},
)

TomCollins.ingredientes.push(
    {liquido:"Gin", cantidad:"2 oz"},
    {liquido:"Syrup", cantidad:"3/4 oz"},
    {liquido:"lime juice", cantidad:"3/4 oz"},
    {liquido:"Sparkling water", cantidad:"al gusto"},
    {solido:"Ice", cantidad:"5 g"},
    {solido:"Orange slice y cherry", cantidad:"1"},
)

Carajillo.ingredientes.push(
    {liquido:'43 liquor', cantidad:'2 oz'},
    {liquido:'Coffee', cantidad:'2 oz'},
    {solido:'Ice', cantidad:'5 g'}
)

//LISTAS PARA EL JUEGO

const alcoholes = [
    {nombre:"Tequila", id:"label-tequila", input:"Tequila"},
    {nombre:"Gin", id:"label-ginebra", input:"Ginebra"},
    {nombre:"Vodka", id:"label-vodka", input:"Vodka"},
    {nombre:"White Rum", id:"label-ron_blanco", input:"RonBlanco"},
    {nombre:"Whisky Bourbon", id:"label-whisky_bourbon", input:"WhiskyBourbon"},
    {nombre:"Cachaca", id:"label-cachaca", input:"Chaca"},
    {nombre:"Dark rum", id:"label-ron_oscuro", input:"RonOscuro"},
    {nombre:"Aperol", id:"label-aperol", input:"Aperol"},
    {nombre:"Prosecco", id:"label-vino", input:"VinoEspumoso"},
    {nombre:"Whisky", id:"label-whisky", input:"Whisky"},
    {nombre:'43 Liquor', id:'label-43', input:'43Liquor'}
]

const liquidos = [
    {nombre:"Triple sec", id:"label-triple", input:"TripleSec"},
    {nombre:"Lime juice", id:"label-jugo_limon", input:"JugoLimon"},
    {nombre:"Dry vermut", id:"label-vermut", input:"VermutSeco"},
    {nombre:"Syrup", id:"label-jarabe_azucar", input:"JarabeAzucar"},
    {nombre:"Lemon juice", id:"label-jugo_lima", input:"JugoLima"},
    {nombre:"Sparkling water", id:"label-agua_mineral", input:"AguaMineral"},
    {nombre:"Angostura bitters", id:"label-angostura_bitters", input:"AngosturaBitters"},
    {nombre:"Red vermut", id:"label-vermut_rojo", input:"VermutRojo"},
    {nombre:"Campari", id:"label-campari", input:"Campari"},
    {nombre:"Coconut cream", id:"label-crema_coco", input:"CremaCoco"},
    {nombre:"Pinaple juice", id:"label-jugo_pina", input:"JugoPina"},
    {nombre:"Almond liquor", id:"label-licor_arandano", input:"LicorArandano"},
    {nombre:"Egg white", id:"label-clara", input:"ClaraHuevo"},
    {nombre:"Sweet vermut", id:"label-vermut_dulce", input:"VermutDulce"},
    {nombre:"Orange liquor", id:"label-licor_naranja", input:"LicorNaranja"},
    {nombre:"Ginger beer", id:"label-agua_gengibre", input:"AguaGengibre"},
    {nombre:'Coffee', id:'label-coffee', input:'Coffee'}
]

const solidos =[
    {nombre:"Salt", id:"label-sal", input:"Sal"},
    {nombre:"Lime slice", id:"label-rodaja_limon", input:"RodajaLimon"},
    {nombre:"Ice", id:"label-hielo", input:"Hielo"},
    {nombre:"Olive", id:"label-aceituna", input:"Aceituna"},
    {nombre:"Fresh mint", id:"label-menta", input:"HojaMenta"},
    {nombre:"Lemon slice", id:"label-rodaja_lima", input:"RodajaLima"},
    {nombre:"Cherry", id:"label-cereza", input:"Cereza"},
    {nombre:"Orange peel", id:"label-cascara_naranja", input:"CascaraNaranja"},
    {nombre:"Orange slice", id:"label-rodaja_naranja", input:"RodajaNaranja"},
    {nombre:"Pinaple slice", id:"label-rodaja_pina", input:"RodajaPina"},
    {nombre:"Lime peel", id:"label-cascara_limon", input:"CascaraLimon"},
    {nombre:"Sugar cube", id:"label-terron_azucar", input:"TerronAzucar"}
]

const volumenes =[
    {nombre:"1/4 oz", id:"label-1/4"},
    {nombre:"1/2 oz", id:"label-1/2"},
    {nombre:"3/4 oz", id:"label-3/4"},
    {nombre:"1 oz", id:"label-1"},
    {nombre:"1.5 oz", id:"label-11/2"},
    {nombre:"2 oz", id:"label-2"},
    {nombre:"2.5 oz", id:"label-21/2"},
    {nombre:"3 oz", id:"label-3"},
    {nombre:"2-3 dashes", id:"label-dashes"},
    {nombre:"To taste", id:"label-algusto"}
]

const cantidades =[
    {nombre:"1", id:"label-1c"},
    {nombre:"1/2 ", id:"label-1/2"},
    {nombre:"2", id:"label-2c"},
    {nombre:"3", id:"label-3c"},
    {nombre:"4", id:"label-4c"},
    {nombre:"5", id:"label-5c"},
    {nombre:"6-8", id:"label-6c"},
    {nombre:"2 spoons", id:"label-2cucha"},
    {nombre:"1 g", id:"label-1g"},
    {nombre:"5 g", id:"label-5g"}
]

tragos.push(Margarita, Martini, Mojito, OldFashioned, Negroni, PiñaColada, Caipirinha, Cosmopolitan, WhiskySour, Manhattan, Daiquiri, MaiTai, MoscowMule, AperolSpritz, TomCollins, Carajillo)

function iniciarPagina(){
sectionIntroduccion.style.display = "flex"
sectionGuia.style.display = "none"
sectionInformacionBebidas.style.display = "none"
sectionJuego.style.display="none"
sectionJuego2.style.display="none"
sectionMedidas.style.display="none"
sectionEmployees.style.display='none'
sectionDrinksInfo.style.display='none'
}

function iniciarInputs(contenedor, drinks, nombreDeClase){
    contenedor.innerHTML = ""
    drinks.forEach((drink) =>{
        opcionDeTragos =`
        <input  type="radio" id=${drink.id} name="pisto"/>
        <label class=${nombreDeClase}  for=${drink.id} >
        <img src=${drink.foto}  alt=${drink.id}}>
        <div id="parrafos">
            <p>${drink.nombre}</p>
            <p id="price">$${drink.price}</p>
        </div>    
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
    sectionMedidas.style.display="none"
}
function getIntoEmployeesInfo(){
    sectionIntroduccion.style.display = 'none'
    sectionEmployees.style.display = 'flex'
}
function getIntoDrinksInfo(){
    sectionIntroduccion.style.display = 'none'
    sectionDrinksInfo.style.display = 'flex'
}


botonInformacion.addEventListener("click", iniciarGuia)
botonRegreso.addEventListener("click", iniciarPagina)
botonRegreso2.addEventListener("click", regresarGuia)
botonJuego.addEventListener("click", iniciarJuego)
botonRegreso3.addEventListener("click", iniciarPagina)
botonRegreso4.addEventListener("click", regresarAlJuego)
botonJuego4.addEventListener("click", juegoMedidas)
botonRegreso5.addEventListener("click", regresarAlJuego )
sectionDrinksLink.addEventListener('click', getIntoDrinksInfo)
sectionEmployeesLink.addEventListener('click', getIntoEmployeesInfo)

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
    inputCarajillo = document.getElementById('Carajillo')
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
    inputCarajillo2 = document.getElementById('Carajillo2')
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
    }else if(inputCarajillo.checked == true){
        bebidaUsuario = inputCarajillo.id
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
    let precioBebida
    for (let i = 0; i < tragos.length; i++) {
        if(bebidaUsuario === tragos[i].id){
            listaIngredientes = tragos[i].ingredientes
            paisOrigen = tragos[i].pais
            añoCreacion = tragos[i].año
            imagenBebida = tragos[i].foto
            nombreBebida = tragos[i].nombre
            precioBebida = tragos[i].price
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
        ${lista.liquido ? `<p> We use ${lista.liquido} in a qunatity of ${lista.cantidad}</p>` : ''}
        ${lista.solido ? `<p> We use ${lista.solido} in a quantity of ${lista.cantidad}</p>` : ''}
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


function crearInputsconIDs(lista){
let listaDeInputsLocal = []
    lista.forEach((valor)=>{
    let inputId = `input${valor.input}`
    window[inputId] = document.getElementById(valor.id)
   listaDeInputsLocal.push(window[inputId]);
    })
    return listaDeInputsLocal
}


function imprimirListas(contenedor, lista, nombreDeClase){
    shuffleArray(lista)
    contenedor.innerHTML = ""
    lista.forEach((valor) =>{
        opcionMateriales =`
        <input  type="checkbox" id=${valor.id} name=${valor.nombre}/>
        <label class=${nombreDeClase}  for=${valor.id} >
            <p>${valor.nombre}</p>
        </label>
        `
        contenedor.innerHTML += opcionMateriales

})
return listaInputs=crearInputsconIDs(lista)
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
    }else if(inputCarajillo2.checked == true){
        bebidaJuego = inputCarajillo2.id
    }else{
        alert("No seleccionaste ninguna bebida ")
        return
    }
    extraerInformacionJuego(bebidaJuego)
    listaDeInputsAlcoholes=imprimirListas(contenedorJuego, alcoholes, "alcoholes")
    listaDeInputsLiquidos=imprimirListas(contenedorJuego2, liquidos, "liquidos")
    listaDeInputsSolidos=imprimirListas(contenedorJuego3, solidos, "solidos")
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
    console.log(imagenBebida)
    console.log(paisOrigen)
    console.log(añoCreacion)
}

function iniciarJuego2(){
    seleccionarBebidaJuego()
    console.log(nombreBebida)
    botonJuego3.addEventListener("click", comenzarJuego)
}

function ingredientesCorrectos3(nombreBebida) {
    switch (nombreBebida) {
        case "Margarita":
            return [inputTequila, inputTripleSec, inputJugoLimon, inputSal, inputHielo, inputRodajaLimon];

        case "Martini":
            return [inputGinebra, inputVodka, inputVermutSeco, inputHielo, inputAceituna, inputCascaraLimon];

        case "Mojito":
            return [inputRonBlanco, inputJarabeAzucar, inputJugoLima, inputAguaMineral, inputHojaMenta, inputHielo, inputRodajaLima];

        case "Old Fashioned":
            return [inputWhiskyBourbon, inputAngosturaBitters, inputJarabeAzucar, inputTerronAzucar, inputCascaraNaranja, inputCereza];

        case "Negroni":
            return [inputGinebra, inputVermutRojo, inputCampari, inputHielo, inputCascaraNaranja];

        case "Piña Colada":
            return [inputRonBlanco, inputCremaCoco, inputJugoPina, inputHielo, inputRodajaPina, inputCereza];

        case "Caipirinha":
            return [inputChaca, inputJarabeAzucar, inputHielo, inputJugoLimon];

        case "Cosmopolitan":
            return [inputVodka, inputTripleSec, inputLicorArandano, inputJugoLimon, inputHielo, inputRodajaLimon, inputCascaraNaranja];

        case "Whisky Sour":
            return [inputWhisky, inputJarabeAzucar, inputJugoLimon, inputClaraHuevo, inputHielo, inputRodajaNaranja, inputCereza];

        case "Manhattan":
            return [inputWhisky, inputVermutDulce, inputAngosturaBitters, inputHielo, inputCereza];

        case "Daiquiri":
            return [inputRonBlanco, inputJarabeAzucar, inputJugoLimon, inputHielo, inputRodajaLimon];

        case "Mai Tai":
            return [inputRonOscuro, inputLicorAlmendra, inputLicorNaranja, inputRonBlanco, inputJugoLimon, inputHielo, inputRodajaPina, inputCereza];

        case "Moscow Mule":
            return [inputVodka, inputJugoLima, inputAguaGengibre, inputHielo, inputRodajaLima];

        case "Aperol Spritz":
            return [inputAperol, inputVinoEspumoso, inputAguaMineral, inputHielo, inputRodajaNaranja];

        case "Tom Collins":
            return [inputGinebra, inputJarabeAzucar, inputAguaMineral, inputJugoLimon, inputHielo, inputRodajaNaranja, inputCereza];

        case 'Carajillo':
            return [input43Liquor, inputCoffee, inputHielo];
        default:
            return [];
    }
}

function verificarIngredientes(inputs, nombreBebida){
const ingredientes = ingredientesCorrectos3(nombreBebida)

for(const input of inputs){
    const checkbox = document.getElementById(input.id)

    if(checkbox){
        const inputMarcado = ingredientes.includes(input)

        if(checkbox.checked !== inputMarcado){
            return false
        }
    }
}

for(const input of inputs){
    const checkbox = document.getElementById(input.id)

    if(checkbox){
        const inputDesmarcado = !ingredientes.includes(input)

        if(inputDesmarcado && checkbox.checked){
            return false
        }
    }
}
return true

}

function revisarIngredientes(nombreBebida){
    if(verificarIngredientes(listaDeInputsAlcoholes, nombreBebida) && verificarIngredientes(listaDeInputsLiquidos, nombreBebida) && verificarIngredientes(listaDeInputsSolidos, nombreBebida)){
        alert("Es correcto, ya sabes que lleva un/una: "+nombreBebida)
        return true
    }else{
        alert("No has seleccionado bien tus ingredientes")
        return false
    }

}

function comenzarJuego(){
    let ingredientesCorrectos = false

    switch(nombreBebida){
        case "Margarita":
        ingredientesCorrectos = revisarIngredientes(nombreBebida);
        break;

        case "Martini":
            ingredientesCorrectos = revisarIngredientes(nombreBebida);
            break;

        case "Mojito":
            ingredientesCorrectos = revisarIngredientes(nombreBebida);
            break;

        case "Old Fashioned":
            ingredientesCorrectos = revisarIngredientes(nombreBebida);
            break;

        case "Negroni":
            ingredientesCorrectos = revisarIngredientes(nombreBebida);
            break;
            
        case "Piña Colada":
            ingredientesCorrectos = revisarIngredientes(nombreBebida);
            break;
            
        case "Caipirinha":
            ingredientesCorrectos = revisarIngredientes(nombreBebida);
            break;
            
        case "Cosmopolitan":
            ingredientesCorrectos = revisarIngredientes(nombreBebida);
            break;

        case "Whisky Sour":
            ingredientesCorrectos = revisarIngredientes(nombreBebida);
            break;

        case "Manhattan":
            ingredientesCorrectos = revisarIngredientes(nombreBebida);
            break;

        case "Daiquiri":
            ingredientesCorrectos = revisarIngredientes(nombreBebida);
            break;

        case "Mai Tai":
            ingredientesCorrectos = revisarIngredientes(nombreBebida);
            break;

        case "Moscow Mule":
            ingredientesCorrectos = revisarIngredientes(nombreBebida);
            break;

        case "Aperol Spritz":
            ingredientesCorrectos = revisarIngredientes(nombreBebida);
            break;

        case "Tom Collins":
            ingredientesCorrectos = revisarIngredientes(nombreBebida);
            break;

        case 'Carajillo':
            ingredientesCorrectos = revisarIngredientes(nombreBebida);
            break;

        default:
            alert("No seleccionastes ningun ingrediente");

    }
    if(ingredientesCorrectos){
        sectionJuego2.style.display = "none"
        sectionMedidas.style.display = "flex"
        extraerInformacionMedidas(bebidaJuego)
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
    idsLiquidos= mostrarInformacionLiquidos(listaIngredientes, volumenes, contenedorIngredientes)
    idsSolidos= mostrarInformacionSolidos(listaIngredientes, cantidades, contenedorIngredientes2)
    crearVariablesLiquidos()
    crearVariablesSolidos()

}

function mostrarInformacionLiquidos(listaIngredientes, onzas, contenedor){
    contenedor.innerHTML = ""
    let idsLiquidosLocal = []

    listaIngredientes.forEach((lista)=>{
        if(lista.liquido !== undefined){
        let listaDesplegada=`
        <div id="descripcion" class="descripcion2">
        <p> It goes with ${lista.liquido} in a quantity of: </p>
        </div>
        `;
        onzas.forEach((volumen)=>{
            let uniqueIdLiquido = `${lista.liquido}_liquido_${volumen.id}`
            listaDesplegada +=`
            <input type="radio" name="${lista.liquido}" value="${volumen.nombre}" id="${uniqueIdLiquido}">
            <label class="volumenes" for="${uniqueIdLiquido}">${volumen.nombre}</label>
            `
            idsLiquidosLocal.push(uniqueIdLiquido)
        })
        contenedor.innerHTML += listaDesplegada
    }
    })
    return idsLiquidosLocal
}

function mostrarInformacionSolidos(listaIngredientes, cantidades, contenedor){
    contenedor.innerHTML = ""
    let idsSolidosLocal = []

    listaIngredientes.forEach((lista)=>{
        if(lista.solido !== undefined){
        let listaDesplegada=`
        <div id="descripcion" class="descripcion2">
        <p> It goes whith ${lista.solido} in a quantity of: </p>
        </div>
        `;
        cantidades.forEach((cantidad)=>{
            let uniqueIdSolido = `${lista.solido}_solido_${cantidad.id}`
            listaDesplegada +=`
            <input type="radio" name="${lista.solido}" value="${cantidad.nombre}" id="${uniqueIdSolido}">
        <label class="volumenes" for="${uniqueIdSolido}">${cantidad.nombre}</label>
            `
            idsSolidosLocal.push(uniqueIdSolido)
        })
        contenedor.innerHTML += listaDesplegada
    }
    })
    return idsSolidosLocal
}

function crearVariablesLiquidos(){
    for (let i = 0; i < idsLiquidos.length; i++) {
    let nombreVariable = `variableLiquido${i + 1}` 
    window[nombreVariable] = document.getElementById(idsLiquidos[i])       
    }
}

function crearVariablesSolidos(){
    for (let i = 0; i < idsSolidos.length; i++) {
    let nombreVariable = `variableSolido${i + 1}` 
    window[nombreVariable] = document.getElementById(idsSolidos[i])       
    }
}

function revisarMedidas(nombreBebida, medidasRequeridas){
    const seleccionMedidas = medidasRequeridas.every((medida)=> medida.checked);

    if(seleccionMedidas){
        alert ("Es correcto, ya sabes preparar con las medidas correctas un/una "+nombreBebida)
        return true;
    }else{
        alert("No seleccionaste las medidas correctas, vuelve a intentarlo")
        return false;
    }
}


function juegoMedidas(){
    let ingredientesCorrectos2 = false
    switch(nombreBebida){
        case "Margarita":
        ingredientesCorrectos2 = revisarMedidas(nombreBebida, [variableLiquido6, variableLiquido14, variableLiquido24, variableSolido9, variableSolido20, variableSolido21]);
        break;

        case "Martini":
            ingredientesCorrectos2 = revisarMedidas(nombreBebida, [variableLiquido7, variableLiquido12, variableSolido10, variableSolido1]);
            break;

        case "Mojito":
            ingredientesCorrectos2 = revisarMedidas(nombreBebida, [variableLiquido6, variableLiquido14, variableLiquido24, variableLiquido31, variableSolido7, variableSolido20, variableSolido21]);
            break;

        case "Old Fashioned":
            ingredientesCorrectos2 = revisarMedidas(nombreBebida,[variableLiquido6, variableLiquido19, variableLiquido22, variableSolido1, variableSolido11]);
            break;

        case "Negroni":
            ingredientesCorrectos2 = revisarMedidas(nombreBebida, [variableLiquido4, variableLiquido14, variableLiquido24, variableSolido10, variableSolido11]);
            break;
            
        case "Piña Colada":
            ingredientesCorrectos2 = revisarMedidas(nombreBebida, [variableLiquido6, variableLiquido18, variableLiquido28, variableSolido10, variableSolido11]);
            break;
            
        case "Caipirinha":
            ingredientesCorrectos2 = revisarMedidas(nombreBebida, [variableLiquido6, variableSolido8, variableSolido20, variableSolido22]);
            break;
            
        case "Cosmopolitan":
            ingredientesCorrectos2 = revisarMedidas(nombreBebida, [variableLiquido5, variableLiquido14, variableLiquido22, variableLiquido32, variableSolido10, variableSolido11]);
            break;

        case "Whisky Sour":
            ingredientesCorrectos2 = revisarMedidas(nombreBebida, [variableLiquido6, variableLiquido13, variableLiquido23, variableLiquido40, variableSolido10, variableSolido11]);
            break;

        case "Manhattan":
            ingredientesCorrectos2 = revisarMedidas(nombreBebida, [variableLiquido6, variableLiquido14, variableLiquido29, variableSolido10, variableSolido11]);
            break;

        case "Daiquiri":
            ingredientesCorrectos2 = revisarMedidas(nombreBebida, [variableLiquido6, variableLiquido13, variableLiquido23, variableSolido10, variableSolido11]);
            break;

        case "Mai Tai":
            ingredientesCorrectos2 = revisarMedidas(nombreBebida, [variableLiquido6, variableLiquido13, variableLiquido23, variableLiquido34, variableLiquido44, variableSolido10, variableSolido11]);
            break;

        case "Moscow Mule":
            ingredientesCorrectos2 = revisarMedidas(nombreBebida, [variableLiquido6, variableLiquido14, variableLiquido30, variableSolido10, variableSolido11]);
            break;

        case "Aperol Spritz":
            ingredientesCorrectos2 = revisarMedidas(nombreBebida, [variableLiquido8, variableLiquido18, variableLiquido30, variableSolido10, variableSolido11]);
            break;

        case "Tom Collins":
            ingredientesCorrectos2 = revisarMedidas(nombreBebida, [variableLiquido6, variableLiquido13, variableLiquido23, variableLiquido40, variableSolido10, variableSolido11]);
            break;

        case 'Carajillo':
            ingredientesCorrectos2 = revisarMedidas(nombreBebida, [variableLiquido6, variableLiquido16, variableSolido10])
            break;

        default:
            alert("No seleccionastes ninguna medida");
    }
    if(ingredientesCorrectos2){
        sectionJuego.style.display = "flex"
        sectionMedidas.style.display = "none"
    }

}

window.addEventListener("load", iniciarPagina)