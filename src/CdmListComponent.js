import React, { Component } from 'react';
import './CdmListComponent.css';

class CdmListComponent extends Component {
  render() {
    return (
      <div className='cdm'>
        <p>{this.props.title}</p>
      </div>
    );
  }
}

export default CdmListComponent;
