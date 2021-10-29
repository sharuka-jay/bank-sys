import React, { Component } from "react";
import CustomerService from "../sevices/CustomerService";
class ListCustomers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cus:[],
    };
    this.addCustomers = this.addCustomers.bind(this);
  }
  addCustomers() {
    this.props.history.push("/addcustomer");
  }

  componentDidMount(){
    CustomerService.getCustomer().then((res)=>{
this.setState({cus:res.data});
    });
  }
  render() {
    return (
      <div>
        <h2 className="text-center">Customer List</h2>
        <div className="row">
          <button className="btn btn-warning m-2" onClick={this.addCustomers}>
            Add New Customer
          </button>
        </div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <td>Person Id</td>
                <td>First Name</td>
                <td>Last Name</td>
                <td>DOB</td>
                <td>Phone Number</td>
                <td>NIC</td>
                <td>Gender</td>
                <td>Address</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
            {this.state.cus.map(cus => 
                <tr key={cus.id}>
                  <td>{cus.id}</td>
                  <td>{cus.fname}</td>
                  <td>{cus.lname}</td>
                  <td>{cus.date}</td>
                  <td>{cus.phone}</td>
                  <td>{cus.nic}</td>
                  <td>{cus.gender}</td>
                  <td>{cus.address}</td>
                  <td></td>
                </tr>
              )}
              
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListCustomers;
