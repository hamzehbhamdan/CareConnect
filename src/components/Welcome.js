import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Container,
  Card,
  CardContent,
  Grid,
} from '@mui/material';
import { motion } from 'framer-motion';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            component="h1"
            align="center"
            gutterBottom
            sx={{ mb: 4, color: 'primary.main' }}
          >
            Welcome to CareConnect
          </Typography>
          
          <Typography
            variant="h2"
            align="center"
            sx={{ mb: 6, color: 'text.secondary' }}
          >
            Simplifying access to support programs for rare disease caregivers
          </Typography>
        </motion.div>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Personalized Support
                  </Typography>
                  <Typography>
                    Get matched with government assistance programs tailored to your specific situation.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Guided Experience
                  </Typography>
                  <Typography>
                    Our friendly chatbot assistant helps you every step of the way.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Real-Time Updates
                  </Typography>
                  <Typography>
                    Track your applications and receive timely notifications about your progress.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/onboarding')}
              sx={{ px: 6, py: 2 }}
            >
              Get Started
            </Button>
          </motion.div>
        </Box>
      </Box>
    </Container>
  );
};

export default Welcome;
