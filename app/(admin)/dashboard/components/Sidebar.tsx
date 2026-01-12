'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiHome, FiLayers, FiFileText, FiChevronDown, FiPlus, FiEye } from 'react-icons/fi';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const isModelActive = pathname.startsWith('/dashboard/models');
  const isBlogActive = pathname.startsWith('/dashboard/blogs');

  const toggleAccordion = (accordion: string) => {
    setActiveAccordion(activeAccordion === accordion ? null : accordion);
  };

  return (
    <>
      {/* Overlay for mobile */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 40,
          display: isOpen ? 'block' : 'none'
        }}
        className="mobile-overlay lg:hidden"
      />

      {/* Sidebar */}
      <aside
        style={{
          width: '250px',
          background: 'linear-gradient(180deg, #9D00FF 0%, #7a00cc 100%)',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          boxShadow: '4px 0 12px rgba(157, 0, 255, 0.3)',
          padding: '20px 0',
          overflowY: 'auto',
          zIndex: 50,
          transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.3s ease'
        }}
        className={`sidebar ${isOpen ? '' : 'max-lg:-translate-x-full'} lg:translate-x-0`}
      >
        {/* Logo */}
        <div style={{
          padding: '0 24px',
          marginBottom: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            margin: 0
          }}>
            <span style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #c40000 0%, #ff3333 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '18px',
              fontWeight: 'bold',
              boxShadow: '0 4px 8px rgba(196, 0, 0, 0.3)'
            }}>S</span>
            Swati-Kuar
          </h2>
        </div>

        {/* Menu Items */}
        <nav>
          {/* Dashboard */}
          <Link
            href="/dashboard"
            onClick={onClose}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 24px',
              color: pathname === '/dashboard' ? '#ffffff' : 'rgba(255, 255, 255, 0.7)',
              backgroundColor: pathname === '/dashboard' ? 'rgba(196, 0, 0, 0.3)' : 'transparent',
              textDecoration: 'none',
              transition: 'all 0.2s',
              borderLeft: pathname === '/dashboard' ? '3px solid #c40000' : '3px solid transparent',
              fontWeight: pathname === '/dashboard' ? '600' : '400',
              fontSize: '15px'
            }}
            onMouseEnter={(e) => {
              if (pathname !== '/dashboard') {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.color = '#ffffff';
              }
            }}
            onMouseLeave={(e) => {
              if (pathname !== '/dashboard') {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
              }
            }}
          >
            <FiHome size={20} />
            Dashboard
          </Link>

          {/* Models Accordion */}
          <div>
            <button
              onClick={() => toggleAccordion('models')}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                padding: '12px 24px',
                color: isModelActive ? '#ffffff' : 'rgba(255, 255, 255, 0.7)',
                backgroundColor: isModelActive ? 'rgba(196, 0, 0, 0.3)' : 'transparent',
                border: 'none',
                textDecoration: 'none',
                transition: 'all 0.2s',
                borderLeft: isModelActive ? '3px solid #c40000' : '3px solid transparent',
                fontWeight: isModelActive ? '600' : '400',
                fontSize: '15px',
                cursor: 'pointer',
                textAlign: 'left'
              }}
              onMouseEnter={(e) => {
                if (!isModelActive) {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.color = '#ffffff';
                }
              }}
              onMouseLeave={(e) => {
                if (!isModelActive) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                }
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <FiLayers size={20} />
                Models
              </div>
              <FiChevronDown
                size={18}
                style={{
                  transition: 'transform 0.2s',
                  transform: activeAccordion === 'models' ? 'rotate(180deg)' : 'rotate(0deg)'
                }}
              />
            </button>
            
            {activeAccordion === 'models' && (
              <div style={{
                paddingLeft: '48px',
                backgroundColor: 'rgba(0, 0, 0, 0.2)'
              }}>
                <Link
                  href="/dashboard/models/create"
                  onClick={onClose}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '10px 24px',
                    color: pathname === '/dashboard/models/create' ? '#ffffff' : 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: pathname === '/dashboard/models/create' ? '600' : '400',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                  onMouseLeave={(e) => {
                    if (pathname !== '/dashboard/models/create') {
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                    }
                  }}
                >
                  <FiPlus size={16} />
                  Add Model
                </Link>
                <Link
                  href="/dashboard/models"
                  onClick={onClose}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '10px 24px',
                    color: pathname === '/dashboard/models' ? '#ffffff' : 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: pathname === '/dashboard/models' ? '600' : '400',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                  onMouseLeave={(e) => {
                    if (pathname !== '/dashboard/models') {
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                    }
                  }}
                >
                  <FiEye size={16} />
                  View Models
                </Link>
              </div>
            )}
          </div>

          {/* Blogs Accordion */}
          <div>
            <button
              onClick={() => toggleAccordion('blogs')}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                padding: '12px 24px',
                color: isBlogActive ? '#ffffff' : 'rgba(255, 255, 255, 0.7)',
                backgroundColor: isBlogActive ? 'rgba(196, 0, 0, 0.3)' : 'transparent',
                border: 'none',
                textDecoration: 'none',
                transition: 'all 0.2s',
                borderLeft: isBlogActive ? '3px solid #c40000' : '3px solid transparent',
                fontWeight: isBlogActive ? '600' : '400',
                fontSize: '15px',
                cursor: 'pointer',
                textAlign: 'left'
              }}
              onMouseEnter={(e) => {
                if (!isBlogActive) {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.color = '#ffffff';
                }
              }}
              onMouseLeave={(e) => {
                if (!isBlogActive) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                }
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <FiFileText size={20} />
                Blogs
              </div>
              <FiChevronDown
                size={18}
                style={{
                  transition: 'transform 0.2s',
                  transform: activeAccordion === 'blogs' ? 'rotate(180deg)' : 'rotate(0deg)'
                }}
              />
            </button>
            
            {activeAccordion === 'blogs' && (
              <div style={{
                paddingLeft: '48px',
                backgroundColor: 'rgba(0, 0, 0, 0.2)'
              }}>
                <Link
                  href="/dashboard/blogs/create"
                  onClick={onClose}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '10px 24px',
                    color: pathname === '/dashboard/blogs/create' ? '#ffffff' : 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: pathname === '/dashboard/blogs/create' ? '600' : '400',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                  onMouseLeave={(e) => {
                    if (pathname !== '/dashboard/blogs/create') {
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                    }
                  }}
                >
                  <FiPlus size={16} />
                  Add Blog
                </Link>
                <Link
                  href="/dashboard/blogs"
                  onClick={onClose}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '10px 24px',
                    color: pathname === '/dashboard/blogs' ? '#ffffff' : 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: pathname === '/dashboard/blogs' ? '600' : '400',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                  onMouseLeave={(e) => {
                    if (pathname !== '/dashboard/blogs') {
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                    }
                  }}
                >
                  <FiEye size={16} />
                  View Blogs
                </Link>
              </div>
            )}
          </div>
        </nav>
      </aside>

      <style jsx>{`
        /* Mobile: sidebar hidden by default, overlay visible when open */
        @media (max-width: 1023px) {
          .sidebar {
            transform: ${isOpen ? 'translateX(0)' : 'translateX(-100%)'};
          }
        }

        /* Desktop: sidebar always visible, no overlay */
        @media (min-width: 1024px) {
          .sidebar {
            transform: translateX(0) !important;
          }
          .mobile-overlay {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}