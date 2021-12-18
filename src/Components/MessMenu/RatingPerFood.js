import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import { Redirect } from "react-router";
import { useCookies } from "react-cookie";
import { fecthHeader } from "../style/Notification";
import RatingPerFoodLower from "./RatingPerFoodLower";


export default function RatingPerFood() {
    const { fooditem } = useParams();
    const [data, setData] = useState([])
    const [redirect, setRedirect] = useState(false);
    const [cookies, setCookie] = useCookies(['user']);
    const [average, setAverage] = useState(0);
    const [picture , setPicture] = useState("https://res.cloudinary.com/dynuzthsk/image/upload/v1636130414/WhatsApp_Image_2021-11-05_at_22.05.37_jqjv9i.jpg");

    useEffect(() => {
        if (cookies.jwttoken) {

        } else {
            setRedirect(true);
        }

        fetch(process.env.REACT_APP_BACKEND + "/menu/menu/item/" + fooditem, {
            method : "GET",
            headers: fecthHeader
        }).then(res => res.json())
        .then(fetchedata => { setPicture(fetchedata.image) })
        .catch(err => console.log(err))


        fetch(process.env.REACT_APP_BACKEND + "/form/rating/" + fooditem, {
            method: "GET",
            headers: fecthHeader
        }).then(res => res.json())
        .then(fetchedata => {
                let total = 0;
                fetchedata.forEach(element => {
                    total += parseInt(element.Rating);
                });
                if (fetchedata.length > 0)
                    setAverage(total / fetchedata.length)
                setData(fetchedata)
            })
            .catch(err => console.log(err));
    }, [fooditem , cookies.jwttoken])

    return (
        <>
            <Navbar />
            {redirect && <Redirect to="/" />}
            <section className="mainsectionreview">
                <div class="page-wrapper p-t-180 p-b-100">
                    <div class="wrapper wrapper--w960">
                        <div class="card card-2">
                            <div class="px-4 py-1 my-4 text-center">
                                <h1 class="display-5 fw-bold">{fooditem}</h1>
                                <br />
                                <img class="rounded mx-auto d-block d-block mx-auto mb-4" src={picture} alt="" height="200" />
                                <div class="col-sm-5 m-auto">
                                    <div class="rating-block">
                                        <h4>Average user rating</h4>
                                        <h2 class="bold padding-bottom-7">{average}</h2>
                                        <span class="rating rating-loading" aria-hidden="true"></span>
                                    </div>
                                </div>
                                {data !== undefined && data.length !== 0 && data.map((val, index) => {
                                    return (
                                        <>
                                            <RatingPerFoodLower key={index} val={val} />
                                        </>
                                    )
                                })}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}