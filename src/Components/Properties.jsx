import React, { Component } from 'react';
import '../App.css'
import Geometrie from '../Models/Geometrie.js';
import { Form, Col,  Navbar, FormGroup, ControlLabel, FormControl, Nav, NavItem, NavDropdown, MenuItem, ButtonToolbar, Button, Glyphicon, ListGroup, ListGroupItem, ButtonGroup } from 'react-bootstrap';


const createKeysArray = (obj) => {
  let newArray = Object.keys(obj);
  return newArray.filter(element => element !=="id" && element!== "undefined");
}



class Properties extends Component {
constructor(props){
  super(props);
  this.state = {
    currentObject: {},
    inputVal: ""
  }

}

componentWillReceiveProps(newProps) {
    this.setState({currentObject: newProps.elements[newProps.indexSelectedObject]})

}

onChange(value, prop) {
  const { currentObject } = this.state;
  const newObj = Object.assign({}, currentObject)
  newObj[prop] = value
  this.setState({
    currentObject: newObj
  })
}


  render() {



    const { updateObjectInElements, appState, selectedObject, selectedTool, updateElements, changeUpdatedValue, insertDiv, getValidationState, updatedValue, elements, selectedElementId, indexSelectedObject } = this.props;
    const generalPropertiesArray = ["layer", "color", "lineWidth"]
    let keyArray = createKeysArray(selectedObject);
    let updatedObj;

    return(
        <div className="col-sm-3">
        <div className="container" disabled>
        <div className="generalPropertiesTitle"><strong>General Properties</strong></div>
          {generalPropertiesArray.map(generalProperty => {
            return (
              <div>
                  <Col className="genpropstext" xs={3}>
                  <strong>{generalProperty.toUpperCase()}</strong>
                  </Col>
                  <Col xs={9}>
                    {
                      indexSelectedObject !== "" ? (
                        <div>
                        <FormControl
                          className="generalproperties"
                          type="text"
                          key={(this.state.currentObject !== undefined ? this.state.currentObject.id : "" )}
                          name="layer"
                          value ={(this.state.currentObject !== undefined ? this.state.currentObject[generalProperty] : "" )}
                          onChange={e => this.onChange(e.target.value, generalProperty) }
                          onKeyPress={event => {
                            if(event.key === 'Enter'){
                              updatedObj = Object.assign({}, this.state.currentObject)
                              updatedObj[generalProperty] = event.target.value
                              this.setState({
                                currentObject: updatedObj
                              })
                              updateObjectInElements(updatedObj)
                            }
                          }
                        }
                           />
                        <FormControl.Feedback />
                        </div>
                      ) : (
                        <div>
                        <FormControl
                          disabled
                          className="generalproperties"
                          type="text"
                          key={(this.state.currentObject !== undefined ? this.state.currentObject.id : "" )}
                          name="layer"
                          value ={(this.state.currentObject !== undefined ? this.state.currentObject[generalProperty] : "" )}
                          onChange={e => this.onChange(e.target.value, generalProperty) }
                          onKeyPress={event => {
                            if(event.key === 'Enter'){
                              updatedObj = Object.assign({}, this.state.currentObject)
                              updatedObj[generalProperty] = event.target.value
                              this.setState({
                                currentObject: updatedObj
                              })
                              updateObjectInElements(updatedObj)
                            }
                          }
                        }
                           />
                        <FormControl.Feedback />
                        </div>
                      )
                    }
                  </Col>
            </div>
            )
          })
        }



      { indexSelectedObject !== "" && <div className="specificPropertiesTitle"><strong>Specific Properties</strong></div> }
      {keyArray.filter(specificProperty => specificProperty !== "layer" && specificProperty !== "color" && specificProperty !== "lineWidth" && specificProperty !== "id" && specificProperty !== "name").map(specificProperty =>
      {
        return <div>
            <Col className="specpropstext" xs={3}>
            <strong>{specificProperty.toUpperCase()}</strong>
            </Col>
            <Col xs={9}>
              <FormControl
                type="text"
                className="specificproperties"
                key={(this.state.currentObject !== undefined ? this.state.currentObject.id : "" )}
                value ={(this.state.currentObject !== undefined ? this.state.currentObject[specificProperty] : "" )}
                onChange={e => this.onChange(e.target.value, specificProperty) }
                onKeyPress={event => {
                  if(event.key === 'Enter'){
                    updatedObj = Object.assign({}, this.state.currentObject)
                    updatedObj[specificProperty] = event.target.value
                    this.setState({
                      currentObject: updatedObj
                    })
                    updateObjectInElements(updatedObj)
                  }
                }
              }
                 />
              <FormControl.Feedback />
            </Col>
          </div>
      }
    )
    }
        </div>
      </div>
    )
  }
}

export default Properties;
