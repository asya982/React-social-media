import React from "react";
import styles from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  componentDidUpdate = (prevProps) => {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = (e) => {
    this.setState({
      status: e.target.value,
    });
  };

  render = () => (
    <>
      <p className={styles.status}>
        Status:
        {!this.state.editMode && (
          <span onDoubleClick={this.activateEditMode}>
            {this.props.status || "------"}
          </span>
        )}
        {this.state.editMode && (
          <input
            autoFocus
            onBlur={this.deactivateEditMode}
            value={this.state.status}
            onChange={this.onStatusChange}
          />
        )}
      </p>
    </>
  );
}

export default ProfileStatus;
