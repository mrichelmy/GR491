import React from 'react';
import { Card, Box, CardContent, Typography, Grid } from '@mui/material';
import data from '../gr491.json';

export default function DetailCard(props) {
    const currentRef = data[props.theme].find((item) => item.id === props.refId);
    const detailsMap = {
        'ID': props.refId,
        'Category': currentRef?.category,
        'People': currentRef?.impacts[0] ,
        'Planet': currentRef?.impacts[1],
        'Prosperity': currentRef?.impacts[2] ,
        'Difficulty': currentRef?.difficulty,
        'Life Cycle': currentRef?.life_cycle,

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
            {console.log(currentRef)}
            {currentRef !== undefined ?
            <Box sx={{ maxWidth:400, padding: 2 }} >
                <Card variant={'outlined'}>{details}</Card>
            </Box>
            : 
            <></>
            }
        </>
    )
}