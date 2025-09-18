import React from 'react';
import { Palette, Users, Brain, Target } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: (type: 'quick' | 'thorough') => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Section */}
        <div className="animate-fadeInUp">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                <Palette className="w-16 h-16 text-gray-700" />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Discover Your
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {' '}Communication Color
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Unlock the secret to connecting with anyone by discovering your unique communication style. 
            There are four types of communicators that every single person can be categorized into.
          </p>
        </div>

        {/* Four Colors Overview */}
        <div className="mb-16 animate-slideInUp">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">The Four Communication Colors</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-red-500">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-red-400 to-red-500 rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-red-600 mb-3 text-center">Red - The Driver</h3>
              <p className="text-gray-700 text-center mb-4 font-medium">Driven by power and results</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Bold and decisive</li>
                <li>• Results-oriented</li>
                <li>• Competitive nature</li>
                <li>• Direct communication</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-yellow-500">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-yellow-600 mb-3 text-center">Yellow - The Influencer</h3>
              <p className="text-gray-700 text-center mb-4 font-medium">Driven by fun and connection</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Enthusiastic and creative</li>
                <li>• Socially confident</li>
                <li>• Optimistic outlook</li>
                <li>• Expressive communication</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-green-500">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-green-600 mb-3 text-center">Green - The Supporter</h3>
              <p className="text-gray-700 text-center mb-4 font-medium">Driven by peace and stability</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Calm and reliable</li>
                <li>• Team-oriented</li>
                <li>• Patient approach</li>
                <li>• Supportive communication</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-blue-500">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-3 text-center">Blue - The Analyst</h3>
              <p className="text-gray-700 text-center mb-4 font-medium">Driven by logic and structure</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Detail-oriented and precise</li>
                <li>• Analytical thinking</li>
                <li>• Quality-focused</li>
                <li>• Systematic communication</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Understanding these four colors will help you form stronger connections with 95% of the people you meet. 
              Each color has unique strengths, challenges, and preferred communication styles.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-12 animate-slideInUp" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Why This Matters</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Better Connections</h3>
              <p className="text-gray-600 text-sm">Connect with 95% of people by speaking their communication language</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-full flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Self-Awareness</h3>
              <p className="text-gray-600 text-sm">Understand your natural communication style and preferences</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Professional Growth</h3>
              <p className="text-gray-600 text-sm">Improve workplace relationships and leadership effectiveness</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onStart('quick')}
              className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10">Quick Assessment</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button
              onClick={() => onStart('thorough')}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10">Thorough Assessment</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
          
          <p className="text-gray-500 mt-4">
            Quick: 3 questions (1 min) • Thorough: 8 questions (3-5 min) • Free & Instant Results
          </p>
        </div>
      </div>
    </div>
  );
};