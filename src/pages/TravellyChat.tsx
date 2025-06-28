
import React from 'react';
import Navbar from '@/components/Navbar';
import ChatInterface from '@/components/ChatInterface';
import { Plane, MapPin, Calendar, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TravellyChat = () => {
  const handleSendMessage = (message: string) => {
    console.log('Travelly received:', message);
    // Here we'll later implement the chain-of-thought logic:
    // 1. Parse user query for travel intent
    // 2. Invoke travel APIs or LLM for recommendations  
    // 3. Format response with itinerary cards
    // 4. Display structured travel information
  };

  const sampleItineraries = [
    {
      title: "Paris Weekend Getaway",
      duration: "3 Days",
      highlights: ["Eiffel Tower", "Louvre Museum", "Seine River Cruise"],
      price: "$1,250"
    },
    {
      title: "Tokyo Cultural Experience", 
      duration: "5 Days",
      highlights: ["Shibuya District", "Traditional Tea Ceremony", "Mount Fuji Day Trip"],
      price: "$2,100"
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex">
        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="border-b bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4">
            <div className="container mx-auto">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <Plane className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">Travelly AI</h1>
                  <p className="text-blue-100 text-sm">Your intelligent travel companion</p>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="flex-1">
            <ChatInterface
              agentName="Travelly AI"
              agentColor="bg-gradient-to-br from-blue-500 to-cyan-500"
              placeholder="Ask me about travel destinations, itineraries, or booking tips..."
              onSendMessage={handleSendMessage}
            />
          </div>
        </div>

        {/* Sidebar with Sample Itineraries */}
        <div className="hidden lg:block w-80 border-l bg-muted/30 p-4 overflow-y-auto">
          <h3 className="font-semibold mb-4 flex items-center">
            <MapPin className="w-4 h-4 mr-2 text-blue-500" />
            Popular Itineraries
          </h3>
          
          <div className="space-y-4">
            {sampleItineraries.map((itinerary, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">{itinerary.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center text-xs text-muted-foreground mb-2">
                    <Calendar className="w-3 h-3 mr-1" />
                    {itinerary.duration}
                  </div>
                  <ul className="text-xs space-y-1 mb-3">
                    {itinerary.highlights.map((highlight, i) => (
                      <li key={i} className="text-muted-foreground">• {highlight}</li>
                    ))}
                  </ul>
                  <div className="text-sm font-semibold text-green-600">
                    From {itinerary.price}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
            <div className="flex items-center mb-2">
              <Users className="w-4 h-4 mr-2 text-blue-500" />
              <span className="text-sm font-medium">Quick Tips</span>
            </div>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Book flights 2-3 months in advance</li>
              <li>• Consider shoulder seasons for better deals</li>
              <li>• Check visa requirements early</li>
              <li>• Pack light and check airline baggage policies</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravellyChat;
