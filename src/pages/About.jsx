import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about">
      <h2>회사 소개</h2>
      <div className="about-content">
        <div className="mission">
          <h3>미션</h3>
          <p>AI 기술로 독거노인의 안전하고 행복한 삶을 지원합니다.</p>
        </div>
        <div className="vision">
          <h3>비전</h3>
          <p>모든 독거노인이 안심하고 독립적인 생활을 할 수 있는 사회를 만듭니다.</p>
        </div>
      </div>
    </div>
  );
};

export default About; 