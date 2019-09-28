import React from "react"
import { FaPen, FaTrash } from 'react-icons/fa';

export const Card = (props) => {
    console.log("handleEdit:",props)
    return (
        <div className = "tc bg-light-green dib br3 pa3 ma2 bw2 shadow-5">
            <img src={`https://robohash.org/${props.name}?size=200x200`} alt="robots"></img>
            <h2>{props.name}</h2>
            <h4>{props.number}</h4>
            <h4>{props.email}</h4>
       
            <h3 onClick = {(e) => props.handleEdit(e,props, props.routeProperty)}> <FaPen /> </h3>
            <h3 onClick = {(e) => {
                console.log("delete card")
                return props.handleDelete(e,props, props.routeProperty)
            }}> <FaTrash /> </h3>
        </div>
    )

}