import React from 'react';
import { Question } from '../types/quiz';

interface QuestionCardProps {
  question: Question;
  onAnswer: (optionIndex: number) => void;
  selectedAnswer?: number;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ 
  question, 
  onAnswer, 
  selectedAnswer 
}) => {
  return (
    <div className="animate-slideIn">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center leading-relaxed">
          {question.text}
        </h2>
        
        <div className="space-y-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => onAnswer(index)}
              className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-300 transform hover:scale-[1.02] ${
                selectedAnswer === index
                  ? 'border-blue-500 bg-blue-50 shadow-md'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center">
                <div className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center ${
                  selectedAnswer === index 
                    ? 'border-blue-500 bg-blue-500' 
                    : 'border-gray-300'
                }`}>
                  {selectedAnswer === index && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
                <span className="text-gray-700 leading-relaxed">{option.text}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};