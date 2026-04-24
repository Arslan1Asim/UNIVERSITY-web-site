function ProgramCard({ program }) {
  return (
    <div className="program-card">
      <span className={`level-badge ${program.level === 'Undergraduate' ? 'badge-ug' : 'badge-pg'}`}>
        {program.level}
      </span>
      <h3>{program.name}</h3>
      <p>{program.description}</p>
      <span className="program-link">View Details →</span>
    </div>
  );
}

export default ProgramCard;
