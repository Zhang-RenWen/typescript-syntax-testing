let symbol_a = Symbol('a')
let symbol_b: symbol = Symbol('b')
var symbol_c = symbol_a === symbol_b
let symbol_d = symbol_a + 'x'

const symbol_e = Symbol('e')
const symbol_f: unique symbol = Symbol('f')
let symbol_g: unique symbol = Symbol('f')

let symbol_h = symbol_e === symbol_e
let symbol_i = symbol_e === symbol_f
