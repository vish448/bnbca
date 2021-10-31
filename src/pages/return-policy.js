import React from 'react';
import {Helmet} from 'react-helmet'

const RetrunPolicy = () => {
    return (
        <div id="return-policy">
        <Helmet>
            <meta charSet="utf-8" />
            <title>Return Policy | Bownbee Canada</title>
            <meta name="description" content="BownBee.ca's Return and Exchange Policy offers you the option to return or exchange items purchased on bownbee.ca within 48 hours of receipt."/>
            <meta name="keywords" content="Hassle Free Return for kids Wear, Bownbee, Bownbeecanada, Bownbeeca" />

            <link rel="canonical" href="https://www.bownbee.ca/about-us" />
        </Helmet>
        <div className="breadcrumb h-8 bg-gray-100 grid justify-items-center content-center">Return Policy
        </div>
        <div className="lg:container lg:mx-auto p-10">
        <p>BownBee.ca’s Return and Exchange Policy offers you the option to return or exchange items purchased on bownbee.ca within 48 hours of receipt. In case of returns, we will refund you the money in the manner you have made the payment once the returned product is inspected by our team. If you choose to exchange the item for reason of mismatch of size or receipt of a defective item, you will be provided with a replacement of the item, free of cost. However an exchange is subject to availability of the item in our stock and a shipping cost will be charged.</p><br/>
       
        <ul className="list-disc list-inside"><span className="font-bold uppercase text-lg">How to exchange:</span>
            <li>To request a return, please send mail to <a href="mailto:bownbeecanada@gmail.com">bownbeecanada@gmail.com</a> within 48 hrs of receiving the product.</li>
            <li>Do mention order number in the subject line to help us quickly process your returns. Please also mention reason for return/exchange.</li>
            <li>Please ensure that the returned merchandize is unused, unworn, unwashed, undamaged and in sealable condition.</li>
            <li>The original packaging including brand tags, BownBee tags and invoice should be intact while returning the items.</li>
            <li>All returned items should be packed securely and safely to prevent any loss or damage during transit.</li>
            <li>All returns needs to be self- shipped by you to our warehouse address. For all self-shipped returns, please ensure that your shipment reaches our warehouse within 7 days from date of raising the return request. For all self shipped items, we recommend you use a reliable courier partner</li>
            <li>All returns are subject to inspection and quality checks pass on receipt in our warehouse.</li>
            <li>Please note that items are eligible for return if you get an item that is damaged or if you receive a wrong shipment.</li>
            <li>If you choose to exchange the item for reason of mismatch of size or receipt of a defective item, you will be provided with a replacement of the item, free of cost. However an exchange is subject to availability of the item in our stock.. In case we do not have the stock available, we would inform you through email and refund the money</li>
        </ul><br/>
        <p className="font-bold">Clearance sale/Discounted items not eligible for return:</p>
        <p>We offer such amazing discounts because we don’t house any inventory after our sales end and therefore cannot process returns. However, we want you to be delighted and would never expect you to pay for a damaged or defective product. Please contact us if you run into any problems and we will be sure to make it right.</p>
        </div>
        </div>
    );
};

export default RetrunPolicy;
