import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full bg-gray-200 rounded-full h-3 mb-8 overflow-hidden">
      <div 
        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-700 ease-out"
        style={{ width: `${percentage}%` }}
      />
      <div className="flex justify-between mt-2 text-sm text-gray-600">
        <span>Question {current} of {total}</span>
        <span>{Math.round(percentage)}%</span>
      </div>
    </div>
  );
};