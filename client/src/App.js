import './App.css';
import {useEffect, useState} from "react";
import {useMutation, useQuery} from "@apollo/client";
import {GET_ALL_USERS, GET_ONE_USER} from "./query/user";
import {CREATE_USER} from "./mutation/user";

function App() {
    const { data, loading, refetch } = useQuery(GET_ALL_USERS,
        // {pollInterval: 500}
    );
    const { data: oneUserData } = useQuery(GET_ONE_USER, {
        variables: {
            id: 1
        }
    });

    const [newUser] = useMutation(CREATE_USER);

    console.log(oneUserData)

    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);

    useEffect(() => {
        if (!loading) {
            setUsers(data.getAllUsers)
        }
    }, [data])

    const handleClick = (e) => {
      e.preventDefault();
      newUser({
          variables: {
              input: {
                  username: name,
                  age
              }
          }
      }).then(data => {
          console.log(data.data)
          setName('');
          setAge(0)
      })
    }

    const getAll = e => {
        e.preventDefault();
        refetch()
    }

    if (loading) return <h1>Loading...</h1>

    return (
        <div className='container'>
            <form className="form">
                <input className="form-input" value={name} onChange={(e) => setName(e.target.value)} type="text"/>
                <input className="form-input" value={age} onChange={(e) => setAge(parseInt(e.target.value))} type="number"/>

                <div className="buttons">
                    <button onClick={handleClick}>Create</button>
                    <button onClick={getAll}>Get</button>
                </div>
            </form>
            <ul className="list">
                {users.map(({ id, username, age }) =>
                    <li key={id}>
                        <div>
                            <span>{id}</span>
                            <h3>Name: {username}</h3>
                            <h6>Age: {age}</h6>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default App;
