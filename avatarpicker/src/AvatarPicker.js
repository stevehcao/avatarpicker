import React, { Component } from 'react';
import avatar1 from './pics/avatar1.png';
import AvatarModal from './AvatarModal';

class AvatarPicker extends Component {
  state = { avatar: this.props.avatars[0].src };

  changeAvatar = id => {
    const chosen = this.props.avatars.find(avatar => {
      return id === avatar.id;
    });

    this.setState({ avatar: chosen.src });
  };

  render() {
    const { avatars } = this.props;
    return (
      <div>
        <img alt="top image" src={this.state.avatar} />
        <AvatarModal
          avatars={avatars}
          changeAvatar={id => this.changeAvatar(id)}
        />
      </div>
    );
  }
}

export default AvatarPicker;
