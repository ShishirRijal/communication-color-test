import React, { useState, useEffect } from 'react';

interface LoadingAnimationProps {
  onComplete: () => void;
}

export const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ onComplete }) => {
  const [stage, setStage] = useState(0);
  const [progress, setProgress] = useState(0);

  const stages = [
    'Analyzing your responses...',
    'Identifying communication patterns...',
    'Calculating personality scores...',
    'Determining your color type...',
    'Generating your personalized results...'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 80);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    const stageTimer = setInterval(() => {
      setStage(prev => (prev + 1) % stages.length);
    }, 1600);

    return () => clearInterval(stageTimer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="text-center max-w-md mx-auto p-8">
        {/* Animated Brain Icon */}
        <div className="relative mb-8">
          <div className="w-24 h-24 mx-auto relative">
            <div className="absolute inset-0 rounded-full border-4 border-blue-200"></div>
            <div className="absolute inset-2 rounded-full border-4 border-purple-200 animate-spin"></div>
            <div className="absolute inset-4 rounded-full border-4 border-pink-200 animate-pulse"></div>
            <div className="absolute inset-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-bounce"></div>
          </div>
        </div>

        {/* Progress Circle */}
        <div className="relative w-32 h-32 mx-auto mb-6">
          <svg className="transform -rotate-90 w-32 h-32">
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              className="text-gray-200"
            />
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              strokeDasharray={`${2 * Math.PI * 56}`}
              strokeDashoffset={`${2 * Math.PI * 56 * (1 - progress / 100)}`}
              className="text-blue-600 transition-all duration-300 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-800">{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Stage Text */}
        <p className="text-lg text-gray-700 animate-pulse mb-4">
          {stages[stage]}
        </p>

        {/* Thinking Dots */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};