import React, { Component } from 'react';

class CreateBank extends Component {
    constructor(props){
        super(props)
        this.state={
            bankName: '',

        }
        this.changeNameHandler =this.changeNameHandler.bind(this);
        this.saveBank =this.saveBank.bind(this);
    }


    saveBank =(e)=>{
        e.preventDefault();
        let bank = {bankName:this.state.bankName};
        console.log('bank =>'+ JSON.stringify(bank));
        this.props.history.push('/');
    }

    changeNameHandler=(event)=>{
this.setState({bankName:event.target.value});
    }
   /*  cancel(){
        this.props.history.push('/banks');
    } */

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card">
                        <h4>Add a new bank</h4>
                        <div className="card-body">
                            <form action="">
                                <div className="form-group">
                                <label for="bankName" class="form-label">Bank Name</label>
                                <input placeholder="bank name" name="bankName" className="form-control" value={this.changeNameHandler}/>
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

export default CreateBank;