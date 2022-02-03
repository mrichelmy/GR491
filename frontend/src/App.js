import React, { useState } from "react";
import DetailCard from "./Components/DetailCard.js";
import ProjectCard from "./Components/ProjectCard.js";
import ReferencialGrid from "./Components/ReferencialGrid.js";
import DropdownCategory from "./Components/DropdownCategory.js";
import DropdownProject from "./Components/DropdownProject.js";
import "./stylesheet/app.css";

export default function App() {
  const [refId, setRefId] = useState(0);
  const [theme, setTheme] = useState("strategie");
  const [project, setProject] = useState({});

  const handleClickDetail = (newRefId) => {
    setRefId(newRefId);
  };

  const handleTheme = (event) => {
    setTheme(event.target.value);
  };

  const handleProject = (event) => {
      console.log(event.target.value)
      setProject(event.target.value);
  }

  return (
    <body>
      <div class="titleBox">
        <h1 class="title">GR491</h1>
      </div>
      <DropdownProject project={project} handleProject={handleProject}/>
      <ProjectCard project={project}/>
      <DropdownCategory theme={theme} handleTheme={handleTheme}/>
      <ReferencialGrid theme={theme} onClickDetail={handleClickDetail} />
      <DetailCard refId={refId} theme={theme} />
    </body>
  );
}
