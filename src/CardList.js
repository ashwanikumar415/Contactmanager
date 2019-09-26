import React from "react"
import {Card} from "./Card"

export const CardList = (props) => {
    console.log("contacts as prop:",props);
    const cardArray = props.contacts.map((item, index) => {
            console.log("CardList:",props.handleEdit)
        return (
                <Card 
                    id = {index}
                    key = {index}
                    name = {item.name}
                    email = {item.email}
                    number = {item.number}
                    handleEdit = {props.handleEdit}
                    handleDelete={props.deleteClicked}
                    routeProperty = {props.routeProperty}
            />
        )
    })
    return (
        <div>
                {cardArray}
        </div>
    )
}