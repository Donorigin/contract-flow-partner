
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { createBlog } from "@/services/adminApi";
import AdminLayout from "@/components/AdminLayout";
import BlogForm, { BlogFormValues } from "@/components/BlogForm";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export default function CreateBlog() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (data: BlogFormValues, imageFile?: File) => {
    setIsLoading(true);
    try {
      // Format the time_to_read to include "min read" if it doesn't already
      const timeToRead = data.time_to_read.includes("min read") 
        ? data.time_to_read 
        : `${data.time_to_read} min read`;
        
      const formattedData = {
        ...data,
        time_to_read: timeToRead
      };
      
      console.log("Submitting blog data:", formattedData);
      console.log("With image file:", imageFile);
      
      await createBlog(formattedData, imageFile);
      
      toast({
        title: "Success",
        description: "Blog post created successfully",
      });
      
      navigate("/admin/blogs");
    } catch (error: any) {
      console.error("Error creating blog post:", error);
      
      const errorMessage = error.response?.data?.detail || 
                          error.response?.data?.message ||
                          error.message ||
                          "Failed to create blog post";
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

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
              <FileText className="h-5 w-5 text-muvad-blue" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Create New Blog Post</h1>
          </div>
          <p className="text-gray-500 mt-1 ml-10">Fill in the details to publish your new blog post</p>
        </div>
        
        <BlogForm onSubmit={handleSubmit} isLoading={isLoading} />
      </motion.div>
    </AdminLayout>
  );
}
