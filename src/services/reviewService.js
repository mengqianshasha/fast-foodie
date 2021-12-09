const COMMENT_API = "http://localhost:8000/api";

export const fetchAllReviewsByRestaurantId = (dispatch, restaurantId) => {

  fetch(`${COMMENT_API}/${restaurantId}/reviews`)
  .then(response => response.json())
  .then(reviews => {
    console.log(reviews);
    dispatch({
      type: 'fetch-all-reviews',
      reviews
    })
  })
}

export const postNewReview = (dispatch, newComment) => {

  fetch(`${COMMENT_API}/reviews`, {
    method: 'POST',
    body: JSON.stringify(newComment),
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())
  .then(review => dispatch({
    type: 'create-review',
    review: review,
  }))
}

export const deleteReview = (dispatch, review) => {
  fetch(`${COMMENT_API}/reviews/${review._id}`, {
    method: 'DELETE'
  }).then(response => dispatch({
    type: 'delete-review',
    review
  }))
}

export const updateReview = (dispatch, review) => {
  fetch(`${COMMENT_API}/reviews/${review._id}`, {
    method: 'PUT',
    body: JSON.stringify(review),
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => dispatch({
    type: 'update-review',
    newReview: review,
  }))
}