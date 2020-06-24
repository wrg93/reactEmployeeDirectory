import React from "react";
import "./List.css"

function List(props) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name 
                            <button onClick={props.nameAscend}></button>
                            <button onClick={props.nameDescend}></button>
                        </th>
                        <th>Phone</th>
                        <th>Email</th>

                    </tr>
                </thead>
                <tbody>
                    {props.users.map(user=> {
                        return <tr key={user.phone}>
                            <td><img src={user.picture.thumbnail} alt={user.name.last} /></td>
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