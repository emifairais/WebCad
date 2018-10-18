import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Properties from './Properties';
import MainComponent from './Main';
import Drawer from './DrawingArea';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTool: '',
      elements: [],
      selectedElementId: '',
      currentKeyArray: [],
      indexSelectedObject: '',
      selectedObject: {},
    };
    this.selectTool = this.selectTool.bind(this);
    this.setSelectedId = this.setSelectedId.bind(this);
    this.updateElements = this.updateElements.bind(this);
    this.deleteElement = this.deleteElement.bind(this);
    this.getValidationState = this.getValidationState.bind(this);
    this.updateObjectInElements = this.updateObjectInElements.bind(this);
  }


  getElementsById(elements, selectedElementId) {
    return elements.filter(element => element.id === selectedElementId)[0];
  }


  getValidationState() {
    const length = 1;
    if (length > 0.5) return 'success';
    if (length > 0) return 'error';
    return null;
  }


  /* onClick pe drawGeometry din DrawingArea */
  setSelectedId(element) {
    const { selectedElementId, elements } = this.state;
    if (selectedElementId === element.id) {
      this.setState({
        selectedElementId: '',
        selectedObject: {},
        indexSelectedObject: '',
      });
    } else {
      this.setState({
        selectedElementId: element.id,
        selectedObject: elements[elements.indexOf(this.getElementsById(elements, element.id))],
        indexSelectedObject: elements.indexOf(this.getElementsById(elements, element.id)),
      });
    }
  }


  removeById(elements, id) {
    const elementsUpdated = elements.filter(element => element.id !== id);
    return elementsUpdated;
  }

  selectTool(selectedTools) {
    const { selectedTool } = this.state;
    if (selectedTools === '') {
      this.setState({
        selectedTool: '',
        selectedElementId: '',
      });
    } else if (selectedTool === selectedTools) {
      this.setState({
        selectedTool: '',
      });
    } else {
      this.setState({
        selectedTool: selectedTools,
        selectedElementId: '',
      });
    }
  }


  updateElements(obj) {
    const { elements } = this.state;
    const newElements = Object.assign([], elements);
    newElements.push(obj);
    this.setState({
      elements: newElements,
    });
  }


  /* o sa fie onClick la properties */
  updateObjectInElements(obj) {
    const { indexSelectedObject, elements } = this.state;
    const newElements = Object.assign([], elements);
    newElements[indexSelectedObject] = obj;
    this.setState({
      elements: newElements,
    });
  }

  deleteElement() {
    const { elements, selectedElementId } = this.state;
    this.setState({
      elements: this.removeById(elements, selectedElementId),
      selectedElementId: '',
      selectedObject: {},
    });
  }


  render() {
    const {
      elements, selectedTool, currentKeyArray, indexSelectedObject,
    } = this.state;
    const {
      selectedObject, selectedElementId,
    } = this.state;
    return (
      <div className="App" id="App">
        <div className="header">
          <Header />
        </div>
        <div className="sidebar">
          <Sidebar
            selectTool={this.selectTool}
            selectedTool={selectedTool}
          />
        </div>
        <div className="drawingArea">
          <Drawer
            elements={elements}
            selectedTool={selectedTool}
            setSelectedId={this.setSelectedId}
            updateElements={this.updateElements}
          />
        </div>
        <div className="mainComponent">
          <MainComponent
            deleteElement={this.deleteElement}
            elements={elements}
            setSelectedId={this.setSelectedId}
            activateInput={this.activateInput}
            appState={this.state}
            selectedTool={selectedTool}
            selectedElementId={selectedElementId}
            currentKeyArray={currentKeyArray}
          />
        </div>
        <div className="properties">
          <Properties
            getValidationState={this.getValidationState}
            elements={elements}
            selectedElementId={selectedElementId}
            setSelectedId={this.setSelectedId}
            indexSelectedObject={indexSelectedObject}
            appState={this.state}
            updateObjectInElements={this.updateObjectInElements}
            selectedObject={selectedObject}
            selectedTool={selectedTool}
          />
        </div>
      </div>
    );
  }
}

export default App;
