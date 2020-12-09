import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import UsersList from "./userList";

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

const usersList = [
  {
    name: "Abhishek",
    team: 4,
    workingDays: ["1", "2", "3", "4", "5"],
    daysoff: 1,
    capacity: 70,
  },
  {
    name: "Niko",
    team: 3,
    workingDays: ["1", "2", "3", "4", "5"],
    daysoff: 2,
    capacity: 100,
  },
  {
    name: "Noor",
    team: 2,
    workingDays: ["1", "2", "3", "4", "5"],
    daysoff: 5,
    capacity: 100,
  },
];

class Main extends Component {
  state = {
    users: usersList,
  };

  handleCapacity = (user, capacity) => {
    const users = [...this.state.users];
    const index = users.indexOf(user);
    users[index] = { ...users[index] };
    users[index].capacity = capacity;
    this.setState({ users });
  };

  handleDaysOff = (user, daysOff) => {
    const users = [...this.state.users];
    const index = users.indexOf(user);
    users[index] = { ...users[index] };
    users[index].daysOff = daysOff;
    this.setState({ users });
  };

  handleTeam = (user, team) => {
    const users = [...this.state.users];
    const index = users.indexOf(user);
    users[index] = { ...users[index] };
    users[index].team = team;
    this.setState({ users });
  };

  handleWorkingDays = (user, workingDays) => {
    const users = [...this.state.users];
    const index = users.indexOf(user);
    users[index] = { ...users[index] };
    users[index].workingDays = workingDays;
    this.setState({ users });
  };

  render() {
    return (
      <UsersList
        users={this.state.users}
        onCapacityChange={this.handleCapacity}
        onWorkingDaysChange={this.handleWorkingDays}
        onTeamChange={this.handleTeam}
        onDaysOffChange={this.handleDaysOff}
      />
    );
  }
}

export default Main;
