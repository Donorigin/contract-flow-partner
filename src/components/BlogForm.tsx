
import { useEffect } from "react";
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
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Blog } from "@/services/api";

// Form validation schema
const blogSchema = z.object({
  title: z.string().min(5, { message: "Title must be at least 5 characters" }),
  author: z.string().min(2, { message: "Author name is required" }),
  content: z.string().min(50, { message: "Content must be at least 50 characters" }),
  excerpt: z.string().min(10, { message: "Excerpt must be at least 10 characters" }).optional(),
  category: z.string().min(2, { message: "Category is required" }),
  time_to_read: z.string().min(1, { message: "Time to read is required" }),
  published_date: z.string().min(1, { message: "Publication date is required" }),
  image: z.string().optional(),
});

export type BlogFormValues = z.infer<typeof blogSchema>;

type BlogFormProps = {
  initialData?: Blog;
  onSubmit: (data: BlogFormValues) => void;
  isLoading: boolean;
};

export default function BlogForm({ initialData, onSubmit, isLoading }: BlogFormProps) {
  const { toast } = useToast();

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
      image: "",
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
        time_to_read: initialData.time_to_read || "5",
        published_date: formattedDate,
        image: initialData.image || "",
      });
    }
  }, [initialData, form]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Blog post title" disabled={isLoading} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Input placeholder="Category" disabled={isLoading} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Author</FormLabel>
                <FormControl>
                  <Input placeholder="Author name" disabled={isLoading} {...field} />
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
                <FormLabel>Time to read (minutes)</FormLabel>
                <FormControl>
                  <Input 
                    type="number" 
                    placeholder="5" 
                    disabled={isLoading} 
                    {...field}
                    onChange={e => field.onChange(e.target.value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="published_date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Publication Date</FormLabel>
                <FormControl>
                  <Input type="date" disabled={isLoading} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image URL</FormLabel>
              <FormControl>
                <Input placeholder="https://example.com/image.jpg" disabled={isLoading} {...field} />
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
              <FormLabel>Excerpt</FormLabel>
              <FormControl>
                <Input placeholder="Short excerpt for the blog post" disabled={isLoading} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <textarea 
                  className="flex min-h-[200px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Blog post content (supports markdown)"
                  disabled={isLoading}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end">
          <Button type="submit" className="bg-muvad-blue" disabled={isLoading}>
            {isLoading ? (
              <div className="flex items-center">
                <span className="animate-spin mr-2 h-4 w-4 border-2 border-t-transparent border-white rounded-full"></span>
                Saving...
              </div>
            ) : initialData ? "Update Blog Post" : "Create Blog Post"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
