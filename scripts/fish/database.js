/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    singleFish: [
        {
            fishImage:"https://cdn.drawception.com/images/panels/2016/3-12/TRZmGYrdAs-4.png",
            fishSpecies: "Barticus vertebrata",
            fishName: "Bart",
            fishLength: 118,
            fishHarvest: "Bartstown",
            fishDiet: "Feeds on crustaceans",
        },
        {
            fishImage:"https://i.pinimg.com/600x315/5b/10/9d/5b109d8067eeb0bb8f9d1cd05d24272a.jpg",
            fishSpecies: "Derpetris vertebrata",
            fishName:"The Pacific Derp Fish",
            fishLength: 16,
            fishHarvest: "O'ahu",
            fishDiet: "Feeds on small fish"
        },
        {
            fishImage:"https://s.cornershopapp.com/product-images/3754535.jpg?versionId=nft13eXNFTpfW8iGYYZ4LYZTadRkbsY.",
            fishSpecies: "Lachnolmaius maximus",
            fishName:"Hogfish",
            fishLength: 55,
            fishHarvest:"Eastern Coast of Mexico",
            fishDiet:"Feeds on molluscs, crabs, and sea urchins"
        },
        {
            fishImage:"https://www.thefisherman.com/wp-content/uploads/2019/04/2019-2-profiling-the-atlantic-cod-cod.jpg",
            fishSpecies: "Gadus morhua",
            fishName: "Atlantic Cod",
            fishLength: 63,
            fishHarvest: "Maine",
            fishDiet: "Feeds on crustaceans"
        },
        {
            fishImage: "https://media.fisheries.noaa.gov/dam-migration/900x600-monkfish-noaa-istock.jpg",
            fishSpecies: "Lophius piscatorius",
            fishName: "Monkfish",
            fishLength: 18,
            fishHarvest:"North Atlantic Ocean",
            fishDiet:"Feeds on small fish"
        },
        {
            fishImage: "https://safmc.net/wp-content/uploads/2022/04/red-grouper.png",
            fishSpecies: "Epinephelus morio",
            fishName: "Red Grouper",
            fishLength: 30,
            fishHarvest: "Florida Keys",
            fishDiet: "Feeds on soft coral and sea sponges"
        },
        {
            fishImage:"https://upload.wikimedia.org/wikipedia/commons/e/ee/Brook_trout_in_water.jpg",
            fishSpecies: "Salvelinus foninalis",
            fishName: "Brook Trout",
            fishLength: 9,
            fishHarvest: "West Virginia",
            fishDiet: "Feeds on aquatic invertibrates"
        },
        {
            fishImage: "https://www.thoughtco.com/thmb/45viEdNPimLOuUzMWQVu1yyRECw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/french1-a3c986fbbdad48a9ad494c8942223335.jpg",
            fishSpecies: "Pomacanthus paru",
            fishName: "French Angelfish",
            fishLength: 12,
            fishHarvest: "Gulf of Mexico",
            fishDiet: "Feeds on sponges and algae"
        },
        {
            fishImage:"https://www.aquariumofpacific.org/images/made_new/images-uploads-clownfish_600_q85.jpg",
            fishSpecies: "Amphiprion ocellaris",
            fishName: "Clownfish",
            fishLength: 4,
            fishHarvest: "Western Coast of Japan",
            fishDiet: "Feeds on plankton and algae"
        }
    ]
}
    export const getFish = () => {
        return database.singleFish.map(copyOfSingleFishObject => ({...copyOfSingleFishObject}))
    }
const fishArray = getFish()

    export const mostHolyFish = () => {
        // 3, 6, 9, 12, etc... fish
        const holyFish = []
    
        for (const singleFish of fishArray) {
            if (singleFish.fishLength % 3 === 0){
                holyFish.push(singleFish.fishName)
            }
        }
        return holyFish
    }

    // const iDontCareWhatThisSays = mostHolyFish()
    // console.log(iDontCareWhatThisSays)

    export const soldierFish = () => {
        // 5, 10, 15, 20, 25, etc... fish
        const soldiers = []

        for (const singleFish of fishArray) {
            if (singleFish.fishLength % 5 === 0){
                soldiers.push(singleFish.fishName)
            }
        }
        return soldiers
    }
    

    export const nonHolyFish = () => {
        // Any fish not a multiple of 3 or 5
        const regularFish = []

        for (const singleFish of fishArray){
            if (singleFish.fishLength % 3 != 0 && singleFish.fishLength % 5 !=0){
                regularFish.push(singleFish.fishName)
            }
        }
        return regularFish
    }
