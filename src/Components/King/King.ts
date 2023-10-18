import { Character } from "../Character/Character";
import type CharacterDataType from "../types";

export class King extends Character {
  yearsOfReign: number;

  constructor(characterData: CharacterDataType, yearsOfReign: number) {
    super(characterData);
    this.yearsOfReign = yearsOfReign;
  }

  communicate(): string {
    return `${super.communicate()}Everybody will die`;
  }
}

export default King;
