
import './App.css';
import Person  from './Person/Person';

class Apps extends Comment {
  state = {
    person: [
      { name: 'Emil', age: 22},
      { name: 'Yan', age: 35},
      { name: 'Olmo', age: 47}
    ]
  }
}

switchNameHandler = () => {
  console.log('Was Clicked!');
}

function App() {
  return (
    <div className="App">
      <h1>This is Hamburger!</h1>
      <button onClick={this.switchNameHandler}>Switch Name</button>
      <Person name={this.state.person[0].name} age={this.state.person.age[0]}></Person>
      <Person name={this.state.person[1].name} age={this.state.person.age[1]}></Person>
      <Person name={this.state.person[2].name} age={this.state.person.age[2]}></Person>
    </div>
  );

}

export default App;
