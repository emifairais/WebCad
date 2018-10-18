import React, { Component } from 'react';
import {
  ButtonToolbar, Button, Glyphicon,
} from 'react-bootstrap';


class MainComponent extends Component {
  render() {
    const {
      appState, deleteElement, selectedElementId,
    } = this.props;
    return (
      <div className="col-sm-7">
        <div className="top">
          <ButtonToolbar className="addordeletebuttons">
            <Button
              className={`btn btn-danger${selectedElementId ? '' : ' disabled '}`}
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
    );
  }
}


export default MainComponent;
