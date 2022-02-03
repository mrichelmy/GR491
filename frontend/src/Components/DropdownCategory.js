import { Select, MenuItem, InputLabel } from "@mui/material";

export default function DropdownCategory(props) {
    return(
        <div class="dropdown_box">
            <InputLabel id="category_label">Category</InputLabel>
            <Select labelId="category_label" value={props.theme} onChange={props.handleTheme}>
                <MenuItem value={"strategie"}>Stratégie</MenuItem>
                <MenuItem value={"specifications"}>Spécifications</MenuItem>
                <MenuItem value={"uxui"}>UX/UI</MenuItem>
                <MenuItem value={"contenus"}>Contenus</MenuItem>
                <MenuItem value={"frontend"}>Frontend</MenuItem>
                <MenuItem value={"backend"}>Backend</MenuItem>
                <MenuItem value={"architecture"}>Architecture</MenuItem>
                <MenuItem value={"hebergement"}>Hébergement</MenuItem>
            </Select>
        </div>
    )
}