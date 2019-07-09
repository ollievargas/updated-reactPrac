import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: "Jasmine", age: 25},
      {name: "Amy", age: 30},
      {name: "Jerry", age: 40}
    ]
  }

  clickEventHandler = (newName) => {
    // this.state.persons[0].name = "Christopher"<-----DONT NOT MUTATE STATE DIRECTLY!!!!
    this.setState({
      persons: [
        {name: newName, age: 40},
        {name: "Lori", age: 27},
        {name: "Karen", age: 29}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>This is React!!!</h1>
        <p>This is React and its working!</p>
        <button onClick={this.clickEventHandler.bind(this, 'Ollie')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.clickEventHandler}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.clickEventHandler.bind(this, 'Molly!')}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} click={this.clickEventHandler}/>
        </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

