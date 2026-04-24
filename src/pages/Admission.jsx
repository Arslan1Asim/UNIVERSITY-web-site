import { admissionData } from '../data/admissionData';

function Admission() {
  return (
    <>
      <section className="page-header">
        <div className="page-header-inner">
          <h1>Admission Information</h1>
          <p>Everything you need to know to apply to UMT.</p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="admission-grid">
            {admissionData.criteria.map((item) => (
              <div className="a-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.details}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '4rem' }}>
            <p className="section-label">Admission Process</p>
            <h2 className="section-title">How to Apply</h2>
            <div className="process-steps">
              {admissionData.process.map((step, index) => (
                <div className="process-step" key={step}>
                  <div className="step-num">{index + 1}</div>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '4rem' }}>
            <p className="section-label">Important Dates</p>
            <h2 className="section-title">Admission Timeline</h2>
            <table className="dates-table">
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {admissionData.dates.map((item) => (
                  <tr key={item.event}>
                    <td>{item.event}</td>
                    <td>{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

export default Admission;