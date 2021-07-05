import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { FaFacebookF } from "react-icons/fa";
import { AiTwotoneMail , AiFillInstagram} from "react-icons/ai";
import { MdCall } from "react-icons/md";
import {Helmet} from "react-helmet"

const ContactUsPage = () => {
    return(
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Contact | Bownbee Australia</title>
            <meta name="description" content="BownBee  is connecting kids to their culture and origin. We are one stop shop for all kids Indian traditional wear and accessories." />
            <meta name="keywords" content="Indian Traditional clothes in Australia, Bownbee, BownbeeAustralia, Bownbeeca" />

            <link rel="canonical" href="https://www.bownbee.com.au/contact-us" />
        </Helmet>
        <div className="breadcrumb h-8 bg-gray-100 grid justify-items-center content-center">Contact Us
        </div>
        <div className="container mx-auto p-10 grid grid-cols-1 sm:grid-cols-4">
            <div className="col-start-1 col-span-2 justify-self-center self-center">
                <AiTwotoneMail className="float-left m-1"/>: <a href="mailto:sales@bownbee.com.au">sales@bownbee.com.au</a><br/>
                <FaFacebookF className="float-left m-1"/>: <a href="https://www.facebook.com/BownBeeaus/">bownbeeaus</a> <br/>
                <AiFillInstagram className="float-left m-1"/>: <a href="https://www.instagram.com/bownbeeaus">bownbeeaus</a> <br/>
                <MdCall className="float-left m-1"/>: <a href="tel:0435593556">+61 435 593 556</a> <br/>

            </div>
            <div className="col-span-2">
                <StaticImage 
                src="../images/logo.png" 
                alt="Logo"
                placeholder="blurred"
            />
            </div>
        </div>
        </>
    )
}

export default ContactUsPage