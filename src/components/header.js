import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

function Header({siteTitle}) {
    return(
            <>
            <header className="container mx-auto">
                <Helmet>
                    {siteTitle}
                </Helmet>
                <div className="grid justify-items-center p-4 grid-cols-3">
                    <Link to="/" className="col-start-2">
                        <StaticImage 
                            src="../images/logo.png" 
                            alt="A dinosaur"
                            placeholder="blurred"
                            layout="fixed"
                            width={217}
                        />
                    </Link>
                    <div className="header-right grid grid-cols-2 justify-items-center items-center ">
                        <button className="snipcart-checkout inline-block align-middle">
                            <span className="shopping-cart inline-block align-middle">
                            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" alt="Cart Icon" title="" className="w-8 snipcart-cart-header__icon snipcart__icon--grey-dark snipcart__icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M51.714 20.47L55 60H9l3.286-39.53h9.857v-6.588C22.143 8.424 26.556 4 32 4c5.444 0 9.857 4.424 9.857 9.882v6.589h9.857zM25.43 13.883v16.47h-3.286v-6.587h-6.834l-2.737 32.94h38.856l-2.737-32.94h-6.834v6.588h-3.286v-16.47c0-3.634-2.947-6.589-6.571-6.589-3.624 0-6.571 2.955-6.571 6.588zm3.285 9.883V20.47h6.572v3.294h-6.572z" fill="#888888"></path></svg>
                            </span>
                            <span className="snipcart-items-count inline-block align-middle p-1"></span>
                        </button>
                        <button className="snipcart-customer-signin">My account</button>
                    </div>
                    
                    
                </div>
                <nav className="grid justify-items-center grid-cols-12 gap-4 h-12 items-center">
                    <Link to="/" className="col-start-4 active:bg-green-700">Home</Link>
                    <Link to="/products">Girls</Link>
                    <Link to="/products">Boys</Link>
                    <Link to="/products">Infants</Link>
                    <Link to="/products">Navratri</Link>
                    <Link to="/products">Contact</Link> 
                </nav>
            </header>
            </>
            
    )
}

export default Header