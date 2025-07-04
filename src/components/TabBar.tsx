import React, { useState } from 'react';

interface TabBarProps {
  tab: 'discover' | 'about';
  setTab: (tab: 'discover' | 'about') => void;
}

export default function TabBar({ tab, setTab }: TabBarProps) {
  const [hoveredTab, setHoveredTab] = useState<'discover' | 'about' | null>(null);

  return (
    <div style={{
      display: 'flex',
      width: '100vw',
      maxWidth: '100%',
      minWidth: 0,
      borderBottom: '2px solid rgba(145, 158, 170, 0.59)',
      background: 'none',
    }}>
      <button
        onClick={() => setTab('discover')}
        onMouseEnter={() => setHoveredTab('discover')}
        onMouseLeave={() => setHoveredTab(null)}
        style={{
          flex: 1,
          background: 'none',
          border: 'none',
          color: '#FFFFF0',
          fontWeight: 'bold',
          fontSize: 18,
          cursor: 'pointer',
          padding: 16,
          position: 'relative',
          outline: 'none',
          boxShadow: 'none',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'SUIT, sans-serif',
          filter: hoveredTab === 'discover' ? 'blur(1px)' : 'none',
          textShadow: hoveredTab === 'discover' ? '2px 2px 3px rgba(0, 0, 0, 0.4)' : 'none',
          transition: 'filter 0.3s ease, text-shadow 0.3s ease',
        }}
        tabIndex={0}
        onMouseDown={e => e.preventDefault()}
        onFocus={e => e.target.blur()}
      >
        탐색
        {tab === 'discover' && (
          <div style={{ height: 3, width: 80, background: '#B76E79', borderRadius: 2, position: 'absolute', left: '50%', transform: 'translateX(-50%)', bottom: 0 }} />
        )}
      </button>
      <button
        onClick={() => setTab('about')}
        onMouseEnter={() => setHoveredTab('about')}
        onMouseLeave={() => setHoveredTab(null)}
        style={{
          flex: 1,
          background: 'none',
          border: 'none',
          color: '#FFFFF0',
          fontWeight: 'bold',
          fontSize: 18,
          cursor: 'pointer',
          padding: 16,
          position: 'relative',
          outline: 'none',
          boxShadow: 'none',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'SUIT, sans-serif',
          filter: hoveredTab === 'about' ? 'blur(1px)' : 'none',
          textShadow: hoveredTab === 'about' ? '2px 2px 3px rgba(0, 0, 0, 0.4)' : 'none',
          transition: 'filter 0.3s ease, text-shadow 0.3s ease',
        }}
        tabIndex={0}
        onMouseDown={e => e.preventDefault()}
        onFocus={e => e.target.blur()}
      >
        앱소개
        {tab === 'about' && (
          <div style={{ height: 3, width: 80, background: '#B76E79', borderRadius: 2, position: 'absolute', left: '50%', transform: 'translateX(-50%)', bottom: 0 }} />
        )}
      </button>
    </div>
  );
} 