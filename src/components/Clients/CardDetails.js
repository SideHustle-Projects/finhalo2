import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function CardDetails({client}) {
  return (
    <div>
    <Card   sx={{ maxWidth: 345  }}>
      <CardMedia
        component="img"
        alt="client image"
        height="140"
        image={client.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Name: {client.firstname + " " + client.lastname}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          E-mail: {client.email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Phone No.: {client.phone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Gender: {client.gender}
        </Typography>
      </CardContent>
    </Card>
    </div>
  )
}
