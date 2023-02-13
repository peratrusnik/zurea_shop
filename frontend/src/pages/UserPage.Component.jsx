import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUser } from '../services/auth.service';

function UserPageComponent() {
    const [user, setUser] = useState([])    
    const params = useParams()

    useEffect(() => {
        console.log(params.id);
        getUser(params.id).then((res) => {
            console.log(res.data);
            setUser(res.data)
        })
    },[])
    return (
        <div>                         
            {user.map((user, index)=>{
                return <div key={index} className='text-center mt-5 mb-5'>
                            <p>Username: {user.username}</p>
                            <p>Email: {user.email}</p>
                            <p>Admin: {user.isAdmin}</p>
                        </div>
                    
            })}           
        </div>
    );
}

export default UserPageComponent;