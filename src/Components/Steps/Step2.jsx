import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import { styles } from "../Common/Style";
import {
  renderButton,
  renderInputField,
  renderSelect,
  renderText,
} from "../Common/DisplayComponets";
import { useDispatch, useSelector } from "react-redux";
import { formData, next, previous } from "../../redux/form";
import { useState } from "react";

const Step2 = () => {
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
          label: "A Bit About Education",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderSelect({
            obj,
            name: "highestDegree",
            label: "Qualification Degree",
            options: [
              { key: "graduation", value: "Graduation" },
              { key: "B.Tech", value: "B.Tech" },
              { key: "BCA", value: "BCA Course" },
              { key: "M.Tech", value: "M.Tech" },
              { key: "MCA", value: "MCA" },
            ],
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            obj,
            name: "issuedBy",
            label: "Issued By College name",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            obj,
            name: "yearOfPassing",
            label: "Passing Year",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderSelect({
            obj,
            name: "jobApplyFor",
            label: "JobApplyFor",
            options: [
              { key: "Manager", value: "Manager" },
              { key: "Project Designer", value: "Project Designer" },
              { key: "Clerk", value: "Clerk" },
              { key: "Helper", value: "Helper" },
            ],
            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Grid container component={Box} justify="flex-end" mt={2} p={2}>
        <Box ml={2}>
          {renderButton({
            label: "Back",
            onClick: handlePrev,
          })}
        </Box>
        <Box ml={2}>{renderButton({ label: "Next", onClick: handleNext })}</Box>
      </Grid>
    </Paper>
  );
};

export default Step2;
