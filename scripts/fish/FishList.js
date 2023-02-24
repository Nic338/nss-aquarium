// Import the function that returns a copy of the fish array
import { getFish } from "./database.js"

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'

    // Create HTNL representations of each fish here
    for (const singleFish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fish card">
            <div><img  class="fish__image image--card" src="${singleFish.fishImage}" /></div>
            <div class="fish__name">${singleFish.fishName}</div>
            <div class="fish__species">${singleFish.fishSpecies}</div>
            <div class="fish__length">${singleFish.fishLength} in</div>
            <div class="fish__location">${singleFish.fishHarvest}</div>
            <div class="fish__diet">${singleFish.fishDiet}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}