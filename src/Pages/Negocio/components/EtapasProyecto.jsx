import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItem,
  ListItemText,
  Link,
  Button
} from '@mui/material';
import ExpandMore from '@mui/icons-material/ExpandMore';

export const EtapasProyecto = () => {
  return (
    <div>
      {/* Etapa 1: Descripción y Título */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Descripción y Título</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Esta etapa contiene una descripción general del proyecto, su objetivo principal y el título.
            Aquí se detallan los aspectos fundamentales que se abordarán.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Etapa 2: Aceptación del Documento y Comentarios */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Aceptación del Documento y Comentarios</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            En esta fase, los stakeholders deben revisar y aceptar el documento del proyecto. Además, pueden
            añadir comentarios o sugerencias para mejorar o aclarar puntos específicos.
          </Typography>
          <Typography>
            Para más información sobre cómo hacer comentarios, consulta la guía en{' '}
            <Link href="https://example.com/guia" color="primary" underline="hover">
              esta página
            </Link>.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Etapa 3: Etapa del Disenso */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Etapa del Disenso</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            En caso de no estar de acuerdo con los términos propuestos, esta etapa está diseñada para expresar
            las diferencias, discutir puntos críticos, y buscar soluciones.
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Diferencias expresadas en los objetivos del proyecto." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Propuestas alternativas presentadas." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Comentarios de los stakeholders sobre puntos de disenso." />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      {/* Etapa 4: Desarrollo */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography>Desarrollo</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            En esta fase se procede al desarrollo del proyecto en base a las decisiones tomadas en las
            etapas anteriores.
          </Typography>
          <Button variant="contained" color="primary">
            Proyecto Finalizado
          </Button>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
