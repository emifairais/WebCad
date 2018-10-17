import Geometrie from './Geometrie.js'


class Rectangle extends Geometrie {
  constructor(layer=1, color='black', lineWidth=2){
    super(layer=1, color='black', lineWidth=2);
    this.x=null;
    this.y=null;
    this.width=null;
    this.height=null;
    this.name="Rectangles";
  }
}

export default Rectangle;
