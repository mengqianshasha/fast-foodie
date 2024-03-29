import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import moment from "moment";
import {postNewReview} from "../../../services/reviewService";

const WriteReview = ({profile}) => {
  const restaurant = useSelector(state => state.restaurant)
  const [reviewRating, setReviewRating] = useState(5);
  const [comment, setComment] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [imageTitle, setImageTitle] = useState("");
  const dispatch = useDispatch();

  const onRatingClick = (rating) => {
    setReviewRating(rating)
  }

  const submitClickHandler = () => {
    let categories = restaurant.categories.map(category => category.title).join(', ');
    console.log(categories);


    postNewReview(dispatch, {
      user: profile._id + '',
      restaurant: restaurant.id + '',
      time_created: moment().format('YYYY-MM-DD HH:mm:ss'),
      location: restaurant.location['city'] + ', '
          + restaurant.location['state'],
      rating: reviewRating,
      text: comment,
      img: [{
        url: imageURL,
        text: imageTitle
      }],
      userInfo: {
        username: profile.username,
        name: profile.firstName + ' ' + profile.lastName,
        avatar_url: profile.image_url,
        location: profile.location,
        reviewNum: profile.customerData.reviews.length + 1,
        friendNum: profile.customerData.followings.length,
        followerNum: profile.customerData.followers.length
      },
      replies: [{
        user: '',
        text: '',
        time_created: ''
      }],
      restaurantInfo: {
        name: restaurant.name,
        image_url: restaurant.image_url,
        price: restaurant.price,
        categories: categories,
        location: restaurant.location.display_address.map(addr => addr).join(', ')
      }
    })
  }

  return (
      <div className="row mt-3 mb-3">
        <label className="p-0 fs-2 mb-1" htmlFor="review">Write a Review</label>

        <form className="p-0" action="">
          <div>
            <fieldset className="starability-basic" id="reviewRating">
              <input onClick={() => onRatingClick(1)} type="radio"
                     id="first-rate1" name="rating" value="1"/>
              <label htmlFor="first-rate1" title="Terrible">1 star</label>
              <input onClick={() => onRatingClick(2)} type="radio"
                     id="first-rate2" name="rating" value="2"/>
              <label htmlFor="first-rate2" title="Not good">2 stars</label>
              <input onClick={() => onRatingClick(3)} type="radio"
                     id="first-rate3" name="rating" value="3"/>
              <label htmlFor="first-rate3" title="Average">3 stars</label>
              <input onClick={() => onRatingClick(4)} type="radio"
                     id="first-rate4" name="rating" value="4"/>
              <label htmlFor="first-rate4" title="Very good">4 stars</label>
              <input onClick={() => onRatingClick(5)} type="radio"
                     id="first-rate5" name="rating" value="5"/>
              <label htmlFor="first-rate5" title="Amazing">5 stars</label>
            </fieldset>

            {/* <label className="form-label" htmlFor="review">
            Review text
          </label> */}
            <textarea style={{resize: "none", overFlow: "hidden"}}
                className="form-control"
                name="review"
                id="review"
                placeholder="Write a review ..."
                rows="5"
                value={comment}
                onChange={event => setComment(event.target.value)}
            ></textarea>

            <div className="form-floating h-auto my-4">
            <input
                className="form-control mt-3"
                name="review"
                id="imgURL"
                placeholder="ImageURL"
                value={imageURL}
                onChange={event => setImageURL(event.target.value)}
            ></input>
              <label className="text-black-50" htmlFor="imgURL">Add a photo...</label>
            </div>

            <div className="form-floating h-auto my-4">
              <input
                  className="form-control mt-3"
                  name="review"
                  id="imgURL"
                  placeholder="ImageURL"
                  value={imageTitle}
                  onChange={event => setImageTitle(event.target.value)}
              ></input>
              <label className="text-black-50" htmlFor="imgURL">Add photo title...</label>
            </div>

            <button className="btn btn-primary mt-2 mb-3" type="button"
                    onClick={submitClickHandler}>Submit
            </button>
          </div>
        </form>
      </div>
  )
}

export default WriteReview;