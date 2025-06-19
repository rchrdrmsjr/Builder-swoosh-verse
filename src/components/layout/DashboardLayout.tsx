import { useState, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const location = useLocation();

  // Check authentication
  const user = localStorage.getItem("user");
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Auto-collapse sidebar on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSidebarCollapsed(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-screen bg-gray-50 flex overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile sidebar overlay */}
        {sidebarCollapsed && window.innerWidth < 1024 && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setSidebarCollapsed(true)}
          />
        )}

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          <div
            className={cn(
              "h-full",
              // Add page-specific classes based on route
              location.pathname === "/dashboard" &&
                "bg-gradient-to-br from-gray-50 to-gray-100",
            )}
          >
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
