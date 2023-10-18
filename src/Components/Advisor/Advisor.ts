import type CharacterDataType from "../../types";
import Character from "../Character/Character.js";

export class Advisor extends Character {
  advises;

  constructor(characterData: CharacterDataType, advises: Character) {
    super(characterData);

    if (advises instanceof Character) {
      this.advises = advises;
    }
  }

  communicate() {
    return `${super.communicate()}I have a funny feeling that I'm going to die`;
  }
}

export default Advisor;
