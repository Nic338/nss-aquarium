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
            fishLength: 3,
            fishHarvest: "Bartstown",
            fishDiet: "crustaceans",
        },
        {
            fishImage:"https://cdn.drawception.com/images/panels/2016/3-12/TRZmGYrdAs-4.png",
            fishSpecies: "Derpetris vertebrata",
            fishName:"The Pacific Derp Fish",
            fishLength: .4,
            fishHarvest: "O'ahu",
            fishDiet: "small fish"
        },
        {
            fishImage:"https://s.cornershopapp.com/product-images/3754535.jpg?versionId=nft13eXNFTpfW8iGYYZ4LYZTadRkbsY.",
            fishSpecies: "Lachnolmaius maximus",
            fishName:"Hogfish",
            fishLength: 1.4,
            fishHarvest:"Eastern Coast of Mexico",
            fishDiet:"molluscs, crabs, and sea urchins"
        },
        {
            fishImage:"https://www.thefisherman.com/wp-content/uploads/2019/04/2019-2-profiling-the-atlantic-cod-cod.jpg",
            fishSpecies: "Gadus morhua",
            fishName: "Atlantic Cod",
            fishLength: 1.6,
            fishHarvest: "Maine",
            fishDiet: "crustaceans"
        },
        {
            fishImage: "https://media.fisheries.noaa.gov/dam-migration/900x600-monkfish-noaa-istock.jpg",
            fishSpecies: "Lophius piscatorius",
            fishName: "Monkfish",
            fishLength: .45,
            fishHarvest:"North Atlantic Ocean",
            fishDiet:"Fish"
        },
        {
            fishImage: "https://safmc.net/wp-content/uploads/2022/04/red-grouper.png",
            fishSpecies: "Epinephelus morio",
            fishName: "Red Grouper",
            fishLength: .78,
            fishHarvest: "Florida Keys",
            fishDiet: "Soft coral and sea sponges"
        },
        {
            fishImage:"https://upload.wikimedia.org/wikipedia/commons/e/ee/Brook_trout_in_water.jpg",
            fishSpecies: "Salvelinus foninalis",
            fishName: "Brook Trout",
            fishLength: .24,
            fishHarvest: "West Virginia",
            fishDiet: "aquatic invertibrates"
        },
        {
            fishImage: "https://www.thoughtco.com/thmb/45viEdNPimLOuUzMWQVu1yyRECw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/french1-a3c986fbbdad48a9ad494c8942223335.jpg",
            fishSpecies: "Pomacanthus paru",
            fishName: "French Angelfish",
            fishLength: .31,
            fishHarvest: "Gulf of Mexico",
            fishDiet: "Sponges, algae, broyzoans, zoantharians, gorgonians, hydroids, coral, and tunicates"
        },
        {
            fishImage:"https://www.aquariumofpacific.org/images/made_new/images-uploads-clownfish_600_q85.jpg",
            fishSpecies: "Amphiprion ocellaris",
            fishName: "Clownfish",
            fishLength: .1,
            fishHarvest: "Western Coast of Japan",
            fishDiet: "Plankton and algae"
        }
    ]
}
    export const getFish = () => {
        return database.singleFish.map(copyOfSingleFishObject => ({...copyOfSingleFishObject}))
    }