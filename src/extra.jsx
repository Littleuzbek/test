export function getRandomNumbersWithoutRepeating(max) {
    // Step 1: Create an array of numbers from 1 to max
    const numbers = Array.from({ length: max }, (_, i) => i + 1);

    // Step 2: Shuffle the array using Fisher-Yates algorithm
    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]]; // Swap elements
    }
    return numbers;
  }

  