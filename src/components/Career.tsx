import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Freelance & Projects</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building responsive, high-performance web applications using React,
              Node.js, and modern full-stack technologies. Focused on delivering
              clean code, intuitive UIs, and scalable architectures.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer</h4>
                <h5>Personal Projects</h5>
              </div>
              <h3>2024–25</h3>
            </div>
            <p>
              Developed a portfolio website achieving 90+ Lighthouse scores,
              a full-stack notes management app with authentication and CRUD,
              and a medical assistant application integrating AI capabilities
              with backend services.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Student Developer</h4>
                <h5>Self-taught & Learning</h5>
              </div>
              <h3>2023–24</h3>
            </div>
            <p>
              Intensive self-study in full-stack web development, mastering
              HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and
              modern development workflows including Git, REST APIs, and
              responsive design patterns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
