import React, { Component } from 'react';
import AvatarPic from './AvatarPic';

class AvatarModal extends Component {
  render() {
    const { avatars, changeAvatar } = this.props;

    return (
      <div className="modal">
        {avatars.map(avatar => (
          <AvatarPic
            src={avatar.src}
            id={avatar.id}
            changeAvatar={id => changeAvatar(id)}
          />
        ))}
      </div>
    );
  }
}

export default AvatarModal;
