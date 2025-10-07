import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<>
			<Navbar />

			<header id="header">
				<div className="container">
					<h1>Nick Henderson</h1>
					<p id="subtitle">
						I'm a Junior Software Engineer based in Madison, Alabama. I'm currently working a part-time
						internship at NetSkateInc while pursuing my Bachelor's degree.
					</p>
					<p>
						<a className="header-links" href="/resume.docx" target="_blank" rel="noopener noreferrer">
							Resume
						</a>
						<a className="header-links" href="mailto:nickbhenderson95@gmail.com">
							Email
						</a>
					</p>
				</div>
			</header>

			<main id="projects">
				<div className="container">
					<h2>My Projects</h2>
				</div>

				{/* --- Household --- */}
				<div className="container projects-card">
					<aside className="column project-img">
						<a href="https://household-ejsj.onrender.com/" target="_blank" rel="noopener noreferrer">
							<img src="/images/household.png" alt="Household screenshot" />
						</a>
					</aside>
					<article className="column">
						<h3>Household</h3>
						<p>
							A budgeting tool geared towards households (think roommates, spouses) for keeping track of
							budgeting and chores. Built with Bootstrap on the frontend, Node.js and Express.js on the
							backend, and MongoDB as the database.
						</p>
						<p className="github-link">
							<a
								href="https://github.com/LilGreenGuy/Household"
								target="_blank"
								rel="noopener noreferrer">
								View Repository
							</a>
						</p>
						<h4>Technologies Used:</h4>
						<ul className="skills-list">
							<li>JavaScript (ES6+)</li>
							<li>HTML5</li>
							<li>CSS3</li>
							<li>Node.js</li>
							<li>Express.js</li>
							<li>MongoDB</li>
							<li>Git & GitHub</li>
							<li>Bootstrap</li>
						</ul>
					</article>
				</div>

				{/* --- Alabama --- */}
				<div className="container projects-card">
					<aside className="column project-img">
						<a href="https://lilgreenguy.github.io/Alabama/" target="_blank" rel="noopener noreferrer">
							<img src="/images/alabama.png" alt="Alabama screenshot" />
						</a>
					</aside>
					<article className="column">
						<h3>Alabama</h3>
						<p>
							A prompt from one of my university classes. A basic site themed around the state of Alabama,
							featuring a custom-made hamburger menu that animates into the state flag.
						</p>
						<p className="github-link">
							<a href="https://github.com/LilGreenGuy/Alabama" target="_blank" rel="noopener noreferrer">
								View Repository
							</a>
						</p>
						<h4>Technologies Used:</h4>
						<ul className="skills-list">
							<li>JavaScript (ES6+)</li>
							<li>HTML5</li>
							<li>CSS3</li>
						</ul>
					</article>
				</div>

				{/* --- World Map --- */}
				<div className="container projects-card">
					<aside className="column project-img">
						<img src="/images/world_map.png" alt="World map screenshot" />
					</aside>
					<article className="column">
						<h3>World Map</h3>
						<p>
							Displays an interactive SVG of the world that fetches data from the World Bank API to show
							details about selected countries.
						</p>
						<p className="github-link">
							<a
								href="https://github.com/LilGreenGuy/World-Map"
								target="_blank"
								rel="noopener noreferrer">
								View Repository
							</a>
						</p>
						<h4>Technologies Used:</h4>
						<ul className="skills-list">
							<li>Angular</li>
							<li>TypeScript</li>
							<li>JavaScript (ES6+)</li>
							<li>HTML5</li>
							<li>CSS3</li>
						</ul>
					</article>
				</div>

				{/* --- Etch-a-Sketch --- */}
				<div className="container projects-card">
					<aside className="column project-img">
						<a
							href="https://lilgreenguy.github.io/etch-a-sketch/"
							target="_blank"
							rel="noopener noreferrer">
							<img src="/images/etch_a_sketch.png" alt="Etch-a-Sketch screenshot" />
						</a>
					</aside>
					<article className="column">
						<h3>Etch-a-Sketch</h3>
						<p>
							Built as part of The Odin Project, this project features a dynamic grid that users can draw
							on, change colors, and switch between various modes.
						</p>
						<p className="github-link">
							<a
								href="https://github.com/LilGreenGuy/etch-a-sketch"
								target="_blank"
								rel="noopener noreferrer">
								View Repository
							</a>
						</p>
						<h4>Technologies Used:</h4>
						<ul className="skills-list">
							<li>JavaScript (ES6+)</li>
							<li>HTML5</li>
							<li>CSS3</li>
						</ul>
					</article>
				</div>
			</main>

			{/* --- About Section --- */}
			<section id="about">
				<div className="container">
					<div id="about-text">
						<h2>About Me</h2>
						<p>
							I'm a Junior Software Engineer based in Madison, Alabama. I'm currently working a part-time
							internship at NetSkateInc while pursuing my Bachelor's degree. I love learning, creating,
							and tackling new challenges. In my free time, I enjoy hiking, learning, and playing video
							games.
						</p>
					</div>

					<div>
						<h3 id="skills">Skills</h3>
						<ul className="skills-list">
							<li>JavaScript (ES6+)</li>
							<li>Python</li>
							<li>C</li>
							<li>HTML5</li>
							<li>CSS3</li>
							<li>Node.js</li>
							<li>Express.js</li>
							<li>MongoDB</li>
							<li>Git & GitHub</li>
							<li>RESTful APIs</li>
							<li>Bootstrap</li>
							<li>Responsive Web Design</li>
						</ul>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}
