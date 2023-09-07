import { TextField } from "@mui/material";

export default function Input({ value, isDisabled, onChange, type, min }) {
  return (
    <TextField
      value={value}
      label="Number"
      onChange={onChange}
      variant="outlined"
      disabled={isDisabled}
      type={type}
      InputProps={{
        readOnly: isDisabled,
      }}
      inputProps={{
        min,
      }}
      sx={{ width: "100%" }}
    />
  );
}
