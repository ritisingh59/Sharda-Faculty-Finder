// src/components/Filters.jsx

import React from "react";

const Filters = ({
  departmentOptions,
  buildingOptions,
  selectedDepartment,
  setSelectedDepartment,
  selectedBuilding,
  setSelectedBuilding,
}) => {
  return (
    <div className="filters">
      <select
        value={selectedDepartment}
        onChange={(e) => setSelectedDepartment(e.target.value)}
      >
        <option value="">All Departments</option>
        {departmentOptions.map((dept) => (
          <option key={dept} value={dept}>
            {dept}
          </option>
        ))}
      </select>

      <select
        value={selectedBuilding}
        onChange={(e) => setSelectedBuilding(e.target.value)}
      >
        <option value="">All Buildings</option>
        {buildingOptions.map((b) => (
          <option key={b} value={b}>
            {b}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
