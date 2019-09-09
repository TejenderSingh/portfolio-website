import React from "react"
import { FiGithub, FiLinkedin } from "react-icons/fi"

const SocialIcons = () => {
  return (
    <>
      <a
        href="https://github.com/TejenderSingh"
        target="_blank"
        rel="noopener noreferrer"
        className={`mr-4 text-2xl text-gray-700 hover:text-indigo-600`}
      >
        <FiGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/tejender-singh/"
        target="_blank"
        rel="noopener noreferrer"
        className={`text-2xl text-gray-700 hover:text-indigo-600`}
      >
        <FiLinkedin />
      </a>
    </>
  )
}

export default SocialIcons
