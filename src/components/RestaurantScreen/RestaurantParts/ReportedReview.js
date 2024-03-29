import React from "react";

const ReportedReview = ({review}) => {


    return (
        <li className="list-group-item border-0 p-0">
            <div className="row border-top p-3">
                <div className="col-4">
                    <div className="d-flex flex-row">
            
                        <div className="">
                            <img src={review.user.image_url} width="56px" height="56px" className="rounded-3"/>
                        </div>
                        <div className="ms-3"> 
                            <div> {review.user.name} </div>
                            <div> Bridgeport, Chicago, IL </div>
                            <div> <i className="fas fa-user-friends"></i> 56 friends </div>
                            <div> <i className="far fa-star"></i> 56 reviews </div>
                        </div>
            
                    </div>
                </div>
            {/************************Review Stars**************************/}
            <div className="col-8">
                <div className="row ms-1 d-flex align-items-center">
                    <span className="col-3 starability-result" data-rating={review.rating}></span>
                    <span className="col-4 text-muted ms-2 mt-1">{review.time_created.split(' ')[0] }</span>
                    <span className="col-5">
                        <i className="fas fa-times float-end"></i> 
                    </span>
                </div>

            {/************************Review Text**************************/}
            <div className="row">
                <p className="py-2 m-0">
                    {review.text}
                </p>
            </div>
            {/************************Review Img**************************/}
            {/* <div className="d-lg-flex gap-3 col-8 col-sm-7 col-md-6 col-lg-10 col-xl-8">
                <div className="card text-white">
                    <img src="/images/ProfilePage/review.jpg" className="card-img-top img-fluid"/>
                    <div
                        className="card-img-overlay d-flex py-0 px-0 flex-column justify-content-end w-auto h-auto">
                                 <span className="bg-black bg-opacity-50 px-2">
                                 Delicious dinner!
                                 </span>
                    </div>
                </div>
                <div className="card text-white">
                    <img src="/images/ProfilePage/review.jpg" className="card-img-top img-fluid"/>
                    <div
                        className="card-img-overlay d-flex px-0 py-0 flex-column justify-content-end w-auto h-auto">
                                     <span className="bg-black bg-opacity-50 px-2">
                                         Delicious dinner!
                                     </span>
                    </div>
                </div>
            </div> */}

            <div > 
                <span >
                    <button className="btn btn-light float-end">
                        Ignore
                    </button>
                </span>
                <span >
                    <button className="btn btn-danger me-3 float-end">
                        Delete
                    </button>
                </span>
            
            </div>
            </div>
            </div>
            </li>)
}

export default ReportedReview;