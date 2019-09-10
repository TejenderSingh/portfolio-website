import React from "react"

const WrapperHomeAbout = ({ children }) => {
  return (
    <div className={`container mx-auto lg:py-16`}>
      <div className={`flex flex-col-reverse lg:flex-row`}>{children}</div>
    </div>
  )
}

export default WrapperHomeAbout
