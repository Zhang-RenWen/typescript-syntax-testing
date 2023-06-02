console.log("Hello TypeScript!");

let a = 1 + 2;
let b = a + 3;
let c = {
  apple: a,
  banana: b,
};
let d = c.apple * 4;

console.log(d); // 12

// Type 型別

//  any
let any_a: any = 777;
let any_b: any = ["danger"];
let any_c: any = a + b;

//  unknown
let unknown_a: unknown = 777;
let unknown_b = unknown_a === 123;
let unknown_c = unknown_a + 10;
if (typeof unknown_a === "number") {
  let unknown_d = unknown_a + 10;
}
