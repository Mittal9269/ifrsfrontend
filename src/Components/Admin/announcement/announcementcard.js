import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";
import { useCookies } from "react-cookie";
import Image from "../../../assets/images/Admin_image.png"
import { useHistory } from 'react-router-dom';

export default function Announcementcard(props) {

    const [checkadmin, setCheckadmin] = useState(true);
    const [cookies, setCookie] = useCookies(['user']);
    const [commentlength, setCommentlength] = useState(0);
    const route = "/annnoucements/" + props.value._id;
    const history = useHistory();

    useEffect(() => {
        if (cookies.jwttoken && cookies.ADMIN === "true") {

        } else {
            setCheckadmin(false);
        }
        fetch(process.env.REACT_APP_BACKEND + "/announcement/comment/" + props.value._id, {
            method: "GET",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(res => {
                // console.log(res);
                setCommentlength(res.length);
            })
            .catch(err => console.log(err))
    }, [cookies.ADMIN, cookies.jwttoken])

    const onDelete = id => {
        if (window.confirm('Are you sure you want to delete this record? This cannot be reversed.')) {
            fetch(process.env.REACT_APP_BACKEND + "/announcement/announcement/" + id, {
                method: "DELETE",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                console.log("Succesfully Deleted!")
                // window.location.reload();
                history.push("/Announcement");
            }).catch(err => console.log(err))
        }
    }

    return (
        <>
            <div class="col-sm-3">
                <img src={checkadmin ? props.value.userID.image : Image} class="img-rounded rounded-circle" width="100px" height="100px" alt="" />
                <div class="review-block-name"><p>{checkadmin ? props.value.userID.Name : "ADMIN"}</p></div>
            </div>
            <div class="col-sm-7">
                {checkadmin &&
                    <div className="row">
                        <div className="col-2">
                            <button className="btn btn-secondary  mr-1" onClick={() => onDelete(props.value._id)}>Deleted</button>
                        </div>
                        <div className="col-1">
                            <NavLink className="btn btn-secondary  ml-1" to={"/UpdateAnnouncement/" + props.value._id}>Update</NavLink>
                        </div>
                    </div>
                }
                {/* <img className="review-image" src={props.value.image} classname="img-thumbnail" width="300px" height="300px" alt=" " /> */}
                <NavLink to={route}>
                    <p class="fs-5 mb-1">{props.value.text.substring(0, 25)}....</p>
                </NavLink>
            </div>
            <div class="col-sm-2">
                <i class="fa fa-thumbs-up" aria-hidden="true">"  " {props.value.likes ? props.value.likes.length : 0}</i>
                <br />
                <i class="fa fa-commenting-o" aria-hidden="true">" " {commentlength}</i>
            </div>

        </>
    )
}