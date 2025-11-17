// src/App.jsx

import React, { useMemo, useState } from "react";
import { facultyData } from "./data/facultyData";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import FacultyCard from "./components/FacultyCard";
import "./index.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedBuilding, setSelectedBuilding] = useState("");

  const departmentOptions = useMemo(() => {
    const set = new Set();
    facultyData.forEach((f) => {
      if (f.department) set.add(f.department);
    });
    return Array.from(set).sort();
  }, []);

  const buildingOptions = useMemo(() => {
    const set = new Set();
    facultyData.forEach((f) => {
      if (f.building) set.add(f.building);
    });
    return Array.from(set).sort();
  }, []);

  const filteredData = useMemo(() => {
    return facultyData.filter((item) => {
      const term = searchTerm.toLowerCase().trim();

      // filter by text search
      const matchesSearch =
        term === "" ||
        item.name.toLowerCase().includes(term) ||
        (item.room && item.room.toLowerCase().includes(term)) ||
        (item.cabin && item.cabin.toLowerCase().includes(term)) ||
        (item.building && item.building.toLowerCase().includes(term)) ||
        (item.department && item.department.toLowerCase().includes(term));

      // filter by department
      const matchesDept =
        selectedDepartment === "" ||
        item.department === selectedDepartment;

      // filter by building
      const matchesBuilding =
        selectedBuilding === "" || item.building === selectedBuilding;

      return matchesSearch && matchesDept && matchesBuilding;
    });
  }, [searchTerm, selectedDepartment, selectedBuilding]);

  return (
    <div className="app">
      <header>
        <h1>Sharda Faculty / Facility Finder</h1>
        <p className="subtitle">
          Quickly find any faculty cabin, room number or lab in the campus.
        </p>
      </header>

      <section className="controls">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Filters
          departmentOptions={departmentOptions}
          buildingOptions={buildingOptions}
          selectedDepartment={selectedDepartment}
          setSelectedDepartment={setSelectedDepartment}
          selectedBuilding={selectedBuilding}
          setSelectedBuilding={setSelectedBuilding}
        />
      </section>

      <section className="results">
        {filteredData.length === 0 ? (
          <p className="no-results">No results found. Try another search.</p>
        ) : (
          <div className="grid">
            {filteredData.map((item) => (
              <FacultyCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </section>

      <footer>
        <p>Made for Sharda students to easily find faculty & facilities.</p>
      </footer>
    </div>
  );
};

export default App;
