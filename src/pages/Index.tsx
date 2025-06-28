
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import AgentCard from '@/components/AgentCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Plane, Presentation, Sparkles, TrendingUp, Code, FileText, Calculator, Brain, MessageCircle, Camera, Music, Palette, Shield, Heart, Briefcase, Zap, Globe, Lightbulb, BookOpen } from 'lucide-react';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const agents = [
    {
      id: 'travelly',
      name: 'Travelly AI',
      description: 'Your intelligent travel companion that creates personalized itineraries, finds the best deals, and provides local insights for unforgettable journeys.',
      category: 'Travel & Tourism',
      rating: 4.8,
      users: 15420,
      chatPath: '/travelly-chat',
      gradient: 'bg-gradient-to-br from-blue-500 to-cyan-500',
      icon: <Plane className="w-6 h-6 text-white" />
    },
    {
      id: 'pitchdecker',
      name: 'PitchDecker AI',
      description: 'Transform your business ideas into compelling presentations. Get expert feedback, slide recommendations, and pitch optimization in minutes.',
      category: 'Business & Presentations',
      rating: 4.9,
      users: 8750,
      chatPath: '/pitchdecker-chat',
      gradient: 'bg-gradient-to-br from-purple-500 to-pink-500',
      icon: <Presentation className="w-6 h-6 text-white" />
    },
    {
      id: 'codemaster',
      name: 'CodeMaster AI',
      description: 'Your programming companion that helps debug code, explains algorithms, reviews pull requests, and generates optimized solutions.',
      category: 'Development',
      rating: 4.7,
      users: 12300,
      chatPath: '/codemaster-chat',
      gradient: 'bg-gradient-to-br from-green-500 to-emerald-500',
      icon: <Code className="w-6 h-6 text-white" />
    },
    {
      id: 'writegenius',
      name: 'WriteGenius AI',
      description: 'Professional writing assistant for blogs, emails, reports, and creative content. Perfect grammar, engaging tone, SEO optimization.',
      category: 'Content & Writing',
      rating: 4.6,
      users: 9850,
      chatPath: '/writegenius-chat',
      gradient: 'bg-gradient-to-br from-orange-500 to-red-500',
      icon: <FileText className="w-6 h-6 text-white" />
    },
    {
      id: 'mathsolver',
      name: 'MathSolver AI',
      description: 'Advanced mathematics assistant for calculus, algebra, statistics, and complex problem solving with step-by-step explanations.',
      category: 'Education',
      rating: 4.8,
      users: 7640,
      chatPath: '/mathsolver-chat',
      gradient: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      icon: <Calculator className="w-6 h-6 text-white" />
    },
    {
      id: 'mindcoach',
      name: 'MindCoach AI',
      description: 'Personal wellness and productivity coach providing mindfulness techniques, goal setting, and mental health support.',
      category: 'Health & Wellness',
      rating: 4.5,
      users: 6120,
      chatPath: '/mindcoach-chat',
      gradient: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      icon: <Brain className="w-6 h-6 text-white" />
    },
    {
      id: 'photocraft',
      name: 'PhotoCraft AI',
      description: 'Professional photo editing and enhancement AI. Remove backgrounds, adjust lighting, apply filters, and create stunning visuals.',
      category: 'Creative & Design',
      rating: 4.7,
      users: 11240,
      chatPath: '/photocraft-chat',
      gradient: 'bg-gradient-to-br from-rose-500 to-pink-600',
      icon: <Camera className="w-6 h-6 text-white" />
    },
    {
      id: 'musicmuse',
      name: 'MusicMuse AI',
      description: 'Compose melodies, write lyrics, analyze songs, and get music theory guidance. Perfect for musicians and music enthusiasts.',
      category: 'Creative & Design',
      rating: 4.6,
      users: 5890,
      chatPath: '/musicmuse-chat',
      gradient: 'bg-gradient-to-br from-violet-500 to-purple-600',
      icon: <Music className="w-6 h-6 text-white" />
    },
    {
      id: 'designstudio',
      name: 'DesignStudio AI',
      description: 'Create logos, posters, social media graphics, and brand materials. Get design suggestions and color palette recommendations.',
      category: 'Creative & Design',
      rating: 4.8,
      users: 9320,
      chatPath: '/designstudio-chat',
      gradient: 'bg-gradient-to-br from-amber-500 to-orange-600',
      icon: <Palette className="w-6 h-6 text-white" />
    },
    {
      id: 'cybersentry',
      name: 'CyberSentry AI',
      description: 'Cybersecurity expert providing threat analysis, security audits, password management, and protection strategies for businesses.',
      category: 'Security & Privacy',
      rating: 4.9,
      users: 4560,
      chatPath: '/cybersentry-chat',
      gradient: 'bg-gradient-to-br from-red-600 to-rose-700',
      icon: <Shield className="w-6 h-6 text-white" />
    },
    {
      id: 'fitnesspal',
      name: 'FitnessPal AI',
      description: 'Personal trainer and nutrition coach creating custom workout plans, meal suggestions, and tracking your fitness journey.',
      category: 'Health & Wellness',
      rating: 4.7,
      users: 13750,
      chatPath: '/fitnesspal-chat',
      gradient: 'bg-gradient-to-br from-lime-500 to-green-600',
      icon: <Heart className="w-6 h-6 text-white" />
    },
    {
      id: 'bizstrategist',
      name: 'BizStrategist AI',
      description: 'Business consultant for startups and enterprises. Market analysis, business plans, financial modeling, and growth strategies.',
      category: 'Business & Presentations',
      rating: 4.8,
      users: 6840,
      chatPath: '/bizstrategist-chat',
      gradient: 'bg-gradient-to-br from-slate-600 to-gray-700',
      icon: <Briefcase className="w-6 h-6 text-white" />
    },
    {
      id: 'automateflow',
      name: 'AutomateFlow AI',
      description: 'Workflow automation specialist helping streamline processes, integrate tools, and boost productivity through smart automation.',
      category: 'Productivity',
      rating: 4.6,
      users: 8920,
      chatPath: '/automateflow-chat',
      gradient: 'bg-gradient-to-br from-cyan-600 to-blue-700',
      icon: <Zap className="w-6 h-6 text-white" />
    },
    {
      id: 'linguabridge',
      name: 'LinguaBridge AI',
      description: 'Master new languages with personalized lessons, conversation practice, grammar explanations, and cultural insights.',
      category: 'Education',
      rating: 4.7,
      users: 10480,
      chatPath: '/linguabridge-chat',
      gradient: 'bg-gradient-to-br from-emerald-600 to-teal-700',
      icon: <Globe className="w-6 h-6 text-white" />
    },
    {
      id: 'innovatethink',
      name: 'InnovateThink AI',
      description: 'Innovation catalyst for brainstorming sessions, problem-solving, creative thinking, and turning ideas into actionable plans.',
      category: 'Productivity',
      rating: 4.5,
      users: 5670,
      chatPath: '/innovatethink-chat',
      gradient: 'bg-gradient-to-br from-yellow-500 to-orange-600',
      icon: <Lightbulb className="w-6 h-6 text-white" />
    },
    {
      id: 'studybuddy',
      name: 'StudyBuddy AI',
      description: 'Academic companion for students providing study schedules, exam preparation, research assistance, and learning strategies.',
      category: 'Education',
      rating: 4.8,
      users: 16890,
      chatPath: '/studybuddy-chat',
      gradient: 'bg-gradient-to-br from-blue-600 to-indigo-700',
      icon: <BookOpen className="w-6 h-6 text-white" />
    }
  ];

  const categories = ['All', 'Travel & Tourism', 'Business & Presentations', 'Development', 'Content & Writing', 'Education', 'Health & Wellness', 'Creative & Design', 'Security & Privacy', 'Productivity'];

  // Filter agents based on selected category
  const filteredAgents = selectedCategory === 'All' 
    ? agents 
    : agents.filter(agent => agent.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                Powered by Advanced AI
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              palakAgentVerse
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Discover specialized AI agents designed to supercharge your productivity. 
              One click to start conversations that transform your workflow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-12">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input 
                  placeholder="Search AI agents..." 
                  className="pl-10 h-12 text-base"
                />
              </div>
              <Button size="lg" className="h-12 px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Explore
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span>150K+ Active Users</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-blue-500" />
                <span>16 Specialized Agents</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === selectedCategory ? 'default' : 'outline'}
              size="sm"
              className="rounded-full"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Agents Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {selectedCategory === 'All' ? 'Featured AI Agents' : `${selectedCategory} Agents`}
          </h2>
          <p className="text-lg text-muted-foreground">
            {selectedCategory === 'All' 
              ? 'Handpicked AI specialists ready to assist with your specific needs'
              : `Specialized AI agents for ${selectedCategory.toLowerCase()}`
            }
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {filteredAgents.map((agent) => (
            <AgentCard key={agent.id} {...agent} />
          ))}
          
          {/* Coming Soon Cards - only show when "All" is selected */}
          {selectedCategory === 'All' && (
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 border-2 border-dashed border-gray-300 dark:border-gray-600 flex flex-col items-center justify-center text-center min-h-[300px]">
              <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-xl flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-gray-500" />
              </div>
              <h3 className="font-semibold text-gray-600 dark:text-gray-300 mb-2">More Agents Coming Soon</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                We're building amazing new AI specialists
              </p>
            </div>
          )}
          
          {/* Show message when no agents found for selected category */}
          {filteredAgents.length === 0 && selectedCategory !== 'All' && (
            <div className="col-span-full text-center py-12">
              <h3 className="text-xl font-semibold text-muted-foreground mb-2">
                No agents found for {selectedCategory}
              </h3>
              <p className="text-muted-foreground">
                More agents coming soon for this category!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
