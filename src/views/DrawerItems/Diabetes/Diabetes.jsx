// core
import {
  Grid,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import clsx from "clsx";

// components
import Form from "./Form";

// redux and api
import { useSelector } from "react-redux";

// styles
import { useStyles } from "./styles";

export default function Diabetes() {
  // styles
  const classes = useStyles();

  // redux
  const details = useSelector((state) => state.diabetesReducer);

  return (
    <Grid container spacing={3}>
      {/* input */}
      <Grid item xs={12} md={6}>
        <Form />
      </Grid>

      {/* results */}
      <Grid item xs={12} md={6}>
        <Paper className={classes.paper} elevation={5}>
          <Grid container>
            {/* Title */}
            <Grid item xs={12} className={classes.title}>
              Results
            </Grid>

            {/* results */}
            <Grid item xs={12}>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Random Forest Normal</TableCell>
                      <TableCell>Random Forest Un-Skewed</TableCell>
                      <TableCell>KNN Un-Skewed</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>{details.RandomForestNormal}</TableCell>
                      <TableCell>{details.RandomForestUnskewed}</TableCell>
                      <TableCell>{details.KNNUnskewed}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Paper>

        <Paper
          className={clsx(classes.paper, classes.graphContainer)}
          elevation={5}
        >
          <Grid container>
            <Grid item xs={12}>
              {/* Title */}
              <Grid item xs={12} className={classes.title}>
                GRAPH
              </Grid>

              {/* graph canvas */}
              <Grid item xs={12}>
                Graph here
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
