import React from 'react';
import logo from '../assets/gpt-mung.png';

interface TopBarProps {
  onMenu: () => void;
}

export default function TopBar({ onMenu }: TopBarProps) {
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        height: 91,
        background: '#708090',
//        borderBottom: '1px solid #eee',
        boxShadow: '0 2px 8px #70809033',
        padding: '0 12px',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <button
        onClick={onMenu}
        style={{
          background: '#708090',
          border: 'none',
        }}
        aria-label="메뉴"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="6" rx="12" ry="2.5" fill="#FFF8F0" filter="drop-shadow(0 1px 2px rgba(0,0,0,0.1))" />
          <ellipse cx="12" cy="12" rx="12" ry="2.5" fill="#FFF8F0" filter="drop-shadow(0 1px 2px rgba(0,0,0,0.1))" />
          <ellipse cx="12" cy="18" rx="12" ry="2.5" fill="#FFF8F0" filter="drop-shadow(0 1px 2px rgba(0,0,0,0.1))" />
        </svg>
        
        <span style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          fontSize: 12,
          color: '#fff',
          opacity: 0,
          pointerEvents: 'none',
        }}>
          메뉴
        </span>
      </button>
      <div style={{ flex: 1, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
        <img src={logo} alt="로고" style={{ height: 67, verticalAlign: 'middle' }} />
      </div>
      <div style={{ width: 40 }} />
    </header>
  );
} 