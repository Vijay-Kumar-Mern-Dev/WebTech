import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import { styles } from "../Common/Style";
import {
  renderButton,
  renderInputField,
  renderSelect,
  renderText,
} from "../Common/DisplayComponets";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formData, next, previous } from "../../redux/form";

const Step3 = () => {
  const [obj, setObj] = useState({});
  const handleChange = (e) => {
    setObj({ ...obj, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.form);

  const handlePrev = () => {
    dispatch(formData({ ...data, ...obj }));
    dispatch(previous());
  };
  const handleNext = () => {
    dispatch(formData({ ...data, ...obj }));
    dispatch(next());
  };

  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Professional Details",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderSelect({
            obj,
            name: "skill",
            label: "Skills You have",
            options: [
              { key: "Programming", value: "Programming" },
              { key: "Communication", value: "Communication" },
              { key: "Designing", value: "Designing" },
              { key: "not Yet Defined", value: "not Yet Defined" },
            ],
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderSelect({
            obj,
            name: "workExperince",
            label: "Experence You have",
            options: [
              { key: "Less than 1 year", value: "Less than 1 year" },
              { key: "More than 1 year", value: "More than 1 year" },
              { key: "1 year", value: "1 year" },
            ],
            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderSelect({
            obj,
            name: "jobType",
            label: "Choose Work Type",
            options: [
              { key: "Marketting", value: "Marketting" },
              { key: "Official Work", value: "Official Work" },
              { key: "Work from home", value: "Work from home" },
            ],
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            obj,
            name: "expectedSalary",
            label: " Expected Salaty",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Grid container component={Box} justify="flex-end" mt={2} p={2}>
        <Box ml={2}>
          {renderButton({
            label: "Back",
            // color: "default",
            onClick: handlePrev,
          })}
        </Box>
        <Box ml={2}>
          {renderButton({ label: "Finish", onClick: handleNext })}
        </Box>
      </Grid>
    </Paper>
  );
};

export default Step3;
