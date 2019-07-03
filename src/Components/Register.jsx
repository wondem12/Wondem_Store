import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Register extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                		  <div class="banner-top">
	<div class="container">
		<h3 >Register</h3>
		<h4><Link to="/">Home</Link><label>/</label>Register</h4>
		<div class="clearfix"> </div>
	</div>
</div>
            <div class="login">
                <div class="main-agileits">
                        <div class="form-w3agile">
                            <h3>Register</h3>
                            <form onSubmit={this.handleSubmit}>
                                <input type="text" name="FirstName" placeholder="First Name" className="form-control" /><br/>
                                <input type="text" name="LastName" placeholder="Last Name" className="form-control" /><br/>
                                <input type="text" name="Email" placeholder="Email" className="form-control" /><br/>
                                <input type="password" name="Password" placeholder="Password" className="form-control" /><br/>
                                <input type="submit" name="Register" value="Register" className="btn btn-warning" />
                            </form>
                        </div>
                        </div>
                    </div>
                
                </React.Fragment>
         );
    }
}
 
export default Register;