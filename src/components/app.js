import React , { Component } from 'react';
import style from '../../style/main.scss';

class App extends Component{

  render(){
    return(
      <div>
          <h1>Hello World!</h1>
          <p>Now you can start coding</p>
          <p>If you meet any problems please visit <a className="link" href="https://github.com/mrdck/React-Redux-Observable-Webpack-2">GitHub Page</a> and post your issue</p>
          <i className="author">By Mateusz 'mrdck' Perlak</i>
      </div>
    )
  }

}


export default App
