import Component from "../Component/Component.js";
class CharacterCard extends Component {
  characterData;
  state;
  constructor(parentElement, characterData, state) {
    super(parentElement, "li", "col");
    this.characterData = characterData;
    this.state = state;
  }
  populate() {
    console.log(this.state);
    this.element.innerHTML = `
        <article class="character">
          <div class="card character__card">
            <img src="img/${this.characterData.imageSource}" alt=${
              this.characterData.name
            } and ${
              this.characterData.family
            }" class="character__picture card-img-top" />
            <div class="card-body">
              <h2 class="character__name card-title h4">${
                this.characterData.name
              } & ${this.characterData.family}</h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Age: ${this.characterData.age}</li>
                  <li>
                    State: ${
                      this.state
                        ? `<i class="fas fa-thumbs-up"></i>`
                        : `<i class="fas fa-thumbs-down"></i>`
                    }
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      `;
  }
}
export default CharacterCard;
//# sourceMappingURL=CharacterCard.js.map
