import {React, useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'; //объект параметров запроса

const UserDetails = () => {
    // const params = useParams();
    // console.log(params.id); // {id: '4'}
    
    const {id} = useParams();
    // console.log(id); //7

    const [user, setUser] = useState(null);

    useEffect (()=> {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res=> res.json())
            .then(data => setUser(data))
    }, [id, ]) //чтобы useEffect зависел только от айди - потому что useParams может не успеть отработать --- юзер по юрл адресу перешел

  return (
    <div>
        <h2>UserDetails</h2>
        {/* условная отрисовка! */}
        {user ? (
            <>
                <h3>{user.name}</h3>
                <h3>{user.email}</h3>
                <h3>{user.phone}</h3>
            </>
        ): (
            <>
                <h1>Loading...</h1>
            </>
        )}
    </div>
  )
}

export default UserDetails