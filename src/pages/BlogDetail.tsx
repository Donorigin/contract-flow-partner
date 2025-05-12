
import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Sample blog posts data - in a real app, this would come from an API
const BLOG_POSTS = [
  {
    id: "1",
    title: "5 Ways to Win More Contracts as a Subcontractor",
    content: `
      <p class="mb-4">As a subcontractor in the competitive construction industry, securing contracts consistently is crucial for business growth and stability. With general contractors receiving multiple bids for each project, standing out from the competition requires strategy and professionalism.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">1. Develop a Professional Bidding Process</h2>
      <p class="mb-4">First impressions matter. When a general contractor receives your bid, the presentation, accuracy, and professionalism of your proposal can significantly impact their decision. A well-structured bid demonstrates your attention to detail and commitment to quality.</p>
      
      <p class="mb-4">At Muvad Consults, we specialize in creating professional, detailed bids that highlight your capabilities and competitive advantages. Our estimators ensure that every number is accurate and every specification is addressed.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">2. Build Strong Relationships with General Contractors</h2>
      <p class="mb-4">Construction is a relationship-driven industry. Building and maintaining strong connections with general contractors can lead to repeat business and referrals. Regular communication, reliability, and exceptional service are key factors in cultivating these relationships.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">3. Showcase Your Expertise and Experience</h2>
      <p class="mb-4">General contractors are looking for subcontractors who bring expertise and experience to their projects. Highlighting your specialized skills, certifications, and past successful projects can set you apart from competitors who may only compete on price.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">4. Leverage Technology for Efficiency</h2>
      <p class="mb-4">Embracing construction technology can streamline your operations and demonstrate your forward-thinking approach. From estimation software to project management tools, technology can help you work more efficiently and deliver projects more effectively.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">5. Partner with Muvad Consults for Risk-Free Estimating</h2>
      <p class="mb-4">One of the most significant barriers to bidding on more projects is the time and resources required for takeoffs and estimating. Our no-upfront-cost model eliminates this barrier, allowing you to pursue more opportunities without financial risk.</p>
      
      <p class="mb-4">We handle the entire process from takeoffs to proposal submission and follow-up, and you only pay when you win the contract. This approach allows you to focus on executing projects while we help keep your pipeline full.</p>
      
      <p class="mt-8 text-lg font-semibold">Ready to win more contracts? Contact Muvad Consults today to schedule a discovery call and learn how our services can transform your bidding process.</p>
    `,
    publishDate: "May 8, 2025",
    author: "Muvad Team",
    category: "Business Growth",
    image: "/lovable-uploads/photo-1487058792275-0ad4aaf24ca7",
    readTime: "5 min read"
  },
  {
    id: "2",
    title: "Understanding the True Cost of Estimating Services",
    content: `
      <p class="mb-4">For subcontractors in the construction industry, estimating is both essential and expensive. The true cost goes beyond just the time spent creating takeoffs and proposals - it includes opportunity costs, overhead, and potential errors that can impact profitability.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">The Hidden Costs of Traditional Estimating</h2>
      <p class="mb-4">Many subcontractors don't fully account for the resources dedicated to the estimating process. Consider these hidden costs:</p>
      
      <ul class="list-disc ml-6 mb-6 space-y-2">
        <li>Salary costs for estimators or time diverted from other valuable activities</li>
        <li>Software and technology expenses</li>
        <li>Training and keeping up with new methods and materials</li>
        <li>Opportunity costs when you must be selective about which projects to bid on</li>
        <li>Financial impact of estimation errors, which can significantly reduce profit margins</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Why Our No-Upfront-Cost Model Works</h2>
      <p class="mb-4">At Muvad Consults, we've reimagined how estimating services can work for subcontractors. Our model aligns our success with yours - we only get paid when you win contracts.</p>
      
      <p class="mb-4">This approach offers several advantages:</p>
      
      <ul class="list-disc ml-6 mb-6 space-y-2">
        <li>Zero financial risk - no costs unless you win the project</li>
        <li>Access to professional estimators without adding to your payroll</li>
        <li>Ability to bid on more projects, increasing your chances of winning work</li>
        <li>Predictable costs that scale with your success</li>
        <li>High-quality estimates from specialists in your trade</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Maximizing Your ROI</h2>
      <p class="mb-4">The return on investment from our approach is clear: you get professional estimating services without upfront costs, leading to more successful bids and higher profits.</p>
      
      <p class="mb-4">Our clients report not only winning more contracts but also securing more profitable work because of our thorough analysis and strategic pricing guidance.</p>
      
      <p class="mt-8 text-lg font-semibold">Ready to transform your estimating process? Schedule a discovery call with Muvad Consults today and learn how our no-upfront-cost model can help your business grow.</p>
    `,
    publishDate: "May 2, 2025",
    author: "Muvad Team",
    category: "Estimating",
    image: "/lovable-uploads/photo-1472396961693-142e6e269027",
    readTime: "4 min read"
  },
  {
    id: "3",
    title: "How to Prepare Perfect Proposals for General Contractors",
    content: `
      <p class="mb-4">A well-crafted proposal can be the difference between winning and losing a contract. General contractors receive numerous bids for each project, and your proposal needs to stand out for all the right reasons.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Elements of a Winning Proposal</h2>
      <p class="mb-4">The best proposals combine accuracy, clarity, and professionalism. Here's what to include:</p>
      
      <ul class="list-disc ml-6 mb-6 space-y-2">
        <li>Detailed scope of work that demonstrates your understanding of the project</li>
        <li>Clear pricing breakdown that justifies your costs</li>
        <li>Project timeline with key milestones</li>
        <li>Qualifications and relevant experience</li>
        <li>References from similar successful projects</li>
        <li>Proof of insurance and licensing information</li>
        <li>Terms and conditions that protect both parties</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Common Proposal Mistakes to Avoid</h2>
      <p class="mb-4">Even experienced subcontractors can make these common errors that weaken their proposals:</p>
      
      <ul class="list-disc ml-6 mb-6 space-y-2">
        <li>Vague scope definitions that leave room for misinterpretation</li>
        <li>Unrealistic pricing that's either too high or unsustainably low</li>
        <li>Missing exclusions or assumptions that could lead to disputes</li>
        <li>Poor presentation and formatting that makes information hard to find</li>
        <li>Late submission that creates a negative first impression</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">The Muvad Approach to Proposal Excellence</h2>
      <p class="mb-4">Our proposal specialists understand what general contractors are looking for and how to present your services in the most compelling way. We:</p>
      
      <ul class="list-disc ml-6 mb-6 space-y-2">
        <li>Create customized proposals for each project rather than using generic templates</li>
        <li>Highlight your competitive advantages and unique value proposition</li>
        <li>Ensure all technical specifications are accurately addressed</li>
        <li>Use professional formatting that makes your proposal easy to evaluate</li>
        <li>Submit on time or early to demonstrate reliability</li>
      </ul>
      
      <p class="mb-4">After submission, we don't just wait and hope. Our follow-up process keeps your bid at the top of the general contractor's mind and provides opportunities to address any questions or concerns.</p>
      
      <p class="mt-8 text-lg font-semibold">Want to transform your proposal process? Contact Muvad Consults today and discover how our comprehensive proposal services can help you win more contracts.</p>
    `,
    publishDate: "April 28, 2025",
    author: "Muvad Team",
    category: "Proposals",
    image: "/lovable-uploads/photo-1466721591366-2d5fba72006d",
    readTime: "6 min read"
  }
];

export default function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  
  // Find the blog post with the matching ID
  const post = BLOG_POSTS.find(post => post.id === id);
  
  // If no post is found, we could show an error or redirect
  if (!post) {
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
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm md:text-base text-white/80">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{post.publishDate}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center">
              <Tag className="h-4 w-4 mr-2" />
              <span>{post.category}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full py-8">
        <div className="container">
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden mb-12">
            <img 
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
              loading="lazy"
              width={1200}
              height={600}
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <article className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </article>
              
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
                <div className="space-y-4">
                  {BLOG_POSTS.filter(p => p.id !== post.id).map(relatedPost => (
                    <div key={relatedPost.id} className="border-b border-gray-200 pb-4 last:border-0">
                      <Link 
                        to={`/blog/${relatedPost.id}`}
                        className="font-medium hover:text-muvad-blue transition-colors"
                      >
                        {relatedPost.title}
                      </Link>
                      <div className="text-sm text-gray-500 mt-1">
                        {relatedPost.publishDate} • {relatedPost.readTime}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {Array.from(new Set(BLOG_POSTS.map(p => p.category))).map(category => (
                      <span 
                        key={category} 
                        className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
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
