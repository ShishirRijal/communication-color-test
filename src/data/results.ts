import { ColorResult } from '../types/quiz';

export const colorResults: Record<string, ColorResult> = {
  red: {
    color: 'red',
    percentage: 0,
    title: 'The Driver (Red)',
    description: 'You are bold, decisive, and results-driven. You thrive in competitive environments and value efficiency above all else.',
    traits: [
      'Direct and assertive',
      'Goal-oriented',
      'Decisive under pressure',
      'Natural leader',
      'Competitive spirit'
    ],
    strengths: [
      'Gets things done quickly',
      'Makes tough decisions',
      'Drives results and performance',
      'Handles pressure well',
      'Natural leadership abilities'
    ],
    challenges: [
      'May seem too aggressive to others',
      'Can overlook details in pursuit of speed',
      'Might not consider others\' feelings',
      'Impatience with slower processes'
    ],
    communication: [
      'Be direct and concise',
      'Focus on results and outcomes',
      'Skip unnecessary details',
      'Present clear action plans',
      'Respect their time constraints'
    ]
  },
  yellow: {
    color: 'yellow',
    percentage: 0,
    title: 'The Influencer (Yellow)',
    description: 'You are enthusiastic, creative, and people-focused. You bring energy and optimism to every situation.',
    traits: [
      'Enthusiastic and energetic',
      'Creative and innovative',
      'Socially confident',
      'Optimistic outlook',
      'Persuasive communicator'
    ],
    strengths: [
      'Motivates and inspires others',
      'Generates creative solutions',
      'Builds strong relationships',
      'Adapts well to change',
      'Brings positivity to teams'
    ],
    challenges: [
      'May lack attention to detail',
      'Can be overly optimistic',
      'Might struggle with routine tasks',
      'May make impulsive decisions'
    ],
    communication: [
      'Be enthusiastic and positive',
      'Share stories and examples',
      'Keep interactions engaging',
      'Allow for creative expression',
      'Maintain a friendly, personal tone'
    ]
  },
  green: {
    color: 'green',
    percentage: 0,
    title: 'The Supporter (Green)',
    description: 'You are calm, reliable, and team-oriented. You value harmony and stability in all your relationships.',
    traits: [
      'Patient and calm',
      'Reliable and consistent',
      'Team-oriented',
      'Conflict-averse',
      'Supportive of others'
    ],
    strengths: [
      'Creates harmonious environments',
      'Excellent listener and supporter',
      'Maintains steady performance',
      'Builds trust and loyalty',
      'Provides stability to teams'
    ],
    challenges: [
      'May avoid necessary conflicts',
      'Can be resistant to change',
      'Might not voice disagreements',
      'May procrastinate on difficult decisions'
    ],
    communication: [
      'Be patient and supportive',
      'Avoid rushing or pressuring',
      'Listen actively to their concerns',
      'Emphasize team benefits',
      'Provide reassurance and stability'
    ]
  },
  blue: {
    color: 'blue',
    percentage: 0,
    title: 'The Analyst (Blue)',
    description: 'You are precise, analytical, and detail-oriented. You value accuracy and systematic approaches to problem-solving.',
    traits: [
      'Detail-oriented and precise',
      'Analytical and logical',
      'Quality-focused',
      'Systematic approach',
      'Cautious and thoughtful'
    ],
    strengths: [
      'Ensures accuracy and quality',
      'Identifies potential problems',
      'Creates systematic solutions',
      'Maintains high standards',
      'Provides thorough analysis'
    ],
    challenges: [
      'May get stuck in analysis paralysis',
      'Can be overly critical',
      'Might struggle with tight deadlines',
      'May seem cold or detached'
    ],
    communication: [
      'Provide detailed information',
      'Be precise and factual',
      'Allow time for questions',
      'Present logical arguments',
      'Respect their need for accuracy'
    ]
  }
};