import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SectionWrapper from "../components/SectionWrapper"
import SEO from "../components/seo"
import Skills from "../components/SkillsPage/Skills"
import Title from "../components/Title"

const SkillsPage = ({ data }) => (
  <Layout bg="bg-white">
    <SEO title="Languages I speak" />
    <SectionWrapper>
      <Title title="Skills" />
      <div className={`container mx-auto`}>
        <Skills items={data.skills} />
      </div>
    </SectionWrapper>
  </Layout>
)

export const query = graphql`
  query {
    skills: allContentfulSkills(sort: { fields: [title], order: ASC }) {
      edges {
        node {
          id
          title
          image {
            fluid(maxWidth: 300) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default SkillsPage
