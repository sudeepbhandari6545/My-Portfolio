import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

//icon
import { MdClose, MdMenu } from 'react-icons/md'

const NavMenu = () => {
  // remove the navitem when click the close button
  const [showNav, setShowNav] = useState(false)
  return (
    <>
      <NavMenuStyle>
        <div
          className="mobile_menu_icon"
          onClick={() => setShowNav(!showNav)}
          role="button"
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}
        >
          <MdMenu />
        </div>
        <ul className={!showNav ? 'navItems hide-item' : 'navItems'}>
          <div
            className="close_icon"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            <MdClose />
          </div>
          <li>
            <NavLink
              to="/"
              exact
              onClick={() => setShowNav(!showNav)}
              role="button"
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => setShowNav(!showNav)}
              role="button"
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/project"
              onClick={() => setShowNav(!showNav)}
              role="button"
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
            >
              Project
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={() => setShowNav(!showNav)}
              role="button"
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </NavMenuStyle>
    </>
  )
}

export default NavMenu

const NavMenuStyle = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background: #262626;

  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
  }
  li {
    display: inline-block;
    border-radius: 6px;
    transition: 0.5s ease;
    &:hover {
      background-color: gray;
    }
    a {
      display: inline-block;
      font-family: Arial, sans-serif;
      padding: 1rem 1.5rem;
      font-size: 1.3rem;
      font-weight: bold;
      text-transform: capitalize;
      outline: none;
    }
    .active {
      color: #ecf0f1;
    }
  }
  .mobile_menu_icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
    * {
      pointer-events: none;
    }
  }
  .close_icon {
    display: none;
    color: white;
  }

  @media (max-width: 768px) {
    padding: 0;
    .hide-item {
      transform: translateY(calc(-100% - var(--top)));
    }
    .mobile_menu_icon {
      display: block;
    }
    .navItems {
      --top: 1rem;
      transition: 0ms.3s ease transform;
      background-color: black;
      padding: 2rem;
      width: 90%;
      max-width: 300px;
      border-radius: 12px;
      position: absolute;
      right: 1rem;
      top: 1rem;
      .close_icon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        margin-bottom: 1rem;
      }
    }
  }
`
