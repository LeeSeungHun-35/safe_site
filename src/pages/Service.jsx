import React from 'react';
import '../styles/Service.css';

const Service = () => {
  return (
    <div className="service">
      <h2>서비스 소개</h2>
      <div className="service-grid">
        <div className="service-item">
          <div className="service-icon">🎥</div>
          <h3>AI 영상 분석</h3>
          <p>딥러닝 기술을 활용한 실시간 행동 감지 및 분석</p>
        </div>
        <div className="service-item">
          <div className="service-icon">⚡</div>
          <h3>즉각적인 대응</h3>
          <p>위험 상황 발생 시 신속한 알림 및 대응 체계</p>
        </div>
        <div className="service-item">
          <div className="service-icon">🔒</div>
          <h3>개인정보 보호</h3>
          <p>암호화 기술을 통한 철저한 프라이버시 보호</p>
        </div>
        <div className="service-item">
          <div className="service-icon">📱</div>
          <h3>모바일 앱 연동</h3>
          <p>언제 어디서나 확인 가능한 모바일 서비스</p>
        </div>
      </div>
    </div>
  );
};

export default Service; 