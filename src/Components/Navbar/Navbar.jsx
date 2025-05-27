import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/udaanlogo.png";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-scroll";
import menu_icon from "../../assets/menu-icon.png";

const Navbar = () => {
   const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [MobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(!MobileMenu);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="" className="logo" />
      <ul className={MobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="programs" smooth={true} offset={-260} duration={500}>
            program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-84} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            Destinations
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          
          <Link
            to="contact"
            smooth={true}
            offset={-261}
            duration={500}
            className="btn"
          >
            Contact us
          </Link>
          <li>
            {
              isAuthenticated && <p> {user.name}</p>
            }
          </li>
          <li>
            {
              isAuthenticated ?  <li>
              <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                 Log Out
                 </button>
          </li>
              : (
                 <li>
               <button onClick={() => loginWithRedirect()}>Log In</button>
          </li>
              )
            }
          </li>

         
          
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
