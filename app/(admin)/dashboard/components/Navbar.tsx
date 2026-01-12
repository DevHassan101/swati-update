'use client';

import { useState } from 'react';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { logoutAction } from '@/app/actions/auth';

interface NavbarProps {
  user: {
    username: string;
    email: string;
  };
  isSidebarOpen: boolean;
  onMenuClick: () => void;
}

export default function Navbar({ user, isSidebarOpen, onMenuClick }: NavbarProps) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = async () => {
    try {
      await logoutAction();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <>
      <header style={{
        height: '70px',
        background: 'linear-gradient(90deg, #9D00FF 0%, #7a00cc 100%)',
        borderBottom: '2px solid rgba(196, 0, 0, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        position: 'sticky',
        top: 0,
        zIndex: 30,
        boxShadow: '0 4px 12px rgba(157, 0, 255, 0.2)'
      }}>
        {/* Left Side - Menu Button (Always visible) */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}>
          <button
            onClick={onMenuClick}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              color: '#ffffff',
              borderRadius: '8px',
              transition: 'background 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
          
          <h1 style={{
            fontSize: '20px',
            fontWeight: '600',
            color: '#ffffff',
            margin: 0
          }}>
            Dashboard
          </h1>
        </div>

        {/* Right Side - User Profile */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '24px'
        }}>
          {/* User Profile Dropdown */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                borderRadius: '8px',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #c40000 0%, #ff3333 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '16px',
                boxShadow: '0 4px 8px rgba(196, 0, 0, 0.3)'
              }}>
                {user.username.charAt(0).toUpperCase()}
              </div>
              <div style={{ textAlign: 'left' }} className="user-name">
                <p style={{
                  margin: 0,
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#ffffff'
                }}>
                  {user.username}
                </p>
              </div>
              <FiChevronDown
                size={18}
                className="chevron"
                style={{
                  color: '#ffffff',
                  transition: 'transform 0.2s',
                  transform: showDropdown ? 'rotate(180deg)' : 'rotate(0deg)'
                }}
              />
            </button>

            {/* Dropdown Menu */}
            {showDropdown && (
              <div style={{
                position: 'absolute',
                top: '60px',
                right: 0,
                width: '240px',
                background: 'linear-gradient(135deg, #9D00FF 0%, #8500d9 100%)',
                borderRadius: '12px',
                boxShadow: '0 10px 40px rgba(157, 0, 255, 0.4)',
                padding: '8px',
                zIndex: 100,
                border: '1px solid rgba(196, 0, 0, 0.2)'
              }}>
                <div style={{
                  padding: '12px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <p style={{
                    margin: 0,
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#ffffff'
                  }}>
                    {user.username}
                  </p>
                  <p style={{
                    margin: '4px 0 0 0',
                    fontSize: '13px',
                    color: 'rgba(255, 255, 255, 0.7)'
                  }}>
                    {user.email}
                  </p>
                </div>

                <div style={{ padding: '4px 0' }}>
                  <button
                    onClick={handleLogout}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      fontSize: '14px',
                      color: '#ff6b6b',
                      fontWeight: '500',
                      borderRadius: '6px',
                      transition: 'background 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(196, 0, 0, 0.3)';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#ff6b6b';
                    }}
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      <style jsx>{`
        @media (max-width: 640px) {
          .user-name, .chevron {
            display: none;
          }
        }
      `}</style>
    </>
  );
}