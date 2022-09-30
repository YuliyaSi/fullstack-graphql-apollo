import './App.css';
import {useEffect, useState} from "react";
import {useQuery} from "@apollo/client";
import {GET_ALL_USERS} from "./query/user";

function App() {
    const { data, loading, error } = useQuery(GET_ALL_USERS)
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
    }

    if (loading) return <h1>Loading...</h1>

    return (
        <div className='container'>
            <form className="form">
                <input className="form-input" value={name} onChange={(e) => setName(e.target.value)} type="text"/>
                <input className="form-input" value={age} onChange={(e) => setAge(parseInt(e.target.value))} type="number"/>

                <div className="buttons">
                    <button onClick={handleClick}>Create</button>
                    <button>Get</button>
                </div>
            </form>
            <ul className="list">
                {users.map(({ id, username, age }) =>
                    <li key={id}>
                        <div>
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
