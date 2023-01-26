import React from "react";
import { connect } from "react-redux";
import Login from "./Login";

class LoginContainer extends React.Component {
    render = () => <Login {...this.props} />
}


const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, {})(LoginContainer)