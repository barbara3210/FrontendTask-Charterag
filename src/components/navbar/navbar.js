"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import YButton from "../button/yellow_button";
import "./navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const hamburgerRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenuOnClickOutside = (e) => {
        if (
            menuRef.current &&
            !menuRef.current.contains(e.target) &&
            !hamburgerRef.current.contains(e.target)
        ) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", closeMenuOnClickOutside);

        return () => {
            document.removeEventListener("click", closeMenuOnClickOutside);
        };
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <a href="/">
                        <Image
                            src="/logo/Charterag.png"
                            alt="Charterag Logo"
                            width={126}
                            height={29.176}
                            priority
                        />
                    </a>
                </div>

                <div
                    ref={menuRef}
                    className={`navOptions ${isOpen ? "active" : ""}`}
                >
                    <a href="#routes" className="destinations">Destinations</a>
                    <a href="#how" className="about">How it works</a>
                    <a href="#experience" className="experience">About</a>
                    <a href="#bestlife" className="blog">Blog</a>
                    <a href="#FAQ" className="FAQ">FAQ</a>

                    <a href="#login" className="loginopt">Log in</a>
                </div>

                <div className="actions">
                    <a href="#login" className="login">Log in</a>
                    <a href="/destination-route/party-route/party/party"><YButton text="BOOK NOW" /></a>

                </div>

                <div ref={hamburgerRef} className="hamburger" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
