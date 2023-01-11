import { connect } from "react-redux";
import { changeFollowStateAC, setUsersAC } from "../../redux/usersReducer";
import Users from "./Users";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeFollowState: (userId) => {
            dispatch(changeFollowStateAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
