import React, {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid'
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {ServiceTitle,ServiceText,} from "./Clients.styled";

export const Clients = () => {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    fetch("https://fakerapi.it/api/v1/persons?_quantity=24&_gender=male&_birthday_start=2005-01-01")
      .then((response) => response.json())
      .then((data) => setClients(data.data));
  }, []);

   return (
    <div>
     <Typography component="h1" variant = "h2"  sx={{ color: 'secondary.main'}} align="center" fontWeight={500}>Clients</Typography>
<Grid container spacing={3} mb={1} xs ={12} sm={6} md={4} lg={4}>
     {clients
          ? clients.map((client, i) => (
           <Grid item key={client.id} xs ={24} sm={12} md={8} lg={4}>
              <Card  key={i} sx={{maxWidth:345}} container spacing={3} mb={1}>
                <CardMedia component="img"
         alt="client image"
         height="140"
         image={client.image} />
                <ServiceTitle>{client.firstname + " " + client.lastname}</ServiceTitle>
                <ServiceText
                  style={{
                    color: "#333",
                    marginBottom: "5px",
                  }}
                >
                  Email: {client.email} <br />
                  Phone Number: {client.phone} <br />
                  Gender: {client.gender}
                </ServiceText>
                <ServiceText>{client.birthday}</ServiceText>
              </Card>
   </Grid>
            ))
          : null}
          </Grid>
    </div>
   );
};