import React, { useState } from 'react';
import MainLayout from './layout/MainLayout';
import DiscoverScreen from './screens/DiscoverScreen';
import AboutScreen from './screens/AboutScreen';

function App() {
  const [tab, setTab] = useState<'discover' | 'about'>('discover');

  return (
    <MainLayout
      tab={tab}
      setTab={setTab}
      onJoin={() => alert('가입하기 클릭!')}
      onLogin={() => alert('로그인 클릭!')}
    >
      {tab === 'discover' ? <DiscoverScreen /> : <AboutScreen />}
    </MainLayout>
  );
}

export default App; 