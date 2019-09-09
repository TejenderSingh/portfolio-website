import { Link } from "gatsby"
import React from "react"

const Nav = ({ ulClasses, navClasses, linkClasses, closeNav }) => {
  const navbar = [
    { id: 1, name: "About", link: "/about" },
    { id: 2, name: "Skills", link: "/skills" },
    { id: 3, name: "Work", link: "/work" },
  ]

  return (
    <nav className={navClasses}>
      <ul className={ulClasses}>
        {navbar.map(item => {
          return (
            <Link
              key={item.id}
              to={item.link}
              className={linkClasses}
              onClick={closeNav}
              style={{ transition: ".1s ease-in-out" }}
              activeStyle={{ color: "#5a67d8" }}
            >
              {item.name}
            </Link>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav
