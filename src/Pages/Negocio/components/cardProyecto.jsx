import { Button, Card, CardActions, CardContent, Container, Typography } from "@mui/material";



export const CardProyecto = (props) => {

    const {nameProyect,bodyProyect} = props



  return (
    <div style={{ margin: "25%" }}>
      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
          <Typography
            variant="h4"
            component="div"
          >
            Title Project
          </Typography>
          <Typography
            sx={{ mb: 1.5 }}
            color="text.secondary"
          >
            describes the heading
          </Typography>
          <Typography variant="body1">
            Card content
            <br />
            {'"describes the content"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Ver Propuestas</Button>
        </CardActions>
      </Card>
    </div>
  );
};
