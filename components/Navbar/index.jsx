import React, {useState} from 'react';
import NavbarStyled from "./Navbar.styled";
import {Dribbble, Instagram, Linkedin, Menu, X} from "react-feather";

function Index(props) {
    const [navOpen, setNavOpen] = useState(false)
    function toggleNav() {
        setNavOpen(!navOpen)
    }
    return (
        <NavbarStyled>
            <div className="menu-items">
                <div className="item active">
                    Work
                </div>
                <div className="item">
                    About
                </div>
                <div className="item">
                    Contact
                </div>
            </div>
            <div className="title">
                <h1>Chirag Bhalotia</h1>
            </div>
            <div className="social-icons">
                <div className="icon"><Instagram/></div>
                <div className="icon"><Linkedin/></div>
                <div className="icon"><Dribbble/></div>
            </div>
            <div className="menu">
                <button onClick={toggleNav}><Menu /></button>
            </div>
            <div className={"mobile-nav" + (navOpen?" mobile-nav-active":"")}>
                <div className=" menu menu-close">
                    <button onClick={toggleNav}><X /></button>
                </div>
                <div className="content">
                    <div className="menu-items">
                        <div className="item active">
                            Work
                        </div>
                        <div className="item">
                            About
                        </div>
                        <div className="item">
                            Contact
                        </div>
                    </div>
                    <div className="social-icons">
                        <div className="icon"><Instagram/></div>
                        <div className="icon"><Linkedin/></div>
                        <div className="icon"><Dribbble/></div>
                    </div>

                </div>

            </div>
        </NavbarStyled>
    );
}

export default Index;