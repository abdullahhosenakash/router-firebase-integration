import React from 'react';
import useFirebase from '../hooks/useFirebase';

const Login = () => {
    const { signInWIthGoogle } = useFirebase();
    return (
        <div>
            <h1>Please Login</h1>
            <div style={{ margin: '20px' }}>
                <button onClick={signInWIthGoogle}>Google Sign In</button>
            </div>
            <form>
                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password" placeholder='Your Password' />
                <br />
                <input type="submit" value='Login' />
            </form>
        </div>
    );
};

export default Login;