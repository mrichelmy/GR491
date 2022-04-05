import { Select, MenuItem, InputLabel } from "@mui/material";

export default function DropdownCategory(props) {
    return(
        <div class="dropdown_box">
            <InputLabel id="category_label">Category</InputLabel>
            <Select labelId="category_label" value={props.theme} onChange={props.handleTheme}>
                <MenuItem value={"strategy"}>Stratégie</MenuItem>
                <MenuItem value={"specifications"}>Spécifications</MenuItem>
                <MenuItem value={"uxui"}>UX/UI</MenuItem>
                <MenuItem value={"contents"}>Contenus</MenuItem>
                <MenuItem value={"frontend"}>Frontend</MenuItem>
                <MenuItem value={"backend"}>Backend</MenuItem>
                <MenuItem value={"architecture"}>Architecture</MenuItem>
                <MenuItem value={"hosting"}>Hébergement</MenuItem>
            </Select>
        </div>
    )
}