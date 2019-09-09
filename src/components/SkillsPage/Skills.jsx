import React, { Component } from "react"
import SkillCard from "./SkillCard"

class Skills extends Component {
  state = {
    skills: this.props.items.edges,
  }
  render() {
    const { skills } = this.state
    if (skills.length > 0) {
      return (
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gridGap: "1.5rem",
          }}
        >
          {skills.map(({ node }) => {
            return (
              <div key={node.id}>
                <SkillCard
                  title={node.title}
                  img={node.image.fluid}
                ></SkillCard>
              </div>
            )
          })}
        </section>
      )
    }
  }
}

export default Skills
