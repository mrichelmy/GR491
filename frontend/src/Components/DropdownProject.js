import { Select, MenuItem, InputLabel } from "@mui/material";
import { useEffect, useState } from "react";
import Api from '../api/project.js'

export default function DropdownCategory(props) {
    const api = new Api();
    const [projects, setProjects] = useState([]);    
    useEffect(() => {
        api.getAllProjects().then(response => setProjects(response.data))
    }, []);

    return(
        <div class="dropdown_box">
            {console.log(props.project.name)}
            <InputLabel id="category_label">Project</InputLabel>
            <Select labelId="category_label" value={props.project.name} onChange={props.handleProject}>
            {
                projects.map(project => <MenuItem value={project}>{project.name}</MenuItem> )       
            }
            </Select>
        </div>
    )
}