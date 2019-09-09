import React from "react"
import { FiX } from "react-icons/fi"
import Nav from "../navbar/Nav"
import "./SideNav.css"

const SideNav = ({ nav, closeNav }) => {
  let classes = "side-nav"
  if (nav) {
    classes = "side-nav open"
  }
  return (
    <div className={`relative block md:hidden`}>
      <div className={`${classes} rounded rounded-lg`}>
        <div style={{ position: "absolute", top: 20, left: 20 }}>
          <span
            className={`inline-block text-4xl text-gray-800 hover:text-indigo-600 cursor-pointer`}
            onClick={closeNav}
            style={{ transition: " all .1s ease-in-out" }}
          >
            <FiX />
          </span>
        </div>
        <Nav
          ulClasses="flex flex-col text-lg font-semibold"
          linkClasses="text-gray-800 hover:text-indigo-600 text-xl my-4 font-semibold"
          closeNav={closeNav}
        />
      </div>
    </div>
  )
}

export default SideNav
