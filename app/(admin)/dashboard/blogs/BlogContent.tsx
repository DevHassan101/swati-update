'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import DOMPurify from "isomorphic-dompurify";
import { Trash } from 'lucide-react';
import { SquarePen } from 'lucide-react';

interface Blog {
  id: number;
  blog_name: string;
  slug: string;
  blog_desc: string;
  blog_image: string | null;
  blog_date: string;
  createdAt: string;
}

export default function BlogsContent() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch('/api/blogs');
      const data = await response.json();
      if (data.success) {
        setBlogs(data.blogs);
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this blog?')) return;

    try {
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (data.success) {
        alert('Blog deleted successfully!');
        fetchBlogs();
      } else {
        alert(data.error || 'Failed to delete blog');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to delete blog');
    }
  };

  if (loading) {
    return (
      <div style={{
        background: 'linear-gradient(135deg, rgba(157, 0, 255, 0.03) 0%, rgba(196, 0, 0, 0.03) 100%)',
        borderRadius: '12px',
        padding: '32px',
        boxShadow: '0 4px 12px rgba(157, 0, 255, 0.08)',
        textAlign: 'center',
        border: '1px solid rgba(157, 0, 255, 0.1)'
      }}>
        <p style={{
          background: 'linear-gradient(135deg, #9D00FF 0%, #c40000 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          fontSize: '18px',
          fontWeight: '600'
        }}>
          Loading blogs...
        </p>
      </div>
    );
  }

  return (
    <div style={{
      background: 'linear-gradient(135deg, rgba(157, 0, 255, 0.03) 0%, rgba(196, 0, 0, 0.03) 100%)',
      borderRadius: '12px',
      padding: '32px',
      boxShadow: '0 4px 12px rgba(157, 0, 255, 0.08)',
      border: '1px solid rgba(157, 0, 255, 0.1)'
    }}>
      <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{
          fontSize: '32px',
          fontWeight: 'bold',
          background: 'linear-gradient(135deg, #9D00FF 0%, #c40000 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Blogs
        </h1>
        <Link href="/dashboard/blogs/create" style={{
          padding: '10px 20px',
          background: 'linear-gradient(135deg, #9D00FF 0%, #c40000 100%)',
          color: 'white',
          borderRadius: '6px',
          textDecoration: 'none',
          fontWeight: '500',
          boxShadow: '0 2px 8px rgba(157, 0, 255, 0.3)',
          transition: 'all 0.2s'
        }}>
          + Create Blog
        </Link>
      </div>

      {blogs.length === 0 ? (
        <p style={{
          fontSize: '16px',
          color: '#6b7280',
          textAlign: 'center',
          padding: '40px'
        }}>
          No blogs found. Create your first blog!
        </p>
      ) : (
        <div style={{ overflowX: 'auto' }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            backgroundColor: 'white',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
          }}>
            <thead>
              <tr style={{
                background: 'linear-gradient(135deg, rgba(157, 0, 255, 0.1) 0%, rgba(196, 0, 0, 0.1) 100%)',
                borderBottom: '2px solid rgba(157, 0, 255, 0.2)'
              }}>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', color: '#1f2937' }}>Id</th>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', color: '#1f2937' }}>Image</th>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', color: '#1f2937' }}>Title</th>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', color: '#1f2937' }}>Date</th>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', color: '#1f2937' }}>Description</th>
                <th style={{ padding: '12px', textAlign: 'center', fontWeight: '600', color: '#1f2937' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog.id} style={{
                  borderBottom: '1px solid rgba(157, 0, 255, 0.1)',
                  transition: 'background-color 0.2s'
                }}>
                  <td style={{ padding: '12px', fontWeight: '500', color: '#1f2937' }}>
                    {blog.id}
                  </td>
                  <td style={{ padding: '12px' }}>
                    {blog.blog_image ? (
                      <Image
                        src={blog.blog_image}
                        alt={blog.blog_name}
                        width={60}
                        height={60}
                        style={{
                          borderRadius: '6px',
                          objectFit: 'cover',
                          border: '2px solid rgba(157, 0, 255, 0.2)'
                        }}
                      />
                    ) : (
                      <div style={{
                        width: '60px',
                        height: '60px',
                        background: 'linear-gradient(135deg, rgba(157, 0, 255, 0.1) 0%, rgba(196, 0, 0, 0.1) 100%)',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        color: '#6b7280',
                        border: '2px solid rgba(157, 0, 255, 0.2)'
                      }}>
                        No Image
                      </div>
                    )}
                  </td>
                  <td style={{ padding: '12px', fontWeight: '500', color: '#1f2937' }}>
                    {blog.blog_name}
                  </td>
                  <td style={{ padding: '12px', color: '#6b7280', fontSize: '14px' }}>
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </td>
                  <td style={{ padding: '12px', maxWidth: '300px', backgroundColor: "#b547ff" }}>
                    <div
                      className="line-clamp-2 wrap-break-word"
                      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.blog_desc) }}
                    />
                  </td>
                  <td style={{ padding: '12px' }}>
                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                      <Link
                        href={`/dashboard/blogs/edit/${blog.id}`}
                        style={{
                          padding: '6px 12px',
                          background: 'linear-gradient(135deg, #9D00FF 0%, #7a00cc 100%)',
                          color: 'white',
                          borderRadius: '4px',
                          textDecoration: 'none',
                          fontSize: '14px',
                          boxShadow: '0 2px 6px rgba(157, 0, 255, 0.2)',
                          transition: 'all 0.2s'
                        }}
                      >
                        <SquarePen />
                      </Link>
                      <button
                        onClick={() => handleDelete(blog.id)}
                        style={{
                          padding: '6px 12px',
                          background: 'linear-gradient(135deg, #c40000 0%, #ff3333 100%)',
                          color: 'white',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontSize: '14px',
                          boxShadow: '0 2px 6px rgba(196, 0, 0, 0.2)',
                          transition: 'all 0.2s'
                        }}
                      >
                        <Trash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}