import React from 'react';
import {Helmet} from 'react-helmet'

const FaqsPage = () => {
    return (
        <div id="faqa">
            <Helmet>
            <meta charSet="utf-8" />
            <title>FAQ | Bownbee Canada</title>
            <meta name="description" content="BownBee Canada is connecting kids to their culture and origin. We are one stop shop for all kids Indian traditional wear and accessories." />
            <meta name="keywords" content="Ethinic wear, Indian Kids,Bownbee, Bownbeecanada, Bownbeeca" />

            <link rel="canonical" href="https://www.bownbee.ca/contact-us" />
        </Helmet>
        <div className="breadcrumb h-8 bg-gray-100 grid justify-items-center content-center">Frequently Asked Questions
        </div>
        <div className="lg:container lg:mx-auto p-10">
            <p>BownBee, a venture of love and passion for dressing up little kids. BownBee aims to provide latest and trendy dresses for young girls and boys. Our range includes party wear, ethnic, indo-western and smart casuals. Our designers combine best of fabric with best of designs to make an outfit that’s not only designer but also comfortable. We don’t produce in bulk so all our dresses are limited edition to ensure our little customers stand out of the crowd on every occasion! If you cannot find the answer to your question below, do contact us on bownbeecanada@gmail.com and our team will be there to help you out.</p><br/>
            <p className="text-2xl font-bold">WHERE DO WE SHIP AND WHAT ARE THE CHARGES?</p>
            <p>Canada – Free shipping across GTA and $5 flat charges rest of Canada.<br/>
            USA – We ship to USA with a shipping fee of CAD 30</p><br/>
            <p className="text-2xl font-bold">HOW DO I ORDER?</p>
            <p>Follow simple steps and get the best products delivered at your doorstep. Since all products will be sealed as per the manufacturer, you can be assured of best quality.</p><br/>
            <ol className="list-decimal list-inside">
                <li>Log on to www.bownbee.ca</li>
                <li>Have a look at the wide range of products that we have. All
                products are segregated in categories like Girls, Boys etc.</li>
                <li>You can also browse each category and click on buy now from the shop page.</li>
                <li> All purchases are stored in your shopping cart. All purchases are stored in your shopping cart.</li>
                <li>From the shopping cart you can continue to purchase products by checking out and selecting your preferred mode of payment. We have tied up with all credit card companies and banks to make payments easy for you.</li>
                <li>You need to follow the payment instructions. Input your billing and shipping address and choose your preferred mode
                of payment.</li>
                <li>You can either register or make a payment as a guest. We are against spamming and will not share your contacts with anyone.</li>
            </ol><br/>
            <p className="text-2xl font-bold">ANY HIDDEN TAXES OR CHARGES?</p>
            <p>Not at all.</p><br/>
            <p className="text-2xl font-bold">HOW DO I KNOW MY ORDER HAS BEEN CONFIRMED?</p>
            <p>Once your order has been logged and payment authorization has been received, the BownBeeCanada team confirms receipt of the order and begins processing it. You will receive an email containing the details of your order when the seller receives it and confirms the same. In the e-mail you will be provided with a unique Order ID (eg. Order # XXXX), a listing of the item(s) you have ordered and the expected delivery time.</p><br/>
            <p className="text-2xl font-bold">CAN I ORDER A PRODUCT THAT IS ‘OUT OF STOCK’?</p>
            <p>Unfortunately, products listed as ‘Out of Stock’ are not available for sale.</p>
            
        </div>
        </div>
    );
};

export default FaqsPage;