import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UsersPage = () => {
    const [users, setUsers] = useState([]); //начальное состояние

    useEffect (()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res=> res.json()) //отлавливаю результат
            .then(data => setUsers(data)) //берем data и обнови мое местное состояние
    }, []);

    return (
        <div>
            <h2>Users List</h2>
            {users.map(user => (
                <Link to={`/users/${user.id}`} key={user.id}>
                    <h5>{user.name}</h5>
                </Link>
            ))}
        </div>
    )
}

export default UsersPage


//зарождение компонента (монтирование, добавление на страницу), жизнь компонента - взаимодействие пользователя с ним(блог лайк и тд), смерть компонента (когда переходишь на другой) 
// useEffect - помогает отследить его жизненный цикл

// const UsersPage = () => {

//     const [name, setName] = useState('');
//     const [age, setAge] = useState('');

//     function someFunc () {
//         console.log('Hello, World!');
//     };

//     // useEffect(() => {
//     //     console.log('useEffect has worked!'); //отрабоает при зарождении, только при переходе, и потом постоянно при инпутах - то есть на любом и каждом изменении компонента
//     //     someFunc();
//     // });

//     // useEffect(() => {
//     //     console.log('useEffect has worked!'); 
//     //     someFunc();
//     // }, []); //только при переходе - зарождении компонента

//     useEffect(() => {
//         console.log('useEffect has worked!'); 
//         someFunc();
//     }, [name, ]);  //начнет следить за зависимостью(в данном случае name) и только тогда работает

//   return (
//     <div>UsersPage

//         <input type="text" value={name} onChange={e => setName(e.target.value)}/>
//         <input type="text" value={age} onChange={e => setAge(e.target.value)}/>

//         <h3>{name}</h3>
//         <h3>{age}</h3>

//     </div>
//   )
// }

// export default UsersPage