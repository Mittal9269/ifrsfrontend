import { NavLink } from "react-router-dom";

export default function ShowbuttonCard(props) {

    return (
        <>
            <div className="table100-body">
                <table>
                    <tbody>
                        <tr className="row100 body">
                            <td className="cell100 column1">{props.value._id}</td>
                            <td className="cell100 column2">{props.value.avgRating}</td>
                            <td className="cell100 column3">{props.value.count}</td>
                            <td className="cell100 column4">
                                <NavLink className="btn btn-sm btn-success" to={"/menutable/checkrating/" + props.value._id}>
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