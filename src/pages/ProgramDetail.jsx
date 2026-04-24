import { useParams, Link } from 'react-router-dom';
import { programsData } from '../data/programsData';

function ProgramDetail() {
  const { id } = useParams();
  const program = programsData.find((item) => item.id === id);

  if (!program) {
    return (
      <section className="section">
        <div className="section-inner">
          <h2>Program not found</h2>
          <p>The requested program does not exist. Please return to the Programs page.</p>
          <Link className="btn-outline" to="/programs">Back to Programs</Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="page-header">
        <div className="page-header-inner">
          <h1>{program.name}</h1>
          <p>{program.level} · {program.duration}</p>
        </div>
      </section>
      <section className="section">
        <div className="section-inner">
          <Link className="back-btn" to="/programs">← Back to Programs</Link>
          <div className="detail-grid">
            <div className="detail-card">
              <h2>Program Overview</h2>
              <div className="detail-row">
                <label>Description</label>
                <p>{program.description}</p>
              </div>
              <div className="detail-row">
                <label>Duration</label>
                <p>{program.duration}</p>
              </div>
              <div className="detail-row">
                <label>Eligibility</label>
                <p>{program.eligibility}</p>
              </div>
            </div>
            <div className="detail-card">
              <h2>Key Subjects</h2>
              <ul className="subjects-list">
                {program.subjects.map((subject) => (
                  <li key={subject}>{subject}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProgramDetail;