import React from "react";
import { useState } from "react";
import './Form.css';
const Form = () => {
    const [name, setName] = useState("");
    const [fullName, setFullName] = useState();
    const [lastName, setLastName] = useState('');
    const [lastNameNew, setLastNameNew] = useState();

    const inputChange = (event) =>{   
      setName(event.target.value);
    }

    const inputChangeTwo = (event) =>{
        setLastName(event.target.value);
    }

    const buttonHandler = (event) =>{
        event.preventDefault();
        setFullName(name);
        setLastNameNew(lastName);
    }
  return (
    <div>
    <form onSubmit={buttonHandler}>
    <div>
      <h1>Hello {fullName} {lastNameNew}</h1>
      <input  type="text" placeholder="Enter Your Name: "  onChange={inputChange} value={name}/> <br/>
      <input type="text" placeholder="Enter Last Name: "  onChange={inputChangeTwo} value={lastName}/>
      <button type ="submit" >Submit</button>
    </div>
    </form>
    </div>
  );
};

export default Form;
