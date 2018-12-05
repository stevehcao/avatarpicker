import React, { Component } from 'react';
import avatar1 from './pics/avatar1.png';

class AvatarPicker extends Component {
  render() {
    const { avatars } = this.props;
    return (
      <div>
        <div className="modal">
          {avatars.map(avatar => (
            <img alt="avatar" src={avatar.src} />
          ))}
        </div>
      </div>
    );
  }
}

export default AvatarPicker;
