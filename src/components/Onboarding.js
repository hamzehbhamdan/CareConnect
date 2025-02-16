import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  Paper,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from '@mui/material';
import { motion } from 'framer-motion';

const steps = ['Basic Information', 'Care Details', 'Financial Information'];

const Onboarding = ({ setUserProfile }) => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    location: '',
    diseaseCategory: '',
    relationship: '',
    income: '',
    householdSize: '',
  });

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      setUserProfile(formData);
      navigate('/dashboard');
    } else {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Location (City, State)"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        );
      case 1:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Disease Category</InputLabel>
                <Select
                  name="diseaseCategory"
                  value={formData.diseaseCategory}
                  onChange={handleChange}
                  label="Disease Category"
                >
                  <MenuItem value="metabolic">Metabolic Disorders</MenuItem>
                  <MenuItem value="neurological">Neurological Conditions</MenuItem>
                  <MenuItem value="genetic">Genetic Disorders</MenuItem>
                  <MenuItem value="autoimmune">Autoimmune Diseases</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Relationship to Patient</InputLabel>
                <Select
                  name="relationship"
                  value={formData.relationship}
                  onChange={handleChange}
                  label="Relationship to Patient"
                >
                  <MenuItem value="parent">Parent</MenuItem>
                  <MenuItem value="spouse">Spouse</MenuItem>
                  <MenuItem value="sibling">Sibling</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        );
      case 2:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Annual Household Income</InputLabel>
                <Select
                  name="income"
                  value={formData.income}
                  onChange={handleChange}
                  label="Annual Household Income"
                >
                  <MenuItem value="0-25000">$0 - $25,000</MenuItem>
                  <MenuItem value="25001-50000">$25,001 - $50,000</MenuItem>
                  <MenuItem value="50001-75000">$50,001 - $75,000</MenuItem>
                  <MenuItem value="75001-100000">$75,001 - $100,000</MenuItem>
                  <MenuItem value="100001+">$100,001+</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Household Size"
                name="householdSize"
                type="number"
                value={formData.householdSize}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        );
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            Let's Get Started
          </Typography>
          <Typography variant="body1" align="center" sx={{ mb: 6 }}>
            We'll help you find the right support programs for your situation.
          </Typography>

          <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <Paper sx={{ p: 4 }}>
            {renderStepContent(activeStep)}

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                Back
              </Button>
              <Button
                variant="contained"
                onClick={handleNext}
              >
                {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
              </Button>
            </Box>
          </Paper>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Onboarding;
