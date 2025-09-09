import React from "react";

function FacultyCard({ name, dept, block, room }) {
  return (
    <div className="faculty-card">
      <h3>{name}</h3>
      <p>Department: {dept}</p>
      <p>Block: {block}</p>
      <p>Room: {room}</p>
    </div>
  );
}

export default FacultyCard;
