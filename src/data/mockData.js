export const programs = [
  {
    id: 1,
    name: 'Medical Assistance Program',
    description: 'Financial assistance for medical expenses and treatments',
    eligibility: ['Income below $75,000', 'US Resident', 'Diagnosed rare disease'],
    status: 'in-progress',
    progress: 60,
    nextStep: 'Submit income verification',
    deadline: '2025-03-01',
    documents: ['Medical records', 'Income proof', 'Residency proof']
  },
  {
    id: 2,
    name: 'Caregiver Support Grant',
    description: 'Monthly stipend for primary caregivers',
    eligibility: ['Full-time caregiver', 'Related to patient', 'Local resident'],
    status: 'pending',
    progress: 30,
    nextStep: 'Schedule phone interview',
    deadline: '2025-03-15',
    documents: ['Caregiver verification', 'Relationship proof']
  },
  {
    id: 3,
    name: 'Equipment Assistance Program',
    description: 'Coverage for medical equipment and supplies',
    eligibility: ['Any income level', 'Prescribed equipment needed'],
    status: 'approved',
    progress: 100,
    nextStep: 'None - Approved',
    deadline: 'N/A',
    documents: ['Equipment prescription', 'Doctor\'s note']
  }
];

export const chatResponses = {
  welcome: "Hi! I'm here to help you navigate through available support programs. How can I assist you today?",
  default: "I understand you're looking for assistance. Let me help guide you through the process.",
  programInfo: "We have several programs that might help you. Would you like to learn more about any specific program?",
  documents: "Most programs require basic documentation like ID, proof of income, and medical records. I can help you prepare these.",
  support: "Our support team is available 24/7. Would you like me to connect you with a specialist?"
};

export const resources = [
  {
    id: 1,
    title: 'Local Support Groups',
    description: 'Connect with other caregivers in your area',
    type: 'community',
    link: '#'
  },
  {
    id: 2,
    title: 'Documentation Guide',
    description: 'Learn what documents you need and how to prepare them',
    type: 'guide',
    link: '#'
  },
  {
    id: 3,
    title: 'Caregiver Training',
    description: 'Free online courses for caregivers',
    type: 'education',
    link: '#'
  }
];
