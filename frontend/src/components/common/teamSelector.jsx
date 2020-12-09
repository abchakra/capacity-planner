import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Typography from "@material-ui/core/Typography";
export const teamOptions = [
  { value: 0, label: "FPGA Team" },
  { value: 1, label: "Devops" },
  { value: 2, label: "QA" },
  { value: 3, label: "CTO" },
  { value: 4, label: "GUI" },
];

function TeamSelector(props) {
  const [value, setValue] = React.useState(props.team);
  const [inputValue, setInputValue] = React.useState("");
  return (
    <React.Fragment>
      <Typography variant="h6">Team</Typography>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="days-off"
        options={teamOptions}
        getOptionLabel={(option) => option.label}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="" variant="outlined" />
        )}
      />
    </React.Fragment>
  );
}

export default TeamSelector;
