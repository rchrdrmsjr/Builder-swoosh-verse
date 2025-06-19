import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CalendarDays,
  MapPin,
  BookOpen,
  Users,
  TrendingUp,
  Clock,
  AlertCircle,
  Plus,
  BarChart3,
  Calendar,
} from "lucide-react";
import { useState, useEffect } from "react";

interface DashboardStats {
  totalRooms: number;
  bookedRooms: number;
  upcomingEvents: number;
  totalUsers: number;
  libraryResources: number;
  activeSchedules: number;
}

interface RecentActivity {
  id: string;
  type: "room" | "event" | "user";
  title: string;
  description: string;
  time: string;
  status: "success" | "warning" | "info";
}

interface UpcomingEvent {
  id: string;
  title: string;
  time: string;
  location: string;
  type: "exam" | "meeting" | "activity";
}

export default function Dashboard() {
  const [user] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : { username: "admin", role: "admin" };
  });

  const [stats] = useState<DashboardStats>({
    totalRooms: 24,
    bookedRooms: 18,
    upcomingEvents: 12,
    totalUsers: 156,
    libraryResources: 1248,
    activeSchedules: 8,
  });

  const [recentActivity] = useState<RecentActivity[]>([
    {
      id: "1",
      type: "room",
      title: "Room 101 Booked",
      description: "Mathematics class scheduled for 2:00 PM",
      time: "5 min ago",
      status: "success",
    },
    {
      id: "2",
      type: "event",
      title: "Science Fair",
      description: "New event created for next Friday",
      time: "15 min ago",
      status: "info",
    },
    {
      id: "3",
      type: "user",
      title: "New Teacher Added",
      description: "Sarah Johnson joined as English teacher",
      time: "1 hour ago",
      status: "success",
    },
    {
      id: "4",
      type: "room",
      title: "Room Conflict",
      description: "Double booking detected in Room 205",
      time: "2 hours ago",
      status: "warning",
    },
  ]);

  const [upcomingEvents] = useState<UpcomingEvent[]>([
    {
      id: "1",
      title: "Parent-Teacher Conference",
      time: "Today, 3:00 PM",
      location: "Main Hall",
      type: "meeting",
    },
    {
      id: "2",
      title: "Mathematics Exam",
      time: "Tomorrow, 9:00 AM",
      location: "Room 101",
      type: "exam",
    },
    {
      id: "3",
      title: "Science Fair Setup",
      time: "Friday, 8:00 AM",
      location: "Gymnasium",
      type: "activity",
    },
  ]);

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  const quickActions = [
    {
      title: "Schedule Room",
      description: "Book a classroom or event space",
      icon: MapPin,
      href: "/rooms",
      color: "bg-blue-500",
    },
    {
      title: "Create Event",
      description: "Add a new school event",
      icon: CalendarDays,
      href: "/events",
      color: "bg-green-500",
    },
    {
      title: "Add User",
      description: "Register new staff or student",
      icon: Users,
      href: "/users",
      color: "bg-purple-500",
    },
    {
      title: "Library Upload",
      description: "Add digital resources",
      icon: BookOpen,
      href: "/library",
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {getGreeting()}, {user.username}! 👋
          </h1>
          <p className="text-gray-600 mt-1">
            Here's what's happening at your school today
          </p>
        </div>

        <div className="mt-4 lg:mt-0 flex items-center space-x-3">
          <div className="text-sm text-gray-500">
            {currentTime.toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          <div className="text-lg font-mono text-gray-700">
            {currentTime.toLocaleTimeString("en-US", {
              hour12: false,
            })}
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="hover:shadow-lg transition-shadow duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Room Utilization
            </CardTitle>
            <MapPin className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              {stats.bookedRooms}/{stats.totalRooms}
            </div>
            <p className="text-xs text-gray-600 mt-1">
              <span className="text-green-600 font-medium">
                {Math.round((stats.bookedRooms / stats.totalRooms) * 100)}%
              </span>{" "}
              occupancy rate
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Upcoming Events
            </CardTitle>
            <CalendarDays className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              {stats.upcomingEvents}
            </div>
            <p className="text-xs text-gray-600 mt-1">
              <span className="text-blue-600 font-medium">3</span> happening
              today
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total Users
            </CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              {stats.totalUsers}
            </div>
            <p className="text-xs text-gray-600 mt-1">
              <span className="text-green-600 font-medium">+12</span> this month
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Library Resources
            </CardTitle>
            <BookOpen className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              {stats.libraryResources.toLocaleString()}
            </div>
            <p className="text-xs text-gray-600 mt-1">
              <span className="text-orange-600 font-medium">+24</span> added
              this week
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span>Quick Actions</span>
          </CardTitle>
          <CardDescription>
            Common tasks and shortcuts for efficient management
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action) => (
              <Button
                key={action.title}
                variant="outline"
                className="h-auto p-4 flex flex-col items-start space-y-2 hover:bg-gray-50 transition-colors"
                asChild
              >
                <a href={action.href}>
                  <div
                    className={`w-8 h-8 rounded-lg ${action.color} flex items-center justify-center`}
                  >
                    <action.icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-gray-900">
                      {action.title}
                    </div>
                    <div className="text-sm text-gray-500">
                      {action.description}
                    </div>
                  </div>
                </a>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-primary" />
              <span>Recent Activity</span>
            </CardTitle>
            <CardDescription>
              Latest updates and changes in the system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div
                    className={`w-2 h-2 rounded-full mt-2 ${
                      activity.status === "success"
                        ? "bg-green-500"
                        : activity.status === "warning"
                          ? "bg-yellow-500"
                          : "bg-blue-500"
                    }`}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900">
                      {activity.title}
                    </p>
                    <p className="text-sm text-gray-600">
                      {activity.description}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {activity.time}
                    </p>
                  </div>
                  <Badge
                    variant={
                      activity.status === "warning"
                        ? "destructive"
                        : "secondary"
                    }
                  >
                    {activity.type}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span>Upcoming Events</span>
            </CardTitle>
            <CardDescription>
              Next scheduled events and activities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex items-start space-x-3 p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <div
                    className={`w-3 h-3 rounded-full mt-1.5 ${
                      event.type === "exam"
                        ? "bg-red-500"
                        : event.type === "meeting"
                          ? "bg-blue-500"
                          : "bg-green-500"
                    }`}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 text-sm">
                      {event.title}
                    </p>
                    <p className="text-xs text-gray-600">{event.time}</p>
                    <p className="text-xs text-gray-500 flex items-center mt-1">
                      <MapPin className="w-3 h-3 mr-1" />
                      {event.location}
                    </p>
                  </div>
                  <Badge
                    variant="outline"
                    className={`text-xs ${
                      event.type === "exam"
                        ? "border-red-200 text-red-700"
                        : event.type === "meeting"
                          ? "border-blue-200 text-blue-700"
                          : "border-green-200 text-green-700"
                    }`}
                  >
                    {event.type}
                  </Badge>
                </div>
              ))}
            </div>

            <Button variant="outline" className="w-full mt-4" size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add New Event
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
