import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import axios from 'axios';


import List from './pages/List'

class App extends Component {
  // state = {
  //   movies: [],
  //   recommendations: []
  // }

  componentDidMount() {
    axios("./movies.json")
      .then( res => this.props.onInit(res.data)) 
      .catch( err => console.log(err))
  } 

  // delete(id) {
  //   var new_movies = this.state.movies; 
  //   var new_recommand = this.state.recommendations;
  //   console.log(new_recommand)
  //   this.state.movies.map((item, index) => {
  //     if ( item.id === id){
  //       new_movies.splice(index, 1)
  //       new_recommand.push(item)
  //     }
  //   })
  //   this.setState( {movies: new_movies, recommendations: new_recommand})
  // }

  // add(id){
  //   var new_movies = this.state.movies; 
  //   var new_recommand = this.state.recommendations;
  //   this.state.recommendations.map((item, index) => {
  //     if ( item.id === id){
  //       new_recommand.splice(index,1)
  //       new_movies.push(item)
  //     }
  //   })
  //   this.setState( {movies: new_movies, recommendations: new_recommand})
  // }
 
  render() {
    return (
      <div className="container"> 
        <List />
      </div> 
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInit: (data) => dispatch( { type: 'INIT', payload: data})
  }
}

export default connect(null, mapDispatchToProps)(App);
