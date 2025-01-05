// Step 1: Define the data for the random messages
const messages = {
    greetings: ['Hello', 'Hi', 'Hey', 'Greetings', 'Salutations'],
    moods: ['happy', 'sad', 'excited', 'nervous', 'relaxed'],
    advice: [
        'take a deep breath',
        'stay positive',
        'keep pushing forward',
        'never give up',
        'smile more'
    ]
};

// Step 2: Function to generate a random index
const getRandomIndex = (array) => Math.floor(Math.random() * array.length);

// Step 3: Generate a random message
const generateRandomMessage = () => {
    const greeting = messages.greetings[getRandomIndex(messages.greetings)];
    const mood = messages.moods[getRandomIndex(messages.moods)];
    const advice = messages.advice[getRandomIndex(messages.advice)];

    return `${greeting}! Today, you might feel ${mood}. Remember to ${advice}.`;
};

// Step 4: Print the random message to the console
console.log(generateRandomMessage());