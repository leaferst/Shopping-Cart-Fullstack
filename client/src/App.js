import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Gallery from './components/Gallery';
import UserDisplay from './components/UserDisplay';

function App() {

    const [users,setUsers] = useState([]);

    useEffect(() => {

        const getUsers = async () => {
            let res = await axios.get('http://localhost:8000/users')
            console.log(res.data);
            setUsers(res.data);
        }

        getUsers();

    },[])

    const showUsers = users.map(u => <h2>{u.name}</h2>)

  return (
    <div className="App-header">
      <UserDisplay />
      <Gallery />
    </div>
  );
}

export default App;