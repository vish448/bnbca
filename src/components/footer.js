import React from 'react'
import { Link} from 'gatsby'
import { StaticImage, getImage, GatsbyImage } from "gatsby-plugin-image"
import { MdLocalShipping, MdCollectionsBookmark } from "react-icons/md";
import { AiFillInstagram} from "react-icons/ai";
import { FaFacebookF, FaShippingFast } from "react-icons/fa";

const Footer = ({metaData})=> {
    return(
        
            <footer className="mt-10">
                <div className="footer-top h-40 md:grid grid-cols-3 hidden justify-items-center items-center bg-yellow-300">
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
                        <h1 className="text-2xl">We Ship</h1>
                        <p> to Newzeland</p>
                        </div>
                    </div>
                    
                </div>
                <div className="md:h-80 sm:h-auto bg-gray-100 grid grid-cols-1 md:grid-cols-5 p-8 lg:p-20 sm:text-center">
                    <div className="text-center pt-0">
                        <h1 className="text:1xl lg:text-2xl pb-2 font-bold">Useful Links</h1>
                        <ul>
                            <li className="p-3"><Link to="/faqs">FAQ's</Link></li>
                            <li className="p-3"><Link to="/about-us">About Us</Link></li>
                            <li className="p-3"><Link to="/contact-us">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="text-center">
                        <h1 className="text:1xl lg:text-2xl pb-2 font-bold">Policies</h1>
                        <ul>
                            <li className="p-3"><Link to="/privacy-policy">Privacy Policy</Link></li>
                            <li className="p-3"><Link to="/shipping-policy">Shipping Policy</Link></li>
                            <li className="p-3"><Link to="/return-policy">Return/Exchange Policy</Link></li>
                        </ul>
                    </div>

                    <div className="sm:col-span-1 lg:col-span-2">
                        <StaticImage 
                            src="../images/logo.png" 
                            alt="Logo"
                            placeholder="blurred"
                            width={350}
                        />
                    </div>
                    <div className="hidden">
                        
                    </div>
                    
                    <div className="text-center sm:col-span-2 lg:col-span-1">
                        <h1 className="text:1xl lg:text-2xl pb-2 font-bold">Follow Us</h1>
                        <ul>
                            <li className="p-2 sm:p-0"><AiFillInstagram className="inline-block m-1"/>: <a target="_blank" href="https://www.instagram.com/bownbeeaus">bownbeeaus</a> <br/>
                            </li>
                            <li className="p-2 sm:p-0"><FaFacebookF className="inline-block m-1"/>: <a target="_blank" href="https://www.facebook.com/bownbeeaus/">bownbeeaus</a></li>
                            <p>We are one stop shop for all kids occassional dresses</p>

                        </ul>
                    </div>
                </div>
                <div className="footer-bottom text-center sm:text-left sm:pl-20 pt-2 pb-2 text-sm text-gray-400">
                &copy; {metaData}, {new Date().getFullYear()}
                </div>
            </footer>
        
    )
}

export default Footer