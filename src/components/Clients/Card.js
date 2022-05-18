import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import { Container, Typography } from '@mui/material'
import CardDetails from './CardDetails'

export default function Card() {
const [clients, setClients] = useState([]);

const url = 'http://localhost:8000/clients'

useEffect(() => {
  fetch(url)
  .then(res => res.json())
  .then (data => setClients(data))
}, [])

  return (
    <Container>
      <Typography component="h1" variant = "h2"  sx={{ color: 'secondary.main'}} align="center" fontWeight={500}>Clients</Typography>
    <Grid container spacing={3} mb={1}>
      {clients.map(client => (
      <Grid item key={client.id} xs ={12} sm={6} md={4} lg={4}>
        <CardDetails client={client}/>
      </Grid>
      ))}
    </Grid>
    </Container>
  )
}
