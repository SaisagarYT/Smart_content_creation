import { Link, useLocation } from 'react-router-dom';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';
import { 
  Search,
  CreditCard,
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

export const AppSidebar = () => {
  const location = useLocation();
  const { open, setOpen } = useSidebar();
  const collapsed = !open;
  const isDashboard = location.pathname === '/dashboard';
  const isChat = location.pathname === '/chat';

  return (
    <Sidebar className={collapsed ? "w-14" : "w-64"} collapsible="icon">
      <SidebarContent className="bg-sidebar border-r border-sidebar-border">
        {/* Header */}
        <div className="p-4 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <Avatar className="w-8 h-8 bg-gradient-primary">
              <div className="w-full h-full rounded-full bg-gradient-primary flex items-center justify-center">
                <span className="text-xs font-bold text-primary-foreground">I</span>
              </div>
            </Avatar>
            {!collapsed && (
              <div className="flex-1">
                <p className="font-semibold text-sidebar-foreground">Intellisys</p>
                <p className="text-xs text-muted-foreground">12 members</p>
              </div>
            )}
            <Button variant="ghost" size="sm" className="w-6 h-6 p-0">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link 
                    to="/dashboard"
                    className={`flex items-center gap-2 transition-colors ${
                      isDashboard 
                        ? 'bg-primary/20 text-primary border border-primary/30' 
                        : 'text-muted-foreground hover:text-sidebar-foreground hover:bg-sidebar-accent/50'
                    }`}
                  >
                    <Triangle className="w-4 h-4" />
                    {!collapsed && <span>Artificium</span>}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link 
                    to="/chat"
                    className={`flex items-center gap-2 transition-colors ${
                      isChat 
                        ? 'bg-primary/20 text-primary border border-primary/30' 
                        : 'text-muted-foreground hover:text-sidebar-foreground hover:bg-sidebar-accent/50'
                    }`}
                  >
                    <MessageSquare className="w-4 h-4" />
                    {!collapsed && <span>Chat</span>}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="text-muted-foreground hover:text-sidebar-foreground hover:bg-sidebar-accent/50">
                  <Library className="w-4 h-4" />
                  {!collapsed && <span>Library</span>}
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {!collapsed && (
          <>
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
            <SidebarGroup>
              <SidebarGroupLabel className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                General
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="text-muted-foreground hover:text-sidebar-foreground hover:bg-sidebar-accent/50">
                      <CreditCard className="w-4 h-4" />
                      <span>Billing</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </>
        )}

        {/* Projects Section */}
        <SidebarGroup className="flex-1">
          <div className="flex items-center justify-between px-4">
            <SidebarGroupLabel className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              {!collapsed ? "Projects" : "P"}
            </SidebarGroupLabel>
            <Button variant="ghost" size="sm" className="w-5 h-5 p-0">
              <Plus className="w-3 h-3" />
            </Button>
          </div>
          <SidebarGroupContent>
            <SidebarMenu>
              {projects.map((project, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton 
                    className={`transition-colors ${
                      project.active
                        ? 'bg-primary/20 text-primary'
                        : 'text-muted-foreground hover:text-sidebar-foreground hover:bg-sidebar-accent/50'
                    }`}
                  >
                    <span className="text-base">{project.icon}</span>
                    {!collapsed && (
                      <>
                        <span className="truncate">{project.name}</span>
                        {project.alert && (
                          <div className="w-2 h-2 rounded-full bg-destructive flex-shrink-0 ml-auto" />
                        )}
                      </>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem>
                <SidebarMenuButton className="text-muted-foreground hover:text-sidebar-foreground hover:bg-sidebar-accent/50">
                  <Plus className="w-4 h-4" />
                  {!collapsed && <span>Add new project</span>}
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* User Section */}
        <div className="px-4 py-3 border-t border-sidebar-border">
          <div className="flex items-center gap-3">
            <Avatar className="w-8 h-8 bg-gradient-primary">
              <div className="w-full h-full rounded-full bg-gradient-primary flex items-center justify-center">
                <span className="text-xs font-bold text-primary-foreground">R</span>
              </div>
            </Avatar>
            {!collapsed && (
              <div className="flex-1">
                <p className="font-medium text-sidebar-foreground text-sm">Ryan Lee</p>
                <p className="text-xs text-muted-foreground">Premium</p>
              </div>
            )}
            <Button variant="ghost" size="sm" className="w-6 h-6 p-0">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
};