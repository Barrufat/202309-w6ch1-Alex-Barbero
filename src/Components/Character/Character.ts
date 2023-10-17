import type CharacterDataType from "../types";

export class Character {
  isAlive = true;
  series = "Game of Thrones";
  characterData;

  constructor(characterData: CharacterDataType) {
    this.characterData = characterData;
  }

  die(): void {
    this.isAlive = false;
  }
}
