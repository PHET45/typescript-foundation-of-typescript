type User = {
  id: string;
  name: string;
  age?: number;
};

function isAdult(user: User): boolean {
  return (user.age ?? 0) >= 18;
}

const result = isAdult({ id: "u01", name: "John" ,age : 15});
console.log(result); // ควรได้ false

// Error ที่เจอคือ คิดว่าน่าจะมาจากการไม่ใส่อายุ ทำให้เปรียบเทียบค่าไม่ได้
