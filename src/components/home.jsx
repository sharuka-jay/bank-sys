import React, { Component } from 'react';
import ListBankComponent from './ListBankComponent';
import ListCustomers from './ListCustomers';

class home extends Component {

    constructor(props){
        super(props)
        this.state={
            
        }
        this.bank = this.bank.bind(this);
        this.customer = this.customer.bind(this);
    }


    bank() {
        this.props.history.push("/banks");
      }

      customer() {
        this.props.history.push("/customers");
      }


    render() {
        return (
            <div className="container">
                <h4 className="text-center m-3">
                    Choose Option
                </h4>
                <div className="row">
          <button className="btn btn-secondary m-5 p-5" onClick={this.bank}>
            Bank Details
          </button>

          <button className="btn btn-secondary m-5 p-5" onClick={this.customer}>
            Customer Details
          </button>
        </div>
               
            </div>
        );
    }
}

export default home;