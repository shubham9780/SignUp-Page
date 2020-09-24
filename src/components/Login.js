import React from 'react';
import {BrowserRouter as Link} from "react-router-dom";
import axios from "axios";
import "./Login.scss";
import tree from "../tree.jpg";

class Login extends React.Component{
    constructor(props) {
        super();
                this.state = {
                  fname: null,
                  lname:null,
                  email: null,
                  password: null
                };
              }     
              
                handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submit = () => {
        if (
          this.state.fname === null ||
          this.state.lname === null ||
          this.state.email === null ||
          this.state.password === null
        ) {
          console.log("empty");
          alert("Field is empty");
        }
        else
        {
        const logindata = {
          fname: this.state.fname,
          lname:this.state.lname,
          email: this.state.email,
          password: this.state.password
        };
console.log(logindata);
        axios
          .post('https://reqres.in/api/users', logindata)
          .then((response) => {
              console.log("success");
            alert("User registered succesfully");
            
          });
        }
      };

    render()
    { 
    return(
      <div>
         <div className="logoheader">
<img className="logo" src={tree} alt="logo"/>
          </div>
        <div className="container">
          <div>
            <h5>SIGN UP</h5>
            <p className="heading">Create your account</p>
            <p>  Lorem, ipsum dolor sit  adipisicing elit.</p>
            </div>
              <div>
 <button className="sign-social-btn"> <i class="fa fa-facebook-f"></i>Login with Facebook</button>
 <button className="sign-social-btn"><i class="fa fa-google"></i>Login with Google </button>
             </div>
               <div className="hr-sect">or</div>
            <form>
                <input type="text"  name="fname" onChange={this.handleChange} className="input-box" placeholder="First Name" required/> 
                <input type="text" name="lname" onChange={this.handleChange} className="input-box" placeholder="Last Name" required/>
                <input type="text" name="email" onChange={this.handleChange} className="input-box" placeholder="Email" required/>
                <input type="password" name="password" onChange={this.handleChange} className="input-box" placeholder="Password"required/>
                <p><span></span>By clicking on,you agree to <Link to="#">terms and conditions</Link></p>
                <button type="button" className="sign-btn" onClick={this.submit}>Sign Up</button>
            </form>
        </div>
        </div>
    )
}
};

export default Login;