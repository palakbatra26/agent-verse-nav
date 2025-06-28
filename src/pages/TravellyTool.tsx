
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plane, MapPin, Calendar, Users, Star, Globe, Clock, DollarSign } from 'lucide-react';

const TravellyTool = () => {
  const features = [
    {
      icon: <MapPin className="w-6 h-6 text-blue-500" />,
      title: "Smart Destinations",
      description: "AI-powered destination recommendations based on your preferences, budget, and travel style."
    },
    {
      icon: <Calendar className="w-6 h-6 text-green-500" />,
      title: "Itinerary Planning",
      description: "Automatically generate detailed day-by-day itineraries with optimal timing and logistics."
    },
    {
      icon: <DollarSign className="w-6 h-6 text-yellow-500" />,
      title: "Budget Optimization",
      description: "Find the best deals on flights, hotels, and activities while staying within your budget."
    },
    {
      icon: <Globe className="w-6 h-6 text-purple-500" />,
      title: "Local Insights",
      description: "Get insider tips, cultural advice, and hidden gems from our extensive travel database."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      location: "San Francisco, CA",
      rating: 5,
      text: "Travelly AI planned my entire European trip in minutes. The recommendations were spot-on and saved me hours of research!"
    },
    {
      name: "Mike Rodriguez",
      location: "Austin, TX",
      rating: 5,
      text: "As a frequent business traveler, Travelly AI helps me discover amazing local spots in every city I visit."
    },
    {
      name: "Emma Thompson",
      location: "London, UK",
      rating: 5,
      text: "The budget optimization feature helped me plan a luxury vacation for half the price I expected to pay."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                <Plane className="w-8 h-8 text-white" />
              </div>
              <Badge variant="secondary" className="px-4 py-2">
                AI Travel Assistant
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-800 bg-clip-text text-transparent">
              Travelly AI Tool
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Your intelligent travel companion that transforms how you plan, book, and experience journeys. 
              From destination discovery to itinerary optimization, let AI handle the details while you focus on the adventure.
            </p>
            
            <div className="flex justify-center space-x-4 mb-12">
              <Link to="/travelly-chat">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                  Start Planning Now
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-blue-500" />
                <span>15,420+ Travelers</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>4.8/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-green-500" />
                <span>Save 10+ Hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Travelly AI combines advanced algorithms with real-world travel data to deliver 
            personalized recommendations that match your unique travel style.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How It Works */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Tell Us Your Preferences</h3>
              <p className="text-sm text-muted-foreground">Share your destination ideas, budget, travel dates, and interests with our AI.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-cyan-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">AI Creates Your Plan</h3>
              <p className="text-sm text-muted-foreground">Our algorithms analyze millions of data points to craft your perfect itinerary.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Book & Enjoy</h3>
              <p className="text-sm text-muted-foreground">Review, customize, and book your trip with confidence. Your adventure awaits!</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">What Travelers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Next Adventure?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of travelers who trust Travelly AI to create unforgettable journeys. 
            Start planning your perfect trip today.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/travelly-chat">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                Start Free Planning
              </Button>
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

export default TravellyTool;
