import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import TextEditor from './TextEditor';



class App extends Component {
  render(){
    return (
      <div className="App">
      <header className="App-header">

        <TextEditor />
      
      </header>
    </div>
    );
  }
}


export default App;
