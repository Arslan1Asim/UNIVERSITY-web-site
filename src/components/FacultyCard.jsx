function FacultyCard({ member }) {
  return (
    <div className="faculty-card">
      {member.image ? (
        <img src={member.image} alt={member.name} className="faculty-avatar-image" />
      ) : (
        <div className="faculty-avatar" style={{ background: member.color }}>
          {member.initials}
        </div>
      )}
      <h3>{member.name}</h3>
      <div className="desig">{member.designation}</div>
      <div className="expertise">{member.expertise}</div>
    </div>
  );
}

export default FacultyCard;
