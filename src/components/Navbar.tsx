
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Bot, Home, MessageSquare } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const currentAgent = location.pathname.includes('travelly') ? 'travelly' : 
                      location.pathname.includes('pitchdecker') ? 'pitchdecker' : '';

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                palakAgentVerse
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <Link to="/">
                <Button variant={location.pathname === '/' ? 'default' : 'ghost'} size="sm">
                  <Home className="w-4 h-4 mr-2" />
                  Marketplace
                </Button>
              </Link>
              <Link to="/about">
                <Button variant={location.pathname === '/about' ? 'default' : 'ghost'} size="sm">
                  About
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant={location.pathname === '/pricing' ? 'default' : 'ghost'} size="sm">
                  Pricing
                </Button>
              </Link>
            </div>

            {currentAgent && (
              <Select value={currentAgent}>
                <SelectTrigger className="w-48 hidden sm:flex">
                  <SelectValue placeholder="Select Agent" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="travelly">
                    <div className="flex items-center space-x-2">
                      <MessageSquare className="w-4 h-4" />
                      <span>Travelly AI</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="pitchdecker">
                    <div className="flex items-center space-x-2">
                      <MessageSquare className="w-4 h-4" />
                      <span>PitchDecker AI</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            )}

            <Avatar className="w-8 h-8 cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all">
              <AvatarImage src="/api/placeholder/32/32" alt="User" />
              <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white text-sm">
                U
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
