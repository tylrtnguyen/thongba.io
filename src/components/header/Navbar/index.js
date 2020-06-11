import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import {
  StyledContainer,
  StyledNav,
  StyledLogo,
  NavbarToggler,
  Overlay
} from "./styles";
import LogoLight from "@images/logoLight";
import { throttle } from "@utils";
import { navHeight } from "@config";
import NavLinks from "../NavbarLinks";
import Menu from "../Menu";

const DELTA = 5

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollDirection, setScrollDirection] = useState("none")
  const [lastScrollTop, setLastScrollTop] = useState(0)

  useEffect(() => {
    // Use throttling to limit the number of times that function can be called.
    // and thus improve the page performance
    window.addEventListener("scroll", () => throttle(handleScroll()));
    window.addEventListener("resize", () => throttle(handleResize()));
    window.addEventListener("keydown", e => throttle(handleKeydown(e)));

    // Clean up
    return () => {
      window.removeEventListener("scroll", () => handleScroll());
      window.removeEventListener("resize", () => handleResize());
      window.removeEventListener("keydown", e => handleKeydown(e));
    }
  }, [])

  // Toggle menu
  const toggleMenu = () => setMenuOpen(menuOpen => !menuOpen)

  // Handle user scroll
  const handleScroll = () => {
    const fromTop = window.scrollY

    // Make sure they scroll greater than DELTA
    if (Math.abs(lastScrollTop - fromTop) <= DELTA || menuOpen) {
      return
    }

    if (fromTop < DELTA) {
      setScrollDirection("none")
    } else if (fromTop > lastScrollTop && fromTop > navHeight) {
      if (scrollDirection !== "down") {
        setScrollDirection("down")
      }
    } else if (fromTop + window.innerHeight < document.body.scrollHeight) {
      if (scrollDirection !== "up") {
        setScrollDirection("up")
      }
    }
    setLastScrollTop(fromTop)
  }

  const handleResize = () => {
    if (window.innerWidth > 768 && menuOpen) {
      toggleMenu()
    }
  }

  const handleKeydown = e => {
    if (!menuOpen) {
      return
    }

    if (e.which === 27 || e.key === "Escape") {
      toggleMenu()
    }
  }

  return (
    <StyledContainer scrollDirection={scrollDirection}>
      <StyledNav>
        <StyledLogo>
          <Link to="/">
            <LogoLight />
          </Link>
        </StyledLogo>
        <NavLinks />
        <NavbarToggler
        onClick={toggleMenu}
        id="narbarToggler"
        aria-label="Navbar Toggle"
        className={menuOpen ? "open" : ""}
      >
        <span className="burger-menu"></span>
      </NavbarToggler>
      </StyledNav>
      <Menu menuOpen={menuOpen} toggleMenu={toggleMenu} />    
    </StyledContainer>
  )
}

export default NavBar
