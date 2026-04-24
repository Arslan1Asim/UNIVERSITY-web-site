import { Link } from 'react-router-dom';
import { programsData } from '../data/programsData';
import ProgramCard from '../components/ProgramCard';

function Programs() {
  const undergraduate = programsData.filter((program) => program.level === 'Undergraduate');
  const postgraduate = programsData.filter((program) => program.level === 'Postgraduate');

  return (
    <>
      <section className="page-header">
        <div className="page-header-inner">
          <h1>Programs Offered</h1>
          <p>Explore our undergraduate and postgraduate programs designed for modern technology careers.</p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <p className="section-label">Undergraduate</p>
          <h2 className="section-title">Bachelor's Programs</h2>
          <div className="programs-grid">
            {undergraduate.map((program) => (
              <Link key={program.id} to={`/program/${program.id}`} className="program-card-link">
                <ProgramCard program={program} />
              </Link>
            ))}
          </div>

          <div style={{ marginTop: '4rem' }}>
            <p className="section-label">Postgraduate</p>
            <h2 className="section-title">Master's Programs</h2>
            <div className="programs-grid">
              {postgraduate.map((program) => (
                <Link key={program.id} to={`/program/${program.id}`} className="program-card-link">
                  <ProgramCard program={program} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Programs;