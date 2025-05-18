
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Login from "./pages/Login";
import AdminBlogs from "./pages/AdminBlogs";
import CreateBlog from "./pages/CreateBlog";
import EditBlog from "./pages/EditBlog";
import AuthGuard from "./components/AuthGuard";
import { setAuthToken } from "./services/adminApi";

const queryClient = new QueryClient();

const App = () => {
  // Initialize admin auth token from localStorage if available
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setAuthToken(token);
    }
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-condition" element={<TermsAndConditions />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/login" element={<Login />} />
            
            {/* Admin Routes - Protected with AuthGuard */}
            <Route path="/admin/blogs" element={<AuthGuard><AdminBlogs /></AuthGuard>} />
            <Route path="/admin/blogs/create" element={<AuthGuard><CreateBlog /></AuthGuard>} />
            <Route path="/admin/blogs/edit/:id" element={<AuthGuard><EditBlog /></AuthGuard>} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
