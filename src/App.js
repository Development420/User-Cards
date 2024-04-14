import { useState } from "react";
import "./App.css";
import Detailsform from "./componentss/Detailsform";
import Usercard from "./componentss/Usercard";

const App = () => {
  const [users, setUsers] = useState([]);
  return (
    <div>
      <Detailsform users={users} setUsers={setUsers} />
      <hr />
      {users.map((user, index) => (
        <Usercard key={index} user={user} />
      ))}
    </div>
  );
};

export default App;
