import React from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  LinearProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Chip,
} from '@mui/material';
import {
  Assignment as AssignmentIcon,
  CheckCircle as CheckCircleIcon,
  Schedule as ScheduleIcon,
  NotificationsActive as NotificationsIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Dashboard = ({ userProfile }) => {
  // Mock data - in a real app, this would come from your backend
  const programs = [
    {
      id: 1,
      name: 'Medical Assistance Program',
      status: 'in-progress',
      progress: 60,
      nextStep: 'Submit income verification',
      deadline: '2025-03-01',
    },
    {
      id: 2,
      name: 'Caregiver Support Grant',
      status: 'pending',
      progress: 30,
      nextStep: 'Schedule phone interview',
      deadline: '2025-03-15',
    },
    {
      id: 3,
      name: 'Equipment Assistance Program',
      status: 'approved',
      progress: 100,
      nextStep: 'None - Approved',
      deadline: 'N/A',
    },
  ];

  const upcomingTasks = [
    {
      id: 1,
      task: 'Upload recent medical documentation',
      program: 'Medical Assistance Program',
      due: '2025-02-20',
    },
    {
      id: 2,
      task: 'Complete phone interview',
      program: 'Caregiver Support Grant',
      due: '2025-02-25',
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h4" gutterBottom>
            Welcome back, {userProfile?.firstName || 'Caregiver'}
          </Typography>

          <Grid container spacing={4}>
            {/* Program Status Cards */}
            <Grid item xs={12}>
              <Typography variant="h5" gutterBottom>
                Your Programs
              </Typography>
              <Grid container spacing={3}>
                {programs.map((program) => (
                  <Grid item xs={12} md={4} key={program.id}>
                    <Card>
                      <CardContent>
                        <Typography variant="h6" gutterBottom>
                          {program.name}
                        </Typography>
                        <Box sx={{ mb: 2 }}>
                          <Chip
                            label={program.status.toUpperCase()}
                            color={
                              program.status === 'approved'
                                ? 'success'
                                : program.status === 'in-progress'
                                ? 'primary'
                                : 'warning'
                            }
                            size="small"
                          />
                        </Box>
                        <Box sx={{ mb: 2 }}>
                          <LinearProgress
                            variant="determinate"
                            value={program.progress}
                            sx={{ height: 8, borderRadius: 4 }}
                          />
                          <Typography variant="body2" sx={{ mt: 1 }}>
                            Progress: {program.progress}%
                          </Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                          Next Step: {program.nextStep}
                        </Typography>
                        {program.deadline !== 'N/A' && (
                          <Typography variant="body2" color="error">
                            Deadline: {program.deadline}
                          </Typography>
                        )}
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            {/* Tasks and Timeline */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Upcoming Tasks
                </Typography>
                <List>
                  {upcomingTasks.map((task) => (
                    <ListItem key={task.id}>
                      <ListItemIcon>
                        <AssignmentIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary={task.task}
                        secondary={`${task.program} - Due: ${task.due}`}
                      />
                      <Button variant="outlined" size="small">
                        Complete
                      </Button>
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>

            {/* Resources and Support */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Support Resources
                </Typography>
                <List>
                  <ListItem button>
                    <ListItemIcon>
                      <NotificationsIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Join Support Group"
                      secondary="Connect with other caregivers"
                    />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <ScheduleIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Schedule Consultation"
                      secondary="Speak with a program specialist"
                    />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <CheckCircleIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Resource Library"
                      secondary="Access helpful guides and documents"
                    />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Dashboard;
