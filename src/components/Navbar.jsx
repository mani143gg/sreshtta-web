import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return(
        <nav className={scrolled ? "navbar scrolled" : "navbar"}>
            <h1 className="logo">Sreshtta</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    )
}


export default Navbar;
