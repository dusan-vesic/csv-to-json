import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/.netlify/functions/hello")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return <div className="App">{JSON.stringify(users)}</div>;
}

export default App;
