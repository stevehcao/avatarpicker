import React, { Component } from 'react';
import avatar1 from './pics/avatar1.png';
import AvatarModal from './AvatarModal';

class AvatarPicker extends Component {
  state = {
    avatar: this.props.avatars[0].src,
    modalOpen: false
  };

  changeAvatar = id => {
    const chosen = this.props.avatars.find(avatar => {
      return id === avatar.id;
    });

    this.setState({ avatar: chosen.src });
  };

  toggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  render() {
    const { avatars } = this.props;
    return (
      <div>
        <img
          alt="current avatar"
          src={this.state.avatar}
          onClick={this.toggleModal}
        />
        {this.state.modalOpen ? (
          <AvatarModal
            avatars={avatars}
            changeAvatar={id => this.changeAvatar(id)}
          />
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default AvatarPicker;
