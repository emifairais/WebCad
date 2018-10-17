{ name === "Circles" &&
<Form className="specform">
  <div className="specificproperties"><strong>Specific Properties</strong></div>
  <FormGroup
    controlId="formBasicText"
    validationState={getValidationState()}
  >

  <Col componentClass={ControlLabel} xs={3}>
    X
  </Col>
  <Col xs={9}>
    <FormControl
      type="text"
      onChange={changeUpdatedValue}
      value={updatedValue}
      onKeyPress={event => {
        if(event.key === 'Enter'){
          updateColor()
        }
      }}
       />
    <FormControl.Feedback />
  </Col>
    <Col componentClass={ControlLabel} xs={3}>
      Y
    </Col>
    <Col xs={9}>
      <FormControl
        type="text"
        onChange={changeUpdatedValue}
        value={updatedValue}
        onKeyPress={event => {
          if(event.key === 'Enter'){
            updateColor()
          }
        }} />
      <FormControl.Feedback />
    </Col>
      <Col componentClass={ControlLabel} xs={3}>
        R
      </Col>
      <Col xs={9}>
        <FormControl
          type="text"
          onChange={changeUpdatedValue}
          value={updatedValue}
          onKeyPress={event => {
            if(event.key === 'Enter'){
              updateColor()
            }
          }} />
        <FormControl.Feedback />
      </Col>
</FormGroup>
</Form>
}
{ name === "Lines" &&
<Form className="specform">
  <div className="specificproperties"><strong>Specific Properties</strong></div>
  <FormGroup
    controlId="formBasicText"
    validationState={getValidationState()}
  >

  <Col componentClass={ControlLabel} xs={3}>
    X1
  </Col>
  <Col xs={9}>
    <FormControl
      type="text"
      onChange={changeUpdatedValue}
      value={updatedValue}
      onKeyPress={event => {
        if(event.key === 'Enter'){
          updateColor()
        }
      }} />
    <FormControl.Feedback />
  </Col>
    <Col componentClass={ControlLabel} xs={3}>
      Y1
    </Col>
    <Col xs={9}>
      <FormControl
        type="text"
        onChange={changeUpdatedValue}
        value={updatedValue}
        onKeyPress={event => {
          if(event.key === 'Enter'){
            updateColor()
          }
        }} />
      <FormControl.Feedback />
    </Col>
      <Col componentClass={ControlLabel} xs={3}>
        X2
      </Col>
      <Col xs={9}>
        <FormControl
          type="text"
          onChange={changeUpdatedValue}
          value={updatedValue}
          onKeyPress={event => {
            if(event.key === 'Enter'){
              updateColor()
            }
          }} />
        <FormControl.Feedback />
      </Col>
      <Col componentClass={ControlLabel} xs={3}>
        Y2
      </Col>
      <Col xs={9}>
        <FormControl
          type="text"
          onChange={changeUpdatedValue}
          value={updatedValue}
          onKeyPress={event => {
            if(event.key === 'Enter'){
              updateColor()
            }
          }} />
        <FormControl.Feedback />
      </Col>
</FormGroup>
</Form>
}
{ name === "Rectangles" &&
<Form className="specform">
  <div className="specificproperties"><strong>Specific Properties</strong></div>
  <FormGroup
    controlId="formBasicText"
    validationState={getValidationState()}
  >

  <Col componentClass={ControlLabel} xs={3}>
    HEIGHT
  </Col>
  <Col xs={9}>
    <FormControl
      type="text"
      onChange={changeUpdatedValue}
      value={updatedValue}
      onKeyPress={event => {
        if(event.key === 'Enter'){
          updateColor()
        }
      }} />
    <FormControl.Feedback />
  </Col>
    <Col componentClass={ControlLabel} xs={3}>
      WIDTH
    </Col>
    <Col xs={9}>
      <FormControl
        type="text"
        onChange={changeUpdatedValue}
        value={updatedValue}
        onKeyPress={event => {
          if(event.key === 'Enter'){
            updateColor()
          }
        }} />
      <FormControl.Feedback />
    </Col>
  </FormGroup>
</Form>
}
