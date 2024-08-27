import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const routes = [
    {
      pageName: "Home",
      path: "/",
    },
    {
      pageName: "Programs",
      path: "/programs",
    },
    {
      pageName: "About Us",
      path: "/about",
    },
    {
      pageName: "Testimonials",
      path: "/testmonials",
    },
    {
      pageName: "Campus",
      path: "/campus",
    },
  ];

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setSticky(window.scrollY > 550);
    });

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", () => {
        setSticky(window.scrollY > 550);
      });
    };
  }, []);

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul>
        {routes.map(({ pageName, path }, index) => (
          <li key={index}>
            <Link to={path}>{pageName}</Link>
          </li>
        ))}
        <li>
          <Link to="/contact">
            <button className="btn">Contact Us</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
