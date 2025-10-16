import React from 'react';
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  isBot: boolean;
  message: string;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ isBot, message }) => {
  return (
    <div className={`flex gap-3 ${isBot ? 'bg-gray-50' : 'bg-white'} p-4`}>
      <div className="flex-shrink-0">
        {isBot ? (
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <Bot className="w-5 h-5 text-blue-600" />
          </div>
        ) : (
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-gray-600" />
          </div>
        )}
      </div>
      <div className="flex-1">
        <p className="text-gray-800">{message}</p>
      </div>
    </div>
  );
};