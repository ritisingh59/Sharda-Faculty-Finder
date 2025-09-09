import React, { useState } from "react";
import FacultyCard from "../components/FacultyCard";

function FacultyFinder() {
  const [search, setSearch] = useState("");

  const facultyList = [
    { name: "Dr. A Kumar", dept: "CSE", block: "Block 1", room: "101" },
    { name: "Prof. B Sharma", dept: "ECE", block: "Block 2", room: "202" },
    { name: "Dr. C Singh", dept: "Maths", block: "Block 3", room: "303" },
  ];

  const filtered = facultyList.filter(f =>
    f.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Faculty Finder</h2>
      <input
        type="text"
        placeholder="Search faculty by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        {filtered.map((f, index) => (
          <FacultyCard key={index} {...f} />
        ))}
      </div>
    </div>
  );
}

export default FacultyFinder;
