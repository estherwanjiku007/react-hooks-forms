import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
   function handleFirstName(event){
    setFirstName(event.target.value)
   }
   function handleLastName(event){
    setLastName(event.target.value)
   }
  return (
    <form>
      <input type="text" onChange={handleFirstName} value={firstName} />
      <input type="text" onChange={handleLastName}value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
