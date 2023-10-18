export class Character {
  characterData;
  isAlive = true;
  series = "Game of Thrones";
  constructor(characterData) {
    this.characterData = characterData;
    this.characterData = characterData;
  }
  communicate() {
    return `${this.characterData.name} says: `;
  }
  die() {
    this.isAlive = false;
  }
}
export default Character;
//# sourceMappingURL=Character.js.map
