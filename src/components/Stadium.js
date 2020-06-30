import React from "react";
import {connect} from 'react-redux'

class Stadium extends React.Component {
  render() {
    return <div>Stadium List</div>;
  }
}

export default connect(mapStateToProps, () )(Stadium)
