import React from 'react'
import {Link} from 'gatsby'


function nav() {
    return (
        <nav className="grid justify-items-center grid-cols-0 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4 h-12 items-center">
            <Link to="/" className="col-start-0 sm:col-start-0 md:col-start-2 lg:col-start-3">Home</Link>
            <Link to="/girls">Girls</Link>
            <Link to="/boys">Boys</Link>
            <Link to="/products">Shop</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/contact-us">Contact</Link>
            <button className="snipcart-customer-signin block sm:hidden">My account</button>
        </nav>
    )
}

export default nav
