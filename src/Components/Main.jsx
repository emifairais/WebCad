import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, ButtonToolbar, Button, Glyphicon, ListGroup, ListGroupItem, ButtonGroup } from 'react-bootstrap';
import Point from '../Models/Point.js';
import Rectangle from '../Models/Rectangle.js';
import Line from '../Models/Line.js';



class MainComponent extends Component {

render(){

  const { elements, addElement,updatedValue, appState, deleteElement, setSelectedId, activateInput, addToInput, selectedTool, selectedElementId, modifyElement, changeUpdatedValue, currentKeyArray, currentKey } = this.props;
  return(
            <div className="col-sm-7">
              <div className="top">
                <ButtonToolbar className="addordeletebuttons">
                  <Button
                    className={'btn btn-danger' + (selectedElementId ? '' : ' disabled ')}
                    onClick={() => deleteElement()}
                  >
                    <Glyphicon glyph="remove" />
                  </Button>
                </ButtonToolbar>
              </div>

              <div className="stringify">
                {JSON.stringify(appState)}
              </div>
            </div>
          )
        }
      }


export default MainComponent;
