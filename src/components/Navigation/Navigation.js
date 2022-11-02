import React from 'react'

const Navigation=({onRouteChange,isSignedIn})=>{
    if(isSignedIn)
    {return(
        <nav style={{display:'flex',justifyContent:'flex-end'}}>
        <p className='f3 ma2 pa3 br3 pointer link underline black shadow-5'
         style={{background: 'linear-gradient(89deg,#994bb1 0%,#378cce  100%)'}}
          onClick={()=>onRouteChange('signout')} >Sign Out</p>
        </nav>
    );
    }
    else{
        return(
            <nav style={{display:'flex',justifyContent:'flex-end'}} >
            <p className='f3 ma2 pa3 dim pointer underline link black '
              onClick={()=>onRouteChange('signin')} >Sign In</p>
              <p className='f3 ma2 pa3 dim pointer underline link black'
              onClick={()=>onRouteChange('register')} >Register</p>
            </nav>
        );
    }
}

export default Navigation;