function processData(data: string | number): string {
  if (typeof data === "string") {
    return data.toUpperCase();
  } else {
    return "Not a string";
  }
}

console.log(processData("hello")); // ควรได้ "HELLO"
console.log(processData(123)); // ควรได้ "Not a string"

// Error ที่เจอคือ TSError: ⨯ Unable to compile TypeScript:src/ex-4.2.ts(2,10): error TS18046: 'data' is of type 'unknown'. หมายความว่า มีการใช้ data (ซึ่งมีชนิดเป็น unknown) โดยไม่ตรวจสอบชนิดของมันก่อน


