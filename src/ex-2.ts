function sumEvenNumbers(numbers: number[]): number {
    //Start Coding Here
    return numbers
        .filter((num) => num % 2 === 0)
        .reduce((acc, curr) => acc + curr, 0);

  }
  
  console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // 12
  console.log(sumEvenNumbers([11, 13, 15])); // 0
  