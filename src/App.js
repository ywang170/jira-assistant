import React, { Component } from 'react';
import './App.css';
import CdmListComponent from './CdmListComponent';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cdmId: null,
      relatedCdmList: [],
    }
  }

  updateCdmId(e) {
    this.setState({
      cdmId: e.target.value
    });
  }

  search() {
    var relatedCdmListTemp = [
    {
      cdmName: 'Node is down: ' + this.state.cdmId,
    }, 
    {
      cdmName: 'Upgrade fail: ' + this.state.cdmId,
    }, 
    {
      cdmName: 'Node is down: ' + this.state.cdmId,
    }, 
    {
      cdmName: 'Node is down: ' + this.state.cdmId,
    }, 
    {
      cdmName: 'Node is down: ' + this.state.cdmId,
    }, 
    {
      cdmName: 'Node is down: ' + this.state.cdmId,
    }, 
    {
      cdmName: 'Node is down: ' + this.state.cdmId,
    }, 
    {
      cdmName: 'Node is down: ' + this.state.cdmId,
    }, 
    {
      cdmName: 'Node is down: ' + this.state.cdmId,
    }, 
    {
      cdmName: 'Node is down: ' + this.state.cdmId,
    }, 
    {
      cdmName: 'Node is down: ' + this.state.cdmId,
    }, 
    {
      cdmName: 'Node is down: ' + this.state.cdmId,
    }, 
    {
      cdmName: 'Bootstrap fail: ' + this.state.cdmId,
    }];
    this.setState({
      relatedCdmList: relatedCdmListTemp,
    });
  }

  renderRelatedCdmList() {
    var relatedCdmListHtml = [];

    for (var i = 0; i < this.state.relatedCdmList.length; i++) {
      var relatedCdm = this.state.relatedCdmList[i];

      relatedCdmListHtml.push(
        <CdmListComponent title={relatedCdm.cdmName}/>
      );
    }

    return relatedCdmListHtml;
  }

  render() {
    return (
      <div className='container'>
        <div class="logo"></div>
        <div className='searchBox'>
          <input className="cdmIdInput" type = "text" value = {this.state.cdmId} onChange={(e) => this.updateCdmId(e)} />
          <button className="searchButton" onClick={() => this.search()}>Search CDM</button>    
        </div>
        <div className='relatedCdmList'>
          {this.renderRelatedCdmList()}
        </div>
      </div>
    );
  }
}

export default App;
