import FacultyCard from '../components/FacultyCard';
import { facultyData } from '../data/facultyData';

function Faculty() {
  return (
    <>
      <section className="page-header">
        <div className="page-header-inner">
          <h1>Faculty</h1>
          <p>Meet the faculty guiding our students through real-world technology programs.</p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="faculty-grid">
            {facultyData.map((member) => (
              <FacultyCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Faculty;