import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {CardList} from './CardList'
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'tachyons'

class AllContacts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            completeContacts: [
                {
                    name: "name1",
                    img: "https://robohash.org/name1?size=200x200",
                    email: "name1@gmail.com",
                    phoneNum:"9986728107"
                },{
                    name: "name2",
                    img: "https://robohash.org/name2?size=200x200",
                    email: "name2@gmail.com",
                    phoneNum:"9986728107"
                },{
                    name: "name3",
                    img: "https://robohash.org/name3?size=200x200",
                    email: "name3@gmail.com",
                    phoneNum:"9986728107"
                },{
                    name: "name4",
                    img: "https://robohash.org/name4?size=200x200",
                    email: "name4@gmail.com",
                    phoneNum:"9986728107"
                },{
                    name: "name5",
                    img: "https://robohash.org/name5?size=200x200",
                    email: "name5@gmail.com",
                    phoneNum:"9986728107"
                }
            ]
        }
    }
    handleAddContacts() {
        
    }
    render() {
        return (
            <div>
                <h1>List of Contacts</h1>
                <button id="addContacts" onClick = {this.handleAddContacts}>
                    Add Contacts
                </button>
                <CardList contacts = {this.state.completeContacts} />
            </div>
        )
    }
}
ReactDOM.render(<AllContacts />, document.getElementById('root'));

