import React, { Component } from 'react';
import AvatarPicker from './AvatarPicker.js';
import avatar1 from './pics/avatar1.png';
import avatar2 from './pics/avatar2.png';
import avatar3 from './pics/avatar3.png';
import avatar4 from './pics/avatar4.png';
import avatar5 from './pics/avatar5.png';
import avatar6 from './pics/avatar6.png';

import './App.css';

const avatars = [
  { src: `${avatar1}`, label: 'Avatar 1', id: 1 },
  { src: `${avatar2}`, label: 'Avatar 2', id: 2 },
  { src: `${avatar3}`, label: 'Avatar 3', id: 3 },
  { src: `${avatar4}`, label: 'Avatar 4', id: 4 },
  { src: `${avatar5}`, label: 'Avatar 5', id: 5 },
  { src: `${avatar6}`, label: 'Avatar 6', id: 6 }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <AvatarPicker avatars={avatars} />
      </div>
    );
  }
}

export default App;
