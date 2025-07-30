function processData(data: unknown): string {
  if (typeof data === "string") {
    return data.toUpperCase();
  } else {
    return "Not a string";
  }
}

console.log(processData("hello")); // ควรได้ "HELLO"
console.log(processData(123)); // ควรได้ "Not a string"

// Error ที่เจอคือ .toUpperCase เป็นเครื่องที่ใช้กับ string แต่ (processData(123)); เป็น number 
