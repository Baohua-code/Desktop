//function to generate a random number
function generateRandomNumber(num){
    return Math.floor(Math.random() * num);
}

//object containing daily food choices
const dailyFoodChoices = {
    breakfast: ["Greek Yogurt Parfait", "Avocado Toast with Egg", "Smoothie Bowl"],
    lunch: ["Grilled Chicken Salad", "Quinoa and Roasted Veggie Bowl", "Turkey and Avocado Wrap", "Soup and Side Salad"],
    dinner: ["Baked Chicken with Steamed Broccoli and Quinoa", "Vegetarian Chili", "Grilled Shrimp with Zoodles","Stuffed Bell Peppers", "Lentil and Spinach Curry"]
};

//array to store individual daily food choices
let individualDailyFoodChoices = [];

//iterate through the dailyfoodchoices object
for(let mealType in dailyFoodChoices){
    let mealIndex = generateRandomNumber(dailyFoodChoices[mealType].length);
    switch(mealType){
        case "breakfast":
        individualDailyFoodChoices.push(`For breakfast, you could choose a ${dailyFoodChoices[mealType][mealIndex]}.`);
        break;
        case "lunch":
        individualDailyFoodChoices.push(`For lunch, you might enjoy a ${dailyFoodChoices[mealType][mealIndex]}.`);
        break;
        case "dinner":
        individualDailyFoodChoices.push(`For dinner, you should try ${dailyFoodChoices[mealType][mealIndex]}`);
        break;
        default:
        individualDailyFoodChoices.push("Error, unable to process this meal type.");

    }
}

//function to formate and display the daily meal choices
function formatDailyMealChoices(arr){
    const formattedFoodChoices = arr.join("\n");
    console.log(formattedFoodChoices)
}
//display the formatted daily meal choices
formatDailyMealChoices(individualDailyFoodChoices);