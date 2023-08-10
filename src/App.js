import './App.css';
import React from 'react';
import background from './backgorund.jpg';

class LoginForm extends React.Component {
constructor() {
super();
this.state={
  input:{},
  errors:{}
};
this.handleChange=this.handleChange.bind(this);
this.handleSubmit=this.handleSubmit.bind(this);
}
handleChange(e)
{
  let input=this.state.input;
  input[e.target.name]=e.target.value;

  this.setState({
    input
  });
}
handleSubmit(e) {
  e.preventDefault();
  if(this.validate())
  {
    console.log(this.state);
  let input={};
  input["email"]="";
  input["password"]="";
  this.setState({input: input});

  alert ('Signed in');
  
  }
}
validate() {
  let input=this.state.input;
  let errors={};
  let isValid=true;

  if(!input["email"])
  {
    isValid=false;
    errors["email"]="Please enter Correct email."
  }
  if(typeof input["email"] !=="undefined")
  {
    var validation= new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
if(!validation.test(input["email"]))
{
  isValid=false;
  errors["email"]="Enter a valid email !";
}
  }
  if(!input["password"]) {
    isValid=false;
    errors["password"]="Please Enter your password";
  }
  if (typeof input["password"] !== "undefined") {
    if (input["password"].length < 6) {
      isValid=false;
      errors["password"] = "Please add at least 6 charachter.";
    }
  }

  this.setState({
    errors: errors
  });

  return isValid;


}

render () {
  return (

    
<div className="App">
      <img src={background} alt="" />
      <div className="overlay"></div>
      <div className="main">
      <div className='Card'>

     

<form  onSubmit={this.handleSubmit}>  
<h1>Login</h1>
<div className="input-box">
  <span>Email </span>
 <input type="text" 
 placeholder="email"
 name='email'
 value={this.state.input.email}
 onChange={this.handleChange}
 id='email'
  className="email"></input>

<div className="text-danger">
  {this.state.errors.email}</div>
          </div>

<div className="input-box">
  <span>Password </span>
 <input type="password" 
 placeholder="Enter password"
 id="password"
 value={this.state.input.password}
 onChange={this.handleChange}
  className="password">
  </input>

   <div className="text-danger">
    {this.state.errors.password}
   </div>
          </div>


<div className="remember">
  <label>
    <input type="checkbox"></input> 

    Remember me</label>
    <a href=" "> Forget Password ?</a>
   </div>

<button type="submit" value="submit" className="btn-submit"> Login </button>


</form>
      

</div>
</div>
</div>

  ) 
}};
export default LoginForm;
