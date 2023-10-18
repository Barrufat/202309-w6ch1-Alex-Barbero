import type CharacterDataType from "../../types";

export class Character {
  isAlive = true;
  series = "Game of Thrones";

  constructor(public characterData: CharacterDataType) {
    this.characterData = characterData;
  }

  communicate(): string {
    return `${this.characterData.name} says: `;
  }

  die(): void {
    this.isAlive = false;
  }
}

export default Character;
