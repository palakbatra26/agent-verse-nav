
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bot, Users, Zap, Shield, Heart, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "Innovation",
      description: "Cutting-edge AI technology that pushes the boundaries of what's possible."
    },
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: "Community",
      description: "Building connections between users and AI agents for collaborative growth."
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: "Trust",
      description: "Secure, reliable, and transparent AI interactions you can depend on."
    },
    {
      icon: <Heart className="w-6 h-6 text-red-500" />,
      title: "Empathy",
      description: "AI agents designed to understand and respond to human needs with care."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <Globe className="w-4 h-4 mr-2" />
              About AgentVerse
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Revolutionizing AI Interaction
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              AgentVerse is the world's first AI agent marketplace, connecting users with specialized 
              artificial intelligence assistants designed to enhance productivity, creativity, and problem-solving.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We believe that AI should be accessible, specialized, and human-centered. Our mission is to 
            democratize access to advanced AI capabilities by creating a marketplace where every user can 
            find the perfect AI agent for their unique needs.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-2">
                  {value.icon}
                </div>
                <CardTitle className="text-lg">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2024, AgentVerse emerged from a simple observation: while AI technology 
                  was advancing rapidly, most users struggled to find specialized AI tools for their 
                  specific needs.
                </p>
                <p>
                  Our team of AI researchers, designers, and engineers came together with a vision 
                  to create a centralized platform where users could discover, interact with, and 
                  benefit from purpose-built AI agents.
                </p>
                <p>
                  Today, AgentVerse hosts a growing ecosystem of AI agents, each designed to excel 
                  in specific domains - from travel planning to business presentations, coding 
                  assistance to creative writing.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Bot className="w-32 h-32 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">Ready to Explore?</h2>
          <p className="text-muted-foreground mb-6">
            Join thousands of users who are already transforming their workflow with AI agents.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/">
              <Button size="lg">Explore Agents</Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" size="lg">View Pricing</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
