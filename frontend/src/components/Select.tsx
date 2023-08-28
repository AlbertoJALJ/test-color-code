import { Box, InputLabel, MenuItem, SelectChangeEvent } from "@mui/material";
import {Select as SelectComponent} from "@mui/material"


type props = {
    value:string
    onChange: (color: SelectChangeEvent<string>) => void
    options: string[]
    name?: string
    placeholder?: string
}
const Select = (props:props) => {
  return (
    <Box>
      <InputLabel id={props.name || ""}>{props.placeholder}</InputLabel>
      <SelectComponent fullWidth
        labelId={props.name || ""}
        value={props.value}
        label={props.placeholder || ""}
        onChange={props.onChange}
      >
        {props.options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </SelectComponent>
    </Box>
  );
};

export default Select;
