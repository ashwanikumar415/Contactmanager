import React from "react"
import {CardList} from './CardList'
import {Header} from './../Component/Header'

export class HomePage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Header handleAddContacts = {this.props.handleAddContacts}
                        routeProps = {this.props.routeProps} />

                <CardList contacts = {this.props.completeContacts} 
                        handleEdit = {this.props.handleContactEdit}
                        deleteClicked={this.props.handleDeleteClick}
                        routeProperty = {this.props.routeProps}/>
            </div>
        )
    }
}