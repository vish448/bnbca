import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import {Helmet} from 'react-helmet'


const AboutUsPage = ()=> {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About | Bownbee Canada</title>
                <meta name="description" content="BownBee Canada is connecting kids to their culture and origin. We are one stop shop for all kids Indian traditional wear and accessories." />
                <meta name="keywords" content="Indian Traditional clothes for Kids, Bownbee, Bownbeecanada, Bownbeeca" />

                <link rel="canonical" href="https://www.bownbee.ca/about-us" />
            </Helmet>
            <div className="breadcrumb h-8 bg-gray-100 grid justify-items-center content-center">About BownBee
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-0 sm:gap-4 p-8 ">
            <div className="aboutbownbee sm:grid sm:grid-cols-4">
                <aside className="col-start-0 sm:col-start-1 text-2xl font-bold">
                    About<br/><span className="text-4xl">BownBee</span>
                </aside>
                <main className="sm:col-start-2 sm:col-span-3">
                    <p>BownBee is one of the most loved ethnic kids online brand. A firm believer of Indian traditional handicrafts, weconstantly work towards introducing our traditions to young kids throughTraditional Indian and Fusionwear. BownBee products are made in India, locally-sourced, contemporary and affordable.We don’t produce in bulk so all our dresses are limited edition to ensure our little customers stand out of the crowd on every occasion!</p><br/>

                    <p>We work with artisans and weavers from different states to bring the right blend of regional crafts and in-house designs for our customers. This production model has helped these artisans with a regular and growing source of income.</p>
                </main>

                <div className="sm:col-span-4 border-b-2 m-2"></div>
                </div>
                <div className="whatisbownbee sm:grid sm:grid-cols-4">
                
                    <aside className="col-start-0 sm:col-start-1 text-2xl font-bold">
                    What is<br/><span className="text-4xl">BownBee?</span>
                    </aside>
                    <main className="sm:col-start-2 sm:col-span-2 sm:pb-6 sm:pt-6">
                        <p>Bow is typically a knot tied around two loose ends, that is what we do! We connect artisans and weavers to urban consumers directly. And Bee symbolises determination, teamwork and community power. BownBee together represents the community power that enables us to connect the two ends of traditional crafts and end-consumers.</p>
                    </main>
                    <StaticImage 
                    src="../images/whatwe.png" 
                    alt="What is bownbee"
                    placeholder="blurred"
                    className="sm:col-start-4 m-4"
                    maxWidth={200}
                    maxHeight={200}
                    layout="fixed"
                    />
                    <div className="col-span-4 border-b-2 m-2"></div>
                </div>

                <div className="whatweoffer sm:grid sm:grid-cols-4">
                    <aside className="col-start-0 sm:col-start-1 text-2xl font-bold">
                    What We<br/><span className="text-4xl">Offer?</span>
                    </aside>
                    <main className="col-start-2 col-span-2 pb-6 pt-6">
                    <p>BownBee offers exclusive range of Indian Ethnic and Fusion dresses for girls and boys from new born till 13 years of age. For girls, the range incorporates designer wear of salwar kurti sets, lehnga cholis and party dresses with attractive work of prints/colors to capture various moods of your young divas. For boys, we offer a vivid range of dhoti kurtas, kurta-pyjamas, pathani salwar sets, angrakhas, sherwanis etc.</p><br/>
                    <p>Our special costume range of Janamasthmi and Navratri consists of affordable costumes specifically designed for festivals.</p>
                    </main>
                    <StaticImage 
                    src="../images/whatweofferbkg.png" 
                    alt="What we offer"
                    placeholder="blurred"
                    className="sm:col-start-4 m-4"
                    maxWidth={200}
                    maxHeight={200}
                    layout="fixed"
                    />
                    
                    <div className="col-span-4 border-b-2 m-2"></div> 
                </div>
            </div>
        </>
    )
}

export default AboutUsPage