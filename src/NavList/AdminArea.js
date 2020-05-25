import React, {useState} from 'react';
import {Redirect, useLocation} from 'react-router-dom';


const AdminArea = () => {
    const [redirectToReferrer, setRedirectToReferrer] = useState(false);


  const login = () => {
        fakeAuth.isAuthenticated = true;
        fakeAuth.authenticate(() => {
            setRedirectToReferrer(true);
        })
  }
    const location = useLocation();
    const  {from}  = location.state || {from: {pathname: '/admin'}};
    
    console.log(location.state);
    if (redirectToReferrer) {
        return (
            <Redirect to={from} /> 
        ) 
    }
    console.log(from);
    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={login}>Log in</button>
      </div>
    )
}


/* A fake authentication function */
export const fakeAuth = {
    isAuthenticated: false,
    authenticate : (cb,isAuthenticated) => {
        isAuthenticated = true
        setTimeout(cb, 100)
    },
}
export default AdminArea;