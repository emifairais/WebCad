import React, { Component } from 'react';
import '../App.css';
import Point from '../Models/Point';
import Rectangle from '../Models/Rectangle';
import Line from '../Models/Line';
import Circle from '../Models/Circle';


const ElementTypes = {
  Point,
  Rectangle,
  Line,
  Circle,
};

class Drawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstClick: {
        xCoord: null,
        yCoord: null,
      },
      currentDrawing: {
        color: '',
        id: null,
        layer: null,
        lineWidth: null,
        name: '',
        r: null,
        x: null,
        y: null,
      },
    };
  }


  getPosition(e) {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    return ({
      x,
      y,
    });
  }


  createElements(e) {
    const { selectedTool, updateElements } = this.props;
    const { firstClick } = this.state;
    let coordObj = this.getPosition(e);
    if (selectedTool !== '') {
      const ElementCreator = ElementTypes[selectedTool];
      const elem = new ElementCreator();
      if (elem.name === 'Points') {
        elem.x = coordObj.x;
        elem.y = coordObj.y;
        updateElements(elem);
      } else if (elem.name === 'Circles' && firstClick.xCoord === null) {
        const coords = Object.assign({}, firstClick);
        coords.xCoord = coordObj.x;
        coords.yCoord = coordObj.y;
        this.setState({
          firstClick: coords,
        });
      } else if (elem.name === 'Circles' && elem.x !== firstClick.xCoord) {
        coordObj = this.getPosition(e);
        elem.x = firstClick.xCoord;
        elem.y = firstClick.yCoord;
        elem.r = Math.sqrt((coordObj.x - firstClick.xCoord) ** 2) + ((coordObj.y - firstClick.yCoord) ** 2);
        updateElements(elem);
        const reset = Object.assign({}, firstClick);
        reset.xCoord = null;
        reset.yCoord = null;
        this.setState({
          firstClick: reset,
        });
      } else if (elem.name === 'Lines' && firstClick.xCoord === null) {
        coordObj = this.getPosition(e);
        const coords = Object.assign({}, firstClick);
        coords.xCoord = coordObj.x;
        coords.yCoord = coordObj.y;
        this.setState({
          firstClick: coords,
        });
      } else if (elem.name === 'Lines' && elem.x1 !== firstClick.xCoord) {
        coordObj = this.getPosition(e);
        elem.x1 = firstClick.xCoord;
        elem.y1 = firstClick.yCoord;
        elem.x2 = coordObj.x;
        elem.y2 = coordObj.y;
        updateElements(elem);
        const reset = Object.assign({}, firstClick);
        reset.xCoord = null;
        reset.yCoord = null;
        this.setState({
          firstClick: reset,
        });
      } else if (elem.name === 'Rectangles' && firstClick.xCoord === null) {
        coordObj = this.getPosition(e);
        const coords = Object.assign({}, firstClick);
        coords.xCoord = coordObj.x;
        coords.yCoord = coordObj.y;
        this.setState({
          firstClick: coords,
        });
      } else if (elem.name === 'Rectangles' && elem.x !== firstClick.xCoord) {
        coordObj = this.getPosition(e);
        if (firstClick.xCoord > coordObj.x && firstClick.yCoord > coordObj.y) {
          elem.width = firstClick.xCoord - coordObj.x;
          elem.height = firstClick.yCoord - coordObj.y;
          elem.x = coordObj.x;
          elem.y = coordObj.y;
        } else if (firstClick.xCoord < coordObj.x && firstClick.yCoord < coordObj.y) {
          elem.x = firstClick.xCoord;
          elem.y = firstClick.yCoord;
          elem.width = coordObj.x - firstClick.xCoord;
          elem.height = coordObj.y - firstClick.yCoord;
        } else if (firstClick.xCoord > coordObj.x && firstClick.yCoord < coordObj.y) {
          elem.x = coordObj.x;
          elem.y = firstClick.yCoord;
          elem.width = firstClick.xCoord - coordObj.x;
          elem.height = coordObj.y - firstClick.yCoord;
        } else if (firstClick.xCoord < coordObj.x && firstClick.yCoord > coordObj.y) {
          elem.x = firstClick.xCoord;
          elem.y = coordObj.y;
          elem.width = coordObj.x - firstClick.xCoord;
          elem.height = firstClick.yCoord - coordObj.y;
        }
        updateElements(elem);
        const reset = Object.assign({}, firstClick);
        reset.xCoord = null;
        reset.yCoord = null;
        this.setState({
          firstClick: reset,
        });
      }
    }
  }


  render() {
    const {
      elements,
    } = this.props;
    return (
      <div className="tabloul">
        <svg
          width="1108"
          height="348"
          style={{ background: '#FAF9F9' }}
          onClick={event => this.createElements(event)}
          onMouseMove={event => this.getPosition(event)}
          >
          <g>{elements.map(element => this.drawGeometry(element))}</g>
          <g

          >
            {this.state.firstClick !== null ? this.drawGeometry(this.state.currentDrawing) : null }
          </g>
        </svg>
      </div>
    );
  }

  drawGeometry(element) {

    switch (element.name) {
      case 'Circles':
        return (
          <circle
            id={element.name}
            onClick={() => this.props.setSelectedId(element)}
            key={element.id}
            cx={element.x}
            cy={element.y}
            r={element.r}
            stroke={element.color}
            strokeWidth={element.lineWidth}
            fill="yellow"
              />
        );
        break;
      case 'Rectangles':
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
            strokeWidth={element.lineWidth}
            fill="red"
              />
        );
        break;
      case 'Lines':
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
        );
        break;
      case 'Points':
      {
        return (
          <path
            d={`M ${element.x } ${element.y } L ${element.x} ${ element.y} Z`}
            stroke="black"
            onClick={() => this.props.setSelectedId(element)}
            id={element.name}
            key={element.id}
            strokeLinecap="round"
            strokeWidth="4"
              />
        );
      }
      default:
        return null;
        break;
    }

  }

}

export default Drawer;
