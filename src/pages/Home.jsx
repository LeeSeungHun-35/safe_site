import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="page home">
      <div className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>
            <span className="highlight animate-slide-down">AI 기반</span><br />
            <span className="title-main animate-slide-up">독거노인 안전 모니터링 솔루션</span>
          </h1>
          <p className="hero-description animate-fade-in">
            실시간 행동 감지와 즉각적인 대응으로<br />
            소중한 분들의 안전을 지켜드립니다
          </p>
          
        </div>

        <div className="hero-stats">
          <div className="stat-item animate-fade-in">
            <div className="stat-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <span className="stat-number">99.9%</span>
            <span className="stat-label">정확도</span>
          </div>
          <div className="stat-item animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="stat-icon">
              <i className="fas fa-clock"></i>
            </div>
            <span className="stat-number">24/7</span>
            <span className="stat-label">실시간 모니터링</span>
          </div>
          <div className="stat-item animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="stat-icon">
              <i className="fas fa-bolt"></i>
            </div>
            <span className="stat-number">30초</span>
            <span className="stat-label">이내 응답</span>
          </div>
        </div>
      </div>

      <div className="features">
        <div className="section-header">
          <span className="section-subtitle">SERVICES</span>
     
          <p className="section-description">
            AI 기술로 구현하는 스마트 케어 시스템
          </p>
        </div>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-camera-retro"></i>
            </div>
            <h3>AI 영상 분석</h3>
            <p>딥러닝 기반 실시간 행동 감지로 위험 상황을 즉시 파악합니다</p>
            <div className="feature-link">
              자세히 보기 <i className="fas fa-arrow-right"></i>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-bell"></i>
            </div>
            <h3>즉각적인 알림</h3>
            <p>위험 상황 발생 시 보호자에게 즉시 알림을 전송합니다</p>
            <div className="feature-link">
              자세히 보기 <i className="fas fa-arrow-right"></i>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3>프라이버시 보호</h3>
            <p>엣지 컴퓨팅으로 개인정보를 안전하게 보호합니다</p>
            <div className="feature-link">
              자세히 보기 <i className="fas fa-arrow-right"></i>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h3>모바일 앱 연동</h3>
            <p>언제 어디서나 스마트폰으로 확인할 수 있습니다</p>
            <div className="feature-link">
              자세히 보기 <i className="fas fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 