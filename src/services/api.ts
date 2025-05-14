
import axios from 'axios';

const API_BASE_URL = 'https://muvadplaybox.com';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface Message {
  full_name: string;
  company_name: string | null;
  email: string;
  phone_number: string | null;
  service_type: 'Estimating' | 'ITBs' | 'Lead Resercher' | 'Full Package';
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

export const createMessage = async (messageData: Message): Promise<any> => {
  try {
    const response = await api.post('/api/message/create-message/', messageData);
    return response.data;
  } catch (error) {
    console.error('Error creating message:', error);
    throw error;
  }
};

export const getBlogs = async (): Promise<Blog[]> => {
  try {
    const response = await api.get('/api/blogs/');
    return response.data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
};

export const getBlogDetail = async (blogId: string): Promise<Blog> => {
  try {
    const response = await api.get(`/api/blogs/${blogId}/`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching blog ${blogId}:`, error);
    throw error;
  }
};
