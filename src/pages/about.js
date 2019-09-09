import React from "react"
import AboutSection from "../components/AboutPage/AboutSection"
import Layout from "../components/layout"
import SectionWrapper from "../components/SectionWrapper"
import SEO from "../components/seo"
const AboutPage = () => (
  <Layout bg="bg-white">
    <SEO title="About me" />
    <SectionWrapper>
      <AboutSection />
    </SectionWrapper>
  </Layout>
)

export default AboutPage
