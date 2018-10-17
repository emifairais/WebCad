class Geometrie {
    constructor( layer=1, color='black', lineWidth=2){
      this.layer= layer;
      this.color= color;
      this.lineWidth= lineWidth;
      this.id=Math.random();
    }
}

export default Geometrie;
