import React, { Component, Fragment } from 'react';
import axios from 'axios';
import User from './App.css'

class App extends Component {
  constructor(){
    super();
    this.state = {
      userDatas:[]
    };
  }
  componentWillMount(){
    const request = axios.create({
      baseURL: 'https://api.github.com'
    })
    request.get('/users/vampire-yuta')
      .then(res => {
        this.setState({
          userDatas: res.data
        });
      })
  }
  render() {
    return (
      <Fragment>
      <header className="header"></header>
      <div className="user">
        <p className="user_img"><img src={this.state.userDatas.avatar_url}/ ></p>
        <div className="user_name">{this.state.userDatas.name}</div>
        <div className="user_id">{this.state.userDatas.login}</div>
        <div className="user_followArea">
          <div className="user_followers">followers:{this.state.userDatas.followers}</div> 
          <div className="user_following">following:{this.state.userDatas.following}</div>
        </div>
        <div className="created_at">{this.state.userDatas.created_at}</div>
      </div>
      </Fragment>
    );
  }
}

export default App;
