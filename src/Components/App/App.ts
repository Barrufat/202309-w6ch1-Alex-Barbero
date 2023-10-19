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
        character.characterData,
        character.isAlive,
      );
      card.render();
    });
  }
}

export default App;
