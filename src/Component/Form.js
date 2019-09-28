import React from "react"

export class Form extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            phone: "",
            email: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    handleChange(event) {

    }
    handleClick(event) {

    }
    render() {
        console.log("FormProps:",this.props)
        const name = (this.props.toEditContact.name === "") ? this.state.name : this.props.toEditContact.name,
             phone = (this.props.toEditContact.phone === "") ? this.state.phone : this.props.toEditContact.phone,
             email = (this.props.toEditContact.email === "") ? this.state.email : this.props.toEditContact.email;
        console.log(this.state.name)
        console.log(this.props.toEditContact.name)
        return (
            <div>
            <h2>Add Details</h2>
            <form>
                <input 
                    type ="text" 
                    name = "name" 
                    value = {name} 
                    onChange = {this.handleChange} />
                <input 
                    type ="text" 
                    name = "email" 
                    value = {email} 
                    onChange = {this.handleChange} />
                <input 
                    type ="text" 
                    name = "phone" 
                    value = {phone}
                    onChange = {this.handleChange} />
                </form>
                <input type = "button" value = "Submit" onClick = {this.handleClick}/>
                <input type = "button" value = "Cancel" onClick = {this.handleClick}/>
            </div>
            
        )
    }
}