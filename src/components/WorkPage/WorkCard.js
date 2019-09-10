import Img from "gatsby-image"
import React from "react"
import { FiExternalLink, FiGithub } from "react-icons/fi"
// import main from "../images/code.png"

const WorkCard = ({ title, desc, links, img, techs }) => {
  const { github, website } = links[0]
  return (
    <div
      className={`rounded-lg overflow-hidden shadow-xl max-w-lg h-full bg-white`}
      style={{
        boxShadow:
          "0 6px 15px -2px rgba(0, 0, 0, 0.1), 0 4px 10px -3px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        className={`overflow-hidden relative`}
        style={{ paddingBottom: "60%" }}
      >
        <div className={`w-full h-full absolute object-cover`}>
          <Img fluid={img} alt={title} />
        </div>
      </div>
      <div className={`relative px-6 py-4 bg-gray-100 h-full`}>
        <div
          className={`font-bold text-gray-800 text-xl leading-normal capitalize mb-1 truncate`}
        >
          {title}
        </div>
        <div className={`text-gray-700 mb-4 leading-snug`}>{desc}</div>
        <div
          className={`flex mb-2 absolute`}
          style={{ top: "-2rem", right: "1rem" }}
        >
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-gray-800 hover:text-indigo-600 text-2xl`}
          >
            <FiGithub />
          </a>
          {website.trim().length > 0 && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-800 hover:text-indigo-600 text-2xl ml-4`}
            >
              <FiExternalLink />
            </a>
          )}
        </div>
        <div>
          {techs.map(tech => {
            return (
              <span
                key={tech.content}
                className={`inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold capitalize text-gray-700 mr-2 mb-1`}
              >
                {tech.content}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default WorkCard
