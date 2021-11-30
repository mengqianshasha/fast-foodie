import React from "react";
import './index.css';
import * as truncate from "../../../public-components/Utils/truncate";


const RecentActivityReviewCard = ({activity}) => {
    const reviewCharLimit = 83;
    const imgUrl = activity['photo_img_url'] === '' ? activity['restaurant_img_url'] : activity['photo_img_url'];
    return (
        <div className={"card homescreen-recent-activity-card"}>
            <div className={"d-flex p-2"}>
                <img className={"homescreen-profile-img me-2 rounded-2"} src={activity['profile_img_url']} alt=""/>
                <div className={"text-start"}>
                    <div className={"text-info fw-bold"}>{activity.name}</div>
                    <div>Wrote a review</div>
                </div>
            </div>
            <img src={imgUrl} className={"card-img-top"} alt={"img"} />
            <div className={"homescreen-recent-activity-card-body p-3 text-start"}>
                <h6 className={"card-title text-info fw-bold"}>{activity['restaurant_name']}</h6>
                <hr className={"text-secondary"}/>
                {activity['rating'] !== -1 && (
                    <div className={"mb-2"}>
                        Rating: {activity.rating}
                    </div>
                )}
                <div className={"homepage-recent-activity-card-review"}>
                    {truncate.textTruncate(activity.text, reviewCharLimit)}
                </div>


            </div>
        </div>
    )
}

export default RecentActivityReviewCard;