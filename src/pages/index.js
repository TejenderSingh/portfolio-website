import React from "react"
import Hero from "../components/HomePage/Hero"
import Layout from "../components/layout"
import SectionWrapper from "../components/SectionWrapper"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout bg="bg-white">
      <SEO title="Home" />
      <SectionWrapper>
        <Hero />
      </SectionWrapper>
    </Layout>
  )
}

export default IndexPage
