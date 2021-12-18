import React from 'react'
import { useEffect, useState } from 'react';
import { useCookies } from "react-cookie";
import { Redirect, useParams } from "react-router";
import Navbar from '../../Navbar';
import PerAnnouncementComment from './PerAnnouncementComment';
import Image from "../../../assets/images/Admin_image.png"

export default function PerBlog() {
    // console.log(props)
    const [redirect, setRedirect] = useState(false);
    const [checkadmin, setCheckadmin] = useState(true);
    const [cookies, setCookie] = useCookies(['user']);
    const [data, setData] = useState({});
    const { id } = useParams();
    const [like, setLike] = useState(false);
    const [selfLike, setSelfLike] = useState(false);
    const [comment, setComment] = useState("");
    const [commentArray, setCommentArray] = useState([]);

    useEffect(() => {
        if (cookies.jwttoken && cookies.ADMIN === "true") {

        } else {
            setCheckadmin(false);
        }
        if (cookies.jwttoken) {
            fetch(process.env.REACT_APP_BACKEND + "/announcement/announcement/" + id, {
                method: "GET",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
                .then(res => {
                    setData(res[0])
                    if (cookies.ID === res[0].userID._id) {
                        setSelfLike(true);
                    }
                    if (res[0].likes.includes(cookies.ID)) {
                        setLike(true);
                    }

                })
                .catch(err => console.log(err))


            fetch(process.env.REACT_APP_BACKEND + "/announcement/comment/" + id , {
                method: "GET",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
            .then(res =>{
                console.log(res);
                setCommentArray(res);
            })
            .catch(err => console.log(err))
        } else {
            setRedirect(false);
        }
    }, [cookies.jwttoken, cookies.ADMIN, id , cookies.ID , setCommentArray])

    const changeLike = () => {
        if (selfLike) return;
        if (like === true) {
            fetch(process.env.REACT_APP_BACKEND + "/announcement/announcement/unlike/" + id, {
                method: "PATCH",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userid: cookies.ID })
            })
                .then(res => res.json())
                .then(res => {
                    // window.location.reload();
                    setData(res)
                    console.log(res);
                })
                .catch(err => console.log(err))
        }
        else {
            if (data.likes.includes(cookies.ID)) return;
            fetch(process.env.REACT_APP_BACKEND + "/announcement/announcement/like/" + id, {
                method: "PATCH",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userid: cookies.ID })
            })
                .then(res => res.json())
                .then(res => {
                    // window.location.reload();
                    setData(res)
                    console.log(res)
                })
                .catch(err => console.log(err))
        }
        setLike(!like)
    }

    const ChangeComment = (e) => {
        setComment(e.target.value);
    }

    const SubmitComment = (e) => {
        e.preventDefault();
        if (comment.length === 0) return;
        fetch(process.env.REACT_APP_BACKEND + "/announcement/announcement/comment/" + id, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userid: cookies.ID, text: comment })
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                // setData(res)
                setCommentArray(res);
            })
            .catch(err => console.log(err))
        setComment("");
    }


    return (
        <>
            <Navbar />
            {redirect && <Redirect to="/" />}
            {data && Object.keys(data).length !== 0 &&
                <>
                    <section className="mainsectionreview">
                        <div class="page-wrapper p-t-180 p-b-100">
                            <div class="wrapper wrapper--w960">
                                <div class="card card-2">
                                    <div class="row px-4 py-1 my-4 text-center">
                                        <div class="col-sm-3">
                                            <img src={checkadmin ? data.userID.image : Image} class="img-rounded" alt=" " />
                                            <div class="review-block-name"><p>{checkadmin ? data.userID.Name : "ADMIN"}</p></div>
                                            <div class="review-block-date">{data.createdAt.substring(0, 10)}<br />{data.createdAt.substring(11, 19)}</div>
                                        </div>
                                        <div class="col-sm-9">
                                            <figure class="mb-4" alt=" "><img className="review-image" src={data.image} alt=" " width="400px" height="400px" /></figure>
                                            <div class="review-block-description"><p class="fs-5 mb-1">{data.text}</p></div>
                                        </div>
                                    </div>
                                    <div class="col-sm-2 px-4 mx-5 my-5">
                                        <h3>
                                            {like ? <i class="fa fa-thumbs-up" onClick={changeLike} aria-hidden="true"></i> : <i class="fa fa-thumbs-o-up" onClick={changeLike} aria-hidden="true"></i>}
                                            <span className="mx-4">{data.likes.length}</span>
                                        </h3>
                                    </div>
                                    <div className="input-group">
                                        <input class="input--style-2"
                                            type="text"
                                            placeholder="Enter text"
                                            name="text"
                                            value={comment}
                                            onChange={ChangeComment} />
                                    </div>
                                    <button class="btn btn-sm btn-success mb-4 " onClick={SubmitComment} type='submit'>Submit</button>
                                    
                                </div>
                                {commentArray && commentArray.length !== 0 && commentArray.map((value, index) => {
                                        return (
                                            <>
                                            <div key={value._id} class="row">
                                                    <div class="col-sm">
                                                        <hr />
                                                        <div class="review-block">
                                                            <div class="row">

                                                                <PerAnnouncementComment value={value} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })}
                            </div>
                        </div>

                    </section>
                </>
            }
        </>
    )
}