import React, {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid'
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {ServiceTitle,ServiceText,} from "./Team.styled";
import { Box } from '@mui/material';

export const Team = () => {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    fetch("https://fakerapi.it/api/v1/persons?_quantity=10")
      .then((response) => response.json())
      .then((data) => setTeam(data.data));
  }, []);

   return (
    <div>
     <Typography component="h1" variant = "h2"  sx={{ color: 'secondary.main'}} align="center" fontWeight={500}>Team Members</Typography>
     <Box sx={{p:5}}>
<Grid container spacing={3} justifyContent="space-around" alignItems="center" direction="row">
     {team
          ? team.map((team, i) => (
           <Grid item key={team.id} xs={12} sm={6} lg={4} sx={{mb:4}}>
              <Card  key={i} >
                <CardMedia component="img"
         alt="team member"
         height="140"
         image={team.image} />
                <ServiceTitle>{team.firstname + " " + team.lastname}</ServiceTitle>
                <ServiceText
                  style={{
                    color: "#333",
                    marginBottom: "5px",
                  }}
                >
                  Email: {team.email} <br />
                  Phone Number: {team.phone} <br />
                  Gender: {team.gender}
                </ServiceText>
                <ServiceText>{team.birthday}</ServiceText>
              </Card>
   </Grid>
            ))
          : null}
          </Grid>
          </Box>
    </div>
   );
};