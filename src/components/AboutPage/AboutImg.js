import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"

const AboutImage = ({ classes }) => {
  const data = useStaticQuery(graphql`
    query {
      AboutImage: file(relativePath: { eq: "my-img.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      fluid={data.AboutImage.childImageSharp.fluid}
      className={`${classes}`}
    />
  )
}

export default AboutImage
