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
              harvestLocation: "Coral Triangle"
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

    ],
    locations: [
      {
        location: "Atlantic Ocean",
        quote: "The Atlantic Ocean is a canvas of tales, where waves paint stories upon the shores, and every ripple whispers the secrets of distant horizons.",
        image: "https://imageio.forbes.com/specials-images/imageserve/62e583d12630ac4b209932d6/A-sandy-beach-with-steep-plant-covered-cliffs-behind-it-and-two-tall-rock-projections/0x0.jpg?format=jpg&crop=1738,978,x0,y115,safe&width=960"
      },
      {
        location: "Pacific Ocean",
        quote:"Stretching across the vast canvas of the Pacific Ocean, each wave carries the echoes of a thousand journeys, telling tales of adventure, mystery, and the boundless beauty that dances upon the waters",
        image: "https://i0.wp.com/calmatters.org/wp-content/uploads/2020/09/state-parks-scaled.jpg?fit=1200%2C531&ssl=1"
      },
      {
        location: "Yellowstone River",
        quote: "Flowing through the heart of nature's masterpiece, the Yellowstone River whispers tales of untamed beauty, where every bend reveals a chapter of wilderness and every ripple echoes the song of a pristine sanctuary.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/YellowstonefallJUN05.JPG/1200px-YellowstonefallJUN05.JPG"
      },
      {
        location: "Coral Triangle",
        quote: "Within the embrace of the Coral Triangle, nature unveils a kaleidoscope of colors beneath the waves, where every coral whispers a story, and every fish dances to the rhythm of an underwater symphony.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNXWjU9NRrQN7P_Cc2VfEGGuvQouZyUANksWYQff87ibsdAL8oH1g2zFgMEHoSzwS8sNw&usqp=CAU"
      }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const getTips = () => {
  return database.tips.map(tips => ({...tips}))
}

export const getLocation = () => {
  return database.locations.map(locations => ({...locations}))

}