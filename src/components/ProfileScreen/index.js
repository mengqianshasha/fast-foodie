import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import "./Profile.css";
import ProfileHeader from "./ProfileHeader";
import ProfileNavSidebar from "./ProfileNavSidebar";
import ProfileAboutMe from "./ProfileAboutMe";
import ProfileNotifications from "./ProfileNotifications";
import ProfileRecentActivities from "./ProfileRecentActivities";
import EditProfile from "./EditProfile";

const ProfileScreen = () => {
    const profile = useSelector(state => state.profile);

    const [edit, setEdit] = useState(false);

    return (
        <>
            {/**********************************Profile Header*********************************/}
            <div className="container-fluid vw-100 p-0">
                <div className="sticky-top">
                    <div className="wd-profile-banner bg-secondary vw-100"></div>
                    <ProfileHeader profile={profile} setEdit = {setEdit} edit={edit}/>
                </div>

                <div className="row flex-nowrap">

                    {/****************************Profile NavSidebar**************************/}

                    <div className="col-4 col-lg-3 d-flex justify-content-center px-0 mt-4">
                        <ProfileNavSidebar active="overview" visibility={profile.visibility}/>
                    </div>


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
                         <ProfileAboutMe profile={profile}/>
                     </div>

                    }


                </div>
            </div>


        </>
    )
};

export default ProfileScreen;