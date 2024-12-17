import React from 'react';
import '../styles/Services.css';

const Services = () => {
  return (
    <div className="page services">
      <div className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>
            <span className="highlight animate-slide-down">AI 케어 서비스</span><br />
            <span className="title-main animate-slide-up">프라이버시와 안전을 지키는<br />스마트 케어 솔루션</span>
          </h1>
          <p className="hero-description animate-fade-in">
            딥러닝 기반 행동 감지와 LLM 기술로<br />
            안전하고 정확한 모니터링을 제공합니다
          </p>
        </div>
      </div>

      <div className="service-details">
        <div className="section-header">
          <span className="section-subtitle">CORE TECHNOLOGY</span>
          <h2>핵심 기술</h2>
          <p className="section-description">
            AI 기술과 프라이버시 보호를 결합한 케어 시스템
          </p>
        </div>

        <div className="tech-grid">
          <div className="tech-card">
            <div className="tech-icon">
              <i className="fas fa-brain"></i>
            </div>
            <div className="tech-content">
              <h3>딥러닝기반 행동 감지</h3>
              <p>AI가 실시간으로 행동을 분석하여 위험 상황을 감지합니다.</p>
              <div className="tech-details">
                <div className="tech-stat">
                  <span className="stat-value">99.9%</span>
                  <span className="stat-label">정확도</span>
                </div>
                <div className="tech-stat">
                  <span className="stat-value">1초</span>
                  <span className="stat-label">감지속도</span>
                </div>
              </div>
              <ul className="tech-features">
                <li><i className="fas fa-check"></i> 낙상 감지</li>
                <li><i className="fas fa-check"></i> 무반응 상태 감지</li>
                <li><i className="fas fa-check"></i> 비정상 행동 패턴 분석</li>
              </ul>
            </div>
          </div>

          <div className="tech-card">
            <div className="tech-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <div className="tech-content">
              <h3>프라이버시 보호</h3>
              <p>영상 데이터를 직접 공유하지 않고 텍스트 기반 알림으로 변환합니다.</p>
              <div className="tech-details">
                <div className="tech-stat">
                  <span className="stat-value">100%</span>
                  <span className="stat-label">데이터 암호화</span>
                </div>
                <div className="tech-stat">
                  <span className="stat-value">Edge</span>
                  <span className="stat-label">컴퓨팅</span>
                </div>
              </div>
              <ul className="tech-features">
                <li><i className="fas fa-check"></i> 엣지 컴퓨팅 처리</li>
                <li><i className="fas fa-check"></i> 영상 비공개 원칙</li>
                <li><i className="fas fa-check"></i> 데이터 암호화</li>
              </ul>
            </div>
          </div>

          <div className="tech-card">
            <div className="tech-icon">
              <i className="fas fa-robot"></i>
            </div>
            <div className="tech-content">
              <h3>GPT 기반 상황 설명</h3>
              <p>AI가 감지한 상황을 자연스러운 텍스트로 변환하여 전달합니다.</p>
              <div className="tech-details">
                <div className="tech-stat">
                  <span className="stat-value">GPT-4</span>
                  <span className="stat-label">기반</span>
                </div>
                <div className="tech-stat">
                  <span className="stat-value">실시간</span>
                  <span className="stat-label">분석</span>
                </div>
              </div>
              <ul className="tech-features">
                <li><i className="fas fa-check"></i> 상황 맥락 파악</li>
                <li><i className="fas fa-check"></i> 명확한 정보 전달</li>
                <li><i className="fas fa-check"></i> 실시간 상황 업데이트</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="tech-comparison">
          <div className="comparison-header">
            <h3>기존 CCTV와의 비교</h3>
            <p>SAFE 솔루션의 차별화된 강점</p>
          </div>
          <div className="comparison-table">
            <div className="comparison-item">
              <div className="comparison-title">기존 CCTV</div>
              <ul>
                <li><i className="fas fa-times"></i> 영상 데이터의 직접 공유로 개인 정보 유출 가능성</li>
                <li><i className="fas fa-times"></i> 단순 움직임 감지</li>
                <li><i className="fas fa-times"></i> 사람의 부재로 인한 즉각적인 감지 한계</li>
              </ul>
            </div>
            <div className="comparison-item highlight">
              <div className="comparison-title">SAFE 솔루션</div>
              <ul>
                <li><i className="fas fa-check"></i> 텍스트로 상황을 전달하여 프라이버시 보호</li>
                <li><i className="fas fa-check"></i> AI 기반 정확한 행동 인식</li>
                <li><i className="fas fa-check"></i> 상황별 감지 내용을 자동 설명</li>
                <li><i className="fas fa-check"></i> 특정 손짓 제스처 활용 구조 요청</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="section-header" style={{marginTop: '6rem'}}>
          <span className="section-subtitle">SERVICE PROCESS</span>
          <h2>서비스 프로세스</h2>
          <p className="section-description">
            신속하고 정확한 응급 상황 대응 시스템
          </p>
        </div>

        <div className="process-flow">
          <img src={require('../assets/solution.png')} alt="Solution" />
        </div>
      </div>
    </div>
  );
};

export default Services;