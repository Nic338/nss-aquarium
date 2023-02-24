import { getFish } from './fish/database.js'

const allFish = getFish()

for (const singleFish of allFish) {
    // console.log(singleFish)
}

// Import the FishList function from the correct module
import { FishList } from './fish/FishList.js'

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector(".fishList")

// console.log(FishList())
 parentHTMLElement.innerHTML = FishList()

 import { mostHolyFish } from './fish/database.js'

const holiestFish = mostHolyFish()

// for (const holyFish of holiestFish){
    console.log(holiestFish)
// }
 import { soldierFish } from './fish/database.js'

 const soldiersFish = soldierFish()

//  for (const soldiers of soldiersFish){
    console.log(soldiersFish)
//  }

 import { nonHolyFish } from './fish/database.js'

 const hereticFish = nonHolyFish()

//  for (const regularFish of hereticFish){
    console.log(hereticFish)
//  }