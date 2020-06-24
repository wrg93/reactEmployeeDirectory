import React from "react";
import "./List.css"

function List(props) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title
                            <button onClick={props.titleAscend}>A-Z</button> or
                            <button onClick ={props.titleDescend}>Z-A</button>
                        </th>
                        <th>Name:
                            <button onClick={props.nameAscend}>A-Z</button> or
                            <button onClick={props.nameDescend}>Z-A</button>
                        </th>
                        <th>Phone</th>
                        <th>Email</th>

                    </tr>
                </thead>
                <tbody>
                    {props.users.map(user=> {
                        return <tr key={user.phone}>
                            <td><img src={user.picture.thumbnail} alt={user.name.last} /></td>
                            <td>{user.name.title}</td>
                            <td>{user.name.first} {user.name.last}</td>
                            <td>{user.phone}</td>
                            <td>{user.email}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default List;