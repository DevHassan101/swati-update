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