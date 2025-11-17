// src/components/FacultyCard.jsx

import React from "react";

const FacultyCard = ({ item }) => {
  return (
    <div className="faculty-card">
      <h3>{item.name}</h3>
      {item.role && <p className="role">{item.role}</p>}

      <p>
        <strong>Department:</strong> {item.department}
      </p>
      <p>
        <strong>Building:</strong> {item.building}
      </p>
      <p>
        <strong>Floor:</strong> {item.floor}
      </p>
      <p>
        <strong>Room:</strong> {item.room}
      </p>
      {item.cabin && (
        <p>
          <strong>Cabin:</strong> {item.cabin}
        </p>
      )}

      {item.email && (
        <p>
          <strong>Email:</strong> {item.email}
        </p>
      )}
      {item.phone && (
        <p>
          <strong>Phone:</strong> {item.phone}
        </p>
      )}
      {item.officeHours && (
        <p>
          <strong>Office Hours:</strong> {item.officeHours}
        </p>
      )}
    </div>
  );
};

export default FacultyCard;
