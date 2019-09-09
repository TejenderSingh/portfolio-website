import PropTypes from "prop-types"
import React, { Component } from "react"
import Backdrop from "../components/globals/MobileNav/Backdrop"
import SideNav from "../components/globals/MobileNav/SideNav"
import Navbar from "../components/globals/navbar/Navbar"
import Footer from "./globals/footer/Footer"
import "./layout.css"

class Layout extends Component {
  state = {
    navOpen: false,
  }
  toggleSideNav = () => {
    this.setState(prevState => {
      return { navOpen: !prevState.navOpen }
    })
  }
  closeSideNav = () => {
    this.setState({
      navOpen: false,
    })
  }
  render() {
    let backdrop
    if (this.state.navOpen) {
      backdrop = <Backdrop closeNav={this.closeSideNav} />
    }
    return (
      <>
        <div className={`antialiased ${this.props.bg} min-h-screen font-sans`}>
          <div className={`flex justify-center items-center`}>
            <SideNav nav={this.state.navOpen} closeNav={this.closeSideNav} />
          </div>
          {backdrop}
          <div className={`bg-transparent`}>
            <Navbar toggleNav={this.toggleSideNav} />
          </div>
          <div
            className={`min-h-screen md:h-auto`}
            style={{ minHeight: `calc(100vh - 166px)` }}
          >
            <main>{this.props.children}</main>
          </div>
          <div className={`bg-gray-900`}>
            <Footer />
          </div>
        </div>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
