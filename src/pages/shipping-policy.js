import React from 'react';
import {Helmet} from 'react-helmet'

const ShippingPolicyPage = () => {
    return (
        <div id="shipping-policy">
        <Helmet>
            <meta charSet="utf-8" />
            <title>Shipping Policy | Bownbee Australia</title>
            <meta name="description" content="BownBee Australia is connecting kids to their culture and origin. We are one stop shop for all kids Indian traditional wear and accessories." />
            <meta name="keywords" content="Ship Indian traditional wear in North America,Bownbee, BownbeeAustralia, Bownbeeca" />

            <link rel="canonical" href="https://www.bownbee.com.au/about-us" />
        </Helmet>
        <div className="breadcrumb h-8 bg-gray-100 grid justify-items-center content-center">Shipping Policy
        </div>
        <div className="lg:container lg:mx-auto p-10">
            <p>We strive to deliver products purchased from BownBeeCanada in excellent condition and in the fastest time possible and provide free shipping all across GTA.<br/>Also, For all the purchases of CAD79* or more, we will deliver the order to your doorstep free of cost. A flat shipping charge of CAD5* will be applicable to all orders under CAD79*.</p><br/>
            <ul className="list-disc list-inside">
                <li>If the order is canceled, lost or undelivered to your preferred location, we will refund the complete order amount including any shipping charges.</li>
                <li>We offer a 10-day return - If you return an order delivered to you, you just have to pay the return shipping and the balance amount will be credited to you. See our return policy for more details.</li>
                <li>Shipping Charges - BownBeeCanada offers free shipping within Canada on all products if your total order amount is CAD79<sup>*</sup>or more. Otherwise CAD5<sup>*</sup> will be levied as Shipping Charges.</li>
            </ul>
            <p className="font-sm"><sup>*</sup>Order value is calculated after applying discounts and before all applicable taxes.</p>
            <p><i>Please note our shipping policy as follows:</i></p>
            <ul className="list-disc list-inside">
                <li>We ship within Canada and USA.</li>
                <li>We ship on all weekdays (Monday to Saturday), excluding public holidays.</li>
                <li>We make our best efforts to ship each item in your order within 3 working days of the order. Once shipped, you get an email from us confirming the shipment details.</li>
                <li>To ensure that your order reaches you in the fastest time and in good condition, we only ship through reputed courier agencies.</li>
                <li>We currently deliver to all major cities across Canada and USA.</li>
            </ul>
        </div>
        </div>
    );
};

export default ShippingPolicyPage;