import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Grid, Paper, Stepper, Step, StepLabel } from "@mui/material";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import FinalStep from "./FinalStep";
import { renderText } from "../Common/DisplayComponets";
import { useSelector } from "react-redux";
import { withStyles } from "@mui/styles";
import { styles } from "../Common/Style";

const FormComponent = (props) => {
  const { formData, page } = useSelector((state) => state.form);

  console.table(formData, page);
 

  const [data, setData] = useState({});
  const [error, setError] = useState({});
  const [stepCount, setStepCount] = useState(0);


  const { classes } = props;
  console.log(classes)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  const handleOnChange = ({ target }) => {
    // const { data, errors } = state;
    // let { sdata, errors } = this.state;
    console.log(target.value);
    // target.value.length <= 3
    //   ? (errors[target.name] = `${target.name} have at least 3 letter`)
    //   : (errors[target.name] = "");
    // setState({...data,data[target.name]=target.value})
    let obj = { ...data };
    obj[target.name] = target.value;
    setData(obj);

    data[target.name] = target.value;
    // this.setState({ data, errors });
    // setState({ data, errors });
  };

  const handleNextStep = () => {
    setStepCount((state) => state + 1);
    console.log(stepCount);
  };
  const handleBackStep = () => {
    setStepCount((state) => state - 1);
    console.log(setStepCount);
  };
  console.log(page);

  const getStepContent = (page) => {
    switch (page) {
      case 0:
        return (
          <Step1
            state={data}
            handleChange={handleOnChange}
            handleNext={handleNextStep}
          />
        );

      case 1:
        return (
          <Step2
      
            state={data}
            handleChange={handleOnChange}
            handleNext={handleNextStep}
            handlePrev={handleBackStep}
          />
        );
      case 2:
        return (
          <Step3
            state={data}
            handleChange={handleOnChange}
            handleNext={handleNextStep}
            handlePrev={handleBackStep}
            handleSubmit={handleSubmit}
          />
        );
      case 3:
        return <FinalStep data={data} />;

      default:
        return (
          <Step1
            state={data}
            handleChange={handleOnChange}
            handleNext={handleNextStep}
          />
        );
    }
  };
  const labels = ["Personal Details", "Educational", "Profession", "Final"];

  return (
    <>
      <Grid container className={classes.formContainer}>
        <Grid item xs={12} sm={7}>
          <form onSubmit={handleSubmit} className={classes.form}>
            <Paper component={Box} mb={1}>
              <Box pt={2}>
                {renderText({
                  type: "h6",
                  color: "primary",
                  label: "MultiStep Signup Form",
                  align: "center",
                })}
              </Box>
              <Stepper activeStep={page} alternativeLabel>
                {labels.map((item, index) => (
                  <Step key={index}>
                    <StepLabel>{item}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Paper>
            {getStepContent(page)}
          </form>
        </Grid>
      </Grid>
    </>
  );
};

FormComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormComponent);

