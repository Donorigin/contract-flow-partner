
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, LogOut, Home, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { useAuth } from "@/hooks/useAuth"; -- Temporarily removed

type AdminLayoutProps = {
  children: React.ReactNode;
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // const { logout } = useAuth(); -- Temporarily removed
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogout = () => {
    // Temporary simplified logout that doesn't use useAuth
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden fixed top-0 left-0 z-20 p-4">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleSidebar}
          className="bg-white"
        >
          <Menu className="h-4 w-4" />
        </Button>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-30 w-64 transform bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out lg:translate-x-0`}
      >
        <div className="flex items-center justify-between p-4">
          <h1 className="text-xl font-bold text-muvad-blue">Admin Panel</h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="lg:hidden"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <nav className="space-y-1 px-2 py-4">
          <Link
            to="/"
            className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-muvad-blue rounded-md"
          >
            <Home className="h-4 w-4 mr-3" />
            Go to Website
          </Link>
          <Link
            to="/admin/blogs"
            className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-muvad-blue rounded-md"
          >
            <FileText className="h-4 w-4 mr-3" />
            Manage Blogs
          </Link>
        </nav>

        <div className="absolute bottom-0 w-full p-4">
          <Button
            variant="ghost"
            className="w-full flex items-center justify-center text-red-500 hover:bg-red-50"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <main className="flex-1 overflow-y-auto p-4 bg-gray-50">
          {children}
        </main>
      </div>

      {/* Backdrop for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
}
