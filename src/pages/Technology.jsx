import React from 'react';
import '../styles/Technology.css';

const Technology = () => {
  return (
    <div className="technology">
      <h2>기술 소개</h2>
      <div className="tech-container">
        <div className="tech-item">
          <h3>딥러닝 기반 행동 인식</h3>
          <p>최신 AI 기술을 활용하여 실시간으로 행동을 감지하고 분석합니다.</p>
          <ul>
            <li>낙상 감지</li>
            <li>비정상 행동 감지</li>
            <li>장시간 무반응 상태 감지</li>
          </ul>
        </div>
        <div className="tech-item">
          <h3>프라이버시 보호</h3>
          <p>영상 데이터는 엣지 컴퓨팅으로 처리되어 개인정보를 안전하게 보호합니다.</p>
          <ul>
            <li>엣지 컴퓨팅 처리</li>
            <li>데이터 암호화</li>
            <li>선택적 영상 저장</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Technology; 