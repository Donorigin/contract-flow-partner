
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "./ui/card";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Blog, getBlogs, FALLBACK_BLOGS } from "@/services/api";
import { useToast } from "@/components/ui/use-toast";

export function BlogSection() {
  const { toast } = useToast();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogsData = async () => {
      try {
        const data = await getBlogs();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        toast({
          title: "Failed to load blogs",
          description: "Using fallback data instead. Please try again later.",
          variant: "destructive",
        });
        // Use fallback data if API fails
        setBlogs(FALLBACK_BLOGS as Blog[]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogsData();
  }, [toast]);

  return (
    <section className="py-16 bg-muvad-grey" id="blog">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-muvad-darkGrey mb-4">Latest Insights</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Expert advice and industry news to help your subcontracting business thrive
          </p>
        </div>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-white h-full flex flex-col">
                <div className="relative h-48 bg-gray-200 animate-pulse"></div>
                <CardContent className="pt-6 flex-grow">
                  <div className="h-4 bg-gray-200 animate-pulse mb-2 w-1/3"></div>
                  <div className="h-6 bg-gray-200 animate-pulse mb-2"></div>
                  <div className="h-4 bg-gray-200 animate-pulse w-3/4"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.slice(0, 3).map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                    width={400}
                    height={250}
                  />
                  <div className="absolute top-4 left-4 bg-muvad-blue text-white text-xs px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
                <CardContent className="pt-6 flex-grow">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl mb-2 hover:text-muvad-blue transition-colors duration-200">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {post.excerpt}
                  </CardDescription>
                </CardContent>
                <CardFooter className="border-t border-gray-100 p-4">
                  <Link 
                    to={`/blog/${post.id}`}
                    className="text-muvad-blue font-medium flex items-center hover:text-muvad-lightBlue transition-colors group"
                  >
                    Read More 
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
        
        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="border-muvad-blue text-muvad-blue hover:bg-muvad-blue hover:text-white transition-all">
            <Link to="/blog">View All Articles <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
