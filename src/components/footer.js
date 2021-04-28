import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import { MdLocalShipping, MdCollectionsBookmark } from "react-icons/md";
import { AiFillInstagram} from "react-icons/ai";
import { FaFacebookF, FaShippingFast } from "react-icons/fa";


function Footer({metaData}) {
    return(
        
            <footer>
                <div className="footer-top h-40 grid grid-cols-3 justify-items-center items-center bg-yellow-300">
                    <div className="grid grid-cols-2">
                        <MdLocalShipping className="text-8xl justify-self-center"/>
                        <div className="self-center">
                        <h1 className="text-2xl">Free Shipping</h1>
                        <p>on orders above $79</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <MdCollectionsBookmark className="text-8xl justify-self-center"/>
                        <div className="self-center">
                        <h1 className="text-2xl">Curated Collection</h1>
                        <p>for every occasion</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <FaShippingFast className="text-8xl justify-self-center"/>
                        <div className="self-center">
                        <h1 className="text-2xl">Express Shipping</h1>
                        <p> to North Americas</p>
                        </div>
                    </div>
                    
                </div>
                <div className="h-80 bg-gray-100 grid grid-cols-5 p-20">
                    <div>
                        <h1 className="text-2xl pb-2 font-bold">Useful Links</h1>
                        <ul>
                            <li><Link to="/faqs">FAQ's</Link></li>
                            <li><Link to="/about-us">About Us</Link></li>
                            <li><Link to="/contact-us">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h1 className="text-2xl pb-2 font-bold">Policies</h1>
                        <ul>
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link to="/shipping-policy">Shipping Policy</Link></li>
                            <li><Link to="/return-policy">Return/Exchange Policy</Link></li>
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
                            <li><AiFillInstagram className="float-left m-1"/>: <a target="_blank" href="https://www.instagram.com/bownbeecanda">bownbeecanada</a> <br/>
                            </li>
                            <li><FaFacebookF className="float-left m-1"/>: <a target="_blank" href="https://www.facebook.com/profile.php?id=100057448820311">bownbeecanada</a></li>
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