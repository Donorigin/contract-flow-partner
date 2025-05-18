
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { updateBlog, getAdminBlogs } from "@/services/adminApi";
import { Blog } from "@/services/api";
import AdminLayout from "@/components/AdminLayout";
import BlogForm, { BlogFormValues } from "@/components/BlogForm";
import { motion } from "framer-motion";
import { AlertTriangle, Edit } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function EditBlog() {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogData = async () => {
      if (!id) return;
      
      try {
        const blogs = await getAdminBlogs();
        const foundBlog = blogs.find((b: Blog) => b.id === parseInt(id));
        
        if (foundBlog) {
          setBlog(foundBlog);
        } else {
          setError("Blog post not found");
          toast({
            title: "Error",
            description: "Blog post not found",
            variant: "destructive",
          });
        }
      } catch (error: any) {
        console.error("Error fetching blog:", error);
        setError(error.response?.data?.detail || "Failed to load blog post");
        toast({
          title: "Error",
          description: "Failed to load blog post",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogData();
  }, [id, toast]);

  const handleSubmit = async (data: BlogFormValues, imageFile?: File) => {
    if (!id) return;
    
    setIsSaving(true);
    try {
      // Format the time_to_read to include "min read"
      const formattedData = {
        ...data,
        time_to_read: `${data.time_to_read} min read`
      };
      
      await updateBlog(parseInt(id), formattedData, imageFile);
      
      toast({
        title: "Success",
        description: "Blog post updated successfully",
      });
      
      navigate("/admin/blogs");
    } catch (error: any) {
      console.error("Error updating blog post:", error);
      toast({
        title: "Error",
        description: error.response?.data?.detail || "Failed to update blog post",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <AdminLayout>
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-2 border-t-transparent border-muvad-blue"></div>
        </div>
      </AdminLayout>
    );
  }

  if (error || !blog) {
    return (
      <AdminLayout>
        <div className="max-w-3xl mx-auto py-8">
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              {error || "Unable to load blog post. Please go back and try again."}
            </AlertDescription>
          </Alert>
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => navigate("/admin/blogs")}
              className="text-muvad-blue hover:underline"
            >
              Return to blog list
            </button>
          </div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="mb-6">
          <div className="flex items-center">
            <div className="bg-blue-100 p-2 rounded-md mr-3">
              <Edit className="h-5 w-5 text-muvad-blue" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Edit Blog Post</h1>
          </div>
          <p className="text-gray-500 mt-1 ml-10">Update the blog post details below</p>
        </div>
        
        <BlogForm 
          initialData={blog} 
          onSubmit={handleSubmit} 
          isLoading={isSaving} 
        />
      </motion.div>
    </AdminLayout>
  );
}
