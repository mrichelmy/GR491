import React from 'react';
import { Card, Box, CardContent, Typography } from '@mui/material';
import frenchData from '../data/gr491.json';
import englishData from '../data/en_gr491.json';
import '../stylesheet/app.css'

//! TODO Refactor: Do not use data in cardDetail AND referencialGrid, define in state.
export default function DetailCard(props) {
    const data = props.isFrench ? frenchData : englishData ;
    const currentRef = data[props.theme].find((item) => item.id === props.refId);
    const detailsMap = {
        'ID': props.refId,
        'Category': currentRef?.category,
        'People': currentRef?.impacts[0] ,
        'Planet': currentRef?.impacts[1],
        'Prosperity': currentRef?.impacts[2] ,
        'Difficulty': currentRef?.difficulty,
        'Life Cycle': currentRef?.life_cycle,
        'SDG': currentRef?.odd.map(sdg => sdg.split('#')[1] + ' | ')

    }

    const details = (
        <CardContent>
            <Typography variant={'h5'} align={'center'}> Reference details</Typography>
            {
                Object.keys(detailsMap).map((category) =>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Typography variant='subtitle2' display='inline' align='left'>{category}</Typography>
                    <Typography variant='body1' display='inline' align='right' color='error'>{detailsMap[category]}</Typography>
                </div>
                )
            }
        </CardContent>
    );

    return (
        <>
            {currentRef !== undefined ?
            <Box className="project_box" sx={{border: 0}}>
                <Card variant={'outlined'}>{details}</Card>
            </Box>
            : 
            <></>
            }
        </>
    )
}