import React, { useState } from "react";
import "./../styles/App.css";
import Input from "./Input";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Parent Component</h1>
      {!isLoggedIn && <Input setIsLoggedIn={setIsLoggedIn} />}
      {isLoggedIn && <p>You are logged in!</p>}
    </div>
  );
};

export default App;
