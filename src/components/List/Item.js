import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null
    };
  }

  componentDidMount() {
    const {
      user: { name }
    } = this.props;
    this.setState({ name });
  }

  updateUser = (e) => {
    const {
      user: { id },
      updateUser
    } = this.props;
    const {
      currentTarget: { value }
    } = e;
    this.setState({ name: value });
    updateUser(id, value);
  };

  render() {
    const {
      user: { id, img, department },
      deleteUser
    } = this.props;
    const { name } = this.state;
    return (
      <ListItem key={id}>
        <ListItemAvatar>
          <Avatar alt={``} src={img} />
        </ListItemAvatar>
        <FormControl>
          <Input
            id={id}
            label={department}
            styles={{ width: 150 }}
            value={name}
            onChange={(e) => {
              this.updateUser(e);
            }}
            margin="normal"
          />
          <FormHelperText id="component-helper-text">
            {department}
          </FormHelperText>
        </FormControl>
        <IconButton
          onClick={() => {
            deleteUser(id);
          }}
          color="primary"
          aria-label="Delete"
        >
          <DeleteIcon />
        </IconButton>
      </ListItem>
    );
  }
}
export default Item;
