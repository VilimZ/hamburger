import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {


  state = {
    person: [
      { name: 'Emil', age: 22 },
      { name: 'Yan', age: 35 },
      { name: 'Olmo', age: 47 }
    ]
  }


  switchNameHandler = () => {
    console.log('Was Clicked!');
  }

  render() {
    return (
      <div className="App">
        <h1>This is Hamburger!</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
        <Person name={this.state.person[1].name} age={this.state.person[1].age}/>
        <Person name={this.state.person[2].name} age={this.state.person[2].age}/>
      </div>
    );


  }

}
export default App;
