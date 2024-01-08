import React, {useState} from "react";
// import "./UserForm.css";
import Button from "../UI/Button";
import UsersList from "./UsersList";

const UserForm = (props) => {
    const[enteredUserName, setEnteredUserName] = useState("");
    const[enteredAge, setEnteredAge] = useState("");

    const userDetailsHandler = (event) =>{
        event.preventDefault();
        // validating the input field cases:-
        if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
            alert("User Detail cannot be empty! Please Enter Valid User Details")
            return;
        }
        if(+enteredAge<1){
            alert("Please Enter a Valid Age");
            return;
        }

        // console.log(enteredUserName, enteredAge);
        // emptying the field of userName adn userAge

        props.onUserForm(enteredUserName, enteredAge);
        setEnteredUserName("");
        setEnteredAge("");

    };
    const usernameChangeHandler = (event) =>{
        setEnteredUserName(event.target.value);
    };
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);

    };
    return (
        <div className="container" style={{height:"100%", width : "100%"}}>
            <form onSubmit={userDetailsHandler}>
                <div className="user-detail__form" style={{display : "flex",justifyContent:"center", alignItems:"center",border : "3px solid black",height : "100vh", width : "100vw" }}>
                    <div className="user-detail__field" style= {{border : "2px solid blue",height : "50vh", width : "50vw",display: "flex",flexDirection: "column",alignItems: "center" }} >
                        <label htmlFor="username">UserName</label>
                        <br/>
                        <input type="text" id="username" value={enteredUserName} onChange={usernameChangeHandler}/>
                        <br/>
                        <label htmlFor="age">Age</label>
                        <br/>
                        <input type='number' id="age" value={enteredAge}  onChange={ageChangeHandler}/>
                        <br/>
                        <Button type="submit">Add User</Button> 
                    </div>
                </div>
            </form>
        </div>
    );
}

export default UserForm;