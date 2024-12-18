"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link"; 
import YButton from "../button/yellow_button";
import "./navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const hamburgerRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
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
        <nav className="navbar" role="navigation" aria-label="Main Navigation">
            <div className="navbar-container">
                <div className="logo">
                    <Link href="/">
                        <Image
                            src="/logo/Charterag.png"
                            alt="Charterag Logo"
                            width={126}
                            height={29.176}
                            priority
                        />
                    </Link>
                </div>

                <div
                    ref={menuRef}
                    className={`navOptions ${isOpen ? "active" : ""}`}
                >
                    <Link href="#routes" className="destinations">
                        Destinations
                    </Link>
                    <Link href="#how" className="about">
                        How it works
                    </Link>
                    <Link href="#experience" className="experience">
                        About
                    </Link>
                    <Link href="#bestlife" className="blog">
                        Blog
                    </Link>
                    <Link href="#FAQ" className="FAQ">
                        FAQ
                    </Link>

                    <Link href="#login" className="loginopt">
                        Log in
                    </Link>
                </div>

                <div className="actions">
                    <Link href="#login" className="login">
                        Log in
                    </Link>
                    <Link href="/destination-route/party-route/party/party">
                        <YButton text="BOOK NOW" />
                    </Link>
                </div>

                <div
                    ref={hamburgerRef}
                    className="hamburger"
                    onClick={toggleMenu}
                    role="button"
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
