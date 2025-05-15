import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Blog, getBlogs } from "@/services/api";
import { deleteBlog } from "@/services/adminApi";
import AdminLayout from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Edit, Plus, Trash2, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function AdminBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    setIsLoading(true);
    try {
      // Get blogs from API or localStorage
      const storedBlogs = localStorage.getItem("blogs");
      let blogData;
      
      if (storedBlogs) {
        // Use stored blogs if available
        blogData = JSON.parse(storedBlogs);
      } else {
        // Otherwise fetch from API
        blogData = await getBlogs();
        // Store for future use
        localStorage.setItem("blogs", JSON.stringify(blogData));
      }
      
      setBlogs(blogData);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      toast({
        title: "Error",
        description: "Failed to load blog posts",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (blogId: number) => {
    navigate(`/admin/blogs/edit/${blogId}`);
  };

  const handleCreate = () => {
    navigate("/admin/blogs/create");
  };

  const handleDelete = async (blogId: number) => {
    if (window.confirm("Are you sure you want to delete this blog post?")) {
      try {
        await deleteBlog(blogId);
        
        // Update the blog list
        setBlogs(blogs.filter((blog) => blog.id !== blogId));
        
        toast({
          title: "Success",
          description: "Blog post deleted successfully",
        });
      } catch (error) {
        console.error("Error deleting blog:", error);
        toast({
          title: "Error",
          description: "Failed to delete blog post",
          variant: "destructive",
        });
      }
    }
  };

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Manage Blog Posts</h1>
          <Button onClick={handleCreate}>
            <Plus className="mr-2 h-4 w-4" /> Create New
          </Button>
        </div>

        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search blogs..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {isLoading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-muvad-blue"></div>
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="text-center py-8 bg-white rounded-md shadow">
            <p className="text-gray-500">No blog posts found</p>
          </div>
        ) : (
          <div className="rounded-md border bg-white shadow">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">ID</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead className="hidden md:table-cell">Category</TableHead>
                  <TableHead className="hidden md:table-cell">Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredBlogs.map((blog) => (
                  <TableRow key={blog.id}>
                    <TableCell className="font-medium">{blog.id}</TableCell>
                    <TableCell className="font-medium">
                      {blog.title.length > 40
                        ? `${blog.title.substring(0, 40)}...`
                        : blog.title}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {blog.category}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {blog.date || new Date(blog.published_date).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEdit(blog.id)}
                      >
                        <Edit className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        onClick={() => handleDelete(blog.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
