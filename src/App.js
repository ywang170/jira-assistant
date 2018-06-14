import React, { Component } from 'react';
import './App.css';
import CdmListComponent from './CdmListComponent';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cdmId: null,
      logoCss: 'logo',
      relatedCdmList: [],
    }
  }

  updateCdmId(e) {
    this.setState({
      cdmId: e.target.value
    });
  }

  search() {
    this.setState({
      relatedCdmList: [],
      logoCss: 'logo-rotate',
    });
    fetch ('http://localhost:5000/?cdmId='+this.state.cdmId, {
      method: "GET",
      mode: 'cors',
      credentials: 'same-origin',
      headers: {"Content-Type": "application/json"}
    })
    .then(function(res){
      if (!res || res.status !== 200) {
      this.setState({
        logoCss: 'logo',
      });
        throw new Error('get questions fail');
      }
      return res.json();
    }.bind(this))
    .then(function(data){
      this.setState({
	relatedCdmList: data.relatedCdmList,
        logoCss: 'logo',
      });
    }.bind(this))
    .catch(function(error){
    });
  }

  renderRelatedCdmList() {
    var relatedCdmListHtml = [];

    for (var i = 0; i < this.state.relatedCdmList.length; i++) {
      var relatedCdm = this.state.relatedCdmList[i];

      relatedCdmListHtml.push(
        <CdmListComponent title={relatedCdm}/>
      );
    }

    return relatedCdmListHtml;
  }

  render() {
    return (
      <div className='container'>
        <div className={this.state.logoCss}></div>
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
