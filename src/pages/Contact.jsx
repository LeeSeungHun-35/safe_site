import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h2>문의하기</h2>
      <div className="contact-container">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">이름</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">이메일</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">문의내용</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">보내기</button>
        </form>
      </div>
    </div>
  );
};

export default Contact; 