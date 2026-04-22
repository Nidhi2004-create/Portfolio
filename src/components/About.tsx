import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-image">
        <div className="about-image-content">
          <div className="about-img-wrapper">
            <img src="/images/coding_girl.png" alt="Girl Coding" className="about-girl-img" />
            <div className="about-img-overlay"></div>
          </div>
          <div className="glow-effect"></div>
        </div>
      </div>
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Computer Science undergraduate at C.V. Raman Global University (CGPA: 9.34) with strong problem-solving skills and hands-on experience in full-stack web development and AI-based applications. Proficient in Data Structures and Algorithms, backend development, and building scalable systems. Passionate about developing real-world solutions and continuously improving technical expertise.
        </p>
      </div>
    </div>
  );
};

export default About;
