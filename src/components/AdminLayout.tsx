
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, LogOut, Home, FileText, Grid } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { setAuthToken } from "@/services/adminApi";

type AdminLayoutProps = {
  children: React.ReactNode;
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true); // Default to open on desktop
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Get user from localStorage if available
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogout = () => {
    setAuthToken("");
    localStorage.removeItem("user");
    navigate("/login");
  };

  // Check if the current route matches the given path
  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden fixed top-0 left-0 z-20 p-4">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleSidebar}
          className="bg-white shadow-md"
        >
          <Menu className="h-4 w-4" />
        </Button>
      </div>

      {/* Sidebar */}
      <motion.div
        initial={{ x: -250 }}
        animate={{ x: sidebarOpen ? 0 : -250 }}
        transition={{ ease: "easeOut", duration: 0.3 }}
        className="fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg border-r border-gray-200 lg:relative lg:transform-none"
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b">
            <Link to="/admin/blogs" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-muvad-blue rounded-md flex items-center justify-center">
                <Grid className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-muvad-blue">Muvad Admin</h1>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className="lg:hidden"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <nav className="flex-1 overflow-y-auto p-4 space-y-1">
            <Link
              to="/"
              className={`flex items-center px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-muvad-blue rounded-md transition-colors duration-200 ${
                isActive("/") ? "bg-blue-50 text-muvad-blue font-medium" : ""
              }`}
            >
              <Home className="h-5 w-5 mr-3" />
              Go to Website
            </Link>
            <Link
              to="/admin/blogs"
              className={`flex items-center px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-muvad-blue rounded-md transition-colors duration-200 ${
                isActive("/admin/blogs") ? "bg-blue-50 text-muvad-blue font-medium" : ""
              }`}
            >
              <FileText className="h-5 w-5 mr-3" />
              Manage Blogs
            </Link>
          </nav>

          <div className="border-t p-4">
            {user ? (
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-muvad-blue text-white">
                      {user.username?.charAt(0).toUpperCase() || "A"}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{user.username || "Admin"}</span>
                    <span className="text-xs text-gray-500">{user.email || "admin@example.com"}</span>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  className="text-red-500 hover:bg-red-50 hover:text-red-600"
                  onClick={handleLogout}
                >
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <Button
                variant="ghost"
                className="w-full flex items-center justify-center text-red-500 hover:bg-red-50"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            )}
          </div>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <main className="flex-1 overflow-y-auto p-4 lg:p-8 bg-gray-50">
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
