import React from 'react';
import './../index.css';
import './../App.css';
import { BrowserRouter as Router, Route} from "react-router-dom"
import {Validator} from './../Component/Validator'
import 'tachyons'
import { HomePage } from './HomePage';

export class AllContacts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            completeContacts: [
                {
                    name: "name1",
                    email: "name1@gmail.com",
                    number:"9986728107"
                },{
                    name: "name2",
                    email: "name2@gmail.com",
                    number:"9986728107"
                },{
                    name: "name3",
                    email: "name3@gmail.com",
                    number:"9986728107"
                },{
                    name: "name4",
                    email: "name4@gmail.com",
                    number:"9986728107"
                },{
                    name: "name5",
                    email: "name5@gmail.com",
                    number:"9986728107"
                }
            ],
            selectedIndex: 0,
            name: "",
            email: "",
            number: ""
        }
        this.handleAddContacts = this.handleAddContacts.bind(this)
        this.handleContactEdit = this.handleContactEdit.bind(this)
    }
    handleAddContacts(event, routeProps) {
        console.log("clicked:",routeProps)
        this.setState({
            name: "",
            number: "",
            email: "",
          })
        routeProps.history.push("form")
    }
    handleDeleteClick = (event, data, routeProperty) => {
        console.log("deleted")
        const itemIndex = data.id;
        const contactList = [...this.state.completeContacts];
        contactList.splice(itemIndex, 1);
        this.setState({
            completeContacts: contactList
        })
    }
    contactExists = (obj, list) => {
        return list.some(elem => {
           return (elem.name === obj.name
              && elem.number === obj.number
              && elem.email === obj.email);
        })
    }
    
    addContactHandler = (event, routeProps) => {
    event.preventDefault();    
    // Dont update if the entries are missing
    if ( (this.state.name === "") || 
        (this.state.number === "") ||
        (this.state.email === "") ){
        return;
    }

    // dont add duplicate entries
    const contactList = [...this.state.completeContacts];
    let contact = {};
    contact.name = this.state.name;
    contact.email = this.state.email;
    contact.number = this.state.number;
    if(this.contactExists(contact, contactList)){
        // console.log("Contact already present.. so dont add")
        return;
    }

    // add new entry
    contactList.push({
        name: this.state.name,
        number: this.state.number,
        email: this.state.email
    })
    this.setState({
        completeContacts: contactList,
        name: "",
        number: "",
        email: ""
    })
    routeProps.history.goBack()
    }
    handleCancel = (e, routeProps) => {
        if ( (this.state.name === "") || 
              (this.state.number === "") ||
              (this.state.email === "") ) {
          return;
        }
      
        const contactList = [...this.state.completeContacts];
        let contact = contactList[this.state.selectedIndex];
        contact.name = this.state.name;
        contact.email = this.state.email;
        contact.number = this.state.number;
        contactList[this.state.selectedIndex] = contact;
        this.setState({
          completeContacts: contactList,
          name: "",
          number: "",
          email: ""
        })
        routeProps.history.goBack()
      }    
    handleContactEdit(event, data, routeProperty) {
        console.log("edit:",data)
        const itemIndex = data.id
        this.setState({
            selectedIndex: itemIndex,
            name: data.name,
            number: data.number,
            email: data.email,
          })
        routeProperty.history.push("form")
    }
    handleOnChange = (event) => {
        const value = event.target.value;
        this.setState({
          [event.target.name]: value
        })
      }    
    render() {
        return (
            <Router>
            <div className="App">
              <Route path="/" exact render = {(routeProps) => (
                  <HomePage 
                    routeProps = {routeProps}
                    handleAddContacts = {this.handleAddContacts}
                    handleContactEdit = {this.handleContactEdit}
                    handleDeleteClick = {this.handleDeleteClick}
                    completeContacts = {this.state.completeContacts}
                    />
              )} />

              <Route path="/form" render = {(routeProps) => (
               <Validator 
                    routeProps = {routeProps}
                    name={this.state.name}
                    number={this.state.number}
                    email={this.state.email}
                    changed={this.handleOnChange}
                    handleSubmit={this.addContactHandler}
                    cancel={this.handleCancel}
                />
              )}/>
            </div>
          </Router>
        )
    }
}


