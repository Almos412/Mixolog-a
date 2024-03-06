// INPUTS
const inputDrink = document.getElementById('data-drink')
const inputYear = document.getElementById('data-year')
const inputSeason = document.getElementById('data-season')

// BUTTONS
const buttonSpecificDrink = document.getElementById('individual_average_drink')
const buttonSpecificDrinkAndYear = document.getElementById('individual_average_drink_year')
const buttonSpecificDrinkAndSeason = document.getElementById('individual_average_drink_season')
const buttonAverageAllDrinks = document.getElementById('whole_average_drinks')
const buttonAverageAllDrinksPerYear = document.getElementById('whole_average_drinks_year')
const buttonAverageAllDrinksPerSeason = document.getElementById('whole_average_drinks_season')
const buttonAverage4Seasons = document.getElementById('whole_average_seasons')

//LINK BACK TO MAIN PAGE
const mainPage = document.getElementById('link_Main_Page')

// RESULTS DIV
const resultsDiv = document.getElementById('results')
const resultsAll = document.getElementById('results_All')
let dataPrinted

let seasonObject = {}

for(drink of drinksDataBase){
    if(!seasonObject[drink.name]){
        seasonObject[drink.name] = {}
    }
    for(info of drink.info){
        if(!seasonObject[drink.name][info.season]){
            seasonObject[drink.name][info.season] = []
        }
        seasonObject[drink.name][info.season].push(info.quantity)
    }
}
console.log(seasonObject)

let seasonSummary = {
    Spring:[],
    Summer:[],
    Autumn:[],
    Winter:[]
}

for (let i = 0; i < drinksDataBase.length; i++) {
    for (let e = 0; e < drinksDataBase[i].info.length; e++) {
        const season = drinksDataBase[i].info[e].season
        const quantity = drinksDataBase[i].info[e].quantity
        seasonSummary[season].push(quantity) 
    }
    
}
console.log(seasonSummary)

mainPage.addEventListener('click', iniciarPagina2)
buttonSpecificDrink.addEventListener('click', getAveragePerDrink)
buttonSpecificDrinkAndYear.addEventListener('click', getAveragePerYear)
buttonSpecificDrinkAndSeason.addEventListener('click', getAveragePerSeason)
buttonAverageAllDrinks.addEventListener('click', getAverageAllDrinks)
buttonAverageAllDrinksPerYear.addEventListener('click', getAverageAllDrinksPerYear)
buttonAverageAllDrinksPerSeason.addEventListener('click', getAverageAllDrinksPerSeason)
buttonAverage4Seasons.addEventListener('click', getAveragePerSeason2)

function iniciarPagina2(){
    sectionIntroduccion.style.display = "flex"
    sectionGuia.style.display = "none"
    sectionInformacionBebidas.style.display = "none"
    sectionJuego.style.display="none"
    sectionJuego2.style.display="none"
    sectionMedidas.style.display="none"
    sectionEmployees.style.display='none'
    sectionDrinksInfo.style.display='none'
    resultsAll.innerHTML = ''
    resultsDiv.innerHTML = ''
}

function findDrink(){
    const nameInput = inputDrink.value.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
    return drinksDataBase.find(drink => drink.name == nameInput)
}
function sortListAscendingBidimensional(list, i){
    list.sort(function(a, b){
        return b[i] - a[i]
    })
    return list
}
function sortListAscendingBidimensional2(list, i){
    list.sort(function(a, b){
        return b[i].average - a[i].average
    })
    return list
}

function getAveragePerDrink(){
    resultsDiv.innerHTML = ""
    let infoDrinks = {}
    let drinkMain = findDrink(inputDrink.value)
    let sumQuantity = 0
    let average = 0
    resultsAll.innerHTML=' '
    if(findDrink(inputDrink.value)){
        let drinkSearching = findDrink(inputDrink.value).info
    for (let i = 0; i < drinkSearching.length; i++) {
         sumQuantity += drinkSearching[i].quantity
    }
    average = Math.round(sumQuantity/drinkSearching.length)
    console.log(inputDrink.value, average)
    console.log(drinkMain)
        dataPrinted = `
        <div id='result2'>
        <p class='result_paragraph'>The average of <span class='result_span'>${drinkMain.name}s</span> sold in the past two years is <span>${average}</span>. </p>
        <img src=${drinkMain.image} id="result_image" alt='${drinkMain.name}_image'>
        </div>`
        resultsDiv.innerHTML = dataPrinted
    }else{
        dataPrinted = `
        <p class='result_paragraph'> This drink doesn't exist in our data base, please check the name you typed.</p>`
        resultsDiv.innerHTML = dataPrinted
    }
}

function getAveragePerYear(){
    let drinkMain = findDrink(inputDrink.value)
    let sumQuantity = 0
    let count = 0
    resultsDiv.innerHTML = " "
    resultsAll.innerHTML = ''
    if(drinkMain && (inputYear.value == 2022 || inputYear.value == 2023)){
    let drinkSearching = findDrink(inputDrink.value).info
    let drinkName = findDrink(inputDrink.value).name

    for (let i = 0; i < drinkSearching.length; i++) {
        if (drinkSearching[i].year == inputYear.value){
            sumQuantity += drinkSearching[i].quantity
            count++
        }
    }

    if(count > 0){
        const average = Math.round(sumQuantity/count)
        console.log(`The average of the ${drinkName} in the year ${inputYear.value} is ${average}`)
        dataPrinted=`
        <div id='result2'>
        <p class='result_paragraph'>The average of <span class='result_span'>${drinkMain.name}s</span> sold in the year <span class='result_span'>${inputYear.value}</span> is <span>${average}</span>.</p>
        <img src=${drinkMain.image} id="result_image" alt='${drinkMain.name}_image'>
        <div>`
        resultsDiv.innerHTML = dataPrinted
        }
    }else{
        dataPrinted = `
        <p class='result_paragraph'> This drink or year doesn't exist in our data base, please check the information you typed.</p>`
        resultsDiv.innerHTML = dataPrinted
    }
}   


function getAveragePerSeason(){
    let drinkMain = findDrink(inputDrink.value)
    let season1 = inputSeason.value.charAt(0).toUpperCase() + inputSeason.value.slice(1).toLowerCase()
    resultsDiv.innerHTML = ' '
    resultsAll.innerHTML = ' '
    let sumQuantity = 0
    let count = 0
    if(drinkMain && (season1 == 'Spring' || season1 == 'Summer' || season1 == 'Autumn' || season1 == 'Winter')){
    let drinkSearching = findDrink(inputDrink.value).info
    let drinkName = findDrink(inputDrink.value).name
    for (let i = 0; i < drinkSearching.length; i++) {
        if (drinkSearching[i].season === season1){
            sumQuantity += drinkSearching[i].quantity
            count++
        }
        console.log(sumQuantity, count)
    }

    if(count > 0){
        const average = Math.floor(sumQuantity/count)
        console.log(`The average of the ${drinkName} in the season ${season1} is ${average}`)
        dataPrinted = `
        <div id='result2'>
        <p class='result_paragraph'>The average of <span class='result_span'>${drinkMain.name}s</span> sold in the past two years in the <span class='result_span'>${season1}</span> is <span>${average}</span>.</p>
        <img src=${drinkMain.image} id="result_image" alt='${drinkMain.name}_image'>
        </div>`
        resultsDiv.innerHTML = dataPrinted
    }
}else{
    dataPrinted = `
    <p class='result_paragraph'> This drink or season doesn't exist in our data base, please check the information you typed.</p>`
    resultsDiv.innerHTML = dataPrinted
}
}

function getAverageAllDrinks(){
    let sumQuantity = 0 
    let average = 0
    let infoDrinks = {}
    let array = []
    resultsAll.innerHTML = ' '
    resultsDiv.innerHTML = ' '
    for (let i = 0; i < drinksDataBase.length; i++) {
        sumQuantity = 0
       for (let e = 0; e < drinksDataBase[i].info.length; e++) {
        sumQuantity += drinksDataBase[i].info[e].quantity
       }
       average = Math.round(sumQuantity/drinksDataBase[i].info.length)
       console.log(average)
       infoDrinks[drinksDataBase[i].name] = {
        average: average,
        image:  drinksDataBase[i].image
       } 
    }
    console.log(infoDrinks)
    const listArray = Object.entries(infoDrinks)
    array = sortListAscendingBidimensional2(listArray, 1)
    console.log(array)
    array.forEach((drink, index) => {
        dataPrinted=`
        <div id='result2'>
            <p class='average_all'>${index + 1}- The average of <span>${drink[0]}s</span> sold in the past two years is <span>${drink[1].average}</span>.<p>
            <img src=${drink[1].image} alt='${drink[0]}_image' id='${drink[0]}_id'>
        </div>    
        `
        resultsAll.innerHTML += dataPrinted
    });
}

function getAverageAllDrinksPerYear(){
    let sumQuantity = 0 
    let average = 0
    let infoDrinks = {}
    let array = []
    resultsAll.innerHTML = ' '
    resultsDiv.innerHTML = ' '
    if(inputYear.value == 2022 || inputYear.value == 2023){
    for (let i = 0; i < drinksDataBase.length; i++) {
        sumQuantity = 0
        let count = 0
       for (let e = 0; e < drinksDataBase[i].info.length; e++) {
        if(drinksDataBase[i].info[e].year == inputYear.value){
        sumQuantity += drinksDataBase[i].info[e].quantity
        count++
        }
       }
       console.log(drinksDataBase[i].name, sumQuantity, count)
       average = Math.round(sumQuantity/count)

       infoDrinks[drinksDataBase[i].name] = {
        average: average,
        image: drinksDataBase[i].image,
        year:  inputYear.value
       }
    }
    console.log(infoDrinks)
    const listArray = Object.entries(infoDrinks)
    console.log(listArray)
     array = sortListAscendingBidimensional2(listArray, 1)
     array.forEach((drink, index) => {
        dataPrinted=`
        <div id='result2'>
            <p class='average_all'>${index + 1}- The average of <span>${drink[0]}s</span> sold in the year <span>${drink[1].year}</span> is <span>${drink[1].average}</span>.<p>
            <img src=${drink[1].image} alt='${drink[0]}_image' id='${drink[0]}_id'>
        </div>    
        `
        resultsAll.innerHTML += dataPrinted
    });
}else{
    dataPrinted = `
    <p class='result_paragraph'> This year doesn't exist in our data base, please check the information you typed.</p>`
    resultsDiv.innerHTML = dataPrinted
}
}
function getAverageAllDrinksPerSeason(){
    resultsAll.innerHTML = ''
    resultsDiv.innerHTML = ''
    let sumQuantity = 0
    let inputseason1 = inputSeason.value.charAt(0).toUpperCase() + inputSeason.value.slice(1).toLowerCase()
    let infoDrinks = {}
    let array = []
    let count = 0
    let average = 0
    if(inputseason1 == 'Spring' || inputseason1 == 'Summer' || inputseason1 == 'Autumn' || inputseason1 == 'Winter'){
    for (let i = 0; i < drinksDataBase.length; i++) {
        sumQuantity = 0
        count = 0
        for (let e = 0; e < drinksDataBase[i].info.length; e++) {
            if(drinksDataBase[i].info[e].season == inputseason1){
                sumQuantity += drinksDataBase[i].info[e].quantity
                count++
            }
        }    
        average = Math.round(sumQuantity/count)  

       infoDrinks[drinksDataBase[i].name]= {
        average: average,
        season: inputseason1,
        image: drinksDataBase[i].image    
    } 
    }
    const listaArray = Object.entries(infoDrinks)
    array = sortListAscendingBidimensional2(listaArray, 1)
    array.forEach((drink, index) =>{
        dataPrinted=`
        <div id='result2'>
            <p class='average_all'>${index + 1}- The average of <span>${drink[0]}s</span> sold in the season <span>${drink[1].season}</span> the past two years is <span>${drink[1].average}</span>.<p>
            <img src=${drink[1].image} alt='${drink[0]}_image' id='${drink[0]}_id'>
        </div>    
        `
        resultsAll.innerHTML += dataPrinted
    })
}else{
    dataPrinted = `
    <p class='result_paragraph'> This season doesn't exist in our data base, please check the information you typed.</p>`
    resultsDiv.innerHTML = dataPrinted
}
}

function getAveragePerSeason2(){
    let sumQuantity = 0 
    let infoSeason = {}
    let keys = Object.keys(seasonSummary)
    let array1 = []
    let array = []
    resultsAll.innerHTML = ' '
    resultsDiv.innerHTML = ' '
    keys.forEach(season =>{
        sumQuantity = seasonSummary[season].reduce((acc, current) => acc + current, 0)
        const average = Math.round(sumQuantity/seasonSummary[season].length)
        infoSeason[season] = average
    })
    array1 = Object.entries(infoSeason)
    array = sortListAscendingBidimensional(array1, 1)
    console.log(array, array1)
    array.forEach((season, index) => {
        dataPrinted=`
        <div id='result2'>
            <p class='average_all'>${index + 1}- The average of drinks sold in the season of <span>${season[0]}</span> the past two years is <span>${season[1]}</span>.<p>
        </div>    
        `
        resultsAll.innerHTML += dataPrinted
    });
}