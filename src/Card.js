import React from "react"
import { FaPen, FaTrash } from 'react-icons/fa';

export const Card = ({id, img, name, email, phone}) => {
    console.log("name:"+name)
    return (
        <div className = "tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={img} alt="img"></img>
            <h2>{name}</h2>
            <h4>{phone}</h4>
            <h4>{email}</h4>
            <h3> <FaPen /> </h3>
            <h3> <FaTrash /> </h3>
        </div>
    )

}