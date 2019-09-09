import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SectionWrapper from "../components/SectionWrapper"
import SEO from "../components/seo"
import Title from "../components/Title"
import Work from "../components/WorkPage/Work"

const WorkPage = ({ data }) => (
  <Layout bg="bg-white">
    <SEO title="My work" />
    <SectionWrapper>
      <Title title="My work" />
      <div className={`container mx-auto`}>
        <Work items={data.work} />
      </div>
    </SectionWrapper>
  </Layout>
)

export const query = graphql`
  query {
    work: allContentfulWork {
      edges {
        node {
          id
          title
          desc
          links {
            github
            website
          }
          technologies {
            content
          }
          image {
            fluid(maxWidth: 600) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
export default WorkPage
