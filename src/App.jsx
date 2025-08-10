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
    { to: "whoami", text: "// whoami" },
    { to: "strongPoints", text: "// I find myself in" },
    { to: "languages", text: "// Linguistic Skills" },
    { to: "coding", text: "// Code Languages I Use" }
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
    languages: ['C++', 'C', 'MySQL', 'Java', 'React', 'JavaScript', 'HTML', 'CSS', 'Python'],
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

  const codingLanguages = ["C++", "C", "MySQL", "Java", "React", "JavaScript", "HTML", "CSS", "Python"];

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div className="webSite">
      <div className="btnChangeTheme" onClick={toggleTheme}>
        <p>🎨</p>
      </div>

      <button
        id="menu-toggle"
        className={menuActive ? "active" : ""}
        aria-label="Toggle menu"
        onClick={() => setMenuActive(!menuActive)}
      >
        ☰
      </button>

      <nav className={`navigation ${menuActive ? 'active' : ''}`}>
        <div className='left'> 
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
        <div className="right">
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

      <main>
        <div id="home" className='home'>
          <div className="intro">
            <div className='intro-left'>
              <h2>//hi, Franciszek here.</h2>
              <div className='wrapper'>
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

        <div id="whoami" className="whoami page">
          <h2><span>// whoami</span></h2>
          <p>
            Hey, My name is <mark>Franciszek Karbowniczek</mark>, a <mark>17 year old programmer</mark> from Czeladź, Poland.
            My story with computers started basically as soon as I learned how to use a computer.
            At the age of 8, I was building projects in Scratch, turning basic blocks into working games.
            By 12, I explored programming with Scottie Go, and by 14, I was <mark>diving into Python</mark>, where my real journey with programming began.
            At 15, I became a <mark>national finalist in INSTALOGIK</mark>, <mark>one of Poland's competitions focused on logical thinking and algorithmic challenges</mark>.
            I also took part in competitions like <mark>"Giganci Programowania"</mark> and <mark>"PixBlocks"</mark> where I was programming in Python.
            Currently, I'm a student at <mark>"Zespół Szkół Technicznych i Ogólnokształcących Nr 2 in Katowice"</mark>, where I've <mark>expanded my programming skills</mark>:
          </p>
          <ul>
            <li>First year: <mark>HTML, CSS, MySQL, C#</mark></li>
            <li>Second year: <mark>PHP, JavaScript</mark></li>
          </ul>
          <p>
            But I didn't stop there. I also learned C and C++ on my own and started exploring React.js.
            For me, coding is not work, "Programming is my art, code is my canvas".
          </p>
        </div>

        <div id="strongPoints" className="strongPoints page">
          <h2><span>// I find myself in</span></h2>
          <div className='list-box'>
            {strongPoints.map((point, index) => (
              <div key={index} className="findmyself-tile list"><p>{point}</p></div>
            ))}
          </div>
        </div>

        <div id="languages" className="languageLevel page">
          <h2><span>// Linguistic Skills</span></h2>
          <div className='list-box'>
            {languages.map((lang, index) => (
              <div key={index} className="language-tile list">
                <p>{lang.name}</p>
                <span className="language-level">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>

        <div id="coding" className="codingLanguages page">
          <h2><span>// Code Languages I Use</span></h2>
          <div className='list-box'>
            {codingLanguages.map((lang, index) => (
              <div key={index} className="skill-title list"><p>{lang}</p></div>
            ))}
          </div>
        </div>
      </main>

      <div className="footer">
        <p>{year}</p>
        <p>Built and designed by Franciszek Karbwoniczek.</p>
        <p>All rights reserved. ©</p>
      </div>
    </div>
  );
}

export default App;
// Author: Franciszek Karbowniczek (aka Xmind 404)
