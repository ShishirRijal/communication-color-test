export interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    scores: {
      red: number;
      yellow: number;
      green: number;
      blue: number;
    };
  }[];
}

export interface QuizState {
  currentQuestion: number;
  answers: number[];
  scores: {
    red: number;
    yellow: number;
    green: number;
    blue: number;
  };
  isComplete: boolean;
  isCalculating: boolean;
  assessmentType: 'quick' | 'thorough';
}

export interface ColorResult {
  color: 'red' | 'yellow' | 'green' | 'blue';
  percentage: number;
  title: string;
  description: string;
  traits: string[];
  strengths: string[];
  challenges: string[];
  communication: string[];
}