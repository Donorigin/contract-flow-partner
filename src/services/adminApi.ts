
import axios from 'axios';
import { Blog } from './api';

// Define API base URL
const API_BASE_URL = 'https://muvadplaybox.com/api';

// Create axios instance with proper configuration
const adminApi = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  // Increase timeout to 30 seconds to allow for larger uploads
  timeout: 30000,
});

// Set auth token for admin requests
export const setAuthToken = (token: string) => {
  if (token) {
    adminApi.defaults.headers.common['Authorization'] = `Token ${token}`;
    // Save token to localStorage for persistence
    localStorage.setItem('authToken', token);
  } else {
    delete adminApi.defaults.headers.common['Authorization'];
    localStorage.removeItem('authToken');
  }
};

// Load token from localStorage on app init
const token = localStorage.getItem('authToken');
if (token) {
  setAuthToken(token);
}

// Login function
export const loginAdmin = async (credentials: { username: string; password: string }) => {
  try {
    const response = await adminApi.post('/login/', credentials);
    setAuthToken(response.data.token);
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

// Function to upload image and return URL
export const uploadImage = async (file: File): Promise<string> => {
  try {
    // Create form data for file upload
    const formData = new FormData();
    formData.append('image', file);

    // Use multipart/form-data for file upload
    const response = await adminApi.post('/blogs/upload-image/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    
    return response.data.image_url;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};

// Create a new blog post
export const createBlog = async (blogData: Partial<Blog>, imageFile?: File): Promise<Blog> => {
  try {
    let finalData = { ...blogData };
    
    // If image file is provided, upload it first
    if (imageFile) {
      // For multipart/form-data request with both data and file
      const formData = new FormData();
      
      // Append all blog data fields to the form
      Object.entries(finalData).forEach(([key, value]) => {
        if (value !== undefined) {
          formData.append(key, value as string);
        }
      });
      
      // Append the image file
      formData.append('image', imageFile);
      
      // Send the multipart request
      const response = await adminApi.post('/blogs/create/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      return response.data;
    } else {
      // If no image, send a regular JSON request
      const response = await adminApi.post('/blogs/create/', finalData);
      return response.data;
    }
  } catch (error) {
    console.error('Error creating blog:', error);
    throw error;
  }
};

// Update an existing blog post
export const updateBlog = async (id: number, blogData: Partial<Blog>, imageFile?: File): Promise<Blog> => {
  try {
    let finalData = { ...blogData };
    
    // If image file is provided, handle as multipart/form-data
    if (imageFile) {
      const formData = new FormData();
      
      // Append all blog data fields to the form
      Object.entries(finalData).forEach(([key, value]) => {
        if (value !== undefined) {
          formData.append(key, value as string);
        }
      });
      
      // Append the image file
      formData.append('image', imageFile);
      
      // Send the multipart request
      const response = await adminApi.patch(`/blogs/${id}/update/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      return response.data;
    } else {
      // If no image, send a regular JSON request
      const response = await adminApi.patch(`/blogs/${id}/update/`, finalData);
      return response.data;
    }
  } catch (error) {
    console.error(`Error updating blog ${id}:`, error);
    throw error;
  }
};

// Delete a blog post
export const deleteBlog = async (id: number): Promise<void> => {
  try {
    await adminApi.delete(`/blogs/${id}/delete/`);
  } catch (error) {
    console.error(`Error deleting blog ${id}:`, error);
    throw error;
  }
};

// Get all blogs
export const getAdminBlogs = async (): Promise<Blog[]> => {
  try {
    const response = await adminApi.get('/blogs/');
    return response.data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
};

export { adminApi };
