
import axios from 'axios';

// Define API base URL
const API_BASE_URL = 'https://muvadplaybox.com';

// Create axios instance with proper configuration
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  // Add timeout to avoid long waits for failed requests
  timeout: 10000,
});

export interface Message {
  full_name: string;
  company_name: string | null;
  email: string;
  phone_number: string | null;
  service_type: "Estimating" | "ITBs" | "Lead Resercher" | "Full Package";
  project_details: string;
}

export interface Blog {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

// FALLBACK DATA for when API fails
export const FALLBACK_BLOGS = [
  {
    id: 1,
    title: "5 Ways to Win More Contracts as a Subcontractor",
    excerpt: "Learn the strategies that top subcontractors use to secure more projects and increase their revenue.",
    content: `
      <p class="mb-4">As a subcontractor in the competitive construction industry, securing contracts consistently is crucial for business growth and stability. With general contractors receiving multiple bids for each project, standing out from the competition requires strategy and professionalism.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">1. Develop a Professional Bidding Process</h2>
      <p class="mb-4">First impressions matter. When a general contractor receives your bid, the presentation, accuracy, and professionalism of your proposal can significantly impact their decision. A well-structured bid demonstrates your attention to detail and commitment to quality.</p>
      
      <p class="mb-4">At Muvad Consults, we specialize in creating professional, detailed bids that highlight your capabilities and competitive advantages. Our estimators ensure that every number is accurate and every specification is addressed.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">2. Build Strong Relationships with General Contractors</h2>
      <p class="mb-4">Construction is a relationship-driven industry. Building and maintaining strong connections with general contractors can lead to repeat business and referrals. Regular communication, reliability, and exceptional service are key factors in cultivating these relationships.</p>
    `,
    date: "May 8, 2025",
    category: "Business Growth",
    image: "/lovable-uploads/photo-1487058792275-0ad4aaf24ca7",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Understanding the True Cost of Estimating Services",
    excerpt: "Explore how our no-upfront-cost model helps subcontractors grow their business without financial risk.",
    content: `
      <p class="mb-4">For subcontractors in the construction industry, estimating is both essential and expensive. The true cost goes beyond just the time spent creating takeoffs and proposals - it includes opportunity costs, overhead, and potential errors that can impact profitability.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">The Hidden Costs of Traditional Estimating</h2>
      <p class="mb-4">Many subcontractors don't fully account for the resources dedicated to the estimating process. Consider these hidden costs:</p>
    `,
    date: "May 2, 2025",
    category: "Estimating",
    image: "/lovable-uploads/photo-1472396961693-142e6e269027",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "How to Prepare Perfect Proposals for General Contractors",
    excerpt: "Our expert tips on creating proposals that stand out and win the approval of general contractors.",
    content: `
      <p class="mb-4">A well-crafted proposal can be the difference between winning and losing a contract. General contractors receive numerous bids for each project, and your proposal needs to stand out for all the right reasons.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Elements of a Winning Proposal</h2>
      <p class="mb-4">The best proposals combine accuracy, clarity, and professionalism. Here's what to include:</p>
    `,
    date: "April 28, 2025",
    category: "Proposals",
    image: "/lovable-uploads/photo-1466721591366-2d5fba72006d",
    readTime: "6 min read"
  }
];

// Message creation function with improved error handling
export const createMessage = async (messageData: Message): Promise<any> => {
  try {
    const response = await api.post('/api/message/create-message/', messageData);
    return response.data;
  } catch (error) {
    console.error('Error creating message:', error);
    // Check if the API server is down or if there's another issue
    if (axios.isAxiosError(error) && !error.response) {
      throw new Error("Network error: Unable to connect to the server. Please check your internet connection and try again.");
    }
    throw error;
  }
};

// Get all blogs with improved error handling
export const getBlogs = async (): Promise<Blog[]> => {
  try {
    const response = await api.get('/api/blogs/');
    return response.data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    // For blogs, we'll provide fallback data instead of throwing an error
    if (axios.isAxiosError(error) && !error.response) {
      console.log('Using fallback blog data');
      return FALLBACK_BLOGS as Blog[];
    }
    return FALLBACK_BLOGS as Blog[];
  }
};

// Get blog detail with improved error handling
export const getBlogDetail = async (blogId: string): Promise<Blog> => {
  try {
    const response = await api.get(`/api/blogs/${blogId}/`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching blog ${blogId}:`, error);
    // Provide fallback data for the specific blog
    const fallbackBlog = FALLBACK_BLOGS.find(blog => blog.id.toString() === blogId);
    if (fallbackBlog) {
      return fallbackBlog as Blog;
    }
    throw new Error("Blog not found");
  }
};
