import TWEEN from '@tweenjs/tween.js';
export default class SceneController {

  sBegin = new Scene();

  scenes = {
    "begin": this.sBegin
  }

  initialize = () => {
    this.phaseBegin();

  }

  phaseBegin = () => {
    let bgFadeIn = {opacity: 0};
    let inputFadeIn = {opacity: 0};

    let twBgFadeIn = new TWEEN.Tween(this.bgFadeIn, this.phaseBegin).to({opacity: 1}, 3000);
    let twInputFadeIn = new TWEEN.Tween(this.inputFadeIn, this.phaseBegin).to({opacity: 1}, 8000);

    twBgFadeIn.chain(this.twInputFadeIn);

    this.sBegin.addTween(bgFadeIn, twBgFadeIn);
    this.sBegin.addTween(inputFadeIn, twInputFadeIn);
  }

  getScene = (phase) => {
    return this.scenes[phase];
  }

  startScene = (phase) => {
    this.getScene(phase).start();
  }

  updateScene = (phase) => {
    this.getScene(phase).update();
  }

}

export class Scene {

  group = new TWEEN.Group();

  tweens = [];
  elements = [];
  startingTween = undefined;

  addTween(element, tween) {
    if (this.startingTween === undefined) {
      this.startingTween = tween;
    }
    this.elements.push(element);
    this.tweens.push(tween);
    this.group.add(tween);
  }

  getElement= (phase) => {
    return this.elements[phase];
  }

  start = () => {
    this.startingTween.start();
  }

  update = (phase) => {
    this.group.update();
  }
}

