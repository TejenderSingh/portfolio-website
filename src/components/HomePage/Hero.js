import { Link } from "gatsby"
import React from "react"
import WrapperHomeAbout from "../WrapperHomeAbout"
import HomeImage from "./image"

const Hero = () => {
  return (
    <WrapperHomeAbout>
      <div className={`w-full lg:flex lg:items-center py-8 lg:mr-8`}>
        <div>
          <h1
            className={`text-gray-800 text-3xl text-3xl lg:text-4xl xl:text-5xl font-bold sm:text-center capitalize tracking-wide mb-2`}
          >
            Hi, I'm Tejender Singh
          </h1>
          <p
            className={`text-gray-800 text-base md:text-lg leading-relaxed w-full max-w-3xl mx-auto`}
          >
            I am a Web Developer based in Christchurch, New Zealand. I love
            building Responsive, Interactive and User Friendly Websites and Web
            Applications using latest technologies.
          </p>
          <div className={`flex justify-center mt-8`}>
            <Link to="/work">
              <button
                className={`bg-transparent hover:bg-gray-800 text-gray-800 font-semibold hover:text-white py-2 px-4 border border-gray-800 hover:border-transparent rounded focus:outline-none`}
                style={{ transition: ".3s ease" }}
              >
                My Work
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className={`w-full max-w-lg lg:max-w-md xl:max-w-lg mx-auto`}>
        <HomeImage />
      </div>
    </WrapperHomeAbout>
  )
}

export default Hero
