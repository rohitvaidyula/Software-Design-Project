import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const User = (props) => (
  <tr>
    <td>{props.user.user_firstname}</td>
    <td>{props.user.user_lastname}</td>
    <td>{props.user.user_addy1}</td>
    <td>{props.user.user_addy2}</td>
    <td>{props.user.user_city}</td>
    <td>{props.user.user_zipcode}</td>
    <td>{props.user.user_state}</td>
    <td>
      <Link to={"/edit/" + props.user._id}>Edit</Link>
    </td>
  </tr>
);

export default class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/user/")
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  userList() {
    return this.state.users.map(function (currentUser, i) {
      return <User user={currentUser} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3>Users List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address 1</th>
              <th>Address 2</th>
              <th>City</th>
              <th>Zipcode</th>
              <th>State</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.userList()}</tbody>
        </table>
      </div>
    );
  }
}
