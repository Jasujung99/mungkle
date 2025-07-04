import React, { useEffect, useState } from 'react';

export default function AboutScreen() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // 앱소개 화면이 마운트되면 바로 페이드인 시작
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ 
      padding: '0px 0px', 
      color: '#708090', 
      position: 'relative',
      minHeight: '160vh', // 스크롤이 생기도록 충분한 높이
    }}>
      <style>
        {`
          @font-face {
            font-family: 'Ownglyph_corncorn-Rg';
            src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2412-1@1.0/Ownglyph_corncorn-Rg.woff2') format('woff2');
            font-weight: normal;
            font-style: normal;
          }
          @font-face {
            font-family: 'SUIT';
            src: url('https://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/static/woff2/SUIT.css');
            font-weight: normal;
            font-style: normal;
          }
        `}
      </style>
      
      {/* 본문 텍스트 */}
      <div style={{
        fontFamily: 'SUIT, sans-serif',
        fontSize: 16,
        marginBottom: 28,
        color: '#FFFFF0',
        lineHeight: 2.0,
        maxWidth: 480,
        margin: '0 auto',
        whiteSpace: 'pre-line',
        textAlign: 'center',
        padding: '32px 16px',
        opacity: isVisible ? 1 : 0,
        filter: isVisible ? 'blur(0px)' : 'blur(3px)',
        transition: 'opacity 3s ease, filter 5s ease',
      }}>
        {'세상은 너무 많은 소리로 가득합니다.\n우리는 잠시 멈추어,\n하나의 목소리에 오롯이 귀 기울이는 법을 잊었는지도 모릅니다.\n\n이곳에는 경쟁하는 숫자가 없습니다.\n'}
        <span style={{ fontWeight: 'bold' }}>{'\'좋아요\''}</span>
        {'나 '}
        <span style={{ fontWeight: 'bold' }}>{'\'구독자 수\''}</span>
        {' 대신,\n마음의 울림과 진정한 공감만이 흐릅니다.\n\n창작자는 오직 자신의 이야기에만 집중하고,\n당신은 당신만의 속도로 그 이야기를 만납니다.\n\n나직이 흘러나오는 목소리를 따라\n함께 문장을 눈으로 좇거나,\n그저 편안히 소리에 몸을 맡길 수 있습니다.\n\n마치, 어린 날 곁에서 책을 읽어주던\n다정한 목소리와 함께하는 것처럼.\n\n당신의 서재에,\n새로운 목소리를 초대하세요.'}
      </div>

      {/* 중간 여백 */}
      <div style={{ height: '30vh' }} />

            {/* 캐치프레이즈 */}
      <div 
        style={{
          fontFamily: 'Spoqa Han Sans Neo, sans-serif',
          fontSize: 14,
          color: '#FFFFF0',
          marginBottom: 28,
          textAlign: 'center',
          letterSpacing: 1,
          lineHeight: 1.3,
          padding: '0 16px',
          opacity: Math.max(0, Math.min(1, (scrollY - 400) / 200)),
          transition: 'opacity 0.4s ease, filter 0.3s ease, text-shadow 0.3s ease',
          transform: 'translateX(-40px)',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.filter = 'blur(0.5px)';
          e.currentTarget.style.textShadow = '2px 2px 3px rgba(0,0,0,0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.filter = 'none';
          e.currentTarget.style.textShadow = 'none';
        }}
      >
      귀 기울이면 들리는, 진짜 목소리
      </div>

      {/* 앱제목 */}
      <div 
        style={{ 
          fontSize: 32, 
          fontWeight: 'normal', 
          marginBottom: 12, 
          color: '#FFFFF0',
          fontFamily: 'Ownglyph_corncorn-Rg, sans-serif',
          textAlign: 'center',
          padding: '0 16px',
          opacity: Math.max(0, Math.min(1, (scrollY - 500) / 200)),
          transition: 'opacity 0.4s ease, filter 0.3s ease, text-shadow 0.3s ease',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.filter = 'blur(1.5px)';
          e.currentTarget.style.textShadow = '2px 2px 3px rgba(0,0,0,0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.filter = 'none';
          e.currentTarget.style.textShadow = 'none';
        }}
      >
        뭉클웅클
      </div>

      {/* 버튼들 */}
      <div style={{ 
        textAlign: 'center', 
        marginTop: 32,
        padding: '0 16px',
        opacity: Math.max(0, Math.min(1, (scrollY - 600) / 200)),
        transition: 'opacity 0.4s ease',
      }}>
        <button
          style={{
            background: '#B76E79',
            color: '#FFFFF0',
            border: 'none',
            borderRadius: 8,
            padding: '8px 16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginRight: 8,
            fontFamily: 'SUIT, sans-serif',
            transition: 'all 0.3s ease',
          }}
        >
          피드백
        </button>
        <button
          style={{
            background: '#FFFFF0',
            color: '#708090',
            border: 'none',
            borderRadius: 8,
            padding: '8px 16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontFamily: 'SUIT, sans-serif',
            transition: 'all 0.3s ease',
          }}
        >
          도움말
        </button>
      </div>

      {/* 하단 여백 */}
      <div style={{ height: '30vh' }} />
    </div>
  );
} 