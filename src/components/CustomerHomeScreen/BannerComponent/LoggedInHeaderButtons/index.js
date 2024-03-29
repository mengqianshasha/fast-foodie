import React from "react";
import './index.css';
import Dropdown from "../../public-components/Dropdowns/Dropdown";
import {Link} from "react-router-dom";
import {logout} from "../../../../services/profileService";
import {useDispatch, useSelector} from "react-redux";

const LoggedInHeaderButtons = () => {
    const dispatch = useDispatch();
    // const profile = useSelector(state=>state.profile);

    const logoutHandler = () => {
        logout()
            .then(res => {
                    dispatch({
                        type: "delete-profile"
                    })
            });
    }
    return (
        <div className={"homepage-banner-logged-in-header-container d-flex align-items-center justify-content-start"}>
            {/*<i className="fas fa-bell text-white fa-lg me-3" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Notifications"/>*/}
            {/*<i className="fas fa-comment text-white fa-lg me-3" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Messages"/>*/}
            <div className={"dropdown"}  data-bs-toggle="tooltip" data-bs-placement="bottom" title="Profile">
                <i className="fas fa-user-circle text-white fa-lg fs-1" data-toggle="dropdown"/>
                <div className={"dropdown-menu dropdown-menu-right mt-3 p-1"}>
                    <Link to={"/profile"} className={" dropdown-item"}>View Profile</Link>
                    {/*<Link to={"#"} className={"dropdown-item"}>Account Settings</Link>*/}
                    <div className={"homepage-banner-logout-button dropdown-item"} onClick={logoutHandler}>Log out</div>
                </div>
            </div>
        </div>
    )
}

export default LoggedInHeaderButtons;