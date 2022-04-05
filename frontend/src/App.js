import React, { useState } from "react";
import DetailCard from "./Components/DetailCard.js";
import ProjectCard from "./Components/ProjectCard.js";
import ReferencialGrid from "./Components/ReferencialGrid.js";
import DropdownCategory from "./Components/DropdownCategory.js";
import DropdownProject from "./Components/DropdownProject.js";
import SwitchLanguage from "./Components/SwitchLanguage.js";
import "./stylesheet/app.css";

export default function App() {
  const [refId, setRefId] = useState(0);
  const [theme, setTheme] = useState("strategy");
  const [project, setProject] = useState({});
  const [isFrench, setFrench] = useState(true);

  const handleClickDetail = (newRefId) => {
    setRefId(newRefId);
  };

  const handleTheme = (event) => {
    setTheme(event.target.value);
  };

  const handleProject = (event) => {
      setProject(event.target.value);
  };

  const handleLanguageSwitch = (checkValue) => {
    setFrench(checkValue);
  }

  return (
    <body>
      <div class="title_box">
        <h1 class="title">GR491</h1>
        <SwitchLanguage handleSwitch={handleLanguageSwitch}/>
      </div>
      <DropdownProject project={project} handleProject={handleProject}/>
      <div class='separator'>
        <ProjectCard project={project}/>
        <DetailCard refId={refId} theme={theme} isFrench={isFrench}/>
      </div>
      <DropdownCategory theme={theme} handleTheme={handleTheme}/>
      <ReferencialGrid theme={theme} onClickDetail={handleClickDetail} isFrench={isFrench} />
    </body>
  );
}
