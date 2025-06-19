import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Rooms from "./pages/Rooms";
import Events from "./pages/Events";
import Library from "./pages/Library";
import NotFound from "./pages/NotFound";
import DashboardLayout from "./components/layout/DashboardLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Redirect root to dashboard */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          {/* Authentication */}
          <Route path="/login" element={<Login />} />

          {/* Dashboard Routes with Layout */}
          <Route
            path="/dashboard"
            element={
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            }
          />

          <Route
            path="/rooms"
            element={
              <DashboardLayout>
                <Rooms />
              </DashboardLayout>
            }
          />

          <Route
            path="/events"
            element={
              <DashboardLayout>
                <Events />
              </DashboardLayout>
            }
          />

          <Route
            path="/library"
            element={
              <DashboardLayout>
                <Library />
              </DashboardLayout>
            }
          />

          {/* Placeholder for future user management */}
          <Route
            path="/users"
            element={
              <DashboardLayout>
                <NotFound />
              </DashboardLayout>
            }
          />

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
