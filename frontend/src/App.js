import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import data from './gr491.json';
import { renderCellExpand } from "./RenderCellExpand";


function getImpacts(params) {
  return params.field === 'people' ? 
  params.row?.impacts[0] : params.field === 'planet' ?
  params.row?.impacts[1] : params.row?.impacts[2] ?? '';
}

function getDifficulty(params) {
  console.log(params.getValue(params.id, 'difficulty'));
  switch (params.getValue(params.id, 'difficulty')){
    case '*' : 
      return 1;
    case '**' : 
      return 2;
    case '***':
      return 3; 
    default :
      return 'None' ;
  }
}


const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'title', headerName: 'Title', width: 400, cellRender: renderCellExpand },
  {
    field: 'category',
    headerName: 'Category',
    width: 150,
  },
  {
    field: 'people',
    headerName: 'People',
    width: 80,
    valueGetter: getImpacts
  },
  {
    field: 'planet',
    headerName: 'Planet',
    width: 80,
    valueGetter: getImpacts
  },
  {
    field: 'prosperity  ',
    headerName: 'Prosperity',
    width: 90,
    valueGetter: getImpacts
  },
  {
    field: 'challenge',
    headerName: 'Difficulty',
    type: 'number',
    width: 90,
    valueGetter: getDifficulty
  },
  {
    field: 'priority',
    headerName: 'Priority',
    width: 90,
  },
  {
    field: 'life_cycle',
    headerName: 'Life Cycle',
    width: 120,
  },
  {
    field: 'test',
    headerName: 'Test',
    width: 600,
  }
];

function App() {
  return (
    <div style={{ width: '100%' }}>
      <DataGrid
      autoHeight = {true}
        rows={data['strategie']}
        columns={columns}
        pageSize={50}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

export default App;
