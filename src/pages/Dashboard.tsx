import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Sidebar } from '@/components/Sidebar';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Code, 
  Image as ImageIcon, 
  Settings, 
  PenTool,
  Mail,
  FileBarChart,
  Newspaper,
  Hash,
  Brain,
  TrendingUp,
  Share2,
  Database,
  TestTube,
  GitBranch,
  Monitor
} from 'lucide-react';

const starterPackItems = [
  {
    title: 'Creative Assets',
    icon: <ImageIcon className="w-6 h-6" />,
    items: [
      { name: 'UI wireframe', icon: <Monitor className="w-4 h-4" /> },
      { name: 'Brochure design', icon: <FileText className="w-4 h-4" /> },
      { name: 'Social media', icon: <Share2 className="w-4 h-4" /> },
      { name: 'Brand guidelines', icon: <PenTool className="w-4 h-4" /> }
    ]
  },
  {
    title: 'Developer Tools',
    icon: <Code className="w-6 h-6" />,
    items: [
      { name: 'API Integration', icon: <Settings className="w-4 h-4" /> },
      { name: 'Test automation', icon: <TestTube className="w-4 h-4" /> },
      { name: 'DB optimization', icon: <Database className="w-4 h-4" /> },
      { name: 'Code review', icon: <GitBranch className="w-4 h-4" /> }
    ]
  },
  {
    title: 'Content Creation',
    icon: <PenTool className="w-6 h-6" />,
    items: [
      { name: 'Product description', icon: <FileText className="w-4 h-4" /> },
      { name: 'E-mail copy', icon: <Mail className="w-4 h-4" /> },
      { name: 'Whitepaper', icon: <FileBarChart className="w-4 h-4" /> },
      { name: 'Press release', icon: <Newspaper className="w-4 h-4" /> }
    ]
  },
  {
    title: 'Idea Generation',
    icon: <Brain className="w-6 h-6" />,
    items: [
      { name: 'Hashtag ideas', icon: <Hash className="w-4 h-4" /> },
      { name: 'Brainstorming', icon: <Brain className="w-4 h-4" /> },
      { name: 'Trend analysis', icon: <TrendingUp className="w-4 h-4" /> },
      { name: 'Social media posts', icon: <Share2 className="w-4 h-4" /> }
    ]
  }
];

const Dashboard = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.starter-pack-card',
        { y: 60, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.15
        }
      );

      gsap.fromTo('.pack-item',
        { x: 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.05,
          delay: 0.4
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <main ref={containerRef} className="flex-1 p-8 overflow-auto">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Innovation Starter Pack</h1>
            <p className="text-muted-foreground text-lg">
              Kickstart your innovation process with our comprehensive selection of predefined prompts.
            </p>
          </div>

          {/* Starter Pack Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {starterPackItems.map((category, index) => (
              <Card 
                key={index}
                className="starter-pack-card card-gradient p-6 border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex}
                      className="pack-item flex items-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-primary/10 transition-colors cursor-pointer group"
                    >
                      <div className="text-muted-foreground group-hover:text-primary transition-colors">
                        {item.icon}
                      </div>
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <Badge variant="outline" className="px-4 py-2 text-sm border-primary/20 bg-primary/5">
              Ready to get started?
            </Badge>
            <p className="text-muted-foreground mt-4">
              Select any prompt above to begin your creative journey with AI assistance.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;