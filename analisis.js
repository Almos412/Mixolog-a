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

function findDrink(name){
    const nameInput = name.split(' ')
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

function getAveragePerDrink(name){
    let drinkSearching = findDrink(name).info
    let sumQuantity = 0
    let average = 0
    for (let i = 0; i < drinkSearching.length; i++) {
         sumQuantity += drinkSearching[i].quantity
    }
    average = Math.round(sumQuantity/drinkSearching.length)
    return average
}

function getAveragePerYear(name, year){
    let drinkName = findDrink(name).name
    let drinkSearching = findDrink(name).info
    let sumQuantity = 0
    let count = 0

    for (let i = 0; i < drinkSearching.length; i++) {
        if (drinkSearching[i].year === year){
            sumQuantity += drinkSearching[i].quantity
            count++
        }
        console.log(sumQuantity, count)
    }

    if(count > 0){
        const average = Math.round(sumQuantity/count)
        console.log(`The average of the ${drinkName} in the year ${year} is ${average}`)
        return average
    }else {
        console.log("That year doesn't exist in our data base")
        return null
    }
}

function getAveragePerSeason(name, season){
    let drinkName = findDrink(name).name
    let season1 = season.charAt(0).toUpperCase() + season.slice(1).toLowerCase()
    let drinkSearching = findDrink(name).info
    let sumQuantity = 0
    let count = 0

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
        return average
    }else {
        console.log("That year doesn't exist in our data base")
        return null
    }
}

function getAverageAllDrinks(){
    let sumQuantity = 0 
    let average = 0
    let infoDrinks = {}
    for (let i = 0; i < drinksDataBase.length; i++) {
        sumQuantity = 0
       for (let e = 0; e < drinksDataBase[i].info.length; e++) {
        sumQuantity += drinksDataBase[i].info[e].quantity
       }
       average = Math.round(sumQuantity/drinksDataBase[i].info.length)
       console.log(average)
       infoDrinks[drinksDataBase[i].name] = average 
    }
    console.log(infoDrinks)
    const listArray = Object.entries(infoDrinks)
    return sortListAscendingBidimensional(listArray, 1)
}

function getAverageAllDrinksPerYear(year){
    let sumQuantity = 0 
    let average = 0
    let infoDrinks = {}
    for (let i = 0; i < drinksDataBase.length; i++) {
        sumQuantity = 0
        let count = 0
       for (let e = 0; e < drinksDataBase[i].info.length; e++) {
        if(drinksDataBase[i].info[e].year === year){
        sumQuantity += drinksDataBase[i].info[e].quantity
        count++
        }
       }
       console.log(drinksDataBase[i].name, sumQuantity, count)
       average = Math.round(sumQuantity/count)

       if (!infoDrinks[year]){
        infoDrinks[year] = {}
       }

       infoDrinks[year][drinksDataBase[i].name] = average 
    }
    console.log(infoDrinks)
    const listArray = Object.entries(infoDrinks[year])
    console.log(listArray)
    return sortListAscendingBidimensional(listArray, 1)
}

function getAverageAllDrinksPerSeason(season){
    let sumQuantity = 0
    let inputseason = season.charAt(0).toUpperCase() + season.slice(1).toLowerCase()
    let infoDrinks = {}
    let count = 0
    let average = 0

    for (let i = 0; i < drinksDataBase.length; i++) {
        sumQuantity = 0
        count = 0
        for (let e = 0; e < drinksDataBase[i].info.length; e++) {
            if(drinksDataBase[i].info[e].season === inputseason){
                sumQuantity += drinksDataBase[i].info[e].quantity
                count++
            }
        }    
        average = Math.round(sumQuantity/count)

        if(!infoDrinks[drinksDataBase[i].name]){
            infoDrinks[drinksDataBase[i].name] = {}
        }    

       infoDrinks[drinksDataBase[i].name][inputseason] = average 
       console.log(`The average of ${drinksDataBase[i].name} that were sold in the ${inputseason} was of ${average}`)
    }
    return infoDrinks
}

function getAveragePerSeason(){
    let sumQuantity = 0 
    let infoSeason = {}
    let keys = Object.keys(seasonSummary)

    keys.forEach(season =>{
        sumQuantity = seasonSummary[season].reduce((acc, current) => acc + current, 0)
        const average = Math.round(sumQuantity/seasonSummary[season].length)
        infoSeason[season] = average
    })
    return infoSeason
}