import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
export default function DropDown({ value, selectChangeHandler, Id }) {
  const items = ["+", "-"];

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id={`select-label-${Id}`}>Sign</InputLabel>
        <Select
          labelId={`select-label-${Id}`}
          value={value}
          label="Sign"
          onChange={selectChangeHandler}
        >
          {items.map((item) => (
            <MenuItem key={item} value={item}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
