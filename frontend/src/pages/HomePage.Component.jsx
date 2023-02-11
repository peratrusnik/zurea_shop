import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllUser } from "../services/auth.service";



const HomePageComponent = () => {
    const [users,setUsers] = useState([])
    useEffect(() => {
        getAllUser().then((res) => {
            setUsers(res.data); 
            
        })
    }, [])


1.18

    return (
        <div>
            <h1>Home page</h1>
            <ul>
                {users.length>0 && users.map((user, index)=>{
                    return <li key={index}><Link to={"/user/" + user._id}>{user.username} - {user.isAdmin}</Link></li>  
                })}
            </ul>
        </div>
    );
}

export default HomePageComponent;