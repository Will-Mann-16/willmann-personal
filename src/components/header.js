import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import Img from 'gatsby-image';
import {colours} from './Utilities';
const HeaderWrapper = styled.div`
  background: ${colours.turkishSea};
  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
`

const Nav = styled.nav`
  display: flex;
  flex-wrap: nowrap;
  a{
    padding: 12px 16px;
    color: ${colours.xenonBlue};
    text-decoration: none;
  }
`


export default class Header extends React.Component{
  componentDidUpdate = (prevProps, prevState) => {
    const { location } = this.props;
    const { prevLocation } = prevProps;
    if(location.pathname !== prevLocation.pathname){
      if(location.pathname === "/") {

      } else {

      }
    }
  }
  render(){
    const { data, location } = this.props;
    return (
      <HeaderWrapper>
          <HeaderContainer>
            <h1 style={{ margin: 0 }}>
              <Link
                to="/"
                style={{
                  color: colours.xenonBlue,
                  textDecoration: 'none',
                }}
              >
                {data.site.siteMetadata.title}
              </Link>
            </h1>
            <Nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </Nav>
          </HeaderContainer>
          <Img 
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
              opacity: 0.3
            }}
            sizes={data.background.sizes}
          />
        </HeaderWrapper>
    )
  }
}
