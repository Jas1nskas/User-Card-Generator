import React from 'react';
import {useState, useRef} from "react";

const UserInfo = ({user}) => {

    const userStyle  ={

        backgroundColor: user.color,
        borderRadius:user.cardBorderRadius

    }

    return (
        <div className="card d-flex center" style={userStyle}>

            <img src={user.photo} alt=""/>
            <h1>{user.name}</h1>
            <div>{user.age}</div>
            <div>{user.gender}</div>
            <div>{user.city}</div>



        </div>
    );
};

export default UserInfo;