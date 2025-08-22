import { Link, useLocation } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search,
  CreditCard,
  Folder,
  Triangle,
  MessageSquare,
  Library,
  Plus,
  Settings
} from 'lucide-react';

const projects = [
  { name: 'Orbital Oddysey', active: true, icon: '🚀', alert: true },
  { name: 'Digital Product Launch', active: false, icon: '📱', alert: true },
  { name: 'Brand Refresh', active: false, icon: '🎨', alert: false },
  { name: 'Social Media Strategy', active: false, icon: '📱', alert: false }
];

export const Sidebar = () => {
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';
  const isChat = location.pathname === '/chat';

  return (
    <div className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <Avatar className="w-8 h-8 bg-gradient-primary">
            <div className="w-full h-full rounded-full bg-gradient-primary flex items-center justify-center">
              <span className="text-xs font-bold text-primary-foreground">I</span>
            </div>
          </Avatar>
          <div className="flex-1">
            <p className="font-semibold text-sidebar-foreground">Intellisys</p>
            <p className="text-xs text-muted-foreground">12 members</p>
          </div>
          <Button variant="ghost" size="sm" className="w-6 h-6 p-0">
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="px-4 py-3 border-b border-sidebar-border">
        <div className="flex gap-1">
          <Link 
            to="/dashboard"
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              isDashboard 
                ? 'bg-primary/20 text-primary border border-primary/30' 
                : 'text-muted-foreground hover:text-sidebar-foreground hover:bg-sidebar-accent/50'
            }`}
          >
            <Triangle className="w-4 h-4" />
            Artificium
          </Link>
          <Link 
            to="/chat"
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              isChat 
                ? 'bg-primary/20 text-primary border border-primary/30' 
                : 'text-muted-foreground hover:text-sidebar-foreground hover:bg-sidebar-accent/50'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            Chat
          </Link>
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors">
            <Library className="w-4 h-4" />
            Library
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="px-4 py-3 border-b border-sidebar-border">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search"
            className="pl-10 bg-sidebar-accent/50 border-sidebar-border text-sm"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <Badge variant="outline" className="text-xs px-1.5 py-0.5 border-sidebar-border">
              ⌘S
            </Badge>
          </div>
        </div>
      </div>

      {/* General Section */}
      <div className="px-4 py-3 border-b border-sidebar-border">
        <p className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wider">
          General
        </p>
        <button className="flex items-center gap-3 w-full p-2 rounded-lg text-sm text-muted-foreground hover:text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors">
          <CreditCard className="w-4 h-4" />
          Billing
        </button>
      </div>

      {/* Projects Section */}
      <div className="flex-1 px-4 py-3">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Projects
          </p>
          <Button variant="ghost" size="sm" className="w-5 h-5 p-0">
            <Plus className="w-3 h-3" />
          </Button>
        </div>
        
        <div className="space-y-1">
          {projects.map((project, index) => (
            <button
              key={index}
              className={`flex items-center gap-3 w-full p-2 rounded-lg text-sm transition-colors ${
                project.active
                  ? 'bg-primary/20 text-primary'
                  : 'text-muted-foreground hover:text-sidebar-foreground hover:bg-sidebar-accent/50'
              }`}
            >
              <div className="flex items-center gap-2 flex-1">
                <span className="text-base">{project.icon}</span>
                <span className="truncate">{project.name}</span>
              </div>
              {project.alert && (
                <div className="w-2 h-2 rounded-full bg-destructive flex-shrink-0" />
              )}
            </button>
          ))}
          
          <button className="flex items-center gap-3 w-full p-2 rounded-lg text-sm text-muted-foreground hover:text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors">
            <Plus className="w-4 h-4" />
            Add new project
          </button>
        </div>
      </div>

      {/* User Section */}
      <div className="px-4 py-3 border-t border-sidebar-border">
        <div className="flex items-center gap-3">
          <Avatar className="w-8 h-8 bg-gradient-primary">
            <div className="w-full h-full rounded-full bg-gradient-primary flex items-center justify-center">
              <span className="text-xs font-bold text-primary-foreground">R</span>
            </div>
          </Avatar>
          <div className="flex-1">
            <p className="font-medium text-sidebar-foreground text-sm">Ryan Lee</p>
            <p className="text-xs text-muted-foreground">Premium</p>
          </div>
          <Button variant="ghost" size="sm" className="w-6 h-6 p-0">
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};