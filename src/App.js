import './App.css';
import UserInfo from './components/UserInfo'
import React, {useState} from "react";
import {useRef} from "react";

function App() {

    const [getUsers,setUsers] = useState([])

    const nameRef = useRef()
    const ageRef = useRef()
    const genderRef = useRef()
    const photoRef = useRef()
    const cityRef = useRef()
    const colorRef = useRef()
    const borderRef = useRef()

function createUser() {



    const user = {
        name: nameRef.current.value,
        age:  ageRef.current.value,
        gender:  genderRef.current.value,
        photo:  photoRef.current.value,
        city:  cityRef.current.value,
        color:  colorRef.current.value,
        cardBorderRadius:  borderRef.current.value
    }
    setUsers([...getUsers,user])
}

    return (
        <div className="App center ">


            <div className="d-flex column ">

                <input  ref={photoRef}  placeholder="Photo" type="text"/>
                <input ref={nameRef} placeholder="Name" type="text"/>
                <input  ref={ageRef}  placeholder="Age" type="text"/>
                <input  ref={genderRef}  placeholder="gender" type="text"/>
                <input  ref={cityRef}  placeholder="City" type="text"/>
                <input  ref={colorRef}  placeholder="Color" type="text"/>
                <input  ref={borderRef}  placeholder="Card border radius" type="text"/>

                <button onClick={createUser}>Create</button>
            </div>

            {getUsers.map((x,index)=> <UserInfo user={x} key={index}/>)}

        </div>


    );
}

export default App;
