import React, { Component } from 'react';
// import logo from './logo.svg';
// import { Switch, Route } from 'react-router-dom'
import './App.css';
import LoginPage from './LoginPage';
import ProfilePage from './ProfilePage';
import SignupPage from './SignupPage';

class App extends Component {
  state = {
    page: 'login'
  }


  redirect = (page) => {
    this.setState({ page: page })
  }

  componentDidMount() {
    if (localStorage.token) {
      this.redirect('profile')
    }
  }

  
  handleButtonClick = (e) => {
    this.setState({
      page: e
    })
  }

  render() {
    
  
      
      switch (this.state.page) {
        case 'login':
          return < LoginPage redirect={this.redirect} handleButtonClick={this.handleButtonClick} />  
          break;
          case 'profile':
          return < ProfilePage />
          break;
          case 'signup':
          return < SignupPage redirect={this.redirect}/>
          break;
           default:
          return <LoginPage handleButtonClick={this.handleButtonClick}/>
          break;
        
          } 
      }
    }
            
export default App;
