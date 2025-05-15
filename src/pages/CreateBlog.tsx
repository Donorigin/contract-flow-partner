
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { createBlog } from "@/services/adminApi";
import AdminLayout from "@/components/AdminLayout";
import BlogForm, { BlogFormValues } from "@/components/BlogForm";

export default function CreateBlog() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (data: BlogFormValues) => {
    setIsLoading(true);
    try {
      await createBlog(data);
      
      toast({
        title: "Success",
        description: "Blog post created successfully",
      });
      
      navigate("/admin/blogs");
    } catch (error) {
      console.error("Error creating blog post:", error);
      toast({
        title: "Error",
        description: "Failed to create blog post",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Create New Blog Post</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <BlogForm onSubmit={handleSubmit} isLoading={isLoading} />
        </div>
      </div>
    </AdminLayout>
  );
}
