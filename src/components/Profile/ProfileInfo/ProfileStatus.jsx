import React, { useState } from "react";
import { useEffect } from "react";
import styles from "./ProfileInfo.module.css";

const ProfileStatus = (props) => {
  let [editMode, setEditMode] = useState(false);

  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    if (props.userId === props.currentUser) {
      setEditMode(true);
    }
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    if (props.status !== status) {
      props.updateStatus(status);
    }
  };
  return (
    <>
      <p className={styles.status}>
        Status:
        {!editMode && (
          <span onDoubleClick={activateEditMode}>
            {props.status || "------"}
          </span>
        )}
        {editMode && (
          <input
            autoFocus
            onBlur={deactivateEditMode}
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        )}
      </p>
    </>
  );
};

export default ProfileStatus;
