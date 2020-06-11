import React , { useState } from 'react';
import './checkbox.css';

function Checkbox(props) {
  var checkbox = useState(props.arr)[0];
  var i = 1;
  checkbox = checkbox.map(item => {
    item = new String(item);
    item.id = i;
    item.value = item;
    item.checked = false;
    i++;
    return item;
  });
  return (
    <div className="checkbox">
      <ul>
      {checkbox.map(item => {
          return <li key={item.id}>{item.value}<input type="checkbox" onClick={props.changeState.bind(this,checkbox,item.id)}/></li>;
      })}
      </ul>
    </div>
  );
}

export default Checkbox;