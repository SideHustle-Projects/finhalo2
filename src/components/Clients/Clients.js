import React, {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid'
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {ServiceTitle,ServiceText,} from "./Clients.styled";
import { Box } from '@mui/material';

export const Clients = () => {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    fetch("https://fakerapi.it/api/v1/companies?_quantity=12")
      .then((response) => response.json())
      .then((data) => setClients(data.data));
  }, []);

   return (
    <div>
      <Typography component="h1" variant = "h2"  sx={{ color: 'secondary.main'}} align="center" fontWeight={500}>Clients</Typography>
      <Box sx={{p:5}}>
    <Grid container spacing={3} justifyContent="space-around" alignItems="center" direction="row">
      {clients
          ? clients.map((client, i) => (
           <Grid item key={client.id} xs={12} sm={6} lg={4} sx={{mb:4}}>
              <Card key={i}>
                <CardMedia component="img"
          alt="client image"
          height="140"
          image={client.image} />
                <ServiceTitle>{client.name}</ServiceTitle>
                <ServiceText
                  style={{
                    color: "#333",
                    marginBottom: "5px",
                  }}
                >
                  Email: {client.email} <br />
                  Phone Number: {client.phone} <br />
                  Gender: {client.contact.gender} 
                </ServiceText>
                <ServiceText>{client.contact.birthday}</ServiceText>
              </Card>
            </Grid>
            ))
          : null}
          </Grid>
    </Box>
    </div>
   );
};