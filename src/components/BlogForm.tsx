
import { useEffect, useState, useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Blog } from "@/services/api";
import { Calendar, Clock, User, FileText, Image, Tag, Upload } from "lucide-react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Define category choices
const CATEGORY_CHOICES = [
  "Cleaning",
  "Drywall",
  "Painting",
  "Concrete",
  "Roofing",
  "Stucco",
];

// Form validation schema
const blogSchema = z.object({
  title: z.string().min(5, { message: "Title must be at least 5 characters" }),
  author: z.string().min(2, { message: "Author name is required" }),
  content: z.string().min(50, { message: "Content must be at least 50 characters" }),
  excerpt: z.string().min(10, { message: "Excerpt must be at least 10 characters" }).optional(),
  category: z.string().min(2, { message: "Category is required" }),
  time_to_read: z.string().min(1, { message: "Time to read is required" }),
  published_date: z.string().min(1, { message: "Publication date is required" }),
});

export type BlogFormValues = z.infer<typeof blogSchema>;

type BlogFormProps = {
  initialData?: Blog;
  onSubmit: (data: BlogFormValues, imageFile?: File) => void;
  isLoading: boolean;
};

export default function BlogForm({ initialData, onSubmit, isLoading }: BlogFormProps) {
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Initialize form with react-hook-form
  const form = useForm<BlogFormValues>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: "",
      author: "Admin", // Default author
      content: "",
      excerpt: "",
      category: "",
      time_to_read: "5",
      published_date: new Date().toISOString().split("T")[0],
    },
  });

  // If we have initial data (editing mode), set form values
  useEffect(() => {
    if (initialData) {
      // Format the date to YYYY-MM-DD for the date input
      const formattedDate = initialData.published_date 
        ? new Date(initialData.published_date).toISOString().split("T")[0]
        : new Date().toISOString().split("T")[0];

      form.reset({
        title: initialData.title || "",
        author: initialData.author || "Admin",
        content: initialData.content || "",
        excerpt: initialData.excerpt || "",
        category: initialData.category || "",
        time_to_read: initialData.time_to_read?.replace(" min read", "") || "5",
        published_date: formattedDate,
      });

      // Set image preview if there's an existing image
      if (initialData.image) {
        setImagePreview(initialData.image);
      }
    }
  }, [initialData, form]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const fileReader = new FileReader();
      fileReader.onload = (event) => {
        if (event.target?.result) {
          setImagePreview(event.target.result as string);
        }
      };
      fileReader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handlePreview = () => {
    const formData = form.getValues();
    toast({
      title: "Blog Post Preview",
      description: "Preview functionality would show here in a real application.",
    });
    console.log("Preview data:", formData);
  };

  const handleSubmitWithImage = (data: BlogFormValues) => {
    onSubmit(data, selectedImage || undefined);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmitWithImage)}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border border-gray-200 shadow-sm">
            <CardHeader className="border-b bg-white">
              <CardTitle className="text-xl">
                {initialData ? "Edit Blog Post" : "Create New Blog Post"}
              </CardTitle>
              <CardDescription>
                {initialData ? "Update your blog post details below" : "Fill in the details for your new blog post"}
              </CardDescription>
            </CardHeader>
            
            <Tabs defaultValue="content" className="w-full">
              <CardContent className="p-6 pt-6 border-b bg-white">
                <TabsList className="w-full max-w-md mb-6">
                  <TabsTrigger value="content" className="flex-1">
                    <FileText className="h-4 w-4 mr-2" /> Content
                  </TabsTrigger>
                  <TabsTrigger value="metadata" className="flex-1">
                    <Tag className="h-4 w-4 mr-2" /> Metadata
                  </TabsTrigger>
                </TabsList>
              
                <TabsContent value="content" className="space-y-6 mt-0">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center">
                          <FileText className="h-4 w-4 mr-2 text-muvad-blue" /> Title
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter the blog title" 
                            disabled={isLoading} 
                            className="border-gray-300 focus-visible:ring-muvad-blue"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                
                  <FormField
                    control={form.control}
                    name="excerpt"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center">
                          <FileText className="h-4 w-4 mr-2 text-muvad-blue" /> Excerpt
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="A short summary of your blog post" 
                            disabled={isLoading} 
                            className="border-gray-300 focus-visible:ring-muvad-blue"
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription>
                          A brief summary that will appear in blog listings
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                
                  <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center">
                          <FileText className="h-4 w-4 mr-2 text-muvad-blue" /> Content
                        </FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Write your blog post content here... (Markdown supported)" 
                            className="min-h-[300px] resize-y border-gray-300 focus-visible:ring-muvad-blue"
                            disabled={isLoading}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Image Upload Section */}
                  <div className="space-y-2">
                    <FormLabel className="flex items-center">
                      <Image className="h-4 w-4 mr-2 text-muvad-blue" /> Featured Image
                    </FormLabel>
                    
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleImageChange}
                      accept="image/*"
                      className="hidden"
                      disabled={isLoading}
                    />
                    
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                      {imagePreview ? (
                        <div className="space-y-4">
                          <div className="relative mx-auto max-w-md">
                            <img 
                              src={imagePreview} 
                              alt="Image preview" 
                              className="max-h-40 mx-auto object-contain rounded-md"
                            />
                            <Button
                              type="button"
                              variant="outline"
                              size="icon"
                              className="absolute top-0 right-0 bg-white rounded-full h-6 w-6 p-1"
                              onClick={handleRemoveImage}
                            >
                              <span className="sr-only">Remove image</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                            </Button>
                          </div>
                          <Button
                            type="button"
                            variant="outline"
                            onClick={triggerFileInput}
                            disabled={isLoading}
                          >
                            Change Image
                          </Button>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-gray-100">
                            <Upload className="h-10 w-10 text-gray-400" />
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm font-medium">
                              Drop your image here, or{" "}
                              <Button
                                type="button"
                                variant="link"
                                className="p-0 h-auto"
                                onClick={triggerFileInput}
                                disabled={isLoading}
                              >
                                browse
                              </Button>
                            </p>
                            <p className="text-xs text-gray-500">
                              Supports JPG, PNG or GIF up to 10MB
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </TabsContent>
              
                <TabsContent value="metadata" className="space-y-6 mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="author"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center">
                            <User className="h-4 w-4 mr-2 text-muvad-blue" /> Author
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Author name" 
                              disabled={isLoading} 
                              className="border-gray-300 focus-visible:ring-muvad-blue"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  
                    {/* Category Dropdown - replaced text input with select */}
                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center">
                            <Tag className="h-4 w-4 mr-2 text-muvad-blue" /> Category
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            value={field.value}
                            disabled={isLoading}
                          >
                            <FormControl>
                              <SelectTrigger className="border-gray-300 focus-visible:ring-muvad-blue">
                                <SelectValue placeholder="Select a category" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {CATEGORY_CHOICES.map((category) => (
                                <SelectItem key={category} value={category}>
                                  {category}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="published_date"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-muvad-blue" /> Publication Date
                          </FormLabel>
                          <FormControl>
                            <Input 
                              type="date" 
                              disabled={isLoading} 
                              className="border-gray-300 focus-visible:ring-muvad-blue"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  
                    <FormField
                      control={form.control}
                      name="time_to_read"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-muvad-blue" /> Reading Time (minutes)
                          </FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              placeholder="5" 
                              disabled={isLoading}
                              className="border-gray-300 focus-visible:ring-muvad-blue" 
                              {...field}
                              onChange={e => field.onChange(e.target.value)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </TabsContent>
              </CardContent>
            </Tabs>
            
            <CardFooter className="flex justify-between bg-gray-50 px-6 py-4">
              <Button
                type="button"
                variant="outline"
                onClick={handlePreview}
                disabled={isLoading}
              >
                Preview
              </Button>
              <Button 
                type="submit" 
                className="bg-muvad-blue hover:bg-blue-700 transition-colors"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <span className="animate-spin mr-2 h-4 w-4 border-2 border-t-transparent border-white rounded-full"></span>
                    {initialData ? "Updating..." : "Creating..."}
                  </div>
                ) : initialData ? "Update Post" : "Create Post"}
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </form>
    </Form>
  );
}
