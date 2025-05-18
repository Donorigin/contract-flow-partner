
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Blog } from "@/services/api";
import { getAdminBlogs, deleteBlog } from "@/services/adminApi";
import AdminLayout from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Edit, Plus, Trash2, Search, MoreVertical, Calendar, User, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function AdminBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [blogToDelete, setBlogToDelete] = useState<number | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    setIsLoading(true);
    try {
      const data = await getAdminBlogs();
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      toast({
        title: "Error",
        description: "Failed to load blog posts. Please try again.",
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

  const openDeleteDialog = (blogId: number) => {
    setBlogToDelete(blogId);
  };

  const handleDelete = async () => {
    if (!blogToDelete) return;
    
    try {
      await deleteBlog(blogToDelete);
      
      // Update the blog list
      setBlogs(blogs.filter((blog) => blog.id !== blogToDelete));
      
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
    } finally {
      setBlogToDelete(null);
    }
  };

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.category?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.author?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminLayout>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Manage Blog Posts</h1>
            <p className="text-gray-500 mt-1">Create, edit, and manage your blog content</p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              onClick={handleCreate} 
              className="bg-muvad-blue hover:bg-blue-700 text-white transition-colors duration-200"
            >
              <Plus className="mr-2 h-4 w-4" /> Create New Post
            </Button>
          </motion.div>
        </div>

        <Card className="overflow-hidden border border-gray-200">
          <CardHeader className="bg-white px-6 py-5 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <CardTitle className="text-xl text-gray-800">All Blog Posts</CardTitle>
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Search by title, author..."
                  className="pl-9 border-gray-300"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            {isLoading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-2 border-t-transparent border-muvad-blue"></div>
              </div>
            ) : filteredBlogs.length === 0 ? (
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center rounded-full bg-gray-100 p-6 mb-4">
                  <FileText className="h-10 w-10 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">No blog posts found</h3>
                {searchTerm ? (
                  <p className="mt-1 text-gray-500">Try adjusting your search term</p>
                ) : (
                  <p className="mt-1 text-gray-500">Create your first blog post to get started</p>
                )}
                <Button 
                  onClick={handleCreate} 
                  className="mt-4 bg-muvad-blue hover:bg-blue-700"
                >
                  <Plus className="mr-2 h-4 w-4" /> Create New Post
                </Button>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50 hover:bg-gray-50">
                      <TableHead className="w-12 font-medium">ID</TableHead>
                      <TableHead className="font-medium">Title</TableHead>
                      <TableHead className="font-medium hidden md:table-cell">Category</TableHead>
                      <TableHead className="font-medium hidden md:table-cell">Author</TableHead>
                      <TableHead className="font-medium hidden lg:table-cell">Date</TableHead>
                      <TableHead className="font-medium text-right w-20">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredBlogs.map((blog) => (
                      <TableRow 
                        key={blog.id}
                        className="hover:bg-blue-50/30 transition-colors duration-200"
                      >
                        <TableCell className="font-medium">{blog.id}</TableCell>
                        <TableCell className="font-medium">
                          <div className="max-w-md">
                            {blog.title?.length > 40
                              ? `${blog.title.substring(0, 40)}...`
                              : blog.title}
                          </div>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                            {blog.category}
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <div className="flex items-center">
                            <User className="h-3 w-3 mr-2 text-gray-400" />
                            {blog.author}
                          </div>
                        </TableCell>
                        <TableCell className="hidden lg:table-cell">
                          <div className="flex items-center text-gray-500">
                            <Calendar className="h-3 w-3 mr-2" />
                            {blog.date || new Date(blog.published_date).toLocaleDateString()}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreVertical className="h-4 w-4" />
                                <span className="sr-only">Open menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem onClick={() => handleEdit(blog.id)}>
                                <Edit className="h-4 w-4 mr-2" /> Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem 
                                className="text-red-600 focus:text-red-700"
                                onClick={() => openDeleteDialog(blog.id)}
                              >
                                <Trash2 className="h-4 w-4 mr-2" /> Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={blogToDelete !== null} onOpenChange={() => setBlogToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the blog post and remove its data from the server.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-red-500 hover:bg-red-600">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </AdminLayout>
  );
}
