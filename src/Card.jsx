import { useState } from 'react';
import styles from './Card.module.css';
import { FaGithub, FaLinkedin, FaGlobe, FaInstagram, FaEnvelope } from 'react-icons/fa';

function Card({ img, header, languages = [], description = [], links = [] }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [tiltStyle, setTiltStyle] = useState({});

  const handleClick = (e) => {
    if (e.target.tagName.toLowerCase() !== 'a' && !e.target.closest('a')) {
      setIsFlipped(!isFlipped);
    }
  };

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const tiltX = ((y / rect.height) - 0.5) * 50;
    const tiltY = ((x / rect.width) - 0.5) * -50;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`,
      transition: 'transform 0.1s ease-out',
    });
  };

  const resetTilt = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0) rotateY(0)',
      transition: 'transform 0.5s ease-out',
    });
  };

  const renderIcon = (icon) => {
    if (icon === 'github') return <FaGithub />;
    if (icon === 'linkedin') return <FaLinkedin />;
    if (icon === 'website') return <FaGlobe />;
    if (icon === 'instagram') return <FaInstagram />;
    if (icon === 'gmail' || icon === 'hotmail') return <FaEnvelope />;
    return null;
  };

  return (
    <div 
      className={styles.cardContainer} 
      onMouseMove={handleMouseMove} 
      onMouseLeave={resetTilt} 
      style={tiltStyle}
    >
      <div 
        className={`${styles.card} ${isFlipped ? styles.cardFlipped : ''}`}
        onClick={handleClick}
      >
        <div className={styles.front}>
          <img src={img} alt="Profile" className={styles.cardImg} />
          <h1 className={styles.cardHeader}>{header}</h1>
          <div className={styles.languagesSection}>
            <h2>My Code Arsenal:</h2>
            <div className={styles.languagesList}>{languages.join(' ')}</div>
          </div>
          <div className={styles.description}>
            {Array.isArray(description)
              ? description.map((line, i) => <p key={i}>"{line}"</p>)
              : <p>"{description}"</p>}
          </div>
          <p className={styles.flipHint}>// click to flip</p>
        </div>
        <div className={styles.back}>
          <h1>Find Me Here</h1>
          <ul className={styles.linksList}>
            {links.map((link, i) => (
              <li key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {renderIcon(link.icon)}
                  <span>{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
// Author: Franciszek Karbowniczek (aka Xmind 404)