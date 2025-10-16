import React, { useState } from 'react';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { supportData } from './data/supportData';
import { Bot } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
}

function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! How can I help you today?',
      isBot: true,
    },
  ]);

  const findAnswer = (question: string): string => {
    const lowerQuestion = question.toLowerCase();
    const match = supportData.find(
      (qa) => qa.question.toLowerCase().includes(lowerQuestion) || 
              lowerQuestion.includes(qa.question.toLowerCase())
    );
    return match?.answer || "I'm sorry, I couldn't find a specific answer to your question. Please try rephrasing or contact our support team for more help.";
  };

  const handleSendMessage = (message: string) => {
    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        text: message,
        isBot: false,
      },
    ]);

    // Add bot response
    setTimeout(() => {
      const answer = findAnswer(message);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          text: answer,
          isBot: true,
        },
      ]);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-3xl mx-auto py-8 px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-white">Customer Support</h1>
              <p className="text-blue-100 text-sm">Ask me anything</p>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="h-[500px] overflow-y-auto">
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                isBot={message.isBot}
                message={message.text}
              />
            ))}
          </div>

          {/* Input */}
          <ChatInput onSend={handleSendMessage} />
        </div>
      </div>
    </div>
  );
}

export default App;