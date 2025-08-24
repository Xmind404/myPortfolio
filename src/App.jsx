import { useState } from 'react';
import { Link } from 'react-scroll';
import './App.css';
import Card from './card.jsx';

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const [theme, setTheme] = useState('dark');

  const d = new Date();
  let year = d.getFullYear();

  const menuItems = [
    { to: "home", text: "// home" },
    { to: "whoami", text: "// whoami" },
    { to: "strengths", text: "// strengths" },
  ];

  const dynamicTexts = [
    "Junior Developer",
    "Software Developer",
    "Web Developer",
    "Software Engineer"
  ];

  const cardData = {
    img: "https://avatars.githubusercontent.com/u/71905653",
    header: "Franciszek Karbowniczek",
    languages: ['C++', 'C', 'MySQL', 'Java', 'React', 'JavaScript', 'HTML', 'CSS', 'Python', 'PHP'],
    description: ['Passion for clean code', 'drive to make an impact'],
    links: [
      { name: 'Instagram', url: 'https://www.instagram.com/karbowniczekfranciszek/', icon: 'instagram' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/franciszek-karbowniczek-60b507367/', icon: 'linkedin' },
      { name: 'GitHub', url: 'https://github.com/Xmind404', icon: 'github' },
      { name: 'Gmail', url: 'mailto:mechfranio@gmail.com', icon: 'gmail' },
      { name: 'Hotmail', url: 'mailto:f.karbowniczek@outlook.com', icon: 'gmail' }
    ]
  };

  const strongPoints = [
    "Unconventional ways out of tough situations",
    "Collaborating with sharp-minded people",
    "Building code that sparks curiosity, not boredom",
    "Breaking problems apart with logical precision",
    "My hyperactive mind. Chaotic for some, fuel for others",
    "Capturing details. Whether in photos, sketches or design concepts"
  ];

  const languages = [
    { name: "Polish", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "German", level: "Learning" }
  ];

  const codingLanguages = ["C++", "C", "MySQL", "Java", "React", "JavaScript", "HTML", "CSS", "Python", "PHP"];

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div className="webSite">
      <div className="theme-toggle-container">
        <div className="btn-change-theme" onClick={toggleTheme}>
          <p>🎨</p>
        </div>
      </div>

      <div className="menu-toggle-container">
        <button
          id="menu-toggle"
          className={menuActive ? "active" : ""}
          aria-label="Toggle menu"
          onClick={() => setMenuActive(!menuActive)}
        >
          ☰
        </button>
      </div>

      <nav className={`navigation ${menuActive ? 'active' : ''}`}>
        <div className='nav-left'> 
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={window.innerWidth >= 900 ? -80 : -50}
            onClick={() => setMenuActive(false)}
          >
            <span className="menu-text"><i>// Franciszek Karbowniczek</i></span>
          </Link>
        </div>
        
        <div className="nav-right">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              smooth={true}
              duration={500}
              offset={window.innerWidth >= 900 ? -200 : -50}
              onClick={() => setMenuActive(false)}
            >
              <span className="menu-text">{item.text}</span>
            </Link>
          ))}
        </div>
      </nav>

      <main className="main-content">
        <section id="home" className='home-section'>
          <div className="home-container">
            <div className="intro-content">
              <div className='intro-left'>
                <h2>//hi, Franciszek here.</h2>
                <div className='title-wrapper'>
                  <div className="static-text">I'm</div>
                  <ul className="dynamic-texts">
                    {dynamicTexts.map((text, index) => (
                      <li key={index}><span>{text}</span></li>
                    ))}
                  </ul>
                </div>
                <p><i>"Programming is my art, code is my canvas"</i></p>
                <p><i>"Elegance in the logic, purpose in the outcome"</i></p>
              </div>

              <div className="intro-right">
                <Card {...cardData} />
              </div>
            </div>
          </div>
        </section>

        <section id="whoami" className="whoami-section">
          <div className="section-container">
            <h2 className="section-title"><span>// whoami</span></h2>
            <p className='whoami-text'>
              Hey, my name is <mark>Franciszek Karbowniczek</mark>, a <mark>17-year-old</mark> from <mark>Czeladź, Poland</mark>.
              I started programming at <mark>8</mark> with <mark>Scratch</mark>, then <mark>Scottie Go</mark> at <mark>12</mark>, and <mark>Python</mark> at <mark>14</mark>.
              At <mark>15</mark>, I was a <mark>national finalist</mark> in <mark>INSTALOGIK</mark>, a contest on <mark>logic and algorithms</mark>.
              I also took part in <mark>"Giganci Programowania"</mark> and <mark>"PixBlocks"</mark> using <mark>Python</mark>.
              Currently, I study at <mark>Zespół Szkół Technicznych i Ogólnokształcących Nr 2</mark> in Katowice.
            </p>
                       
            <p className='languages-header'>
              <span>Here are some technologies I work with:</span>
            </p>
            <ul className='technologies-list'>
              {codingLanguages.map((lang, index) => (
                <li key={index}>▷&nbsp;{lang}</li>
              ))}
            </ul>
            
            <p className='languages-header'>
              <span>Languages I speak:</span>
            </p>
            <div className="spoken-languages">
              {languages.map((lang, index) => (
                <p key={index} className='language-item'>
                  ▷&nbsp;&nbsp;&nbsp;&nbsp;
                  <b>{lang.name}</b> - {lang.level}
                  {index < languages.length - 1 ? ', ' : ''}<br/>
                </p>
              ))}
            </div>
          </div>
        </section>

        <section id="strengths" className="strengths-section">
          <div className="section-container">
            <h2 className="section-title"><span>// I find myself in</span></h2>
            <div className='strengths-grid'>
              {strongPoints.map((point, index) => (
                <div key={index} className="strength-card">
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-content">
          <p>{year}</p>
          <p>Built and designed by Franciszek Karbwoniczek.</p>
          <p>All rights reserved. ©</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
// Author: Franciszek Karbowniczek (aka Xmind 404)