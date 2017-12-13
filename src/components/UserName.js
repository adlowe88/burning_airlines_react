import React, { PureComponent as Component } from 'react';

class UserName extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.match.params.user.name}</h2>
      </div>
    );
  }
}

export default UserName;
