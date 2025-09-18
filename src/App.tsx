import React, { useState, useEffect } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { QuestionCard } from './components/QuestionCard';
import { ProgressBar } from './components/ProgressBar';
import { LoadingAnimation } from './components/LoadingAnimation';
import { ResultsCard } from './components/ResultsCard';
import { questions } from './data/questions';
import { quickQuestions } from './data/quickQuestions';
import { colorResults } from './data/results';
import { QuizState, ColorResult } from './types/quiz';

function App() {
  const [gameState, setGameState] = useState<'welcome' | 'quiz' | 'loading' | 'results'>('welcome');
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    answers: [],
    scores: { red: 0, yellow: 0, green: 0, blue: 0 },
    isComplete: false,
    isCalculating: false,
    assessmentType: 'thorough'
  });
  const [result, setResult] = useState<ColorResult | null>(null);

  const handleStart = (type: 'quick' | 'thorough') => {
    setQuizState(prev => ({
      ...prev,
      assessmentType: type
    }));
    setGameState('quiz');
  };

  const handleAnswer = (optionIndex: number) => {
    const currentQuestions = quizState.assessmentType === 'quick' ? quickQuestions : questions;
    const currentQuestion = currentQuestions[quizState.currentQuestion];
    const selectedOption = currentQuestion.options[optionIndex];
    
    const newScores = {
      red: quizState.scores.red + selectedOption.scores.red,
      yellow: quizState.scores.yellow + selectedOption.scores.yellow,
      green: quizState.scores.green + selectedOption.scores.green,
      blue: quizState.scores.blue + selectedOption.scores.blue
    };

    const newAnswers = [...quizState.answers];
    newAnswers[quizState.currentQuestion] = optionIndex;

    setQuizState(prev => ({
      ...prev,
      answers: newAnswers,
      scores: newScores
    }));

    // Auto-advance after a short delay for better UX
    setTimeout(() => {
      if (quizState.currentQuestion < currentQuestions.length - 1) {
        setQuizState(prev => ({
          ...prev,
          currentQuestion: prev.currentQuestion + 1
        }));
      } else {
        // Quiz complete
        setGameState('loading');
      }
    }, 500);
  };

  const calculateResult = () => {
    const scores = quizState.scores;
    const maxScore = Math.max(scores.red, scores.yellow, scores.green, scores.blue);
    const totalScore = scores.red + scores.yellow + scores.green + scores.blue;
    
    let dominantColor: 'red' | 'yellow' | 'green' | 'blue' = 'red';
    
    if (scores.yellow === maxScore) dominantColor = 'yellow';
    else if (scores.green === maxScore) dominantColor = 'green';
    else if (scores.blue === maxScore) dominantColor = 'blue';
    
    const percentage = Math.round((maxScore / totalScore) * 100);
    
    const colorResult = { ...colorResults[dominantColor] };
    colorResult.percentage = percentage;
    
    setResult(colorResult);
    setGameState('results');
  };

  const handleLoadingComplete = () => {
    calculateResult();
  };

  // Update document title based on state
  useEffect(() => {
    const assessmentName = quizState.assessmentType === 'quick' ? 'Quick' : 'Thorough';
    const titles = {
      welcome: 'Communication Color Assessment',
      quiz: `Question ${quizState.currentQuestion + 1} - ${assessmentName} Assessment`,
      loading: 'Calculating Results...',
      results: `You are ${result?.title || 'a Communication Color'}`
    };
    document.title = titles[gameState];
  }, [gameState, quizState.currentQuestion, quizState.assessmentType, result]);

  return (
    <div className="min-h-screen">
      {gameState === 'welcome' && <WelcomeScreen onStart={handleStart} />}
      
      {gameState === 'quiz' && (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                quizState.assessmentType === 'quick' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-blue-100 text-blue-800'
              }`}>
                {quizState.assessmentType === 'quick' ? 'Quick Assessment' : 'Thorough Assessment'}
              </span>
            </div>
            <ProgressBar 
              current={quizState.currentQuestion + 1} 
              total={quizState.assessmentType === 'quick' ? quickQuestions.length : questions.length} 
            />
            <QuestionCard
              question={quizState.assessmentType === 'quick' ? quickQuestions[quizState.currentQuestion] : questions[quizState.currentQuestion]}
              onAnswer={handleAnswer}
              selectedAnswer={quizState.answers[quizState.currentQuestion]}
            />
          </div>
        </div>
      )}
      
      {gameState === 'loading' && <LoadingAnimation onComplete={handleLoadingComplete} />}
      
      {gameState === 'results' && result && (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-8 px-4">
          <ResultsCard result={result} assessmentType={quizState.assessmentType} />
        </div>
      )}
    </div>
  );
}

export default App;