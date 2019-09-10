import React, { Component } from "react"
import WorkCard from "./WorkCard"

class Work extends Component {
  state = {
    projects: this.props.items.edges,
  }
  render() {
    const { projects } = this.state

    return (
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(330px, 1fr))",
          gridGap: "2rem",
        }}
      >
        {projects.map(({ node }) => {
          return (
            <div key={node.id} className={`flex justify-center`}>
              <WorkCard
                title={node.title}
                desc={node.desc}
                links={node.links}
                img={node.image.fluid}
                techs={node.technologies}
              ></WorkCard>
            </div>
          )
        })}
      </section>
    )
  }
}

export default Work
