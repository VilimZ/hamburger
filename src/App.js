import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = ({
    person: [
      { name: 'Emil', age: 22 },
      { name: 'Yan', age: 35 },
      { name: 'Olmo', age: 47 }
    ],
    otherState: 'some other value'
  })




  switchNameHandler = () => {
    //console.log('Was Clicked!');
    this.setPersonState({
      person: [
        { name: 'Zono', age: 49 },
        { name: 'Marko', age: 11 },
        { name: 'Ilija', age: 25 }
      ]

    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      person: [
        { name: 'Zono', age: 49 },
        { name: event.target.value, age: 11 },
        { name: 'Ilija', age: 25 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>This is Hamburger!</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age} />
        <Person
          name={this.state.person[1].name} age={this.state.person[1].age}
          click={this.switchNameHandler.bind(this, 'SOS')}
          changed={this.nameChangedHandler}>My hobbies is fishing.
        </Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age} />
      </div>
    );


  }

}
export default App;
