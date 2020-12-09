import React from "react";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import Typography from "@material-ui/core/Typography";
const WorkingDays = (props) => {
  const handleWorkingDays = (event, newWorkingDays) => {
    props.handleWorkingDays(newWorkingDays);
  };
  return (
    <React.Fragment>
      <Typography variant="h6">WorkingDays</Typography>
      <ToggleButtonGroup
        value={props.workingDays}
        onChange={handleWorkingDays}
        aria-label="text formatting"
      >
        <ToggleButton value="1" aria-label="bold">
          MON
        </ToggleButton>
        <ToggleButton value="2" aria-label="bold">
          TUE
        </ToggleButton>
        <ToggleButton value="3" aria-label="bold">
          WED
        </ToggleButton>
        <ToggleButton value="4" aria-label="bold">
          THU
        </ToggleButton>
        <ToggleButton value="5" aria-label="bold">
          FRI
        </ToggleButton>
        <ToggleButton value="6" aria-label="bold">
          SAT
        </ToggleButton>
        <ToggleButton value="7" aria-label="bold">
          SUN
        </ToggleButton>
      </ToggleButtonGroup>
    </React.Fragment>
  );
};

export default WorkingDays;
