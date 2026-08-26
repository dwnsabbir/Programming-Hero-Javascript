// input from terminal

// const weight = process.argv[2];
// const height = process.argv[3];
// // console.log(`Weight: ${weight} kg`);
// // console.log(`Height: ${height} m`);

// function calculateBmi (weight, height) {
// const bmi = weight / (height * height);
// return bmi;

// }

// console.log(`Your BMI is: ${calculateBmi(weight, height)}`);


const weight = process.argv[2];
const height = process.argv[3];

const heightToMeters = height * 0.3048; // Convert height from feet to meters 

function BmiCalculator(weight, heightToMeters) {
    const bmi = weight / (heightToMeters * heightToMeters);
    return bmi;
}

const BmiScore = BmiCalculator(weight, heightToMeters);

let BmiCategory = ""

if (BmiScore < 18.5) {
    BmiCategory = "Underweight, you need to increase your weight";
} else if (BmiScore >= 18.5 && BmiScore < 24.9) {
    BmiCategory = "Normal weight, you are perfect to go";
} else if (BmiScore >= 25 && BmiScore < 29.9) {
    BmiCategory = "Overweight, you should avoid junk food";
} else {
    BmiCategory = "Obesity, your are out of control";
}

console.log(`Your BMI is: ${BmiScore.toFixed(2)} (${BmiCategory})`);    