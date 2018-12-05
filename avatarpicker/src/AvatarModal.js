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
      <div className="modal arrow_box">
        <div className="modalHeader">Choose your avatar</div>
        <div className="avatarList">
          {avatars.map(avatar => (
            <AvatarPic
              src={avatar.src}
              id={avatar.id}
              changeAvatar={id => changeAvatar(id)}
              isCurrentAvatar={this.props.currentAvatar.id === avatar.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default onClickOutside(AvatarModal);
