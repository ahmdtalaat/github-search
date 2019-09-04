import React, { Component } from 'react';

export class UserItem extends Component {
  render() {
    const { login, avatar_url, html_url } = this.props;
    return (
      <div className='card text-center'>
        <img src={avatar_url} className='round-img' style={{ width: '60px' }} />
        <h3>{login}</h3>
        <a href={html_url} className='btn btn-dark btn-sm my-1'>
          More
        </a>
      </div>
    );
  }
}

export default UserItem;
