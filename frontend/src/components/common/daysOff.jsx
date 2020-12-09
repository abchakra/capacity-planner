import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Typography from "@material-ui/core/Typography";
export const daysOffOptions = [
  { value: 0, label: "Zero Days off" },
  { value: 1, label: "One Days off" },
  { value: 2, label: "Two Days off" },
  { value: 3, label: "Three Days off" },
  { value: 4, label: "Four Days off" },
  { value: 5, label: "Five Days off" },
  { value: 6, label: "Six Days off" },
  { value: 7, label: "Seven Days off" },
  { value: 8, label: "Eight Days off" },
  { value: 9, label: "Nine Days off" },
  { value: 10, label: "Ten Days off" },
];

function DaysOff(props) {
  const [value, setValue] = React.useState(props.daysoff);
  const [inputValue, setInputValue] = React.useState("");
  return (
    <React.Fragment>
      <Typography variant="h6">Days Off</Typography>
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
        options={daysOffOptions}
        getOptionLabel={(option) => option.label}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="" variant="outlined" />
        )}
      />
    </React.Fragment>
  );
}

export default DaysOff;
