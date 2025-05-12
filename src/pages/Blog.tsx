
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Sample blog posts data - using the same data as in BlogDetail
const BLOG_POSTS = [
  {
    id: "1",
    title: "5 Ways to Win More Contracts as a Subcontractor",
    excerpt: "Learn the strategies that top subcontractors use to secure more projects and increase their revenue.",
    date: "May 8, 2025",
    category: "Business Growth",
    image: "/lovable-uploads/photo-1487058792275-0ad4aaf24ca7",
    readTime: "5 min read"
  },
  {
    id: "2",
    title: "Understanding the True Cost of Estimating Services",
    excerpt: "Explore how our no-upfront-cost model helps subcontractors grow their business without financial risk.",
    date: "May 2, 2025",
    category: "Estimating",
    image: "/lovable-uploads/photo-1472396961693-142e6e269027",
    readTime: "4 min read"
  },
  {
    id: "3",
    title: "How to Prepare Perfect Proposals for General Contractors",
    excerpt: "Our expert tips on creating proposals that stand out and win the approval of general contractors.",
    date: "April 28, 2025",
    category: "Proposals",
    image: "/lovable-uploads/photo-1466721591366-2d5fba72006d",
    readTime: "6 min read"
  },
  {
    id: "4",
    title: "The Power of Strategic Pricing in Construction Bids",
    excerpt: "Finding the sweet spot between competitive pricing and profitability for sustainable business growth.",
    date: "April 15, 2025",
    category: "Estimating",
    image: "/lovable-uploads/photo-1618160702438-9b02ab6515c9",
    readTime: "7 min read"
  },
  {
    id: "5",
    title: "Building Relationships with General Contractors: A Guide for Subcontractors",
    excerpt: "How to establish and maintain strong working relationships with GCs that lead to repeat business.",
    date: "April 5, 2025",
    category: "Business Growth",
    image: "/lovable-uploads/photo-1721322800607-8c38375eef04",
    readTime: "6 min read"
  },
  {
    id: "6",
    title: "Technology Solutions for Modern Subcontractors",
    excerpt: "The digital tools that can streamline operations and help you stay competitive in today's market.",
    date: "March 28, 2025",
    category: "Technology",
    image: "/lovable-uploads/photo-1487058792275-0ad4aaf24ca7",
    readTime: "5 min read"
  }
];

// Get unique categories from the blog posts
const CATEGORIES = Array.from(new Set(BLOG_POSTS.map(post => post.category)));

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Filter posts based on search query and selected category
  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === null || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Blog Header */}
      <div className="w-full bg-gradient-to-br from-muvad-blue to-muvad-lightBlue text-white py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Muvad Insights
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            Expert advice and industry insights to help subcontractors win more contracts and grow their business
          </p>
        </div>
      </div>
      
      {/* Blog Content */}
      <div className="w-full py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content - Blog Listings */}
            <div className="lg:col-span-8">
              {/* Search Input for Mobile */}
              <div className="mb-8 lg:hidden">
                <div className="relative">
                  <Input 
                    type="text"
                    placeholder="Search articles..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                </div>
              </div>
              
              {/* Mobile Category Filter */}
              <div className="mb-8 lg:hidden">
                <div className="flex flex-wrap gap-2">
                  <Button 
                    variant={selectedCategory === null ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(null)}
                    className="rounded-full"
                  >
                    All
                  </Button>
                  
                  {CATEGORIES.map(category => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className="rounded-full"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
              
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.map((post) => (
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
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold mb-2">No articles found</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory(null);
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-4">
              {/* Search Input */}
              <div className="hidden lg:block bg-muvad-grey p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold mb-4">Search Articles</h3>
                <div className="relative">
                  <Input 
                    type="text"
                    placeholder="Search articles..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                </div>
              </div>
              
              {/* Categories */}
              <div className="hidden lg:block bg-muvad-grey p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                  <button 
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                      selectedCategory === null 
                        ? 'bg-muvad-blue text-white' 
                        : 'hover:bg-gray-200'
                    }`}
                    onClick={() => setSelectedCategory(null)}
                  >
                    All Categories
                  </button>
                  
                  {CATEGORIES.map(category => (
                    <button 
                      key={category}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                        selectedCategory === category 
                          ? 'bg-muvad-blue text-white' 
                          : 'hover:bg-gray-200'
                      }`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* CTA */}
              <div className="bg-gradient-to-br from-muvad-blue to-muvad-lightBlue p-6 rounded-lg text-white">
                <h3 className="text-xl font-bold mb-4">Ready to Win More Contracts?</h3>
                <p className="mb-6">
                  Our no-cost estimating services help subcontractors like you secure more profitable projects.
                </p>
                <Button className="w-full bg-white text-muvad-blue hover:bg-white/90">
                  Book a Discovery Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
