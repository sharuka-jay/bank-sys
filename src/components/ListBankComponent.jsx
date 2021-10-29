import React, { Component } from "react";
import BankService from "../sevices/BankService";
/* import BankService from '../sevices/BankService'; */
/* import BankService from '../sevices/BankService'; */

class ListBankComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bank: [],
    };

    this.addBank = this.addBank.bind(this);
  }

  addBank() {
    this.props.history.push("/addbanks");
  }


  componentDidMount(){
    BankService.getBanks().then((res)=>{
this.setState({bank:res.data});
    });
  }
  render() {
    return (
      <div>
        <h2 className="text-center">Bank List</h2>
        <div className="row">
          <button className="btn btn-warning m-2" onClick={this.addBank}>
            Add New Bank
          </button>
        </div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <td>Bank id</td>
                <td>Bank name</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {this.state.bank.map(bank => 
                <tr key={bank.id}>
                  <td>{bank.id}</td>
                  <td>{bank.bankname}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListBankComponent;
