'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DOMPurify from "isomorphic-dompurify";
import { Trash } from 'lucide-react';
import { SquarePen } from 'lucide-react';

interface Model {
  id: number;
  model_name: string;
  model_age: number;
  model_location: string;
  model_desc: string;
  model_image: string | null;
  createdAt: string;
  updatedAt: string;
}

export default function ModelsContent() {
  const [models, setModels] = useState<Model[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchModels();
  }, []);

  const fetchModels = async () => {
    try {
      const response = await fetch('/api/models');
      const data = await response.json();
      if (data.success) {
        setModels(data.models);
      }
    } catch (error) {
      console.error('Error fetching models:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this model?')) return;

    try {
      const response = await fetch(`/api/models/${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (data.success) {
        alert('Model deleted successfully!');
        fetchModels();
      } else {
        alert(data.error || 'Failed to delete model');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to delete model');
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
          Loading models...
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
          Models
        </h1>
        <Link href="/dashboard/models/create" style={{
          padding: '10px 20px',
          background: 'linear-gradient(135deg, #9D00FF 0%, #c40000 100%)',
          color: 'white',
          borderRadius: '6px',
          textDecoration: 'none',
          fontWeight: '500',
          boxShadow: '0 2px 8px rgba(157, 0, 255, 0.3)',
          transition: 'all 0.2s'
        }}>
          + Create Model
        </Link>
      </div>

      {models.length === 0 ? (
        <p style={{
          fontSize: '16px',
          color: '#6b7280',
          textAlign: 'center',
          padding: '40px'
        }}>
          No models found. Create your first model!
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
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', color: '#1f2937' }}>Name</th>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', color: '#1f2937' }}>Age</th>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', color: '#1f2937' }}>Location</th>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', color: '#1f2937' }}>Description</th>
                <th style={{ padding: '12px', textAlign: 'center', fontWeight: '600', color: '#1f2937' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {models.map((model) => (
                <tr key={model.id} style={{ 
                  borderBottom: '1px solid rgba(157, 0, 255, 0.1)',
                  transition: 'background-color 0.2s'
                }}>
                  <td style={{ padding: '12px', fontWeight: '500', color: '#1f2937' }}>
                    {model.id}
                  </td>
                  <td style={{ padding: '12px' }}>
                    {model.model_image ? (
                      <Image
                        src={model.model_image}
                        alt={model.model_name}
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
                    {model.model_name}
                  </td>
                  <td style={{ padding: '12px', color: '#6b7280' }}>
                    {model.model_age}
                  </td>
                  <td style={{ padding: '12px', color: '#6b7280' }}>
                    {model.model_location}
                  </td>
                  <td style={{ padding: '12px', maxWidth: '300px', backgroundColor: "#b547ff" }}>
                    <div
                      className="line-clamp-2 wrap-break-word"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(model.model_desc)
                      }}
                    />
                  </td>
                  <td style={{ padding: '12px' }}>
                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                      <Link
                        href={`/dashboard/models/edit/${model.id}`}
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
                        onClick={() => handleDelete(model.id)}
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