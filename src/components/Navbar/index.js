import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu } from './NavbarElements'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const handleScroll = () => {
        setScrollNav(window.scrollY >= 80);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <IconContext.Provider value={{color: "#fff"}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>
                        Smooth
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks
                             to="about"
                             smooth={true}
                             duration={500}
                             spy={true}
                             exact='true'
                             offset={-80}
                            >
                                About
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                             to="discover"
                             smooth={true}
                             duration={500}
                             spy={true}
                             exact='true'
                             offset={-80}
                            >
                                Discover
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                             to="services"
                             smooth={true}
                             duration={500}
                             spy={true}
                             exact='true'
                             offset={-80}
                            >
                                Services
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                             to="signup"
                             smooth={true}
                             duration={500}
                             spy={true}
                             exact='true'
                             offset={-80}
                            >
                                Sign Up
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">
                            Sign In
                        </NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav> 
        </IconContext.Provider>
    )
}

export default Navbar
