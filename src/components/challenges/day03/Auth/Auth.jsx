// imrs
import React, { useState } from 'react';
import Login from './Login/Login';
import Signup from './Signup/Signup'

// sfc
const Auth = () => {
    const [showLogin, setShowLogin] = useState(true);

    function handleToggle() {
    //     setShowLogin(false);
    //     if(showLogin === true){
    //         setShowLogin(false)
    //     } else {
    //         setShowLogin(true);
    //     }
    // }

    //OR

    setShowLogin(!showLogin);
    }
    return (
        <div>
            {showLogin === true ? <Login/> : <Signup/>}

            <button onClick = {handleToggle}>Click To Toggle</button>
        </div>
        );
}

export default Auth;