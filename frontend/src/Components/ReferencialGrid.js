import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import data from '../gr491.json';


function getImpacts(params) {
  return params.field === 'people' ?
    params.row?.impacts[0] : params.field === 'planet' ?
      params.row?.impacts[1] : params.row?.impacts[2] ?? '';
}

function getDifficulty(params) {
  console.log(params.getValue(params.id, 'difficulty'));
  switch (params.getValue(params.id, 'difficulty')) {
    case '*':
      return 1;
    case '**':
      return 2;
    case '***':
      return 3;
    default:
      return 'None';
  }
}


const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  { 
    field: 'title',
    headerName: 'Reference',
    width: 800,
  },
  {
    field: 'category',
    headerName: 'Category',
    width: 150,
    hide: true
  },
  {
    field: 'people',
    headerName: 'People',
    width: 80,
    valueGetter: getImpacts,
    hide: true
  },
  {
    field: 'planet',
    headerName: 'Planet',
    width: 80,
    valueGetter: getImpacts,
    hide: true
  },
  {
    field: 'prosperity  ',
    headerName: 'Prosperity',
    width: 90,
    valueGetter: getImpacts,
    hide: true
  },
  {
    field: 'challenge',
    headerName: 'Difficulty',
    type: 'number',
    width: 90,
    valueGetter: getDifficulty,
    hide: true
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
    hide: true
  },
  {
    field: 'test',
    headerName: 'Test',
    width: 800,
  }
];

function ReferencialGrid(props) {
  return (
    <div style={{ width: '100%' }}>
      <DataGrid
        components={{
          Toolbar: GridToolbar,
        }}
        autoHeight={true}
        rows={data[props.theme]}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        onRowClick={(params) => props.onClickDetail(params.id)}
      />
    </div>
  );
}

export default ReferencialGrid;
