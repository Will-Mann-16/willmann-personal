import React from 'react'
import ReactDOM from 'react-dom';
import Link from 'gatsby-link'
import styled from 'styled-components';
import Img from 'gatsby-image';
import {colours} from './Utilities';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
const HeaderWrapper = styled.div`
  background: ${colours.turkishSea};
  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
  height: ${({ isHome }) => (isHome ? "60vh" : "12.5vh")};
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
`
const IconContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  align-content: center;
  opacity: ${({ isHome }) => (isHome ? 1 : 0)};
  justify-content: space-around;
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
    if (location.pathname !== prevProps.location.pathname) {
      if (location.pathname === "/") {
        this.wrapper.animate([{ height: "12.5vh" }, { height: "60vh" }], {
          duration: 300,
          fill: "forwards",
          easing: "cubic-bezier(0.86, 0, 0.07, 1)",
          iterations: 1
        });
        this.title.animate([{ fontSize: "2em" }, { fontSize: "5em" }], {
          duration: 300,
          fill: "forwards",
          easing: "cubic-bezier(0.86, 0, 0.07, 1)",
          iterations: 1
        });
        this.iconContainer.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 300,
          fill: "forwards",
          easing: "cubic-bezier(0.86, 0, 0.07, 1)",
          iterations: 1
        });
      } else {
        this.wrapper.animate([{ height: "60vh" }, { height: "12.5vh" }], {
          duration: 300,
          fill: "forwards",
          easing: "cubic-bezier(0.86, 0, 0.07, 1)",
          iterations: 1
        });
        this.title.animate([{ fontSize: "5em" }, { fontSize: "2em" }], {
          duration: 300,
          fill: "forwards",
          easing: "cubic-bezier(0.86, 0, 0.07, 1)",
          iterations: 1
        });
        this.iconContainer.animate([{ opacity: 1 }, { opacity: 0 }], {
          duration: 300,
          fill: "forwards",
          easing: "cubic-bezier(0.86, 0, 0.07, 1)",
          iterations: 1
        });
      }
    }
  };
  render(){
    const { data, location } = this.props;
    return (
      <HeaderWrapper
        ref={wrapper => (this.wrapper = ReactDOM.findDOMNode(wrapper))}
        isHome={location.pathname === "/"}
        >
          <HeaderContainer>
            <h1 ref={title => (this.title = ReactDOM.findDOMNode(title))} style={{ margin: 0, fontSize: location.pathname === "/" ? "5em": "2em"}}>
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
          <IconContainer isHome={location.pathname === "/"} ref={icon => (this.iconContainer = ReactDOM.findDOMNode(icon))}>
            <FontAwesomeIcon icon={['fab', 'github']} size="2x" style={{color: colours.xenonBlue}} />
            <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" style={{color: colours.xenonBlue}} />
          </IconContainer>
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
