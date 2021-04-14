import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
function Footer({metaData}) {
    return(
        
            <footer>
                <div className="footer-top h-40 grid grid-cols-3 justify-items-center items-center bg-yellow-300">
                    <div>
                        <h1 className="text-2xl">Free Shipping</h1>
                        <p>on orders above $65</p>
                    </div>
                    <div>
                        <h1 className="text-2xl">Curated Collection</h1>
                        <p>foe every occasion</p>
                    </div>
                    <div>
                        <h1 className="text-2xl">Express Shipping</h1>
                        <p> to North Americas</p>
                    </div>
                    
                </div>
                <div className="h-80 bg-gray-100 grid grid-cols-5 p-20">
                    <div>
                        <h1 className="text-2xl pb-2 font-bold">Useful Links</h1>
                        <ul>
                            <li><Link>FAQ's</Link></li>
                            <li><Link>Size Chart</Link></li>
                            <li><Link>About Us</Link></li>
                            <li><Link>Contact Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h1 className="text-2xl pb-2 font-bold">Policies</h1>
                        <ul>
                            <li><Link>Privacy Policy</Link></li>
                            <li><Link>Shipping Policy</Link></li>
                            <li><Link>Return/Exchange Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <StaticImage 
                            src="../images/logo.png" 
                            alt="Logo"
                            placeholder="blurred"
                        />
                    </div>
                    <div>
                        
                    </div>
                    
                    <div>
                        <h1 className="text-2xl pb-2 font-bold">Follow Us</h1>
                        <ul>
                            <li><Link>Instagram</Link></li>
                            <li><Link>Facebook</Link></li>
                            <p>We are one stop shop for all kids occassional dresses</p>

                        </ul>
                    </div>
                </div>
                <div className="footer-bottom pl-20 pt-2 pb-2 text-sm text-gray-400">
                &copy; {metaData}, {new Date().getFullYear()}
                </div>
            </footer>
        
    )
}

export default Footer