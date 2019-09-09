import React from "react"
import { FiAlignJustify } from "react-icons/fi"

const HamburgerIcon = ({ nav }) => {
  return (
    <FiAlignJustify
      className={`text-gray-800 hover:text-indigo-600 text-3xl cursor-pointer`}
      style={{ transition: " all .1s ease-in-out" }}
      onClick={nav}
    ></FiAlignJustify>
  )
}

export default HamburgerIcon
