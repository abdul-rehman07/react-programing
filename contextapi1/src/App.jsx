import React from "react";
import "./App.css";
import Login from "./Component/login";
import Profile from "./Component/Profile";
import UserContext from "./Context/Usercontext";


function App() {
  const [User, setUser] = React.useState(null)

  return (
    <UserContext.Provider value={{ User, setUser }}>
      <Login />
      <Profile />
    </UserContext.Provider>
  );
}

export default App;
