import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Sidebar } from '@/components/Sidebar';
import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Image as ImageIcon,
  Code,
  PenTool,
  Lightbulb,
  Video,
  Send,
  Mic,
  Settings
} from 'lucide-react';

const chatOptions = [
  {
    title: 'Image generation',
    icon: <ImageIcon className="w-6 h-6" />,
    description: 'Create stunning visuals and graphics'
  },
  {
    title: 'Code engineering',
    icon: <Code className="w-6 h-6" />,
    description: 'Build and optimize code solutions'
  },
  {
    title: 'Content creation',
    icon: <PenTool className="w-6 h-6" />,
    description: 'Write compelling copy and content'
  },
  {
    title: 'Idea generation',
    icon: <Lightbulb className="w-6 h-6" />,
    description: 'Brainstorm creative concepts'
  },
  {
    title: 'Audio/Video creation',
    icon: <Video className="w-6 h-6" />,
    description: 'Produce multimedia content'
  }
];

const Chat = () => {
  const [message, setMessage] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.chat-message',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.2
        }
      );

      gsap.fromTo('.option-card',
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: 'back.out(1.7)',
          stagger: 0.1,
          delay: 0.5
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle message sending logic here
      setMessage('');
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <main ref={containerRef} className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="border-b border-border p-6">
          <div className="flex items-center gap-3">
            <Avatar className="w-10 h-10 bg-gradient-primary">
              <div className="w-full h-full rounded-full bg-gradient-primary flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground">A</span>
              </div>
            </Avatar>
            <div>
              <h2 className="text-lg font-semibold">Artificium</h2>
              <p className="text-sm text-muted-foreground">Marketing Campaign for a new TV series Launch</p>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div ref={messagesRef} className="flex-1 p-6 overflow-auto">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* AI Message */}
            <div className="chat-message flex gap-4">
              <Avatar className="w-8 h-8 bg-gradient-primary">
                <div className="w-full h-full rounded-full bg-gradient-primary flex items-center justify-center">
                  <span className="text-xs font-bold text-primary-foreground">A</span>
                </div>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">Artificium · Just now</p>
                <p className="text-foreground">Of course! What kind of ideas are you looking for?</p>
              </div>
            </div>

            {/* User Message */}
            <div className="chat-message flex gap-4">
              <Avatar className="w-8 h-8 bg-muted">
                <div className="w-full h-full rounded-full bg-muted flex items-center justify-center">
                  <span className="text-xs font-bold text-muted-foreground">R</span>
                </div>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">Ryan Lee · Now ago</p>
                <p className="text-foreground">I'm not sure, maybe something related to the spaceship?</p>
              </div>
            </div>

            {/* AI Response with Options */}
            <div className="chat-message flex gap-4">
              <Avatar className="w-8 h-8 bg-gradient-primary">
                <div className="w-full h-full rounded-full bg-gradient-primary flex items-center justify-center">
                  <span className="text-xs font-bold text-primary-foreground">A</span>
                </div>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">Artificium · Just now</p>
                <p className="text-foreground mb-6">
                  Okay, let's explore some options related to the spaceship. Here are some things I can do for you:
                </p>

                {/* Option Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                  {chatOptions.map((option, index) => (
                    <Card 
                      key={index}
                      className="option-card p-4 bg-card/50 border-border hover:border-primary/30 hover:bg-card/80 transition-all duration-300 cursor-pointer group"
                    >
                      <div className="flex flex-col items-center text-center space-y-3">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:text-primary-glow transition-colors">
                          {option.icon}
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold mb-1">{option.title}</h3>
                          <p className="text-xs text-muted-foreground">{option.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <Button variant="outline" size="sm" className="text-xs">
                    Regenerate response
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs">
                    Modify
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Input */}
        <div className="border-t border-border p-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3">
              <Avatar className="w-8 h-8 bg-muted">
                <div className="w-full h-full rounded-full bg-muted flex items-center justify-center">
                  <span className="text-xs font-bold text-muted-foreground">R</span>
                </div>
              </Avatar>
              <div className="flex-1 flex items-center gap-2">
                <div className="flex-1 relative">
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="You can ask me anything, I am here to help"
                    className="pr-12 bg-background/50 border-border"
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
                    <Button size="sm" variant="ghost" className="w-8 h-8 p-0">
                      <Mic className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <Button 
                  size="sm" 
                  onClick={handleSendMessage}
                  className="w-8 h-8 p-0 bg-primary hover:bg-primary-glow"
                >
                  <Send className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="ghost" className="w-8 h-8 p-0">
                  <Settings className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Chat;