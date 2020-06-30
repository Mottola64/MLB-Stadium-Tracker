import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";
import { connect } from "react-redux";

class Home extends React.Component {
  handleClick = () => {
    axios
      .delete("http://localhost:3001/logout", { withCredentials: true })
      .then((response) => {
        props.handleLogout();
        props.history.push("/");
      })
      .catch((error) => console.log(error));
  };
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Welcome To Stadium Tracker!</h1>
        </Jumbotron>
        <Link to="/login">Log In</Link>
        <br></br>
        <Link to="/signup">Sign Up</Link>
        <br></br>
        {props.loggedInStatus ? (
          <Link to="/logout" onClick={handleClick}>
            Log Out
          </Link>
        ) : null}
      </div>
    );
  }
}
export default Home;
