import React,{Component} from 'react'

class Signin extends Component{

  constructor(props){
    super(props);
    this.state={
      signInEmail:'',
      signInPassword:''
    }
  }

  onEmailChange=(event)=>{
    this.setState({signInEmail:event.target.value});
  }

  onPasswordChange=(event)=>{
    this.setState({signInPassword:event.target.value});
  }

  onSignIn=()=>{
    fetch('http://localhost:8000/signin',{
      method:'post',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        email:this.state.signInEmail,
        password:this.state.signInPassword
      })
    })
    .then(res=>res.json())
    .then(data=>{
      if(data==='Signin Successfull')
      {
        console.log("GHUS RAHA HAI");
        this.props.onRouteChange('home');
      }
    })
    
  }

  render(){
    const {onRouteChange}=this.props;
    return(
        <article className="br3 shadow-5 ba dark-gray  mv4 w-100 w-50-m w-25-l mw5 center">
        <main className="pa4 black-80">
        <form className="measure">
         <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
         <legend className="f1 fw6 ph0 mh0">Sign In</legend>
        <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="email" name="email-address"  id="email-address"
        onChange={this.onEmailChange}
        />
         </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="password" name="password"  id="password" 
        onChange={this.onPasswordChange}
        />
      </div>
    </fieldset>
    <div>
      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" onClick={this.onSignIn} />
    </div>
    <div className="lh-copy mt3">
    <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" onClick={()=>onRouteChange('register')} />
    </div>
  </form>
</main>
</article>
    );
    }
}

export default Signin; 