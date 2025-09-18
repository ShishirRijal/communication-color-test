import React from 'react';
import { ColorResult } from '../types/quiz';

interface ResultsCardProps {
  result: ColorResult;
  assessmentType: 'quick' | 'thorough';
}

const colorClasses = {
  red: 'from-red-500 to-red-600 border-red-200',
  yellow: 'from-yellow-500 to-yellow-600 border-yellow-200',
  green: 'from-green-500 to-green-600 border-green-200',
  blue: 'from-blue-500 to-blue-600 border-blue-200'
};

const bgClasses = {
  red: 'from-red-50 to-red-100',
  yellow: 'from-yellow-50 to-yellow-100',
  green: 'from-green-50 to-green-100',
  blue: 'from-blue-50 to-blue-100'
};

export const ResultsCard: React.FC<ResultsCardProps> = ({ result, assessmentType }) => {
  return (
    <div className="animate-fadeInUp">
      <div className={`bg-gradient-to-br ${bgClasses[result.color]} rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto border-2 ${colorClasses[result.color].split(' ')[2]}`}>
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mb-4">
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
              assessmentType === 'quick' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-blue-100 text-blue-800'
            }`}>
              {assessmentType === 'quick' ? 'Quick Assessment Result' : 'Thorough Assessment Result'}
            </span>
          </div>
          <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-r ${colorClasses[result.color].split(' ').slice(0, 2).join(' ')} flex items-center justify-center mb-4 shadow-lg`}>
            <span className="text-4xl font-bold text-white">
              {result.color.toUpperCase().charAt(0)}
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">{result.title}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {result.description}
          </p>
          {assessmentType === 'quick' && (
            <p className="text-sm text-gray-500 mt-4 italic">
              Want more detailed insights? Try our thorough assessment for deeper analysis.
            </p>
          )}
        </div>

        {/* Percentage */}
        <div className="text-center mb-8">
          <div className="inline-block bg-white rounded-2xl px-6 py-3 shadow-lg">
            <span className="text-3xl font-bold text-gray-800">{result.percentage}%</span>
            <span className="text-lg text-gray-600 ml-2">match</span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Traits */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${colorClasses[result.color].split(' ').slice(0, 2).join(' ')} mr-3`}></div>
              Key Traits
            </h3>
            <ul className="space-y-3">
              {result.traits.map((trait, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <div className={`w-2 h-2 rounded-full bg-${result.color}-500 mr-3`}></div>
                  {trait}
                </li>
              ))}
            </ul>
          </div>

          {/* Strengths */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-green-500 mr-3"></div>
              Strengths
            </h3>
            <ul className="space-y-3">
              {result.strengths.map((strength, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
                  {strength}
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 mr-3"></div>
              Growth Areas
            </h3>
            <ul className="space-y-3">
              {result.challenges.map((challenge, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-orange-500 mr-3"></div>
                  {challenge}
                </li>
              ))}
            </ul>
          </div>

          {/* Communication Tips */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-purple-500 mr-3"></div>
              How Others Should Communicate With You
            </h3>
            <ul className="space-y-3">
              {result.communication.map((tip, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button 
            onClick={() => window.location.reload()} 
            className="px-8 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Take Quiz Again
          </button>
          <button 
            onClick={() => window.print()} 
            className={`px-8 py-3 bg-gradient-to-r ${colorClasses[result.color].split(' ').slice(0, 2).join(' ')} text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
          >
            Save Results
          </button>
        </div>
      </div>
    </div>
  );
};