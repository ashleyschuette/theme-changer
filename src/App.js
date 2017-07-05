import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  constructor(props) { // constructor
    super(props);

    this.updateColor = this.updateColor.bind(this);
    this.updateSize = this.updateSize.bind(this);
    this.updateFamily = this.updateFamily.bind(this);
    this.updateEditStatus = this.updateEditStatus.bind(this);

    this.state = {
      fontColor: 'black',
      fontSize: 12,
      fontFamily: 'monospace',
      allowEdit: 'true'
    };
  } 

  updateColor(val) { // updateColor
    this.setState({
      fontColor: val
    })
  } 

  updateSize(val) { // updateSize
    this.setState({
      fontSize: val
    })
  }

  updateFamily(val) {// updateFamily
    this.setState({
      fontFamily: val
    })
  }

  updateEditStatus(val) { // updateEditStatus
    this.setState({
      allowEdit: val
    })
  }

  render() {
    return (
      <div>
        <div className="headerBar">
          <EditToggle update={this.updateEditStatus /* Render EditToggle */ } />
          <ColorChanger update={this.updateColor /* Render ColorChanger */ } allowEdit={this.state.allowEdit} />
          <SizeChanger update={this.updateSize /* Render SizeChanger */} allowEdit={this.state.allowEdit}/>
          <FamilyChanger update={this.updateFamily/* Render FamilyChanger */ } allowEdit={this.state.allowEdit} />
        </div>
        <div className="textArea">
          <TextContainer
            fontColor={this.state.fontColor/* Render TextContainer */}
            fontSize={this.state.fontSize}
            fontFamily={this.state.fontFamily} />
        </div>
      </div>
    )
  }
}

export default App;
