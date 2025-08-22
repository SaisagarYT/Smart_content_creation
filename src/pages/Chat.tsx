import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { AppSidebar } from '@/components/Sidebar';
import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
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
    <SidebarProvider>
      <div className="flex h-screen bg-background w-full">
        <AppSidebar />
        
        <main ref={containerRef} className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="border-b border-border p-6">
            <div className="flex items-center gap-3">
              <SidebarTrigger className="mr-2" />
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
...
          </div>

          {/* Chat Input */}
          <div className="border-t border-border p-6">
...
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Chat;