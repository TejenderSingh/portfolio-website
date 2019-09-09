import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"

const LogoImage = () => {
  const data = useStaticQuery(graphql`
    query {
      LogoImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 68, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img fixed={data.LogoImage.childImageSharp.fixed} />
}

export default LogoImage
