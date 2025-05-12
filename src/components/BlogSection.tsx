
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "./ui/card";
import { Link } from "react-router-dom";

const BLOG_PREVIEW = [
  {
    id: 1,
    title: "5 Ways to Win More Contracts as a Subcontractor",
    excerpt: "Learn the strategies that top subcontractors use to secure more projects and increase their revenue.",
    date: "May 8, 2025",
    category: "Business Growth",
    image: "/lovable-uploads/photo-1487058792275-0ad4aaf24ca7",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Understanding the True Cost of Estimating Services",
    excerpt: "Explore how our no-upfront-cost model helps subcontractors grow their business without financial risk.",
    date: "May 2, 2025",
    category: "Estimating",
    image: "/lovable-uploads/photo-1472396961693-142e6e269027",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "How to Prepare Perfect Proposals for General Contractors",
    excerpt: "Our expert tips on creating proposals that stand out and win the approval of general contractors.",
    date: "April 28, 2025",
    category: "Proposals",
    image: "/lovable-uploads/photo-1466721591366-2d5fba72006d",
    readTime: "6 min read"
  }
];

export function BlogSection() {
  return (
    <section className="py-16 bg-muvad-grey" id="blog">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-muvad-darkGrey mb-4">Latest Insights</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Expert advice and industry news to help your subcontracting business thrive
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_PREVIEW.map((post) => (
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
        
        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="border-muvad-blue text-muvad-blue hover:bg-muvad-blue hover:text-white transition-all">
            <Link to="/blog">View All Articles <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
