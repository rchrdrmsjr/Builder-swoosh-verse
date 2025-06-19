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
  BookOpen,
  Upload,
  Search,
  Download,
  FileText,
  Image,
  Video,
} from "lucide-react";

export default function Library() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            E-Library Management
          </h1>
          <p className="text-gray-600 mt-1">
            Digital resources and learning materials
          </p>
          <Badge variant="secondary" className="mt-2">
            Coming Soon
          </Badge>
        </div>

        <div className="mt-4 lg:mt-0 flex items-center space-x-3">
          <Button variant="outline" size="sm" disabled>
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
          <Button className="bg-primary hover:bg-primary/90" disabled>
            <Upload className="w-4 h-4 mr-2" />
            Upload Resource
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Resources</p>
                <p className="text-2xl font-bold text-gray-900">1,248</p>
              </div>
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">E-Books</p>
                <p className="text-2xl font-bold text-blue-600">456</p>
              </div>
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Videos</p>
                <p className="text-2xl font-bold text-purple-600">124</p>
              </div>
              <Video className="w-6 h-6 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Downloads</p>
                <p className="text-2xl font-bold text-green-600">2,456</p>
              </div>
              <Download className="w-6 h-6 text-green-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Coming Soon Section */}
      <Card className="border-dashed border-2 border-gray-200">
        <CardHeader className="text-center pb-2">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <BookOpen className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="text-xl font-semibold text-gray-900">
            E-Library System In Development
          </CardTitle>
          <CardDescription className="text-gray-600 max-w-md mx-auto">
            A comprehensive digital library management system for uploading,
            organizing, and distributing educational resources to students and
            staff.
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <Upload className="w-6 h-6 text-primary mx-auto mb-2" />
              <h3 className="font-medium text-gray-900 mb-1">
                Upload & Organize
              </h3>
              <p className="text-sm text-gray-600">
                Bulk upload with automatic categorization
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <Search className="w-6 h-6 text-primary mx-auto mb-2" />
              <h3 className="font-medium text-gray-900 mb-1">Smart Search</h3>
              <p className="text-sm text-gray-600">
                Advanced filtering by subject and grade
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <Download className="w-6 h-6 text-primary mx-auto mb-2" />
              <h3 className="font-medium text-gray-900 mb-1">Access Control</h3>
              <p className="text-sm text-gray-600">
                Role-based permissions and tracking
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-gray-500">
              Supported formats and features:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="outline">PDF Documents</Badge>
              <Badge variant="outline">Video Content</Badge>
              <Badge variant="outline">Audio Files</Badge>
              <Badge variant="outline">Interactive Content</Badge>
              <Badge variant="outline">Version Control</Badge>
              <Badge variant="outline">Usage Analytics</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Resource Categories Preview */}
      <Card>
        <CardHeader>
          <CardTitle>Resource Categories</CardTitle>
          <CardDescription>
            Preview of how content will be organized
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Mathematics", count: 234, icon: "📊" },
              { name: "Science", count: 189, icon: "🔬" },
              { name: "Literature", count: 156, icon: "📚" },
              { name: "History", count: 98, icon: "🏛️" },
              { name: "Languages", count: 145, icon: "🌍" },
              { name: "Arts", count: 87, icon: "🎨" },
              { name: "Technology", count: 123, icon: "💻" },
              { name: "Sports", count: 45, icon: "⚽" },
            ].map((category) => (
              <div
                key={category.name}
                className="p-4 border border-gray-200 rounded-lg text-center hover:bg-gray-50 transition-colors"
              >
                <div className="text-2xl mb-2">{category.icon}</div>
                <h3 className="font-medium text-gray-900">{category.name}</h3>
                <p className="text-sm text-gray-600">
                  {category.count} resources
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
