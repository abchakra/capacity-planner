import { Avatar, Box, makeStyles } from "@material-ui/core";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    marginRight: 5,
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

function User(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box display="flex" alignItems="center" p={1} m={1}>
        <Avatar className={classes.orange}>TU</Avatar>
        {props.name}
      </Box>
    </div>
  );
}

export default User;
