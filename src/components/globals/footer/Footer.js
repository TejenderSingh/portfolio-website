import React from "react"
import { MdEmail, MdFavorite } from "react-icons/md"
const Footer2 = () => {
  return (
    <div
      className={`container mx-auto px-6 text-gray-100 py-4 flex justify-between`}
    >
      <div className={`flex text-sm items-center leading-none`}>
        <span className={`text-xl text-gray-100 mr-1`}>
          <MdEmail />
        </span>
        singhtj22@gmail.com
      </div>
      <div className={`flex text-sm items-center leading-none`}>
        made with
        <span className={`text-xl text-red-600 mx-1`}>
          <MdFavorite />
        </span>
        and
        <a
          href="https://www.gatsbyjs.org/"
          rel="noopener noreferrer"
          target="_blank"
          className={`hover:text-purple-700 ml-1`}
        >
          Gatsby
        </a>
      </div>
    </div>
  )
}

export default Footer2
