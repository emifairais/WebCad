import Geometrie from './Geometrie.js'


class Point extends Geometrie {
  constructor(Layer=1, Color='black', Width=2,){
    super(Layer=1, Color='black', Width=2);
    this.x=null;
    this.y=null;
    this.name="Points";
  }
}

export default Point;
