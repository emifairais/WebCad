import React, { Component } from 'react';
import '../App.css';
import Point from '../Models/Point.js';
import Rectangle from '../Models/Rectangle.js';
import Line from '../Models/Line.js';
import Circle from '../Models/Circle.js';
let coordObj;
const newElements={};

const ElementTypes = {
  Point,
  Rectangle,
  Line,
  Circle
}

class Drawer extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstClick: {
        xCoord: null,
        yCoord: null
      },
      currentDrawing: {
        color: "",
        id: null,
        layer: null,
        lineWidth: null,
        name: "",
        r: null,
        x: null,
        y: null
      },
      isClickedTwice: false
    }
  }


getPosition(e) {
  var rect = e.target.getBoundingClientRect();
  var x = e.clientX - rect.left;
  var y = e.clientY - rect.top;
  return({
    x,
    y
  })
}

set() {

}



createElements(e) {
    const { selectedTool, elements, updateElements }  = this.props;
    let coordObj = this.getPosition(e);
    if (selectedTool !== ""){
      const ElementCreator = ElementTypes[selectedTool]
      const elem = new ElementCreator()
      if(elem.name === "Points"){
        elem.x=coordObj.x;
        elem.y=coordObj.y;
        this.props.updateElements(elem);
      } else if(elem.name === "Circles" && this.state.firstClick.xCoord === null) {
        let coords = Object.assign({}, this.state.firstClick);
        coords.xCoord = coordObj.x;
        coords.yCoord = coordObj.y;
        let drawing = Object.assign({}, elem);
        drawing.x=coordObj.x;
        drawing.y=coordObj.y;
        console.log(this.getPosition(e).x)
        this.setState({
          firstClick: coords,
          currentDrawing: drawing,
          isClickedTwice: true
        })

      } else if(elem.name === "Circles" && elem.x !== this.state.firstClick.xCoord){
        coordObj = this.getPosition(e)
        elem.x=this.state.firstClick.xCoord;
        elem.y=this.state.firstClick.yCoord;
        elem.r=Math.sqrt(Math.pow((coordObj.x-this.state.firstClick.xCoord),2)+Math.pow((coordObj.y-this.state.firstClick.yCoord),2))
        this.props.updateElements(elem);
        let reset = Object.assign({}, this.state.firstClick);
        reset.xCoord=null;
        reset.yCoord=null;
        this.setState({
          firstClick: reset
        })
      } else if(elem.name === "Lines" && this.state.firstClick.xCoord === null){
        coordObj = this.getPosition(e)
        let coords = Object.assign({}, this.state.firstClick);
        coords.xCoord = coordObj.x;
        coords.yCoord = coordObj.y;
        this.setState({
          firstClick: coords
        })
      } else if(elem.name === "Lines" && elem.x1 !== this.state.firstClick.xCoord){
        coordObj = this.getPosition(e);
        elem.x1 = this.state.firstClick.xCoord;
        elem.y1 = this.state.firstClick.yCoord;
        elem.x2 = coordObj.x;
        elem.y2 = coordObj.y;
        this.props.updateElements(elem);
        let reset = Object.assign({}, this.state.firstClick);
        reset.xCoord=null;
        reset.yCoord=null;
        this.setState({
          firstClick: reset
        })
      } else if(elem.name === "Rectangles" && this.state.firstClick.xCoord === null){
        coordObj = this.getPosition(e);
        let coords = Object.assign({}, this.state.firstClick);
        coords.xCoord = coordObj.x;
        coords.yCoord = coordObj.y;
        this.setState({
          firstClick: coords
        })
      } else if(elem.name === "Rectangles" && elem.x !== this.state.firstClick.xCoord){
        coordObj = this.getPosition(e);
        if(this.state.firstClick.xCoord > coordObj.x && this.state.firstClick.yCoord > coordObj.y){
          elem.width = this.state.firstClick.xCoord - coordObj.x;
          elem.height = this.state.firstClick.yCoord - coordObj.y;
          elem.x = coordObj.x;
          elem.y = coordObj.y;
        } else if(this.state.firstClick.xCoord < coordObj.x && this.state.firstClick.yCoord < coordObj.y){
          elem.x = this.state.firstClick.xCoord;
          elem.y = this.state.firstClick.yCoord;
          elem.width = coordObj.x - this.state.firstClick.xCoord;
          elem.height = coordObj.y - this.state.firstClick.yCoord;
        } else if(this.state.firstClick.xCoord > coordObj.x && this.state.firstClick.yCoord < coordObj.y){
          elem.x = coordObj.x;
          elem.y = this.state.firstClick.yCoord;
          elem.width = this.state.firstClick.xCoord - coordObj.x;
          elem.height = coordObj.y - this.state.firstClick.yCoord;
        } else if(this.state.firstClick.xCoord < coordObj.x && this.state.firstClick.yCoord > coordObj.y){
          elem.x = this.state.firstClick.xCoord;
          elem.y = coordObj.y;
          elem.width = coordObj.x - this.state.firstClick.xCoord;
          elem.height = this.state.firstClick.yCoord - coordObj.y;
        }
        this.props.updateElements(elem);
        let reset = Object.assign({}, this.state.firstClick);
        reset.xCoord=null;
        reset.yCoord=null;
        this.setState({
          firstClick: reset
        })
      }
    }
  }


  render(){
    const { elements, selectedTool, drawGeometry, setSelectedId, setCoords } = this.props;
    return (
      <div className="tabloul">
        <svg
          width="1108"
          height="348"
          style={{background : "#FAF9F9"}}
          onClick={event => this.createElements(event)}
          onMouseMove={(event) => this.getPosition(event)}
          >
          <g>{elements.map(element => this.drawGeometry(element))}</g>
          <g 
          
          >
          {this.state.firstClick !==null ? this.drawGeometry(this.state.currentDrawing) : null }
          </g>
        </svg>
      </div>
    )
  }
  drawGeometry(element) {

      switch(element.name){
        case "Circles":
            return (
            <circle
              id={element.name}
              onClick={() => this.props.setSelectedId(element)}
              key={element.id}
              cx={element.x}
              cy={element.y}
              r={element.r}
              stroke={element.color}
              stroke-width={element.lineWidth}
              fill="yellow"
              />
           )
           break;
        case "Rectangles":
            return (
            <rect
              id={element.name}
              onClick={() => this.props.setSelectedId(element)}
              key={element.id}
              x={element.x}
              y={element.y}
              width={element.width}
              height={element.height}
              stroke={element.color}
              stroke-width={element.lineWidth}
              fill="red"
              />
           )
           break;
        case "Lines":
            return (
            <line
              id={element.name}
              onClick={() => this.props.setSelectedId(element)}
              key={element.id}
              x1={element.x1}
              y1={element.y1}
              x2={element.x2}
              y2={element.y2}
              stroke={element.color}
              strokeWidth={element.lineWidth}
              />
           )
           break;
        case "Points":
          {
            return (
              <path d={"M " + element.x + " " + element.y + " L " + element.x + " " + element.y + " Z"}
                stroke="black"
                onClick={() => this.props.setSelectedId(element)}
                id={element.name}
                key={element.id}
                stroke-linecap="round"
                stroke-width="4"
              />
            )
          }
         default:
           return null;
           break;
         }

  }

}

export default Drawer;
