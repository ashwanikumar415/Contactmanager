import React from "react"
import {Card} from "./Card"

export const CardList = (contacts) => {
    console.log("contacts as prop:",contacts);
    const cardArray = contacts.contacts.map((item, index) => {
            console.log(item.img)
        return (
                <Card 
                    key = {index}
                    img = {item.img}
                    name = {item.name}
                    email = {item.email}
                    phone = {item.phoneNum}
            />
        )
    })
    return (
        <div>
                {cardArray}
        </div>
    )
}