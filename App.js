import React from "react";
import Form from "./Form";

function App() {
const getData = (data) => {
  console.log("coming from App.js", data)
}

  return (
   <>
   <Form onSubmit={getData}/>
   </>
  );
}

export default App;
