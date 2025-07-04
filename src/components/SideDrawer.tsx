// @ts-ignore
// import drawerImg from '../assets/1000010541.jpg';
import React from 'react';

interface SideDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function SideDrawer({ open, onClose }: SideDrawerProps) {
  return (
    <>
      {/* Overlay - 사이드바가 열릴 때 배경을 어둡게 */}
      {open && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.2)', // 반투명 검은색
            backdropFilter: 'blur(0.3px)', // 블러 효과
            zIndex: 999,
            transition: 'opacity 0.3s ease',
          }}
          onClick={onClose} // 배경 클릭시 사이드바 닫기
        />
      )}
      
      {/* 사이드바 */}
      <div
        style={{
          position: 'fixed',
          left: open ? 0 : '-100%',
          top: 0,
          bottom: 0,
          width: '80vw', // 반응형: 모바일에서 80vw, 최대 320px
          maxWidth: 320,
          minWidth: 220,
          background: '#708090',
          boxShadow: open ? '2px 0 8px #70809033' : 'none',
          transition: 'left 0.3s ease',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{ position: 'relative', background: '#FFFFF0', borderRadius: '0 0 16px 16px', boxShadow: '0 2px 8px #70809033' }}>
          {/* <img src={drawerImg} alt="사이드 이미지" style={{ width: '100%', borderRadius: '0 0 16px 16px' }} /> */}
        </div>
        <nav style={{ padding: '24px 0 0 0', flex: 1 }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: 18, color: '#fff' }}>
            <MenuItem icon={<svg width="20" height="20" fill="none" stroke="#708090" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 12L12 3l9 9"/><path d="M9 21V9h6v12"/></svg>} label="홈" />
            <MenuItem icon={<svg width="20" height="20" fill="none" stroke="#708090" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>} label="탐색" />
            <MenuItem icon={<svg width="20" height="20" fill="none" stroke="#708090" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3v4"/><path d="M8 3v4"/></svg>} label="앱소개" />
            <MenuItem icon={<svg width="20" height="20" fill="none" stroke="#708090" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z"/></svg>} label="피드백" />
            <MenuItem icon={<svg width="20" height="20" fill="none" stroke="#708090" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><circle cx="12" cy="8" r="1"/></svg>} label="도움말" />
          </ul>
        </nav>
        <div style={{ padding: '16px 24px', borderTop: '1px solid #eee', fontSize: 14, color: '#708090', background: '#FFFFF0' }}>
          <span>한국어 - Korean</span>
        </div>
      </div>
    </>
  );
}

// 메뉴 아이템 컴포넌트 정의
function MenuItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  const [hover, setHover] = React.useState(false);
  return (
    <li
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '12px 24px',
        background: hover ? '#FFFFF0' : 'transparent',
        color: hover ? '#708090' : '#fff',
        borderRadius: 8,
        cursor: 'pointer',
        transition: 'background 0.2s, color 0.2s',
        margin: '0 8px',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span style={{ display: 'flex', alignItems: 'center' }}>{icon}</span>
      <span style={{ marginLeft: 12 }}>{label}</span>
    </li>
  );
} 