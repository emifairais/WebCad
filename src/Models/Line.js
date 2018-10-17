import Geometrie from './Geometrie.js'


class Line extends Geometrie {
  constructor(Layer=1, Color='black', Width=2){
    super(Layer=1, Color='black', Width=2);
    this.x1 = null;
    this.y1 = null;
    this.x2 = null;
    this.y2 = null;
    this.name="Lines";
  }
}

export default Line;
