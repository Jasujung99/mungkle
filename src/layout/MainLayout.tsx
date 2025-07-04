import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import SideDrawer from '../components/SideDrawer';
import TabBar from '../components/TabBar';
import BottomActionBar from '../components/BottomActionBar';

interface MainLayoutProps {
  children: React.ReactNode;
  tab: 'discover' | 'about';
  setTab: (tab: 'discover' | 'about') => void;
  onJoin?: () => void;
  onLogin?: () => void;
}

export default function MainLayout({ children, tab, setTab, onJoin, onLogin }: MainLayoutProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div style={{ minHeight: '100vh', background: '#708090', position: 'relative', width: '100vw', maxWidth: '100%', minWidth: 0, margin: 0, padding: 0, overflowX: 'hidden' }}>
      <TopBar onMenu={() => setDrawerOpen(true)} />
      <SideDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <TabBar tab={tab} setTab={setTab} />
      <div style={{ width: '100%', padding: '32px 0 96px 0', display: 'flex', justifyContent: 'center' }}>
        {children}
      </div>
      <BottomActionBar onJoin={onJoin} onLogin={onLogin} />
    </div>
  );
} 