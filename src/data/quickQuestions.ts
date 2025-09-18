import { Question } from '../types/quiz';

export const quickQuestions: Question[] = [
  {
    id: 1,
    text: "Are you more introverted or extroverted?",
    options: [
      {
        text: "Introverted - I prefer quiet environments and recharge by spending time alone",
        scores: { red: 0, yellow: 0, green: 2, blue: 2 }
      },
      {
        text: "Extroverted - I gain energy from being around people and social interactions",
        scores: { red: 2, yellow: 2, green: 0, blue: 0 }
      }
    ]
  },
  {
    id: 2,
    text: "Are you more logical or emotional in your approach?",
    options: [
      {
        text: "Logical - I make decisions based on facts, data, and rational analysis",
        scores: { red: 2, yellow: 0, green: 2, blue: 0 }
      },
      {
        text: "Emotional - I consider feelings, relationships, and personal values in decisions",
        scores: { red: 0, yellow: 2, green: 0, blue: 2 }
      }
    ]
  },
  {
    id: 3,
    text: "Do you speak more deliberately or quickly?",
    options: [
      {
        text: "Deliberately - I take time to think before speaking and choose my words carefully",
        scores: { red: 0, yellow: 0, green: 2, blue: 2 }
      },
      {
        text: "Quickly - I speak at a fast pace and often think out loud",
        scores: { red: 2, yellow: 2, green: 0, blue: 0 }
      }
    ]
  }
];