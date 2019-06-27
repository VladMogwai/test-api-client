import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import constants from './constants';
import UsersList from './components/List';
const { API_URL } = constants;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    const url = `${API_URL}/users`;
    const re = await fetch(url);
    let users = await re.json();

    users = users.map((user) => {
      return {
        ...user,
        img: constants[user.name]
      };
    });
    this.setState({ users });
  };

  deleteUser = async (id) => {
    try {
      const url = `${API_URL}/users/${id}`;
      fetch(url, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      });
      console.log(`user with id ${id} was successfully deleted`);
    } catch (error) {
      throw error;
    }
  };

  updateUser = async (id, name) => {
    try {
      const { users } = this.state;
      const url = `${API_URL}/users/${id}`;
      await fetch(url, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name })
      });

      const updatedUsers = users.map((user) => {
        if (user.id === id) {
          return {
            ...user,
            name: name
          };
        }
        return user;
      });
      this.setState({ users: updatedUsers });

      console.log(
        `user with id ${id} was updated`,
        updatedUsers.filter((u) => u.id === id)[0]
      );
    } catch (error) {
      throw error;
    }
  };

  render() {
    const { users } = this.state;

    return (
      <Container maxWidth="sm">
        <UsersList
          users={users}
          updateUser={this.updateUser}
          deleteUser={this.deleteUser}
        />
      </Container>
    );
  }
}
