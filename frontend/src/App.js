import React, { useState } from 'react';
import DetailCard from './Components/DetailCard.js';
import ReferencialGrid from './Components/ReferencialGrid.js'
import { Select, MenuItem } from '@mui/material'

export default function App() {
    const [refId, setRefId] = useState(0);
    const [theme, setTheme] = useState('strategie');

    const handleClickDetail = (newRefId) => {
        setRefId(newRefId);
    }

    const handleTheme = (event) => {
        setTheme(event.target.value);
    }

    return (
        <>
            <Select
                value={theme}
                label="Choose your theme"
                onChange={handleTheme}
            >
                <MenuItem value={'strategie'}>Stratégie</MenuItem>
                <MenuItem value={'specifications'}>Spécifications</MenuItem>
                <MenuItem value={'uxui'}>UX/UI</MenuItem>
                <MenuItem value={'contenus'}>Contenus</MenuItem>
                <MenuItem value={'frontend'}>Frontend</MenuItem>
                <MenuItem value={'backend'}>Backend</MenuItem>
                <MenuItem value={'architecture'}>Architecture</MenuItem>
                <MenuItem value={'hebergement'}>Hébergement</MenuItem>
            </Select>
            <ReferencialGrid theme={theme} onClickDetail={handleClickDetail} />
            <DetailCard refId={refId} theme={theme} />
        </>
    );
}