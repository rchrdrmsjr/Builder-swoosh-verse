import { NavLink, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Calendar,
  MapPin,
  BookOpen,
  Users,
  Settings,
  LogOut,
  GraduationCap,
  ChevronLeft,
} from "lucide-react";
import { useState } from "react";

interface SidebarProps {
  collapsed?: boolean;
  onToggleCollapse?: () => void;
}

const navigationItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    description: "Overview and analytics",
  },
  {
    title: "Room Scheduling",
    href: "/rooms",
    icon: MapPin,
    description: "Manage classroom bookings",
  },
  {
    title: "Event Management",
    href: "/events",
    icon: Calendar,
    description: "Create and manage events",
  },
  {
    title: "E-Library",
    href: "/library",
    icon: BookOpen,
    description: "Digital resources management",
    badge: "Coming Soon",
  },
  {
    title: "User Management",
    href: "/users",
    icon: Users,
    description: "Manage staff and students",
  },
];

export default function Sidebar({
  collapsed = false,
  onToggleCollapse,
}: SidebarProps) {
  const navigate = useNavigate();
  const [user] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : { username: "admin", role: "admin" };
  });

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div
      className={cn(
        "bg-white border-r border-gray-200 flex flex-col transition-all duration-300 ease-in-out",
        collapsed ? "w-16" : "w-64",
      )}
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            {!collapsed && (
              <div>
                <h2 className="text-lg font-bold text-gray-900">EduManage</h2>
                <p className="text-xs text-gray-500 capitalize">
                  {user.role} Portal
                </p>
              </div>
            )}
          </div>

          {onToggleCollapse && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggleCollapse}
              className="p-1.5 hover:bg-gray-100"
            >
              <ChevronLeft
                className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  collapsed && "rotate-180",
                )}
              />
            </Button>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2" style={{ padding: "17px" }}>
        {navigationItems.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            className={({ isActive }) =>
              cn(
                "flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group relative",
                isActive
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "text-gray-700 hover:bg-gray-50 hover:text-gray-900",
                collapsed && "justify-center px-2",
              )
            }
          >
            {({ isActive }) => (
              <>
                <item.icon
                  className={cn(
                    "flex-shrink-0 w-5 h-5",
                    isActive
                      ? "text-white"
                      : "text-gray-400 group-hover:text-gray-600",
                  )}
                />

                {!collapsed && (
                  <>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span>{item.title}</span>
                        {item.badge && (
                          <span className="text-xs px-1.5 py-0.5 bg-warning-100 text-warning-700 rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p
                        className={cn(
                          "text-xs mt-0.5",
                          isActive ? "text-white/80" : "text-gray-500",
                        )}
                      >
                        {item.description}
                      </p>
                    </div>
                  </>
                )}

                {/* Tooltip for collapsed state */}
                {collapsed && (
                  <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                    {item.title}
                  </div>
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-gray-100">
        {!collapsed && (
          <div className="flex items-center space-x-3 px-3 py-2 mb-3">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-education-400 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-white">
                {user.username.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {user.username}
              </p>
              <p className="text-xs text-gray-500 capitalize">{user.role}</p>
            </div>
          </div>
        )}

        <div className="space-y-1">
          {!collapsed && (
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            >
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
          )}

          <Button
            variant="ghost"
            size="sm"
            onClick={handleLogout}
            className={cn(
              "text-gray-600 hover:text-red-600 hover:bg-red-50",
              collapsed ? "w-full justify-center px-2" : "w-full justify-start",
            )}
          >
            <LogOut className="w-4 h-4" />
            {!collapsed && <span className="ml-2">Sign Out</span>}
          </Button>
        </div>
      </div>
    </div>
  );
}
