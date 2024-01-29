import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    let location = useLocation();

    React.useEffect(() => {
      console.log(location.pathname);
    }, [location]);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">
                    <Link className={`navbar-brand ${location.pathname === "/" ? "active" : ""}`} to="/">Daily-Foody</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <form className='d-flex topnav-right' >

                        <Link className='btn mx-2 btn-primary' to='/login'>Login</Link>
                        <Link className='btn mx-2 btn-primary' to='/signUp'>Sign Up</Link>
                    </form>
  
                </div>

            </nav>
        </div>
    )
}

export default Navbar