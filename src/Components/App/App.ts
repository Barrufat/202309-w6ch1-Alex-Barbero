import { characters } from "../../characters.js";
import CharacterCard from "../CharacterCard/CharacterCard.js";
import Component from "../Component/Component.js";

class App extends Component {
  protected populate(): void {
    this.element.innerHTML = `
      <ul class="characters-list row list-unstyled">
      </ul>
      `;

    const parentElement = this.element.querySelector(".characters-list")!;
    characters.forEach((character) => {
      const card = new CharacterCard(
        parentElement,
        "li",
        "col",
        character.characterData,
      );
      card.render();
    });

    // Console.log(characters[0].characterData);

    // console.log(characters[0].characterData);

    // const card = new CharacterCard(
    //   parentElement,
    //   "li",
    //   "col",
    //   characters[0].characterData,
    // );

    // card.render();

    // console.log(card);
  }
}

export default App;
