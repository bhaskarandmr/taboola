import { Recomendation, RecomendationContainer } from "./model";
import { renderRecomendationContainer } from "./render";
import { fetchRecomendations } from "./api";

export class App {
  constructor(root) {
    console.log("Root", root);
    this.root = root;
  }

  async init() {
    await this.reset();
  }

  async reset() {
    let recomendationList = [];
    let recomendations = await fetchRecomendations();
    console.log("Recomendations", recomendations.list);
    recomendations.list.forEach((recomendation) => {
      recomendationList.push(new Recomendation(recomendation));
    });

    this.recomendationContainer = new RecomendationContainer(recomendationList);
    console.log("Reset Recomendation Container", this.recomendationContainer);
    this.render();
  }

  render() {
    console.log("Render Recomendation Container", this.recomendationContainer);
    const recomendationContainer = renderRecomendationContainer({
      recomendationContainer: this.recomendationContainer
    });
    this.root.innerHTML = "";
    this.root.appendChild(recomendationContainer);
  }
}
