import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';
import './Header.css';

const Header = () => {
    const { user, handleSignOut } = useFirebase();
    return (
        <header>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/orders'>Orders</Link>
                <Link to='/reviews'>Reviews</Link>
                <Link to='/login'>Login</Link>
                <span>{user?.displayName && user.displayName}</span>
                {
                    user?.uid ?
                        <button onClick={handleSignOut}>Sign Out</button>
                        :
                        <Link to='/register'>Register</Link>
                }
            </nav>
        </header>
    );
};

export default Header;