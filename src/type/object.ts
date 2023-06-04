// let object_a: object = {
//   b: 'x',
// }
// console.log(object_a.b) // 類型 'object' 沒有屬性 'b'。

let object_a = {
  b: 'x', // {b:string}
}
console.log(object_a.b) // 類型 string

let object_b = {
  c: {
    d: 'f', // {c:{d:string}}
  },
}
console.log(object_b.c.d) // 類型 string

let object_a2: { b: number } = {
  b: 12, // {b:number}
}
// ----------------------------------------------------------------
export function test() {
  const a: { b: number } = {
    b: 12,
  }
}
export function test2() {
  let c: {
    firstName: string
    lastName: string
  } = {
    firstName: 'john',
    lastName: 'barrowman',
  }
  class Person {
    constructor(public firstName: string, public lastName: string) {} // public 是 this.firstName = firstName 的簡寫
  }

  c = new Person('matt', 'smith')
}
