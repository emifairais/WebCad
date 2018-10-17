const newElements={};

const ElementTypes = {
  Point,
  Rectangle,
  Line,
  Circle
}


this.state = {
  firstClick: {
    xCoord: null,
    yCoord: null
  }
}

/*o sa fie onClick la svg*/
createElements(e) {
    const { selectedTool, elements, selectedElementId }  = this.state;
    const coordObj = this.getPosition(e);
    if (selectedTool !== ""){
      const ElementCreator = ElementTypes[selectedTool]
      const elem = new ElementCreator()
      if(elem.name === "Points"){
        elem.x=coordObj.x;
        elem.y=coordObj.y;
        this.props.updateElements(elem);
      } else if(elem.name === "Circles" && this.state.firstClick.x === null) {
        let coords = Object.assign({}, this.state.firstClick);
        coords.xCoord = coordObj.x;
        coords.yCoord = coordObj.y;
        this.setState({
          firstClick: coords
        })
      } else if(elem.name === "Circles" && this.state.firstClick.x !== null){
        coordObj = this.getPosition(e)
        elem.x=this.state.firstClick.xCoord;
        elem.y=this.state.firstClick.yCoord;
        elem.r=Math.sqrt(Math.pow((coordObj.x-this.state.firstClick.xCoord),2)+Math.pow((coordObj.y-this.state.firstClick.yCoord),2))
      }
    }
  }


































   -
generalPropertiesArray.map(generalProperty => {
  return (
    <div>
        <Col className="genpropstext" xs={3}>
        <strong>Layer</strong>
        </Col>
        <Col xs={9}>
          <FormControl
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
                updateObject(updatedObj)
              }
            }
          }
             />
          <FormControl.Feedback />
        </Col>
  </div>
  )
})




<div>
   <Col className="genpropstext" xs={3}>
   <strong>Layer</strong>
   </Col>
   <Col xs={9}>
     <FormControl
       type="text"
       key={(this.state.currentObject !== undefined ? this.state.currentObject.id : "" )}
       name="layer"
       value ={(this.state.currentObject !== undefined ? this.state.currentObject.layer : "" )}
       onChange={e => this.onChange(e.target.value, "layer") }
       onKeyPress={event => {
         if(event.key === 'Enter'){
           updatedObj = Object.assign({}, this.state.currentObject)
           updatedObj["layer"] = event.target.value
           this.setState({
             currentObject: updatedObj
           })
           updateObject(updatedObj)
         }
       }
     }
        />
     <FormControl.Feedback />
   </Col>
 </div>
 <div>
    <Col className="genpropstext" xs={3}>
    <strong>Color</strong>
    </Col>
    <Col xs={9}>
      <FormControl
        type="text"
        key={(this.state.currentObject !== undefined ? this.state.currentObject.id : "" )}
        value ={(this.state.currentObject !== undefined ? this.state.currentObject.color : "" )}
        onChange={e => this.onChange(e.target.value, "color") }
        onKeyPress={event => {
          if(event.key === 'Enter'){
            updatedObj = Object.assign({}, this.state.currentObject)
            updatedObj["color"] = event.target.value
            this.setState({
              currentObject: updatedObj
            })
            updateObject(updatedObj)
          }
        }
      }
         />
      <FormControl.Feedback />
    </Col>
  </div>
  <div>
     <Col className="genpropstext" xs={3}>
     <strong>Width</strong>
     </Col>
     <Col xs={9}>
       <FormControl
         type="text"
         key={(this.state.currentObject !== undefined ? this.state.currentObject.id : "" )}
         value ={(this.state.currentObject !== undefined ? this.state.currentObject.lineWidth : "" )}
         onChange={e => this.onChange(e.target.value, "lineWidth") }
         onKeyPress={event => {
           if(event.key === 'Enter'){
             updatedObj = Object.assign({}, this.state.currentObject)
             updatedObj["lineWidth"] = event.target.value
             this.setState({
               currentObject: updatedObj
             })
             updateObject(updatedObj)
           }
         }
       }
          />
       <FormControl.Feedback />
     </Col>
   </div>


Properties good :
