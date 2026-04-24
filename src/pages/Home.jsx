import { Link } from 'react-router-dom';
import { programsData } from '../data/programsData';
import umtLogo from '../assets/UMT-Logo.jpg';

function Home() {
  const highlights = [
    { icon: '🎓', title: 'World-Class Faculty', subtitle: 'Over 500 PhD-qualified staff across technology and research.' },
    { icon: '🔬', title: 'Research Excellence', subtitle: 'Award-winning centers with strong industry collaboration.' },
    { icon: '💼', title: 'Industry Connections', subtitle: 'Internship and placement support with leading companies.' },
    { icon: '🌍', title: 'Global Exposure', subtitle: 'Exchange programs and collaborations across 30 countries.' },
  ];

  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <img src={umtLogo} alt="UMT logo" className="hero-logo" />
          <span className="hero-badge">Established 1990</span>
          <h1>
            Shaping the next generation of <em>technology leaders</em>
          </h1>
          <p>
            University of Management & Technology combines academic excellence, research innovation, and industry-ready learning.
          </p>
          <div className="hero-ctas">
            <Link className="btn-primary" to="/courses">Explore Programs</Link>
            <Link className="btn-outline" to="/admission">Admission Guide</Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <strong>{programsData.length}+</strong>
              <span>Programs</span>
            </div>
            <div className="hero-stat">
              <strong>500+</strong>
              <span>Faculty</span>
            </div>
            <div className="hero-stat">
              <strong>80+</strong>
              <span>Partners</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <p className="section-label">Campus Highlights</p>
          <h2 className="section-title">Why students choose UMT</h2>
          <p className="section-sub">
            Our students benefit from a powerful blend of academic rigour, practical training, and global opportunity.
          </p>
          <div className="highlights-grid">
            {highlights.map((item) => (
              <div className="highlight-card" key={item.title}>
                <div className="highlight-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;