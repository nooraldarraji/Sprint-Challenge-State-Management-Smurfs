import React, { Component } from "react";
import "./App.css";
// import { getSmurfs } from './actions'
// import { addSmurfs } from './actions'
import { connect } from 'react-redux';
import SmurfList from './components/SmurfList'
import SmurfForm from './components/SmurfForm'

class App extends Component {
    
  render() {
    if(this.props.fetching){
      return <h2>Loading smurfs...</h2>
    }
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfForm />        
        <SmurfList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurf: state.fetching
  }
}

export default connect( mapStateToProps, {})(App); 
