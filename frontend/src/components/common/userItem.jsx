import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, Grid, Paper } from "@material-ui/core";
import WorkingDays from "./workingDays";
import DaysOff, { daysOffOptions } from "./daysOff";
import DailyCapacity from "./dailyCapacity";
import TeamSelector, { teamOptions } from "./teamSelector";
import User from "./user";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 5,
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
function UserItem(props) {
  const { name, team, daysoff, workingDays, capacity } = props.user;

  const teamOption = teamOptions.find((o) => o.value === team);
  const daysOffOption = daysOffOptions.find((o) => o.value === daysoff);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            <Grid item xs={2}>
              <User name={name} />
            </Grid>
            <Grid item xs={2}>
              <TeamSelector team={teamOption} />
            </Grid>
            <Grid item xs={3}>
              <WorkingDays
                workingDays={workingDays}
                handleWorkingDays={(newWorkingDays) =>
                  props.handleWorkingDays(props.user, newWorkingDays)
                }
              />
            </Grid>
            <Grid item xs={3}>
              <DaysOff daysoff={daysOffOption} />
            </Grid>
            <Grid item xs={2}>
              <DailyCapacity
                capacity={capacity}
                handleCapacity={(newCapacity) =>
                  props.handleCapacity(props.user, newCapacity)
                }
              />
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </div>
  );
}

export default UserItem;
