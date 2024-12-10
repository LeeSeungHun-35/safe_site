import React, { useEffect, useState } from 'react';
import '../styles/Home.css';

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=독거노인,고령화&key=AIzaSyA7uw7rPF8uvGTGnUhTB8FjfR9Vda_cyzU`);
      const data = await response.json();
      setVideos(data.items);
    };

    fetchVideos();
  }, []);

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
            소중한 가족의 안전을 지켜드립니다
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
            <span className="stat-label">이내 알림</span>
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
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-bell"></i>
            </div>
            <h3>즉각적인 알림</h3>
            <p>위험 상황 발생 시 보호자에게 즉시 알림을 전송합니다</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3>개인 정보 보호</h3>
            <p>암호화 적용, 영상 전달이 아닌 텍스트 기반으로 전달하여 개인정보 및 사생활을 안전하게 보호합니다</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h3>모바일 앱 연동</h3>
            <p>언제 어디서나 스마트폰으로 확인할 수 있습니다</p>
          </div>
        </div>
      </div>

      <div className="youtube-videos">
        <h2>고령화 관련 영상</h2>
        <div className="video-list">
          <div className="video-row">
            {videos.slice(0, 4).map(video => (
              <div key={video.id.videoId} className="video-item">
                <iframe
                  width="400"
                  height="225"
                  src={`https://www.youtube.com/embed/${video.id.videoId}`}
                  title={video.snippet.title}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
                <p>{video.snippet.title}</p>
              </div>
            ))}
          </div>
          <div className="video-row">
            {videos.slice(4, 8).map(video => (
              <div key={video.id.videoId} className="video-item">
                <iframe
                  width="400"
                  height="225"
                  src={`https://www.youtube.com/embed/${video.id.videoId}`}
                  title={video.snippet}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
                <p>{video.snippet.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 