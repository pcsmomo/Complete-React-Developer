import React from "react";

import UserProfile from "./components/user-profile/user-profile.component";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <UserProfile name="Noah" email="pcsmomo@gmail.com" />
    </div>
  );
}

export default App;
