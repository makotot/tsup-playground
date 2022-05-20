export class Person {
  #name

  constructor(name: string) {
    this.#name = name
  }

  greet() {
    return `Hello, my name is ${this.#name}.`
  }
}
