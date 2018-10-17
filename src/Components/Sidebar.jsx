import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, ButtonToolbar, Button, Glyphicon } from 'react-bootstrap';
import Point from '../Models/Point.js';
import Rectangle from '../Models/Rectangle.js';
import Line from '../Models/Line.js';
import Circle from '../Models/Circle.js';


class Sidebar extends Component {




  render(){
    const { selectTool, selectedTool, drawGeometry } = this.props;
    return(
      <div className="col-sm-2">
            <ButtonToolbar>
                <Button
                  className={'selector btn' + (selectedTool === "" ? ' btn-primary ' : '')}
                  onClick={() => selectTool("")}
                >
                  <Glyphicon glyph="play" />
                </Button>
            </ButtonToolbar>
            <ButtonToolbar
            className="topbuttons"
            >
              <Button
                className={'btn' + (selectedTool === "Point" ? ' btn-primary' : '')}
                onClick={() => selectTool("Point")}
              >
                <Glyphicon glyph="record" />
              </Button>
              <Button
                className={'btn' + (selectedTool === "Rectangle" ? ' btn-primary' : '')}
                onClick={() => selectTool("Rectangle")}
              >
                <Glyphicon glyph="unchecked" />
              </Button>
            </ButtonToolbar>
            <ButtonToolbar className="secondrowbuttons">
              <Button
                className={'btn' + (selectedTool === "Line" ? ' btn-primary' : '')}
                onClick={() => selectTool("Line")}
              >
                <Glyphicon glyph="minus" />
              </Button>
              <Button
                className={'btn' + (selectedTool === "Circle" ? ' btn-primary' : '')}
                onClick={() => selectTool("Circle")}
              >
                <Glyphicon glyph="dashboard" />
              </Button>
            </ButtonToolbar>
      </div>
    )
  }
}

export default Sidebar;
