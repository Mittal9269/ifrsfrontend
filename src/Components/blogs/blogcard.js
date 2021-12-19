import React from 'react'
import { useEffect,useState } from 'react';
import { useCookies } from "react-cookie";
import { NavLink } from 'react-router-dom';
import { useHistory } from "react-router-dom";

export default function Blogcard(props) {
    const [checkadmin, setCheckadmin] = useState(true);
    const [cookies, setCookie] = useCookies(['user']);
    const [commentlength , setCommentlength] = useState(0);
    const route = "/blogs/" + props.value._id;
    const history = useHistory();

    useEffect(() => {
        if (cookies.jwttoken  && cookies.ADMIN === "true") {

        } else {
            setCheckadmin(false);
        }
        fetch(process.env.REACT_APP_BACKEND + "/blog/comment/" + props.value._id , {
            method: "GET",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(res =>{
            // console.log(res);
            setCommentlength(res.length);
        })
        .catch(err => console.log(err))
    }, [cookies.jwttoken , cookies.ADMIN])

    const onDelete = id => {
        if (window.confirm('Are you sure you want to delete this record? This cannot be reversed.')) {
            fetch(process.env.REACT_APP_BACKEND + "/blog/blog/" + id, {
                method: "DELETE",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                console.log("Succesfully Deleted!")
                // window.location.reload();
                history.push("/blogs");

            }).catch(err => console.log(err))
        }
    }

    return (
        <>
            <div class="col-sm-3">
                <img src={props.value.userID.image} class="img-rounded rounded-circle" alt = " " />
                {checkadmin &&
                <div className="row center">
                        <button className="btn btn-secondary  mr-1" onClick={() => onDelete(props.value._id)}>Delete</button>
                </div>
            }
            </div>
            <div class="col-sm-7">
                <h5 class="review-block-description">Post by {props.value.userID.Name} on {props.value.createdAt.substring(0, 10)} {props.value.createdAt.substring(11, 19)}</h5>
                <div class="review-block-description">
            <NavLink to={route}>
                <p class="fs-5 mb-1">{props.value.text.substring(0 , 25)}....</p>
            </NavLink>
                </div>
            </div>
            <div class="col-sm-2">
                <i class="fa fa-thumbs-up" aria-hidden="true">"  " {props.value.likes.length}</i>
                <br/>
                <i class="fa fa-commenting-o" aria-hidden="true">" " {commentlength}</i>
            </div>

        </>
    )
}