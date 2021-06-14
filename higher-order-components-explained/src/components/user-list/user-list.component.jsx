import React from "react";

class UserList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ users: data.slice(0, 5) }));
  }

  render() {
    return (
      <div className="container user-list">
        <h1> User List </h1>
        {this.state.users.map((user) => (
          <div className="post" key={user.id}>
            <h1> {user.name} </h1>
            <h2> {user.email} </h2>
          </div>
        ))}
      </div>
    );
  }
}

export default UserList;
