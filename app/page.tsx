"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const year = new Date().getFullYear();

  return (
    <>
      <header className="navbar">
        <div className="nav-container">
          <a href="#" className="logo">
            Bashmati<span>Tech</span>
          </a>

          <button
            className="menu-btn"
            aria-label="Open menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            ☰
          </button>

          <nav className={menuOpen ? "active" : ""}>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
            <a href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>
            <a href="#community" onClick={() => setMenuOpen(false)}>
              Community
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">TECH • BUILD • INNOVATE</p>

            <h1>
              Building technology
              <span>for the future.</span>
            </h1>

            <p className="hero-text">
              Bashmati Tech is a technology brand focused on digital
              projects, software development, learning, innovation and
              building useful solutions for people and businesses.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn primary">
                Explore Projects
              </a>
              <a href="#contact" className="btn secondary">
                Work With Us
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-heading">
            <p className="eyebrow">ABOUT</p>
            <h2>Welcome to Bashmati Tech</h2>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <h3>Who We Are</h3>
              <p>
                Bashmati Tech is a technology-focused brand exploring
                software, digital tools, web development, online communities
                and innovative projects.
              </p>
              <p>
                Our goal is simple: learn, build, share and create technology
                that provides real value.
              </p>
            </div>

            <div className="about-card highlight">
              <h3>Our Direction</h3>
              <ul>
                <li>Web development</li>
                <li>Digital products</li>
                <li>Technology education</li>
                <li>Community building</li>
                <li>Nigerian technology projects</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <p className="eyebrow">PROJECTS</p>
            <h2>What We&apos;re Building</h2>
            <p>Projects and experiments developed under the Bashmati Tech brand.</p>
          </div>

          <div className="cards">
            <article className="project-card">
              <div className="project-number">01</div>
              <h3>Nigeria Tour</h3>
              <p>
                A tourism technology project designed to make discovering
                places, businesses, culture and experiences across Nigeria
                easier.
              </p>
              <span className="status">IN DEVELOPMENT</span>
            </article>

            <article className="project-card">
              <div className="project-number">02</div>
              <h3>Zuru Tour</h3>
              <p>
                A tourism-focused project exploring the history, culture,
                food, places and experiences of Zuru and its surrounding
                communities.
              </p>
              <span className="status">MVP</span>
            </article>

            <article className="project-card">
              <div className="project-number">03</div>
              <h3>Digital Experiments</h3>
              <p>
                Web development experiments, learning projects and technology
                concepts created while developing new skills.
              </p>
              <span className="status">BUILDING</span>
            </article>
          </div>
        </section>

        <section id="services" className="section">
          <div className="section-heading">
            <p className="eyebrow">SERVICES</p>
            <h2>What We Do</h2>
          </div>

          <div className="cards">
            <article className="service-card">
              <div className="icon">01</div>
              <h3>Web Development</h3>
              <p>
                Responsive websites and digital interfaces for individuals,
                businesses and projects.
              </p>
            </article>

            <article className="service-card">
              <div className="icon">02</div>
              <h3>Digital Projects</h3>
              <p>
                Planning and development of technology products and digital
                solutions.
              </p>
            </article>

            <article className="service-card">
              <div className="icon">03</div>
              <h3>Technology Content</h3>
              <p>
                Practical technology content, tutorials, experiments and
                build-in-public projects.
              </p>
            </article>
          </div>
        </section>

        <section id="community" className="section community">
          <div className="section-heading">
            <p className="eyebrow">COMMUNITY</p>
            <h2>Connect With Bashmati Tech</h2>
            <p>
              Follow our journey across social platforms and become part of
              the community.
            </p>
          </div>

          <div className="social-grid">
            <a href="https://youtube.com/@bashmatitech" target="_blank" rel="noopener noreferrer">
              YouTube
            </a>
            <a href="https://instagram.com/bashmatitech" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="https://tiktok.com/@bashmatitech" target="_blank" rel="noopener noreferrer">
              TikTok
            </a>
            <a href="https://threads.net/@bashmatitech" target="_blank" rel="noopener noreferrer">
              Threads
            </a>
            <a href="https://x.com/bashmatitech" target="_blank" rel="noopener noreferrer">
              X
            </a>
            <a href="https://facebook.com/bashmatitech" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="https://reddit.com/user/bashmatitech" target="_blank" rel="noopener noreferrer">
              Reddit
            </a>
            <a href="https://github.com/bashmatitech" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://t.me/bashmatitech" target="_blank" rel="noopener noreferrer">
              Telegram
            </a>
            <a href="https://wa.me/2347055809581" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="contact-box">
            <p className="eyebrow">COLLABORATE</p>
            <h2>Let&apos;s Build Something Useful.</h2>
            <p>
              Interested in collaboration, technology projects or working
              together? Get in touch with Bashmati Tech.
            </p>
            <a href="mailto:Bashmatitech@gmail.com" className="btn primary">
              Email Bashmati Tech
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-container">
          <div>
            <strong>Bashmati Tech</strong>
            <p>Technology • Projects • Innovation</p>
          </div>
          <p>© {year} Bashmati Tech. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
