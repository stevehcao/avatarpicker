import React, { Component } from 'react';
import AvatarPic from './AvatarPic';
import onClickOutside from 'react-onclickoutside';

class AvatarModal extends Component {
  handleClickOutside = evt => {
    // this will allow you to handle clicks outside your component
    this.props.toggleModal();
  };
  render() {
    const { avatars, changeAvatar } = this.props;

    return (
      <div className="modal">
        <h2>Choose your avatar</h2>
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

export default onClickOutside(AvatarModal);
