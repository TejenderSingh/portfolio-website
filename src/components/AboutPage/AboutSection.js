import React from "react"
import Title from "../Title"
import WrapperHomeAbout from "../WrapperHomeAbout"
import AboutImage from "./AboutImg"
const About = () => {
  return (
    <WrapperHomeAbout>
      <div className={`w-full lg:flex lg:items-center py-8 lg:mr-8`}>
        <div>
          <Title title="About me" />
          <p
            className={`text-gray-800 text-base md:text-lg leading-relaxed -mt-2`}
          >
            I love building Responsive, Interactive and User Friendly websites
            using HTML, CSS and JavaScript. I also have experience working with
            some of the latest technologies including React.js, Vue.js,
            Gatsby.js and Nuxt.js. I am passionate about Web Development where I
            can make a difference and feel proud of being able to create
            something that is distinctive and positively impact prople's lives.
          </p>
          <br />
          <p className={`text-gray-800 text-base md:text-lg leading-relaxed`}>
            I also like meeting new people and talking about technology so I
            have joined a couple of meet up groups in Christchurch. These groups
            provide me an obvious place to meet other programmers and IT
            professionals, learn more about my language of choice and get advice
            to accomplish my goals. Apart from programming, I enjoy cycling and
            spending time with family/friends.
          </p>
        </div>
      </div>
      <div
        className={`flex lg:flex-col items-center justify-center w-full max-w-lg lg:max-w-md xl:max-w-lg mx-auto`}
      >
        <AboutImage classes="h-64 w-64 rounded-full" />
      </div>
    </WrapperHomeAbout>
  )
}

export default About
