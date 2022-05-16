import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import { Container, Paper } from '@mui/material'

export default function Card() {
 const [clients, setClients] = useState([])

 useEffect(() => {
  fetch('https://fakerapi.it/api/v1/companies?_quantity=20')
  .then(res => res.json())
  .then (data => setClients(data))
 }, [])

  return (
    <Container>
     <Grid container>
      {clients.map(client => (
       <Grid item key={client.id} xs ={12} md={6} ig={4}>
        <Paper>{client.title}</Paper>
       </Grid>
      ))}
     </Grid>
    </Container>
  )
}
