
import React from 'react';
import Navbar from '@/components/Navbar';
import AgentCard from '@/components/AgentCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Plane, Presentation, Sparkles, TrendingUp, Code, FileText, Calculator, Brain, MessageCircle } from 'lucide-react';

const Index = () => {
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
    }
  ];

  const categories = ['All', 'Travel & Tourism', 'Business & Presentations', 'Development', 'Content & Writing', 'Education', 'Health & Wellness'];

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
                <span>50K+ Active Users</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-blue-500" />
                <span>6 Specialized Agents</span>
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
              variant={category === 'All' ? 'default' : 'outline'}
              size="sm"
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Agents Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured AI Agents</h2>
          <p className="text-lg text-muted-foreground">
            Handpicked AI specialists ready to assist with your specific needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {agents.map((agent) => (
            <AgentCard key={agent.id} {...agent} />
          ))}
          
          {/* Coming Soon Cards */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 border-2 border-dashed border-gray-300 dark:border-gray-600 flex flex-col items-center justify-center text-center min-h-[300px]">
            <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-xl flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6 text-gray-500" />
            </div>
            <h3 className="font-semibold text-gray-600 dark:text-gray-300 mb-2">More Agents Coming Soon</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              We're building amazing new AI specialists
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
