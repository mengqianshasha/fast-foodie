import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import ReviewListItem from "./ReviewListItem";
import {fetchAllReviewsByRestaurantId} from "../../../services/reviewService";

const ReviewList = () => {

    const dispatch = useDispatch();


    const restaurant = useSelector(state => state.restaurant);
    const customerReviews = useSelector(state => state.customerReviews)
    useEffect(() => fetchAllReviewsByRestaurantId(dispatch, restaurant.id), [restaurant]);

    // console.log(restaurant);
    // console.log(customerReviews);

    return (
        <div>

            <ul className="list-group mt-3">
                {
                    customerReviews.map(
                        review => <ReviewListItem key={review._id} review={review}/>)
                }
            </ul>

            {/*<ul className="list-group mt-3">*/}
            {/*    {*/}
            {/*        yelpReviews.map(review => <ReviewListItem key={review.id} review={review} />)*/}
            {/*    }*/}

            {/*</ul>*/}
        </div>
    )

}

export default ReviewList;