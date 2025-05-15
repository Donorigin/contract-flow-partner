
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { updateBlog } from "@/services/adminApi";
import { Blog } from "@/services/api";
import AdminLayout from "@/components/AdminLayout";
import BlogForm, { BlogFormValues } from "@/components/BlogForm";

export default function EditBlog() {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogData = async () => {
      if (!id) return;
      
      try {
        // For demo, we'll get blogs from localStorage
        const blogs = JSON.parse(localStorage.getItem("blogs") || "[]");
        const foundBlog = blogs.find((b: Blog) => b.id === parseInt(id));
        
        if (foundBlog) {
          setBlog(foundBlog);
        } else {
          toast({
            title: "Error",
            description: "Blog post not found",
            variant: "destructive",
          });
          navigate("/admin/blogs");
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
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
  }, [id, navigate, toast]);

  const handleSubmit = async (data: BlogFormValues) => {
    if (!id) return;
    
    setIsSaving(true);
    try {
      await updateBlog(parseInt(id), data);
      
      toast({
        title: "Success",
        description: "Blog post updated successfully",
      });
      
      navigate("/admin/blogs");
    } catch (error) {
      console.error("Error updating blog post:", error);
      toast({
        title: "Error",
        description: "Failed to update blog post",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <AdminLayout>
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-muvad-blue"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Edit Blog Post</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          {blog && (
            <BlogForm 
              initialData={blog} 
              onSubmit={handleSubmit} 
              isLoading={isSaving} 
            />
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
