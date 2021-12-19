import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { fecthHeader } from "../style/Notification";
import { useHistory } from "react-router-dom";

export default function MenuCard(props) {

    const [checkadmin, setCheckadmin] = useState(true);
    const [cookies, setCookie] = useCookies(['user']);
    const history = useHistory();

    useEffect(() => {
        if (cookies.jwttoken  && cookies.ADMIN === "true") {
            
        } 
        else{
            setCheckadmin(false);
        }
    },[cookies.jwttoken , cookies.ADMIN])

    const onDelete = id => {
        if (window.confirm('Are you sure to delete this record?')) {
            fetch(process.env.REACT_APP_BACKEND + "/menu/menu/" + id, {
                method: "DELETE",
                headers: fecthHeader
            }).then((res) => {
                console.log("succesfully deleted")
                // window.location.reload();
                history.push("/menutable")
            }).catch(err => console.log(err))
        }
    }
    return (
        <>
            <div className="table100-body">
                <table>
                    <tbody>
                        <tr className="row100 body">
                            <td className="cell100 column1">{props.value.fooditem}</td>
                            <td className="cell100 column2">{props.value.timing}</td>
                            <td className="cell100 column3">{props.value.day}</td>
                            {checkadmin &&
                                <>
                                    <td className="cell100 column4">
                                        <NavLink className="btn btn-sm btn-success" to={"/menutable/update/" + props.value._id}>
                                            Update
                                        </NavLink>
                                    </td>
                                    <td className="cell100 column4">
                                        <button type="submit" className="btn btn-sm btn-danger" onClick={() => onDelete(props.value._id)} >
                                            Delete
                                        </button>
                                    </td>
                                </>
                            }
                            <td className={checkadmin ? "cell100 column4" : "cell100 column4"}>
                                <NavLink className="btn btn-sm btn-success" to={"/menutable/checkrating/" + props.value.fooditem}>
                                    Detail
                                </NavLink>
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}