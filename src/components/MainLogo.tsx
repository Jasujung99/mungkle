// @ts-ignore
import logo from '../assets/1000010540.jpg';
import React from 'react';

export default function MainLogo() {
  return (
    <img
      src={logo}
      alt="앱 로고"
      style={{ width: 96, height: 96, borderRadius: '50%', boxShadow: '0 2px 8px #70809022', margin: '0 auto' }}
    />
  );
} 