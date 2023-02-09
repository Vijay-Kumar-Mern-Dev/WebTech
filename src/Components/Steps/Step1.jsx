import React, { useState } from "react";
import { Box, Grid, Paper } from "@mui/material";
import { styles } from "../Common/Style";
import { useDispatch, useSelector } from "react-redux";
import { formData, next } from "../../redux/form";
import {
  renderButton,
  renderInputField,
  renderSelect,
  renderText,
} from "../Common/DisplayComponets";

const Step1 = ({ state }) => {
  const { page } = useSelector((state) => state.form);
  const [obj, setObj] = useState({});
  const handleChange = (e) => {
    setObj({ ...obj, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.form);
  const handleNext = () => {
    // const uniqueObj=new Set(data)
    dispatch(formData({ ...data, ...obj }));
    dispatch(next());
  };

  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Please Fill personal Data",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            obj,
            name: "firstName",
            label: "First Name",
            value: "",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            obj,
            value: "",
            name: "lastName",
            label: "Last Name",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12}>
          {renderSelect({
            obj,
            name: "gender",
            label: "Gender",
            value: "",
            options: [
              { key: "Male", value: "male" },
              { key: "Female", value: "female" },
            ],
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            obj,
            name: "phone",
            label: "Phone",
            value: "",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            obj,
            name: "email",
            label: "Email",
            type: "email",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Grid container component={Box} justify="flex-end" mt={2} p={2}>
        {renderButton({ label: "Next", onClick: handleNext })}
      </Grid>
    </Paper>
  );
};

export default Step1;
