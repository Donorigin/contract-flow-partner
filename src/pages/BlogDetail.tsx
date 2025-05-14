import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Blog, getBlogDetail, getBlogs, FALLBACK_BLOGS } from "@/services/api";
import { useToast } from "@/components/ui/use-toast";

export default function BlogDetail() {
  const { toast } = useToast();
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Blog | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Blog[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchBlogData = async () => {
      if (!id) return;
      
      setIsLoading(true);
      try {
        // Get the specific blog post
        const blogData = await getBlogDetail(id);
        setPost(blogData);
        
        // Get all blogs for related posts
        const allBlogs = await getBlogs();
        
        // Set related posts (excluding current post)
        const related = allBlogs.filter(blog => blog.id.toString() !== id);
        setRelatedPosts(related);
        
        // Get unique categories
        const uniqueCategories = Array.from(new Set(allBlogs.map(blog => blog.category)));
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching blog:", error);
        toast({
          title: "Failed to load blog post",
          description: "Using fallback data. Please try again later.",
          variant: "destructive",
        });
        
        // Use fallback data
        const fallbackPost = FALLBACK_BLOGS.find(post => post.id.toString() === id);
        if (fallbackPost) {
          setPost(fallbackPost as unknown as Blog);
          
          // Set related posts from fallback data
          const related = FALLBACK_BLOGS.filter(post => post.id.toString() !== id);
          setRelatedPosts(related as unknown as Blog[]);
          
          // Get unique categories from fallback data
          const uniqueCategories = Array.from(new Set(FALLBACK_BLOGS.map(post => post.category)));
          setCategories(uniqueCategories);
        } else {
          // No post found even in fallback data
          setPost(null);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogData();
  }, [id, toast]);
  
  // If no post is found, show error state
  if (!isLoading && !post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto py-20 flex-grow">
          <h1 className="text-3xl font-bold text-center">Blog Post Not Found</h1>
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link to="/blog">Return to Blog</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="w-full bg-muvad-darkGrey text-white py-16 md:py-24">
        <div className="container">
          <Button asChild variant="ghost" className="text-white mb-6 hover:bg-white/10">
            <Link to="/blog" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Articles
            </Link>
          </Button>
          
          {isLoading ? (
            <>
              <div className="h-12 bg-gray-600 w-3/4 animate-pulse mb-6 rounded"></div>
              <div className="flex flex-wrap items-center gap-4 md:gap-6">
                <div className="h-6 bg-gray-600 w-24 animate-pulse rounded"></div>
                <div className="h-6 bg-gray-600 w-24 animate-pulse rounded"></div>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                {post?.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm md:text-base text-white/80">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{post?.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{post?.readTime}</span>
                </div>
                <div className="flex items-center">
                  <Tag className="h-4 w-4 mr-2" />
                  <span>{post?.category}</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      
      <div className="w-full py-8">
        <div className="container">
          {isLoading ? (
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-12 bg-gray-200 animate-pulse"></div>
          ) : (
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden mb-12">
              <img 
                src={post?.image}
                alt={post?.title}
                className="w-full h-full object-cover"
                loading="lazy"
                width={1200}
                height={600}
              />
            </div>
          )}
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              {isLoading ? (
                <div className="space-y-6">
                  <div className="h-6 bg-gray-200 w-full animate-pulse rounded"></div>
                  <div className="h-4 bg-gray-200 w-full animate-pulse rounded"></div>
                  <div className="h-4 bg-gray-200 w-5/6 animate-pulse rounded"></div>
                  <div className="h-4 bg-gray-200 w-full animate-pulse rounded"></div>
                </div>
              ) : (
                <article className="prose prose-lg max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: post?.content || "" }} />
                </article>
              )}
              
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-2xl font-bold mb-6">Ready to Transform Your Business?</h3>
                <Button className="bg-muvad-blue hover:bg-muvad-lightBlue text-white">
                  Book a Discovery Call
                </Button>
              </div>
            </div>
            
            <div className="lg:col-span-4">
              <div className="bg-muvad-grey p-6 rounded-lg sticky top-24">
                <h3 className="text-xl font-bold mb-4">More Articles</h3>
                {isLoading ? (
                  <div className="space-y-4">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="border-b border-gray-200 pb-4 last:border-0">
                        <div className="h-5 bg-gray-200 w-full mb-1 animate-pulse rounded"></div>
                        <div className="h-4 bg-gray-200 w-1/2 animate-pulse rounded"></div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {relatedPosts.slice(0, 3).map(relatedPost => (
                      <div key={relatedPost.id} className="border-b border-gray-200 pb-4 last:border-0">
                        <Link 
                          to={`/blog/${relatedPost.id}`}
                          className="font-medium hover:text-muvad-blue transition-colors"
                        >
                          {relatedPost.title}
                        </Link>
                        <div className="text-sm text-gray-500 mt-1">
                          {relatedPost.date} • {relatedPost.readTime}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Categories</h3>
                  {isLoading ? (
                    <div className="flex flex-wrap gap-2">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="h-8 bg-gray-200 w-20 animate-pulse rounded-full"></div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {categories.map(category => (
                        <Link
                          key={category}
                          to={`/blog?category=${category}`}
                          className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200 hover:bg-gray-100 transition-colors"
                        >
                          {category}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
