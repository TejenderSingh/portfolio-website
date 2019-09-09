import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"

const HomeImage = () => {
  const data = useStaticQuery(graphql`
    query {
      mainImage: file(relativePath: { eq: "developer.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.mainImage.childImageSharp.fluid} />
}

export default HomeImage
