import './App.css';
import {useState} from "react";

function App() {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);

    const handleClick = (e) => {
      e.preventDefault();
    }

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
