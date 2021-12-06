import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import "./Profile.css";
import ProfileHeader from "./ProfileHeader";
import ProfileNavSidebar from "./ProfileNavSidebar";
import ProfileAboutMe from "./ProfileAboutMe";
import ProfileNotifications from "./ProfileNotifications";
import ProfileRecentActivities from "./ProfileRecentActivities";
import EditProfile from "./EditProfile";
import users from "../../reducers/data/profile/users.json";
import {fetchProfile} from "../../services/profileService";
import {useHistory} from "react-router-dom";

const ProfileScreen = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    // If no profile fetched (unlogin), go to login page
    const getProfile = () => {
        fetchProfile(dispatch)
            .catch(e => history.push('/login'))
    }
    useEffect(getProfile, [history])

    /*    const profile = users[0];*/

    /**********************************Get the login profile data******************************/
    // Set up a sample profile to avoid undefined type error
    let profile = {
        "role": "",
        "username": "",
        "password": "",
        "email": "",
        "firstName": "",
        "lastName": "",
        "image_url": "",
        "location": "",
        "birthday": "",
        "dateJoined": "",
        "customerData": {
            "reviews": [],
            "followings": [],
            "followers": [],
            "bookmarks": [],
            "visibility": {
                "location": true,
                "birthday": true,
                "bookmarks": true
            }
        },
        "businessData": {
            "verified": false,
            "restaurantId": ""
        }
    }
    let fetchedProfile = useSelector(state => state.profile);
    profile = {...profile, ...fetchedProfile};
    const [edit, setEdit] = useState(false);

    return (
        <>

            {/**********************************Profile Header*********************************/}
            <div className="container-fluid vw-100 p-0">
                <div className="sticky-top">
                    <div className="wd-profile-banner bg-secondary vw-100"></div>
                    <ProfileHeader profile={profile} setEdit={setEdit} edit={edit}/>
                </div>

                <div className="row flex-nowrap">

                    {/****************************Profile NavSidebar**************************/}
                    {profile.customerData &&
                     <div className="col-4 col-lg-3 d-flex justify-content-center px-0 mt-4">
                         <ProfileNavSidebar active="overview"
                                            visibility={profile.customerData.visibility}/>
                     </div>
                    }

                    {/***************************Profile MainContent**************************/}
                    {!edit &&
                     <div
                         className="col-7 col-lg-6 d-flex flex-column px-0">
                         <div className="mb-3">
                             <h3 className="text-danger fw-bold">Notifications</h3>
                             <ProfileNotifications/>
                         </div>
                         <hr className="mb-4 mt-0"/>
                         <div>
                             <h3 className="text-danger fw-bold">Recent Activities</h3>
                             <ProfileRecentActivities/>
                         </div>
                     </div>
                    }


                    {/***************************Profile Edit**************************/}
                    {edit &&
                     <div className="col-7 col-lg-6 d-flex flex-column px-0">
                         <EditProfile profile={profile} setEdit={setEdit}/>
                     </div>
                    }


                    {/***************************Profile RightSidebar****************************/}
                    {!edit &&
                     <div
                         className="d-none d-lg-block col-xl-auto border-2 border-start ">
                         <ProfileAboutMe profile={profile}
                                         visibility={profile.customerData.visibility}/>
                     </div>
                    }
                </div>

                {JSON.stringify(profile)}

            </div>


        </>
    )
};

export default ProfileScreen;