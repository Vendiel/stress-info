import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import './layout.css'


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Information gällande stress, oro, ångest och utmattning' },
            { name: 'keywords', content: 'stress, oro, ångest, utmattning, utmattningssyndrom' },
          ]}>
          <html lang="sv" />
        </Helmet>

        <Header siteTitle={data.site.siteMetadata.title} />
        
        {children}

        <Footer></Footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
