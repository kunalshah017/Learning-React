import { useState, useEffect } from "react"
import './Users.css'

const Users = () => {

    let [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then((json) => {
                console.log(json)
                setUsers(json)
            }
            )
    }, [])

    return (
        <>
            <h1>Users</h1>
            <div className="users">
                {
                    users.map((user) => {
                        return (
                            <div className="user" key={user.id}>
                                <h3>{user.name}</h3>
                                <p>{user.email}</p>
                                <p>{user.phone}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )

}

export default Users


