import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Plus, Filter, Bell, Edit, Trash2 } from "lucide-react";

export default function Events() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Event Management</h1>
          <p className="text-gray-600 mt-1">
            Create and manage school events, activities, and announcements
          </p>
        </div>

        <div className="mt-4 lg:mt-0 flex items-center space-x-3">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="w-4 h-4 mr-2" />
            Create Event
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Events</p>
                <p className="text-2xl font-bold text-gray-900">24</p>
              </div>
              <CalendarDays className="w-6 h-6 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">This Week</p>
                <p className="text-2xl font-bold text-blue-600">8</p>
              </div>
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Upcoming</p>
                <p className="text-2xl font-bold text-green-600">12</p>
              </div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Past Events</p>
                <p className="text-2xl font-bold text-gray-600">156</p>
              </div>
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sample Events List */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Events</CardTitle>
          <CardDescription>
            Manage your school's upcoming events and activities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                title: "Parent-Teacher Conference",
                date: "March 15, 2024",
                time: "3:00 PM - 6:00 PM",
                location: "Main Hall",
                type: "meeting",
                status: "upcoming",
              },
              {
                title: "Science Fair",
                date: "March 22, 2024",
                time: "9:00 AM - 4:00 PM",
                location: "Gymnasium",
                type: "competition",
                status: "planning",
              },
              {
                title: "Spring Break",
                date: "April 1-5, 2024",
                time: "All Day",
                location: "School Closed",
                type: "holiday",
                status: "upcoming",
              },
            ].map((event, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-semibold text-gray-900">
                      {event.title}
                    </h3>
                    <Badge
                      variant={
                        event.status === "upcoming" ? "default" : "secondary"
                      }
                    >
                      {event.status}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {event.type}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>{event.date}</span>
                    <span>{event.time}</span>
                    <span>{event.location}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Bell className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Coming Soon Section */}
      <Card className="border-dashed border-2 border-gray-200">
        <CardHeader className="text-center pb-2">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <CalendarDays className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="text-xl font-semibold text-gray-900">
            Advanced Event Management Coming Soon
          </CardTitle>
          <CardDescription className="text-gray-600 max-w-md mx-auto">
            Full CRUD operations, automated notifications, calendar integration,
            and seamless synchronization with the website portal.
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center">
          <div className="space-y-2 mb-4">
            <p className="text-sm text-gray-500">Planned features:</p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="outline">Event Templates</Badge>
              <Badge variant="outline">Automated Reminders</Badge>
              <Badge variant="outline">Attendee Management</Badge>
              <Badge variant="outline">Calendar Export</Badge>
              <Badge variant="outline">Photo Gallery</Badge>
              <Badge variant="outline">Registration Forms</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
