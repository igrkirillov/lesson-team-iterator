export default class Team {
  constructor(...characters) {
    this.characters = characters;
    this[Symbol.iterator] = function () {
      let currentIndex = 0;
      const array = this.characters;
      return {
        next() {
          if (currentIndex < array.length) {
            return {
              value: array[currentIndex++],
              done: false
            }
          } else {
            return {
              value: undefined,
              done: true
            }
          }
        }
      };
    }
  }
}