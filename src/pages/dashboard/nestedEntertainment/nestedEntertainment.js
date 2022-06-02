import { Typography } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';


function NestedEntertainment(props) {
    const {state} = useLocation()
  
    return (
        <div>
            <img src ={state.urlToImage}></img>

            
            <Typography>Description Of {state.title}</Typography>
            <Typography>Description Of {state.description}</Typography>
        </div>
    );
}

export default NestedEntertainment;<Typography>Description Of News</Typography>