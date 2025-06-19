import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Clock, Users, Plus, Filter } from "lucide-react";

export default function Rooms() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Room Scheduling</h1>
          <p className="text-gray-600 mt-1">
            Manage classroom and event space bookings
          </p>
        </div>

        <div className="mt-4 lg:mt-0 flex items-center space-x-3">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="w-4 h-4 mr-2" />
            Book Room
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Available</p>
                <p className="text-2xl font-bold text-green-600">6</p>
              </div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Occupied</p>
                <p className="text-2xl font-bold text-red-600">18</p>
              </div>
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Maintenance</p>
                <p className="text-2xl font-bold text-yellow-600">2</p>
              </div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Rooms</p>
                <p className="text-2xl font-bold text-gray-900">26</p>
              </div>
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Coming Soon Section */}
      <Card className="border-dashed border-2 border-gray-200">
        <CardHeader className="text-center pb-2">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <MapPin className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="text-xl font-semibold text-gray-900">
            Room Scheduling Interface Coming Soon
          </CardTitle>
          <CardDescription className="text-gray-600 max-w-md mx-auto">
            We're building a comprehensive room scheduling system with calendar
            views, booking management, and real-time availability tracking.
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <Calendar className="w-6 h-6 text-primary mx-auto mb-2" />
              <h3 className="font-medium text-gray-900 mb-1">Calendar View</h3>
              <p className="text-sm text-gray-600">
                Visual scheduling with drag-and-drop booking
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
              <h3 className="font-medium text-gray-900 mb-1">
                Time Management
              </h3>
              <p className="text-sm text-gray-600">
                Conflict detection and automated reminders
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <Users className="w-6 h-6 text-primary mx-auto mb-2" />
              <h3 className="font-medium text-gray-900 mb-1">
                Multi-User Access
              </h3>
              <p className="text-sm text-gray-600">
                Role-based permissions and booking approvals
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-gray-500">Expected features:</p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="outline">Real-time Updates</Badge>
              <Badge variant="outline">Recurring Bookings</Badge>
              <Badge variant="outline">Resource Management</Badge>
              <Badge variant="outline">Mobile Responsive</Badge>
              <Badge variant="outline">Export Schedules</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
