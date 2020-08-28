import React from "react";
import Form from "./Form";
// import Login from "./Login";
// import Register from "./Register";

var userIsRegistered = true;

function App() {
  
  return (
    <div className="container">
      <Form isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
