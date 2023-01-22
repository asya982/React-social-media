import React from "react";
import styles from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };

  toggleEditMode = () => {
    this.setState({
      editMode: !this.state.editMode,
    });
  };

  render = () => (
    <>
      <p className={styles.status}>
        Status:
        {!this.state.editMode && (
          <span onDoubleClick={this.toggleEditMode}>{this.props.status}</span>
        )}
        {this.state.editMode && (
          <input
            autoFocus
            onBlur={this.toggleEditMode}
            value={this.props.status}
          />
        )}
      </p>
    </>
  );
}

export default ProfileStatus;
