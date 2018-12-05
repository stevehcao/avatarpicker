import React, { Component } from 'react';

class AvatarPic extends Component {
  render() {
    const { src, id, changeAvatar } = this.props;

    return (
      <img
        className={`avatarPic ${
          this.props.isCurrentAvatar ? 'currentAvatar' : ''
        }`}
        alt="avatar"
        src={src}
        // had to remove id from (id) in below arrow function to avoid id referring to click event
        onClick={() => changeAvatar(id)}
      />
    );
  }
}

export default AvatarPic;
