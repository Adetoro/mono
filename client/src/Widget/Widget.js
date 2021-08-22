import React, { Component } from 'react';

import SearchBar from './SearchBar/SearchBar';
import Banks from './Banks/Banks';
import './Widget.css';
 

class Widget extends Component {

  constructor(){
    super();
    this.state = {
      banklist: [],
      searchfield: '',
    }
  }

  //GET VALUE FROM SEARCHBAR
  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }
  
  componentDidMount(){  
    
    //FETCH BANKLIST AND LOGOS FROM API
    fetch('/banks')
    .then(response => response.json())
    .then(data => {
        let getArr = [];
        getArr = Object.values(data)
        this.setState({banklist: getArr})
    })
  }
  
  render() {
    //FILTER BANKLIST BASED ON USER INPUT
    const filteredBanklist = this.state.banklist.filter( bank => {
      return bank.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })

  return (
    <div>
      <div className="Widget-container">
        <div className="Card-bg">
            <div className="Widget-title">
                Choose your bank
            </div>
            <SearchBar searchChange={this.onSearchChange}/>
            <Banks banklist={filteredBanklist}/>            
        </div>
        <div>
          <div className="Powered">
            <p>Powered by</p> 
            <div className="Powered-logo"></div>
          </div>
        </div>
    </div>
    </div>
    
  );
  }
}

export default Widget;