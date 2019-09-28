import React from 'react'
import './../App.css';

export const Header = (props) => {
    return(
        <React.Fragment>
            <div className="App-header">
                Contact Manager
            </div>
            <hr />
            <p className="App-intro">
                List of contacts
            </p>
            <hr />
            <button className="addContacts" 
                    onClick = {(e) => props.handleAddContacts(e, props.routeProps)}>
                Add Contacts
            </button>            
        </React.Fragment>
    )
}
