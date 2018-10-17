import Geometrie from './Geometrie.js'


class Circle extends Geometrie {
  constructor(Layer=1, Color='black', Width=2){
    super(Layer=1, Color='black', Width=2);
    this.x = null;
    this.y = null;
    this.r = null;
    this.name="Circles";
  }

}

export default Circle;
