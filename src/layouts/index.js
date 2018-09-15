import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { xenonBlue, blackenedPearl } from '../components/Utilities'

import Header from '../components/header'
import './index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas)

const Wrapper = styled.div`
  font-family: 'Fira Sans';
  color: ${blackenedPearl};
  h1{
    font-family: 'Oswald';
  }
`

const Layout = ({ children, data, location }) => (
  <Wrapper>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header data={data} location={location} />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </Wrapper>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
    background: imageSharp(id: { regex: "/background.jpg/" }) {
      sizes(maxWidth: 1240, duotone: {
          highlight: "#3686A0",
          shadow: "#195190",
          opacity: 85
        }) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
