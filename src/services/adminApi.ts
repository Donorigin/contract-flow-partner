
import axios from 'axios';
import { Blog } from './api';

// Define API base URL
const API_BASE_URL = 'https://muvadplaybox.com';

// Create axios instance with proper configuration
const adminApi = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Set auth token for admin requests
const setAuthToken = (token: string) => {
  if (token) {
    adminApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete adminApi.defaults.headers.common['Authorization'];
  }
};

// In a real app, these functions would interact with a real backend API
// For this demo, we'll use localStorage to simulate CRUD operations

// Create a new blog post
export const createBlog = async (blogData: Partial<Blog>): Promise<Blog> => {
  try {
    // In a real app, this would be an API call
    // const response = await adminApi.post('/api/blogs/', blogData);
    // return response.data;
    
    // For demo, we'll simulate with localStorage
    const blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    const newBlog = {
      ...blogData,
      id: blogs.length > 0 ? Math.max(...blogs.map((b: Blog) => b.id)) + 1 : 1,
      created_at: new Date().toISOString(),
      published_date: new Date().toISOString(),
      date: new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      readTime: blogData.time_to_read ? `${blogData.time_to_read} min read` : "5 min read",
    };
    
    blogs.push(newBlog);
    localStorage.setItem('blogs', JSON.stringify(blogs));
    return newBlog as Blog;
  } catch (error) {
    console.error('Error creating blog:', error);
    throw error;
  }
};

// Update an existing blog post
export const updateBlog = async (id: number, blogData: Partial<Blog>): Promise<Blog> => {
  try {
    // In a real app, this would be an API call
    // const response = await adminApi.put(`/api/blogs/${id}/`, blogData);
    // return response.data;
    
    // For demo, we'll simulate with localStorage
    const blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    const index = blogs.findIndex((blog: Blog) => blog.id === id);
    
    if (index === -1) {
      throw new Error('Blog not found');
    }
    
    const updatedBlog = {
      ...blogs[index],
      ...blogData,
      date: blogData.published_date ? new Date(blogData.published_date).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }) : blogs[index].date,
      readTime: blogData.time_to_read ? `${blogData.time_to_read} min read` : blogs[index].readTime,
    };
    
    blogs[index] = updatedBlog;
    localStorage.setItem('blogs', JSON.stringify(blogs));
    return updatedBlog as Blog;
  } catch (error) {
    console.error(`Error updating blog ${id}:`, error);
    throw error;
  }
};

// Delete a blog post
export const deleteBlog = async (id: number): Promise<void> => {
  try {
    // In a real app, this would be an API call
    // await adminApi.delete(`/api/blogs/${id}/`);
    
    // For demo, we'll simulate with localStorage
    const blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    const filteredBlogs = blogs.filter((blog: Blog) => blog.id !== id);
    
    localStorage.setItem('blogs', JSON.stringify(filteredBlogs));
  } catch (error) {
    console.error(`Error deleting blog ${id}:`, error);
    throw error;
  }
};

export { setAuthToken };
