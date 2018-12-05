import React, { Component } from 'react';
import axios from 'axios'; 
import './App.css';
import Avatar from './components/Avatar';

class App extends Component {
  
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { 
      urls: 'https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg',
      keys: '1'
    };
    this.onClick = this.onClick.bind(this);
  }
  
  onClick(){
    console.log('**** clicked')
    axios.get('/api/profile/avatars')
      .then(res => {
        // // get all urls
        // let urls = res.data
        // console.log('urls', urls)
        // this.setState({urls})

        // get individual url
        let arrays = res.data
        arrays.forEach(array=>{
          let keys = array[0]
          let urls = array[1] 
          this.setState({
            keys, 
            urls
          })
          console.log('**** urls', urls)
        })
        
      })
      .catch(err => console.log(err))
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.urls !== prevProps.urls) {
      this.setState(this.props.userID);
    }
  }

  // createImage = (url) => {
  //   return <img src={url[1]} key={url[0]} alt="gh avatar images" className="rounded-circle avatar-img" />;
  // }

  // createImages = (urls) => {
  //   return urls.map(this.createImage);
  // }
  
  render() {
    const { urls, keys } = this.state;

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
              <div className='col-md-12 text-center'>
                {/* {this.createImages(urls)} */}
                {<img src={urls} key={keys} alt="gh avatar images" className="rounded-circle avatar-img" />}
                {/* <Avatar avatar={urls} id={keys}/> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
