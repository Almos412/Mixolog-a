const employeesInfo = []

class employees{
    constructor(position, salary, years_experience, days, schedule, image){
        this.position = position
        this.salary = salary
        this.years_experience = years_experience
        this.days = days
        this.schedule = schedule
        this.image = image
    }
}

let bartender = new employees('Bartender', 20, 2, 'Thursday, Friday, Saturday, Sunday', '6:00 pm - 3:00 am', './images/Bartender_job.jpeg')
let backBartender = new employees('Barback', 15, 1, 'Monday, Tuesday, Wednesday', '2:00 pm - 11:00 pm', './images/Barback_job.webp')
let waiter = new employees("Waiter", 14, 1, 'week days and weekends', '6:00 pm - 12:00 am', './images/waiter_job.jpeg')
let runner = new employees('Runner', 12, 0, 'week days and weekends', '2:00 pm - 12:00 am', './images/runner_job.webp')
let hostess = new employees('Hostess', 10, 0, 'week days and weekends', '2:00 pm - 11:00 pm', './images/Hostess_job.jpeg')
let chef = new employees("Chef", 25, 3, 'week days and weekends', '11:00 am - 10:00 pm', '/images/Chef_job.jpeg')
let backChef = new employees('Chef Assistant', 18, 1, 'week days and weekends', '11:00 am - 10:00 pm', './images/Assistan_job.jpeg')
let dishWasher = new employees('Dishwasher', 12, 0, 'week days', '12:00 pm - 10:00 pm', './images/Dishwasher_job.jpeg')

employeesInfo.push(bartender, backBartender, waiter, runner, hostess, chef, backChef, dishWasher)

const drinksDataBase = []

class drinksInfo{
    constructor(name, image){
        this.name = name
        this.image = image
        this.info = []
    }

}

let margaritaInfo = new drinksInfo('Margarita', "./images/margarita.jpeg")
let martiniInfo = new drinksInfo('Martini', "./images/martini.jpeg")
let mojitoInfo = new drinksInfo('Mojito', "./images/mojito.webp")
let oldFashionInfo = new drinksInfo('Old Fashioned', "./images/old_fashioned.jpeg")
let negroniInfo = new drinksInfo('Negroni', "./images/negroni.jpeg")
let pinaColadaInfo = new drinksInfo('Piña Colada', "./images/piña_colada.webp")
let caipirinhaInfo = new drinksInfo('Caipirinha', "./images/caipirinha.webp")
let cosmopolitanInfo = new drinksInfo('Cosmopolitan', "./images/cosmopolitan.webp")
let whiskySourInfo = new drinksInfo('Whisky Sour', "./images/whiskey_sour.jpeg")
let manhattanInfo = new drinksInfo('Manhattan', "./images/manhattan.jpeg")
let daiquiriInfo = new drinksInfo('Daiquiri', "./images/daiquiri.jpeg")
let maiTaiInfo = new drinksInfo('Mai Tai', "./images/mai_tai.jpeg")
let moscowMuleInfo = new drinksInfo('Moscow Mule', "./images/moscow_mule.jpeg")
let aperolSpritzInfo = new drinksInfo('Aperol Spritz', "./images/aperol.jpeg")
let tomCollinsInfo = new drinksInfo('Tom Collins', "./images/tom_collins.jpeg")
let carajilloInfo = new drinksInfo('Carajillo', './images/carajillo.jpeg')

margaritaInfo.info.push(
    {year: 2022, season: 'Spring', price: 14, quantity: 5483},
    {year: 2022, season: 'Summer', price: 14, quantity: 8903},
    {year: 2022, season: 'Autumn', price: 14, quantity: 2230},
    {year: 2022, season: 'Winter', price: 14, quantity: 1203},
    {year: 2023, season: 'Spring', price: 15, quantity: 5294},
    {year: 2023, season: 'Summer', price: 15, quantity: 9034},
    {year: 2023, season: 'Autumn', price: 15, quantity: 2223},
    {year: 2023, season: 'Winter', price: 15, quantity: 983},
)

martiniInfo.info.push(
    {year: 2022, season: 'Spring', price: 18, quantity: 4905},
    {year: 2022, season: 'Summer', price: 18, quantity: 6092},
    {year: 2022, season: 'Autumn', price: 18, quantity: 8902},
    {year: 2022, season: 'Winter', price: 18, quantity: 3054},
    {year: 2023, season: 'Spring', price: 20, quantity: 6352},
    {year: 2023, season: 'Summer', price: 20, quantity: 6091},
    {year: 2023, season: 'Autumn', price: 20, quantity: 9073},
    {year: 2023, season: 'Winter', price: 20, quantity: 4023},
)

mojitoInfo.info.push(
    {year: 2022, season: 'Spring', price: 16, quantity: 8902},
    {year: 2022, season: 'Summer', price: 16, quantity: 11902},
    {year: 2022, season: 'Autumn', price: 16, quantity: 6092},
    {year: 2022, season: 'Winter', price: 16, quantity: 1023},
    {year: 2023, season: 'Spring', price: 18, quantity: 10234},
    {year: 2023, season: 'Summer', price: 18, quantity: 13092},
    {year: 2023, season: 'Autumn', price: 18, quantity: 3789},
    {year: 2023, season: 'Winter', price: 18, quantity: 1902},
)

oldFashionInfo.info.push(
    {year: 2022, season: 'Spring', price: 19, quantity: 3067},
    {year: 2022, season: 'Summer', price: 19, quantity: 4082},
    {year: 2022, season: 'Autumn', price: 19, quantity: 6802},
    {year: 2022, season: 'Winter', price: 19, quantity: 7023},
    {year: 2023, season: 'Spring', price: 20, quantity: 2900},
    {year: 2023, season: 'Summer', price: 20, quantity: 4087},
    {year: 2023, season: 'Autumn', price: 20, quantity: 8023},
    {year: 2023, season: 'Winter', price: 20, quantity: 7891},
)

negroniInfo.info.push(
    {year: 2022, season: 'Spring', price: 19, quantity: 2406},
    {year: 2022, season: 'Summer', price: 19, quantity: 5892},
    {year: 2022, season: 'Autumn', price: 19, quantity: 3765},
    {year: 2022, season: 'Winter', price: 19, quantity: 1903},
    {year: 2023, season: 'Spring', price: 20, quantity: 3094},
    {year: 2023, season: 'Summer', price: 20, quantity: 6098},
    {year: 2023, season: 'Autumn', price: 20, quantity: 2873},
    {year: 2023, season: 'Winter', price: 20, quantity: 1200},
)

pinaColadaInfo.info.push(
    {year: 2022, season: 'Spring', price: 12, quantity: 1309},
    {year: 2022, season: 'Summer', price: 12, quantity: 3194},
    {year: 2022, season: 'Autumn', price: 12, quantity: 802},
    {year: 2022, season: 'Winter', price: 12, quantity: 509},
    {year: 2023, season: 'Spring', price: 14, quantity: 2094},
    {year: 2023, season: 'Summer', price: 14, quantity: 4994},
    {year: 2023, season: 'Autumn', price: 14, quantity: 1001},
    {year: 2023, season: 'Winter', price: 14, quantity: 703},
)

caipirinhaInfo.info.push(
    {year: 2022, season: 'Spring', price: 12, quantity: 1307},
    {year: 2022, season: 'Summer', price: 12, quantity: 2093},
    {year: 2022, season: 'Autumn', price: 12, quantity: 904},
    {year: 2022, season: 'Winter', price: 12, quantity: 408},
    {year: 2023, season: 'Spring', price: 14, quantity: 1204},
    {year: 2023, season: 'Summer', price: 14, quantity: 2498},
    {year: 2023, season: 'Autumn', price: 14, quantity: 609},
    {year: 2023, season: 'Winter', price: 14, quantity: 304},
)

cosmopolitanInfo.info.push(
    {year: 2022, season: 'Spring', price: 18, quantity: 4098},
    {year: 2022, season: 'Summer', price: 18, quantity: 7405},
    {year: 2022, season: 'Autumn', price: 18, quantity: 3782},
    {year: 2022, season: 'Winter', price: 18, quantity: 2764},
    {year: 2023, season: 'Spring', price: 20, quantity: 4908},
    {year: 2023, season: 'Summer', price: 20, quantity: 6893},
    {year: 2023, season: 'Autumn', price: 20, quantity: 3123},
    {year: 2023, season: 'Winter', price: 20, quantity: 1908},
)

whiskySourInfo.info.push(
    {year: 2022, season: 'Spring', price: 19, quantity: 5765},
    {year: 2022, season: 'Summer', price: 19, quantity: 4876},
    {year: 2022, season: 'Autumn', price: 19, quantity: 3243},
    {year: 2022, season: 'Winter', price: 19, quantity: 1203},
    {year: 2023, season: 'Spring', price: 20, quantity: 5294},
    {year: 2023, season: 'Summer', price: 20, quantity: 9034},
    {year: 2023, season: 'Autumn', price: 20, quantity: 2223},
    {year: 2023, season: 'Winter', price: 20, quantity: 983},
)

manhattanInfo.info.push(
    {year: 2022, season: 'Spring', price: 22, quantity: 3784},
    {year: 2022, season: 'Summer', price: 22, quantity: 5762},
    {year: 2022, season: 'Autumn', price: 22, quantity: 2983},
    {year: 2022, season: 'Winter', price: 22, quantity: 1609},
    {year: 2023, season: 'Spring', price: 24, quantity: 3982},
    {year: 2023, season: 'Summer', price: 24, quantity: 6021},
    {year: 2023, season: 'Autumn', price: 24, quantity: 2567},
    {year: 2023, season: 'Winter', price: 24, quantity: 1023},
)

daiquiriInfo.info.push(
    {year: 2022, season: 'Spring', price: 22, quantity: 2804},
    {year: 2022, season: 'Summer', price: 22, quantity: 3984},
    {year: 2022, season: 'Autumn', price: 22, quantity: 1803},
    {year: 2022, season: 'Winter', price: 22, quantity: 903},
    {year: 2023, season: 'Spring', price: 24, quantity: 2987},
    {year: 2023, season: 'Summer', price: 24, quantity: 4024},
    {year: 2023, season: 'Autumn', price: 24, quantity: 1346},
    {year: 2023, season: 'Winter', price: 24, quantity: 1004},
)

maiTaiInfo.info.push(
    {year: 2022, season: 'Spring', price: 20, quantity: 4874},
    {year: 2022, season: 'Summer', price: 20, quantity: 5871},
    {year: 2022, season: 'Autumn', price: 20, quantity: 2103},
    {year: 2022, season: 'Winter', price: 20, quantity: 1905},
    {year: 2023, season: 'Spring', price: 22, quantity: 3764},
    {year: 2023, season: 'Summer', price: 22, quantity: 4906},
    {year: 2023, season: 'Autumn', price: 22, quantity: 1986},
    {year: 2023, season: 'Winter', price: 22, quantity: 2085},
)

moscowMuleInfo.info.push(
    {year: 2022, season: 'Spring', price: 17, quantity: 8023},
    {year: 2022, season: 'Summer', price: 17, quantity: 10498},
    {year: 2022, season: 'Autumn', price: 17, quantity: 7245},
    {year: 2022, season: 'Winter', price: 17, quantity: 3902},
    {year: 2023, season: 'Spring', price: 18, quantity: 9047},
    {year: 2023, season: 'Summer', price: 18, quantity: 11645},
    {year: 2023, season: 'Autumn', price: 18, quantity: 5892},
    {year: 2023, season: 'Winter', price: 18, quantity: 3905}, 
)

aperolSpritzInfo.info.push(
    {year: 2022, season: 'Spring', price: 14, quantity: 3674},
    {year: 2022, season: 'Summer', price: 14, quantity: 7892},
    {year: 2022, season: 'Autumn', price: 14, quantity: 2034},
    {year: 2022, season: 'Winter', price: 14, quantity: 1204},
    {year: 2023, season: 'Spring', price: 15, quantity: 4659},
    {year: 2023, season: 'Summer', price: 15, quantity: 8045},
    {year: 2023, season: 'Autumn', price: 15, quantity: 1987},
    {year: 2023, season: 'Winter', price: 15, quantity: 1306},
)

tomCollinsInfo.info.push(
    {year: 2022, season: 'Spring', price: 19, quantity: 2894},
    {year: 2022, season: 'Summer', price: 19, quantity: 3956},
    {year: 2022, season: 'Autumn', price: 19, quantity: 1508},
    {year: 2022, season: 'Winter', price: 19, quantity: 1187},
    {year: 2023, season: 'Spring', price: 20, quantity: 3097},
    {year: 2023, season: 'Summer', price: 20, quantity: 4206},
    {year: 2023, season: 'Autumn', price: 20, quantity: 1695},
    {year: 2023, season: 'Winter', price: 20, quantity: 1200},
)

carajilloInfo.info.push(
    {year: 2022, season: 'Spring', price: 20, quantity: 8904},
    {year: 2022, season: 'Summer', price: 20, quantity: 12476},
    {year: 2022, season: 'Autumn', price: 20, quantity: 6802},
    {year: 2022, season: 'Winter', price: 20, quantity: 4034},
    {year: 2023, season: 'Spring', price: 22, quantity: 9076},
    {year: 2023, season: 'Summer', price: 22, quantity: 12906},
    {year: 2023, season: 'Autumn', price: 22, quantity: 7304},
    {year: 2023, season: 'Winter', price: 22, quantity: 4508},
)

drinksDataBase.push(margaritaInfo, martiniInfo, mojitoInfo, oldFashionInfo, negroniInfo, pinaColadaInfo, caipirinhaInfo, cosmopolitanInfo, whiskySourInfo, manhattanInfo, daiquiriInfo, maiTaiInfo, moscowMuleInfo, aperolSpritzInfo, tomCollinsInfo, carajilloInfo)
