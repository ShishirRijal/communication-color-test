import { Question } from '../types/quiz';

export const questions: Question[] = [
  {
    id: 1,
    text: "When meeting new people, I tend to be...",
    options: [
      {
        text: "Outgoing and energetic, easily starting conversations",
        scores: { red: 2, yellow: 3, green: 0, blue: 0 }
      },
      {
        text: "Friendly but reserved, waiting for others to approach",
        scores: { red: 0, yellow: 0, green: 3, blue: 2 }
      },
      {
        text: "Direct and confident, focusing on what we can accomplish",
        scores: { red: 3, yellow: 1, green: 0, blue: 0 }
      },
      {
        text: "Cautious and observant, preferring to listen first",
        scores: { red: 0, yellow: 0, green: 1, blue: 3 }
      }
    ]
  },
  {
    id: 2,
    text: "In decision-making situations, I prefer to...",
    options: [
      {
        text: "Make quick decisions based on gut feeling",
        scores: { red: 3, yellow: 2, green: 0, blue: 0 }
      },
      {
        text: "Take time to analyze all the data and options",
        scores: { red: 0, yellow: 0, green: 1, blue: 3 }
      },
      {
        text: "Seek input from others to ensure harmony",
        scores: { red: 0, yellow: 1, green: 3, blue: 1 }
      },
      {
        text: "Consider the impact on relationships and team morale",
        scores: { red: 0, yellow: 2, green: 2, blue: 1 }
      }
    ]
  },
  {
    id: 3,
    text: "My communication style is typically...",
    options: [
      {
        text: "Direct and to the point, focusing on results",
        scores: { red: 3, yellow: 0, green: 0, blue: 1 }
      },
      {
        text: "Enthusiastic and expressive, sharing ideas freely",
        scores: { red: 1, yellow: 3, green: 0, blue: 0 }
      },
      {
        text: "Patient and supportive, listening more than talking",
        scores: { red: 0, yellow: 0, green: 3, blue: 1 }
      },
      {
        text: "Precise and detailed, ensuring accuracy",
        scores: { red: 0, yellow: 0, green: 0, blue: 3 }
      }
    ]
  },
  {
    id: 4,
    text: "When faced with conflict, I tend to...",
    options: [
      {
        text: "Address it head-on and work towards a solution",
        scores: { red: 3, yellow: 1, green: 0, blue: 1 }
      },
      {
        text: "Try to lighten the mood and find common ground",
        scores: { red: 0, yellow: 3, green: 2, blue: 0 }
      },
      {
        text: "Avoid confrontation and seek peaceful resolution",
        scores: { red: 0, yellow: 0, green: 3, blue: 1 }
      },
      {
        text: "Analyze the situation carefully before responding",
        scores: { red: 1, yellow: 0, green: 1, blue: 3 }
      }
    ]
  },
  {
    id: 5,
    text: "In team meetings, I'm most likely to...",
    options: [
      {
        text: "Take charge and drive the agenda forward",
        scores: { red: 3, yellow: 1, green: 0, blue: 0 }
      },
      {
        text: "Share creative ideas and keep energy high",
        scores: { red: 1, yellow: 3, green: 0, blue: 0 }
      },
      {
        text: "Support others' ideas and maintain group harmony",
        scores: { red: 0, yellow: 1, green: 3, blue: 1 }
      },
      {
        text: "Ask detailed questions and ensure thoroughness",
        scores: { red: 0, yellow: 0, green: 1, blue: 3 }
      }
    ]
  },
  {
    id: 6,
    text: "My ideal work environment would be...",
    options: [
      {
        text: "Fast-paced with clear goals and minimal bureaucracy",
        scores: { red: 3, yellow: 1, green: 0, blue: 0 }
      },
      {
        text: "Collaborative and creative with lots of interaction",
        scores: { red: 0, yellow: 3, green: 1, blue: 0 }
      },
      {
        text: "Stable and supportive with established processes",
        scores: { red: 0, yellow: 0, green: 3, blue: 2 }
      },
      {
        text: "Organized and detailed with time for thorough analysis",
        scores: { red: 0, yellow: 0, green: 1, blue: 3 }
      }
    ]
  },
  {
    id: 7,
    text: "When learning something new, I prefer to...",
    options: [
      {
        text: "Jump in and figure it out through trial and error",
        scores: { red: 3, yellow: 2, green: 0, blue: 0 }
      },
      {
        text: "Learn with others in a fun, interactive way",
        scores: { red: 1, yellow: 3, green: 1, blue: 0 }
      },
      {
        text: "Take my time and get comfortable with each step",
        scores: { red: 0, yellow: 0, green: 3, blue: 1 }
      },
      {
        text: "Study all available materials and documentation first",
        scores: { red: 0, yellow: 0, green: 1, blue: 3 }
      }
    ]
  },
  {
    id: 8,
    text: "People often describe me as...",
    options: [
      {
        text: "Ambitious and results-oriented",
        scores: { red: 3, yellow: 0, green: 0, blue: 1 }
      },
      {
        text: "Optimistic and enthusiastic",
        scores: { red: 1, yellow: 3, green: 1, blue: 0 }
      },
      {
        text: "Reliable and supportive",
        scores: { red: 0, yellow: 1, green: 3, blue: 1 }
      },
      {
        text: "Thoughtful and precise",
        scores: { red: 0, yellow: 0, green: 1, blue: 3 }
      }
    ]
  }
];