import React from "react"
import './App.css';
import {CardList} from './CardList'

export class HomePage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log("HomePage.props:",this.props)
        return (
            <div>
                <div className="App-header">
                    Contact Manager
                </div>
                <hr />
                <p className="App-intro">
                    List of contacts
                </p>
                <hr />
                <button className="addContacts" 
                        onClick = {(e) => this.props.handleAddContacts(e, this.props.routeProps)}>
                    Add Contacts
                </button>
                <CardList contacts = {this.props.completeContacts} 
                        handleEdit = {this.props.handleContactEdit}
                        deleteClicked={this.props.handleDeleteClick}
                        routeProperty = {this.props.routeProps}/>
            </div>
        )
    }
}