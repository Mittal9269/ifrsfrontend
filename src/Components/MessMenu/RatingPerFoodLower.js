import ReactStars from "react-rating-stars-component";

export default function RatingPerFoodLower(props) {
    return (
        <>
            <div class="row">
                <div class="col-sm">
                    <hr />
                    <div class="review-block">
                        <div class="row">
                            <div class="col-sm-3">
                                <img src={props.val.UserId.image} class="img-rounded" alt=".." />
                                <div class="review-block-name"><p>{props.val.UserId.Name}</p></div>
                                <div class="review-block-date">{props.val.createdAt.substring(0, 10)}<br />{props.val.createdAt.substring(11, 19)}</div>
                            </div>
                            <div class="col-sm-9">
                                <div class="review-block-rate">
                                    <ReactStars
                                        class="btn btn-warning btn-sm"
                                        aria-label="Left Align"
                                        value={props.val.Rating}
                                        size={24}
                                        isHalf={true}
                                        edit={false}
                                        emptyIcon={<i className="far fa-star"></i>}
                                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                                        fullIcon={<i className="fa fa-star"></i>}
                                        activeColor="#ffd700"
                                    />
                                </div>
                                <div class="review-block-description">{props.val.Comment}</div>
                            </div>
                        </div>
                    </div>
                    <hr />

                </div>
            </div>
        </>
    )
}