const database = {
    fish: [
        {
            id:1,
            image: "https://s3-us-west-2.amazonaws.com/getgillsbucket/media/images/Dans-Fish-Blue-Diamond-Angelfish-Blue-Diamond-Angelfish-Pterophyllum-scalare-1-8e6e801ded56492da17e08f59654ccc3-13322.jpg",
            species: "Angelfish",
            name: "Bart",
            food: "crustaceans",
            size: "small",
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
          
          
    ],
    tips: [
      {
        tip: "Regular Water Changes:",
        quote: "Perform regular water changes to remove debris, uneaten food, and waste. The frequency depends on the size of the tank and the type of fish, but a general guideline is to change 10-25% of the water every 1-2 weeks"
      },
      {
        tip: "Use a Gravel Vacuum:",
        quote: "Invest in a gravel vacuum to clean the substrate (gravel or sand) in the tank. This helps remove uneaten food and waste that can accumulate in the substrate."
      },
      {
        tip: "Monitor Water Parameters:",
        quote: "Regularly test and monitor water parameters such as pH, ammonia, nitrite, and nitrate levels. Keeping these levels in check is vital for the health of your fish. Perform water changes if parameters are out of the recommended range."
      },
      {
        tip: "Use a Quality Filter:",
        quote: "Install a reliable aquarium filter that is appropriate for the size of your tank. A filter helps remove impurities and provides biological filtration to break down harmful substances."
      },
      {
        tip: "Maintain Good Aquarium Circulation:",
        quote: "Ensure good water circulation within the tank. Proper water movement helps distribute heat, oxygen, and nutrients evenly and prevents the accumulation of debris in dead spots"
      },
      {
        tip: "Monitor and Address Algae Growth:",
        quote: "Control and manage algae growth by keeping the tank away from direct sunlight, maintaining proper lighting durations, and ensuring nutrient levels are balanced. You can also add algae-eating fish or invertebrates."
      }

    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}