

export default function PerBlogComment(props) {
    return (
        <>
            <div class="col-sm-3">
                <img src={props.value.userID.image} class="img-rounded rounded-circle" alt=" " />
            </div>
            <div class="col-sm-9">
                <h5 class="review-block-description">Post by {props.value.userID.Name} on {props.value.createdAt.substring(0, 10)} {props.value.createdAt.substring(11, 19)}</h5>
                <div class="review-block-description">
                    <p class="fs-5 mb-1">{props.value.text}</p>
                </div>
            </div>

        </>
    )
}