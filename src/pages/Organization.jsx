import React from 'react';
import '../styles/Organization.css';
import memberImage from '../assets/member.png';

const Organization = () => {
  return (
    <div className="page organization">
      <div className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>
            <span className="title-main animate-slide-up">
              AI 기술로 미래를<br />만드는 사람들
            </span>
          </h1>
          <p className="hero-description animate-fade-in">
            독거노인 케어 시스템의<br />
            새로운 패러다임을 만들어갑니다
          </p>
        </div>
      </div>

      <div className="org-content">
        <div className="section-header">
          <span className="section-subtitle">OUR TEAM</span>
          <h2>팀 소개</h2>
          <p className="section-description">
            각자의 전문성으로 시너지를 만들어내는 팀원들을 소개합니다
          </p>
        </div>

        <div className="team-grid">
          <div className="team-card">
            <div className="team-image">
              <img src={memberImage} alt="이승훈 대표" />
            </div>
            <div className="team-info">
              <h3>이승훈</h3>
              <span className="team-position">대표 창업자</span>
              <div className="team-divider"></div>
              <ul className="team-responsibilities">
                <li><i className="fas fa-check"></i> 전반적인 개발 총괄</li>
                <li><i className="fas fa-check"></i> 시스템 아키텍처 설계</li>
                <li><i className="fas fa-check"></i> 서비스 기획 및 전략 수립</li>
                <li><i className="fas fa-check"></i> 프로젝트 관리</li>
              </ul>
              <div className="team-links">
                <a href="#" className="team-link">
                  <i className="fab fa-github"></i>
                </a>
                <a href="#" className="team-link">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="team-card">
            <div className="team-image">
              <img src={memberImage} alt="김세일 연구원" />
            </div>
            <div className="team-info">
              <h3>김세일</h3>
              <span className="team-position">공동 창업자</span>
              <div className="team-divider"></div>
              <ul className="team-responsibilities">
                <li><i className="fas fa-check"></i> AI 모델 설계 및 개발</li>
                <li><i className="fas fa-check"></i> 데이터 분석 및 처리</li>
                <li><i className="fas fa-check"></i> 성능 최적화</li>
                <li><i className="fas fa-check"></i> 연구 개발</li>
              </ul>
              <div className="team-links">
                <a href="#" className="team-link">
                  <i className="fab fa-github"></i>
                </a>
                <a href="#" className="team-link">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="team-card">
            <div className="team-image">
              <img src={memberImage} alt="문상아 연구원" />
            </div>
            <div className="team-info">
              <h3>문상아</h3>
              <span className="team-position">공동 창업자</span>
              <div className="team-divider"></div>
              <ul className="team-responsibilities">
                <li><i className="fas fa-check"></i> AI 모델 분석 및 평가</li>
                <li><i className="fas fa-check"></i> 알고리즘 최적화</li>
                <li><i className="fas fa-check"></i> 데이터 파이프라인 구축</li>
                <li><i className="fas fa-check"></i> 품질 관리</li>
              </ul>
              <div className="team-links">
                <a href="#" className="team-link">
                  <i className="fab fa-github"></i>
                </a>
                <a href="#" className="team-link">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organization; 