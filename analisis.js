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
        average = sumQuantity/count

        if(!infoDrinks[drinksDataBase[i].name]){
            infoDrinks[drinksDataBase[i].name] = {}
        }    

       infoDrinks[drinksDataBase[i].name][inputseason] = average  
    }

    return infoDrinks


}


