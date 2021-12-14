import React from "react";
import {calcRatings} from "./calcRatings";

const DecimalStar = ({reviews}) => {
    const rating = calcRatings(reviews);

    let solidStars = [];
    let emptyStars = [];
    let halfStars = [];
    let sCount = 1;
    while (sCount <= rating) {
        solidStars.push(1);
        sCount++;
    }

    let eRating = 5.0 - rating;
    let eCount = 1;
    while (eCount <= eRating) {
        emptyStars.push(1);
        eCount++;
    }

    if (solidStars.length + emptyStars.length < 5) {
        halfStars.push(1);
    }

    return (
        <div className="text-primary mb-2">
            {solidStars.map(c => <i className="fas fa-star fs-5 text-warning"></i>)}
            {halfStars.map(c => <i className="fas fa-star-half-alt fs-5 text-warning"></i>)}
            {emptyStars.map(c => <i className="far fa-star fs-5 text-warning"></i>)}
        </div>
    )

}

export default DecimalStar;