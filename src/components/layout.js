import React from 'react'
import Header from './header'
import Footer from './footer'
import { useStaticQuery, graphql } from 'gatsby'
import "@fontsource/quicksand"
import "@fontsource/quicksand/700.css"
import "@fontsource/quicksand/500.css"
import "../styles/styles.css"


function Layout({children}) {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          company
          companyWebsite
        }
      }
    }
  `) 
    return(
        <>
            <div className="h-screen">
                <Header siteTitle={data.site.siteMetadata.title} />
                <main>{children}</main>
                <Footer metaData={data.site.siteMetadata.company} />
            </div>
        </>
    )

}

export default Layout