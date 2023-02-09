import { Button, MenuItem, TextField, Typography } from "@mui/material";

export const renderText = ({ type, label, color, ...rest }) => (
  <Typography variant={type} color={color} {...rest}>
    {label}
  </Typography>
);

export const renderInputField = ({
  name,
  label,
  type,
  obj,
  onChange,
  errors = false,
}) => {
  // const { data, errors } = state;
  return (
    <TextField
      label={label}
      type={type ? type : "text"}
      variant="outlined"
      color="primary"
      size="small"
      fullWidth={true}
      name={name}
      value={obj[name] || ""}
      error={errors[name] ? true : false}
      helperText={errors[name] ? errors[name] : ""}
      onChange={onChange}
    />
  );
};
export const renderSelect = ({
  name,
  label,
  options,
  obj,
  errors = false,
  onChange,
}) => {
  // const { data, errors } = state;
  return (
    <TextField
      select
      label={label}
      variant="outlined"
      color="primary"
      size="small"
      fullWidth={true}
      name={name}
      value={obj[name] || ""}
      error={errors[name] ? true : false}
      helperText={errors[name] ? errors[name] : ""}
      onChange={onChange}
    >
      {options.map((item) => (
        <MenuItem key={item.value} value={item.value}>
          {item.key}
        </MenuItem>
      ))}
    </TextField>
  );
};

export const renderButton = ({ label, variant, color, fullWidth, onClick }) => (
  <Button
    variant={"contained" ? "contained" : "outlined"}
    color={color ? color : "primary"}
    fullWidth={fullWidth ? fullWidth : false}
    onClick={onClick}
  >
    {label}
  </Button>
);
