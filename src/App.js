import React from 'react';
import Checkbox from './components/checkbox';
import './App.css';

class App extends React.Component {

  changeState = (arr,id) => 
  {
    arr = arr.map(item => {
      if (item.id === id)
      {
        item.checked = !item.checked;
      }
      return item;
    });
   console.log(arr);
  }

  render()
  {
    const arr = ["1","2","good","bad"];
    return (
      <div className="App">
        <Checkbox arr={arr} changeState={this.changeState}/>
      </div>
    );
  }  
  }
  
export default App;
