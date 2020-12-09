import React, { Component } from "react";
import UserItem from "./common/userItem";
class UsersList extends Component {
  state = {};
  render() {
    const { users } = this.props;
    return (
      <div>
        {users.map((user) => (
          <UserItem
            user={user}
            handleCapacity={this.props.onCapacityChange}
            handleWorkingDays={this.props.onWorkingDaysChange}
            handleTeam={this.props.onTeamChange}
            handleDaysOff={this.props.onDaysOffChange}
          />
        ))}
      </div>
    );
  }
}

export default UsersList;
