import React, { Component } from 'react';
import '../App.css'
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import Properties from './Properties.jsx'
import MainComponent from './Main.jsx';
import Drawer from './DrawingArea.jsx';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTool: "",
      elements: [],
      selectedElementId:"",
      currentKeyArray:[],
      indexSelectedObject: "",
      selectedObject: {}
    }
  }


  getElementsById(elements, selectedElementId) {
    return elements.filter(element => element.id === selectedElementId)[0];
  }

/*o sa fie onClick la properties*/
 updateObjectInElements(obj) {
   const { indexSelectedObject, elements } = this.state;
   const newElements = Object.assign([], elements);
   newElements[indexSelectedObject] = obj;
   this.setState({
     elements: newElements
   })
 }


 updateElements(obj) {
   const { elements } = this.state;
   const newElements = Object.assign([], elements);
   newElements.push(obj);
   this.setState({
     elements: newElements
   })
 }


getValidationState() {
    const length = 1
    if (length > 0.5) return 'success';
    else if (length > 0) return 'error';
    return null;
  }







selectTool(selectedTool) {
      if(selectedTool === ""){
        this.setState({
          selectedTool: "",
          selectedElementId: ""
        })

      } else {
        if(this.state.selectedTool === selectedTool){
          this.setState({
            selectedTool:""
          })
        } else {
        this.setState({
          selectedTool,
          selectedElementId: ""
        })
  }
}
}


removeById(elements, id) {
  const elementsUpdated = elements.filter(element => element.id !== id);
  return elementsUpdated;
}

/*onClick pe drawGeometry din DrawingArea*/
setSelectedId(element) {
    const { selectedElementId, elements } = this.state;
    if(selectedElementId === element.id){
      this.setState({
        selectedElementId: "",
        selectedObject: {},
        indexSelectedObject: ""
      })
    } else {
      this.setState({
      selectedElementId: element.id,
      selectedObject:elements[elements.indexOf(this.getElementsById(elements, element.id))],
      indexSelectedObject: elements.indexOf(this.getElementsById(elements, element.id))
    })
  }

}


deleteElement() {
    this.setState({
      elements: this.removeById(this.state.elements, this.state.selectedElementId),
      selectedElementId:"",
      selectedObject: {}
    })
}



  render() {
    const { elements, selectedTool, selectedObject, selectedElementId, currentKeyArray, indexSelectedObject } = this.state;
    return (
      <div className="App" id="App">
        <div className="header">
          <Header />
        </div>
        <div className="sidebar">
          <Sidebar
            selectTool={this.selectTool.bind(this)}
            selectedTool={selectedTool}
          />
        </div>
        <div className="drawingArea">
          <Drawer
            elements={elements}
            selectedTool={selectedTool}
            setSelectedId={this.setSelectedId.bind(this)}
            selectedTool={selectedTool}
            updateElements={this.updateElements.bind(this)}
          />
      </div>
      <div className="mainComponent">
          <MainComponent

            deleteElement={this.deleteElement.bind(this)}
            elements={elements}
            setSelectedId={this.setSelectedId.bind(this)}
            activateInput={this.activateInput}
            appState={this.state}
            selectedTool={selectedTool}
            selectedElementId={selectedElementId}
            currentKeyArray={currentKeyArray}
            />
      </div>
      <div className="properties">
          <Properties
            getValidationState={this.getValidationState.bind(this)}
            elements={elements}
            selectedElementId={selectedElementId}
            setSelectedId={this.setSelectedId.bind(this)}
            indexSelectedObject={indexSelectedObject}
            appState={this.state}
            updateObjectInElements={this.updateObjectInElements.bind(this)}
            selectedObject={selectedObject}
            selectedTool={selectedTool}
          />
      </div>
    </div>
    )
  }
}

export default App;
