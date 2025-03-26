# CareConnect Platform

A platform designed to help caregivers of individuals with rare diseases navigate and access government assistance programs.

This prototype shows the frontend of the platform. The backend is in development, and will either involve scraping government websites or using the OpenAI API.

## Live Demo

Visit the live prototype: [CareConnect Platform](https://flourishing-bublanina-edbea7.netlify.app/)

## Features

- **Chatbot Assistant**: A friendly AI companion that guides users through the platform
- **Streamlined Onboarding**: Simple, conversational process to gather essential information
- **Personalized Dashboard**: Real-time tracking of program applications and next steps
- **Support Resources**: Access to community support groups and educational resources

## Prototype Notes

This prototype demonstrates the core user journey for caregivers:
1. Initial welcome and introduction
2. Guided onboarding process
3. Personalized dashboard with program recommendations
4. Real-time chat support

The prototype uses synthetic data to demonstrate the user experience. Some features are simulated:
- Program matching uses pre-defined sample programs
- Chat responses are templated
- Form submissions display success messages without backend processing

## Local Development Setup

1. Prerequisites:
   - Node.js (v14 or higher)
   - npm (comes with Node.js)

2. Clone the repository:
   ```bash
   git clone https://github.com/hamzehbhamdan/CareConnect.git
   cd CareConnect
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Technology Stack

- React 18
- Material-UI v5
- React Router v6
- Framer Motion for animations

## Project Structure

```
src/
  ├── components/        # React components
  │   ├── Welcome.js    # Landing page
  │   ├── ChatBot.js    # AI assistant interface
  │   ├── Onboarding.js # User information collection
  │   └── Dashboard.js  # Main user interface
  ├── App.js            # Main application component
  ├── theme.js          # Material-UI theme configuration
  └── index.js          # Application entry point
```

## Deployment

The project is configured for deployment on Netlify:
1. Fork or clone this repository
2. Connect your GitHub repository to Netlify
3. Netlify will automatically deploy from the main branch

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting pull requests.
