
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Star, Users } from 'lucide-react';

interface AgentCardProps {
  id: string;
  name: string;
  description: string;
  category: string;
  rating: number;
  users: number;
  chatPath: string;
  gradient: string;
  icon: React.ReactNode;
}

const AgentCard = ({ id, name, description, category, rating, users, chatPath, gradient, icon }: AgentCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className={`w-12 h-12 rounded-xl ${gradient} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
            {icon}
          </div>
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
        </div>
        <CardTitle className="text-xl font-bold group-hover:text-blue-600 transition-colors">
          {name}
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{rating}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>{users.toLocaleString()}</span>
          </div>
        </div>
        
        <Link to={chatPath}>
          <Button className="w-full group-hover:bg-blue-600 transition-colors">
            <MessageSquare className="w-4 h-4 mr-2" />
            Start Chat
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default AgentCard;
