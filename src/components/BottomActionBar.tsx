import React, { useState } from 'react';

interface BottomActionBarProps {
  onJoin?: () => void;
  onLogin?: () => void;
}

export default function BottomActionBar({ onJoin, onLogin }: BottomActionBarProps) {
  const [hovered, setHovered] = useState<'join' | 'login' | null>(null);

  return (
    <div
      style={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        maxWidth: '100%',
        minWidth: 0,
        background: '#708090',
        borderTop: '1px solid rgba(145, 158, 170, 0.59)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        boxShadow: '0 -2px 8px #70809033',
        padding: 12,
        zIndex: 1001,
      }}
    >
      <style>
        {`
          @font-face {
            font-family: 'Ownglyph_corncorn-Rg';
            src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2412-1@1.0/Ownglyph_corncorn-Rg.woff2') format('woff2');
            font-weight: normal;
            font-style: normal;
          }
        `}
      </style>
      {/* 로고 + 앱제목 */}
      <div style={{ display: 'flex', alignItems: 'center', marginRight: 36 }}>
        <img src="/src/assets/gpt-mung.png" alt="뭉클웅클 로고" style={{ width: 36, height: 36, objectFit: 'contain', marginRight: 12, borderRadius: '50%' }} />
        <span style={{
          fontFamily: 'Ownglyph_corncorn-Rg, sans-serif',
          fontSize: 22,
          color: '#FFF8F0',
          fontWeight: 'normal',
          letterSpacing: 1,
        }}>
          뭉클웅클
        </span>
      </div>
      {/* 버튼을 우측 끝으로 밀기 위한 flex-grow spacer */}
      <div style={{ flex: 1 }} />
              <button
        onClick={onJoin}
        style={{
          background: '#B76E79',
          color: '#FFFFF0',
          border: 'none',
          borderRadius: 8,
          fontSize: 15,
          fontWeight: 'bold',
          fontFamily: 'SUIT, sans-serif',
          padding: '9px 22px',
          boxShadow: '0 2px 8px #70809033',
          cursor: 'pointer',
          transition: 'filter 0.3s, text-shadow 0.3s',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minWidth: 0,
          filter: hovered === 'join' ? 'blur(0.5px)' : 'none',
          textShadow: hovered === 'join' ? '2px 2px 3px rgba(0,0,0,0.4)' : 'none',
          marginRight: 8,
        }}
        onMouseEnter={() => setHovered('join')}
        onMouseLeave={() => setHovered(null)}
      >
        가입하기
      </button>
              <button
        onClick={onLogin}
        style={{
          background: '#FFFFF0',
          color: '#708090',
          border: 'none',
          borderRadius: 8,
          fontSize: 15,
          fontWeight: 'bold',
          fontFamily: 'SUIT, sans-serif',
          padding: '9px 22px',
          boxShadow: '0 2px 8px #70809033',
          cursor: 'pointer',
          transition: 'filter 0.3s, text-shadow 0.3s',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minWidth: 0,
          filter: hovered === 'login' ? 'blur(0.5px)' : 'none',
          textShadow: hovered === 'login' ? '2px 2px 3px rgba(0,0,0,0.4)' : 'none',
          marginRight: 24,
        }}
        onMouseEnter={() => setHovered('login')}
        onMouseLeave={() => setHovered(null)}
      >
        로그인
      </button>
    </div>
  );
} 