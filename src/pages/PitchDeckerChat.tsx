
import React from 'react';
import Navbar from '@/components/Navbar';
import ChatInterface from '@/components/ChatInterface';
import { Presentation, FileText, Download, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const PitchDeckerChat = () => {
  const handleSendMessage = (message: string) => {
    console.log('PitchDecker received:', message);
    // Here we'll later implement the presentation logic:
    // 1. Parse business idea or pitch request
    // 2. Generate slide deck structure
    // 3. Create title, bullet points, and recommendations
    // 4. Offer PDF export functionality
  };

  const sampleDecks = [
    {
      title: "SaaS Startup Pitch",
      slides: 12,
      category: "Technology",
      rating: 4.9,
      description: "Complete pitch deck for B2B SaaS solutions"
    },
    {
      title: "E-commerce Expansion",
      slides: 10,
      category: "Retail",
      rating: 4.7,
      description: "Market expansion strategy for online retailers"
    },
    {
      title: "Green Energy Proposal",
      slides: 15,
      category: "Energy",
      rating: 4.8,
      description: "Sustainable energy investment opportunity"
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex">
        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="border-b bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4">
            <div className="container mx-auto">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <Presentation className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">PitchDecker AI</h1>
                  <p className="text-purple-100 text-sm">Transform ideas into compelling presentations</p>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="flex-1">
            <ChatInterface
              agentName="PitchDecker AI"
              agentColor="bg-gradient-to-br from-purple-500 to-pink-500"
              placeholder="Describe your business idea or pitch concept..."
              onSendMessage={handleSendMessage}
            />
          </div>
        </div>

        {/* Sidebar with Sample Decks */}
        <div className="hidden lg:block w-80 border-l bg-muted/30 p-4 overflow-y-auto">
          <h3 className="font-semibold mb-4 flex items-center">
            <FileText className="w-4 h-4 mr-2 text-purple-500" />
            Featured Pitch Decks
          </h3>
          
          <div className="space-y-4">
            {sampleDecks.map((deck, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-sm">{deck.title}</CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {deck.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs text-muted-foreground mb-3">
                    {deck.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="text-muted-foreground">{deck.slides} slides</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{deck.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="flex-1 text-xs">
                      Preview
                    </Button>
                    <Button size="sm" variant="outline" className="px-2">
                      <Download className="w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
            <div className="flex items-center mb-2">
              <Presentation className="w-4 h-4 mr-2 text-purple-500" />
              <span className="text-sm font-medium">Pitch Tips</span>
            </div>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Start with a compelling problem statement</li>
              <li>• Keep slides visual and minimal text</li>
              <li>• Include clear financial projections</li>
              <li>• End with a strong call to action</li>
              <li>• Practice your delivery timing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PitchDeckerChat;
