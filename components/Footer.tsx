"use client";

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer id="contact">
			<div className="container">
				<h2>Contact Me</h2>
				<ul className="contact-list">
					<li>
						<a href="mailto:nickbhenderson95@gmail.com">Email</a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/in/nicholas-henderson-2aa52021b/"
							target="_blank"
							rel="noopener noreferrer">
							LinkedIn
						</a>
					</li>
					<li>
						<a href="https://github.com/LilGreenGuy" target="_blank" rel="noopener noreferrer">
							GitHub
						</a>
					</li>
				</ul>
				<div id="footer">
					<p>Copyright © {year} Nicholas Henderson</p>
				</div>
			</div>
		</footer>
	);
}
