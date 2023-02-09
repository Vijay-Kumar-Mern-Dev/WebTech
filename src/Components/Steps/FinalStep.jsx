import React from "react";
import { Box, Button, Paper } from "@mui/material";
import { styles } from "../Common/Style";
import { renderText } from "../Common/DisplayComponets";
import { useSelector } from "react-redux";
import jsPDF from "jspdf";

const FinalStep = () => {
  const { data } = useSelector((state) => state.form);
  var doc = new jsPDF();

  var employees = [
    {
      firstName: data.firstName,
      lastName: data.lastName,
      gender: data.gender,
      phone: data.phone,
      email: data.email,
      highestDegree: data.highestDegree,
      issuedBy: data.issuedBy,
      yearOfPassing: data.yearOfPassing,
      workExperience: data.workExperince,
      skill: data.skill,
      jobApplyFor: data.jobApplyFor,
      jobType: data.jobType,
      expectedSalary: data.expectedSalary,
    },
  ];
  // console.log(employees)
  employees.forEach(function (employee, i) {
    doc.text(
      20,
      20 + i * 10,
      "First Name: " +
        employee.firstName +
        "\n" +
        "Last Name: " +
        employee.lastName +
        "\n" +
        "Gender: " +
        employee.gender +
        "\n"  +
        "Phone: " +
        employee.phone +
        "\n" +
        "Email: " +
        employee.email +
        '\n'+
        "Highest Degree " +
        employee.highestDegree +
        "\n"  +
        "College Name: " +
        employee.issuedBy +
        "\n"  +
        "Passing Year " +
        employee.yearOfPassing +
        "\n"  +
        "Work Experience: " +
        employee.workExperince +
        "\n"  +
        "Skills: " +
        employee.skill +
        "\n" +
        "JobApply For: " +
        employee.jobApplyFor +
        "\n" +
        "Job Type: " +
        employee.jobType +
        "\n"  +
        "Expected Salary: " +
        employee.expectedSalary
    );
  });
  function handlechange() {
    doc.save("Test.pdf");
  }

  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Thank you for submission",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>

      {/* {JSON.stringify(data, null, 4)} */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button variant="contained" id="download_btn" onClick={handlechange}>
          Download
        </Button>
      </Box>
    </Paper>
  );
};
export default FinalStep;
