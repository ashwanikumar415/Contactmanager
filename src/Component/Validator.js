import React, {Component} from 'react'
import './../App.css';

export class Validator extends Component {
    render() {
        return (
            <div className="container">
                <form>
                    <div className="container">
                        <div className="form-group row">
                            <label htmlFor="name" className="col-sm-2 col-form-label col-form-label-lg">
                                Full name :
                            </label>
                            <div className="col-sm-10">
                                <input 
                                    className="form-control form-control-lg"
                                    type="text"
                                    id="name"
                                    name="name" 
                                    value={this.props.name}
                                    onChange={this.props.changed}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="email" className="col-sm-2 col-form-label col-form-label-lg">
                                Email address :
                            </label>
                            <div className="col-sm-10">
                                <input 
                                    className="form-control form-control-lg"
                                    type="email"
                                    id="email" 
                                    name="email"
                                    value={this.props.email}
                                    onChange={this.props.changed}
                                />
                            </div>
                        </div> 
                        <div className="form-group row">
                            <label htmlFor="email" className="col-sm-2 col-form-label col-form-label-lg">
                                Number :
                            </label>
                            <div className="col-sm-10">
                                <input 
                                    className="form-control form-control-lg"
                                    type="text"
                                    id="number" 
                                    name="number"
                                    value={this.props.number}
                                    onChange={this.props.changed}
                                />
                            </div>
                        </div>    
                        <div className="row justify-content-sm-center">
                            <div className="col-sm-10">
                                <div className="row">
                                    <div className="col">
                                        <button type="button" className="btn btn-outline-secondary btn-block btn-lg" 
                                            onClick={(e) => {this.props.handleSubmit(e, this.props.routeProps)}}>
                                            Submit
                                        </button>
                                    </div>
                                    <div className="col">
                                        <button type="button" className="btn btn-outline-secondary btn-block btn-lg"
                                            onClick={(e) => {this.props.cancel(e, this.props.routeProps)}}>
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                                </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}