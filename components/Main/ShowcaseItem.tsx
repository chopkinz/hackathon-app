import { useEffect, useState } from "react";
import { Box, Card, CardContent, CardMedia, IconButton, Typography, Button } from "@mui/material";

interface Props {
  common_name: string;
  scientific_name: string;
  status: string;
  family: string;
  order: string;
  class: string;
  phylum: string;
  kingdom: string;
  genus: string;
  species?: string;
  image: string;
}

export const ShowcaseItem = (props: Props) => {
  const [trueStatus, setTrueStatus] = useState()

  return (
    <Card className="flex flex-row select-none justify-between">
      <CardMedia
        component="img"
        sx={{ width: 150 , height: 150, p:1, borderRadius: 5}}
        image={props.image}
        alt={props.common_name}
      />

      {/* Information and sponsoring metrics */}
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component="div" variant="h5" className="font-sans font-bold">
          {props.common_name}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div" className="italic">
          {props.scientific_name}
        </Typography>
        <br/>
        <Typography variant="subtitle1" color="text.secondary" component="div" className="font-mono">
          {/* If not surviving, assume extinct */}
          {props.status == "Extant (resident)" ? "Endangered" : "Extinct"}
        </Typography>
        <Box sx={{alignItems: 'center', pl: 3, pb: 1, backgroundColor: props.status == "Extant (resident)" ? "red" : "black"}} className="w-48">
        </Box>
      </CardContent>
      <Button color="primary" variant="contained">Contained</Button>
</Card>
  );
};
