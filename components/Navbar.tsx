"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 175);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav id="nav-main" className={scrolled ? "nav-scroll" : "hide-nav"}>
			<div className="container">
				<Link href="#projects">Projects</Link>
				<Link href="#about">About</Link>
				<Link href="#contact">Contact</Link>
			</div>
		</nav>
	);
}
