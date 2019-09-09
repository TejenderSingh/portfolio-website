import { Link } from "gatsby"
import React from "react"
import HamburgerIcon from "../MobileNav/HamburgerIcon"
import SocialIcons from "../SocialIcons"
import LogoImage from "./logo"
import Nav from "./Nav"

const Navbar = ({ toggleNav }) => {
  return (
    <>
      <div
        className={`navbar container mx-auto flex items-center justify-between py-8 px-6`}
      >
        <div className={`md:hidden`}>
          <HamburgerIcon nav={toggleNav} />
        </div>
        <Link to="/" className={`flex items-center bg-green-200`}>
          <LogoImage />
        </Link>
        <Nav
          navClasses="hidden md:block"
          linkClasses="text-gray-800 ml-10 text-lg font-semibold hover:text-indigo-600"
        />
        <div className={`flex`}>
          <SocialIcons />
        </div>
      </div>
    </>
  )
}

export default Navbar
