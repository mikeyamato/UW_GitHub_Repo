import React, { Component } from 'react';
import axios from 'axios'; 
import './App.css';
import Avatar from './components/Avatar';

class App extends Component {
  
  
  onClick(){
    console.log('**** clicked')
    axios.get('/api/profile/avatars')
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }
  
  render() {
    return (
      <div className='landing'>
        <div className='dark-overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 text-center'>
                <h1 className='display-3 mb-4 intro'>Click The Button Below To Grab GitHub Avatars</h1>
                <button type="button" onClick={this.onClick} className="btn btn-danger">GRAB</button>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <Avatar />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
