import React, { Component } from 'react';

class AddCustomer extends Component {
    constructor(props){
        super(props)
        this.state={
            
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card">
                        <h4>Add a New Customer</h4>
                        <div className="card-body">
                            <form action="">
                                <div className="form-group">
                                <label for="firstName" class="form-label">First Name</label>
                                <input placeholder="first name" name="firstName" className="form-control" value={this.changeFirstNameHandler}/>
                                </div>
                                <div className="form-group">
                                <label for="lastName" class="form-label">Last Name</label>
                                <input placeholder="last name" name="lastName" className="form-control" value={this.changeLastNameHandler}/>
                                </div>
                                <div className="form-group">
                                <label for="dob" class="form-label">Date of Birth</label>
                                <input  type="date" name="dob" className="form-control" value={this.changedobHandler}/>
                                </div>
                                <div className="form-group">
                                <label for="phone" class="form-label">Phone Number</label>
                                <input  type="phone" name="phone" className="form-control" placeholder="phone number" value={this.changedobHandler}/>
                                </div>
                                <div className="form-group">
                                <label for="nic" class="form-label">NIC</label>
                                <input placeholder="NIC" name="nic" className="form-control" value={this.changefirstNameHandler}/>
                                </div>
                                <div className="form-group">
                                <label for="gender" class="form-label">Gender</label>
                                <input  type="text" name="gender" className="form-control" placeholder="male or female" value={this.changedobHandler}/>
                                </div>
                                <div className="form-group">
                                <label for="addr" class="form-label">Address</label>
                                <input  type="text" name="addr" className="form-control" value={this.changedobHandler}/>
                                </div>



                                <button className="btn btn-success m-3" onClick={this.saveBank}>Add</button>
                                {/* <button className="btn btn-danger m-3" onClick={this.cancel.bind(this)}>Cancel</button> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddCustomer;