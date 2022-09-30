class Calculator {

  static async add(x, y) {
    return x + y;
  }

  static async share(x, y) {
    if(y === 0) {
      return 'second parameter cannot be zero';
    }
    return x / y;
  }

  static async multiply(x, y) {
    return x * y;
  }

  static async subtract(x, y) {
    return x - y;
  }

}

module.exports = Calculator;