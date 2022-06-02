import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";



function Articles(props) {
  const { state } = useLocation();
  const navigate = useNavigate()

  const news = state.slice(0, 5);
  const imgsdata = state.slice(1, 4);

  const sendItemsData = (data) =>{
    navigate('nestedRoute',{state:data})
  }

  console.log("sd", state);
  return (
    <Grid container>
      <Grid item xs={11} sm={11} md={11} lg={10} xl={12}>
        <Typography variant="h5" mb={2}> Live Updated Articles</Typography>
        <Stack direction="row" spacing={2}>
          <Box width="70%" sx={{ border: "1px solid", borderRadius: "5px" }}>
            <Stack direction="row" sx={{ backgroundColor: "black" }}>
              <Box
                width="30%"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "5px",
                  color: "white",
                }}
              >
                <Typography variant="h5">{state[0].title}</Typography>
              </Box>
              <Box width="70%">
                <img
                  width="100%"
                  style={{ borderRadius: "5px" }}
                  src={state[1].urlToImage}
                  onClick ={()=>{sendItemsData(state[1])}}
                ></img>
              </Box>
            </Stack>

            <Stack spacing={1} direction="row" mt={3}>
              {imgsdata.map((item) => (
                <Box width="35%" sx={{textAlign:"center"}}>
                  <img width="100%" src={item.urlToImage} onClick={() =>{sendItemsData(item)}}></img>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="caption">{item.publishedAt}</Typography>
                </Box>
                
              ))}
            </Stack>
          </Box>
          <Box width="20%" sx={{ border: "1px solid" }}>
            <Stack spacing={2} alignItems='left'>
              <Typography variant="h5">Most Read</Typography>
              {news.map((item, index) => (
                <Typography variant="h6">
                  {index + 1} {item.source.name}
                </Typography>
              ))}
            </Stack>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Articles;
