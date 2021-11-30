import React from "react";
import * as truncate from "../../../public-components/Utils/truncate";


const RecentActivityBookmarkCard = ({activity}) => {
    const reviewCharLimit = 83;
    return (
        <div className={"card homescreen-recent-activity-card"}>
            <div className={"d-flex p-2"}>
                <img className={"homescreen-profile-img me-2"} src={activity['profile_img_url']} alt=""/>
                <div className={"text-start"}>
                    <div className={"text-info fw-bold"}>{activity['name']}</div>
                    <div>Bookmarked a restaurant</div>
                </div>
            </div>
            <div>
                <img src={activity['restaurant_img_url']} className={"card-img-top homepage-recent-activity-card-photo-img"} alt={"img"} />
            </div>
            <div className={"homescreen-recent-activity-card-body p-3 text-start"}>
                <h6 className={"card-title text-info fw-bold"}>{activity['restaurant_name']}</h6>
            </div>
        </div>
    )
}

export default RecentActivityBookmarkCard;