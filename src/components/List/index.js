import React, { Component } from 'react';
import List from '@material-ui/core/List';
import Item from './Item';

class UsersList extends Component {
  render() {
    const { users, deleteUser, updateUser } = this.props;

    if (!users) {
      return <div> ...Loading </div>;
    }
    return (
      <List>
        {users.map((user) => {
          return (
            <Item
              user={user}
              key={user.id}
              updateUser={updateUser}
              deleteUser={deleteUser}
            />
          );
        })}
      </List>
    );
  }
}
export default UsersList;
