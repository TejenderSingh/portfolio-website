import Img from "gatsby-image"
import React from "react"

const SkillCard = ({ title, img }) => {
  return (
    <div>
      <div
        className={`rounded overflow-hidden h-full bg-white`}
        style={{
          boxShadow:
            "0 6px 15px -2px rgba(0, 0, 0, 0.1), 0 4px 10px -3px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className={`h-full overflow-hidden`}>
          <Img fluid={img} alt={title} />
        </div>
        <div className={`px-6 py-4 bg-gray-100`}>
          <div
            className={`font-bold text-gray-800 text-xl capitalize leading-snug`}
          >
            {title}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillCard
