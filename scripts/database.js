const database = {
    fish: [
        {
            id:1,
            image: "https://s3-us-west-2.amazonaws.com/getgillsbucket/media/images/Dans-Fish-Blue-Diamond-Angelfish-Blue-Diamond-Angelfish-Pterophyllum-scalare-1-8e6e801ded56492da17e08f59654ccc3-13322.jpg",
            species: "Angelfish",
            name: "Bart",
            food: "crustaceans",
            size: 3,
            harvestLocation: "Pacific Ocean"
        },
            {
            id: 2,
            image: "https://i.ebayimg.com/images/g/uawAAOSw~vpaCZp3/s-l1200.webp",
            species: "Rainbow Shark",
              name: "Chinook",
              food: "Small fish and insects",
              size: "small",
              harvestLocation: "Pacific Ocean"
            },
            {
                id: 3,
                image: "https://thefishroom.co.nz/cdn/shop/articles/Betta_1200x1200.jpg?v=1635272428",
              species: "Beta",
              name: "Steve",
              food: "Aquatic insects",
              size: "Medium",
              harvestLocation: "Freshwater rivers"
            },
            {
                id: 4,
                image: "https://diszhal.info/halak/Tanichthys_micagemmae.jpg",
              species: "Redfin Pandas",
              name: "GusGus",
              food: "crustaceans",
              size: "small",
              harvestLocation: "Open seas"
            },
            {
                id: 5,
                image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Chromobotia_macracanthus.jpg",
              species: "Clown loach",
              name: "BossHog",
              food: "Small fish and crustaceans",
              size: "Medium",
              harvestLocation: "Atlantic Ocean"
            }
          
          
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}