import React, { useEffect, useState } from 'react'
import axios from 'axios';

function UserDisplay() {
    const [user,setUser] = useState(null);

    useEffect(() => {

        const getUser = async () => {
            let res = await axios.get('http://localhost:8000/users/2')

            setUser(res.data);
        }

        getUser();
        console.log(res.data);
    },[])

    const showUser = (user) => {
        console.log(user);
        console.log('showUser is running');
        return (
            <div>{user.name}</div>
        )
        
    }

  return (
    <div>{showUser}</div>
  )
}

export default UserDisplay