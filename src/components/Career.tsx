import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Education <span>&</span>
          <br /> Achievements
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science & Engineering</h4>
                <h5>C.V. Raman Global University, Bhubaneshwar</h5>
              </div>
              <h3>2023 – 2027</h3>
            </div>
            <p>
              CGPA: 9.34 — Focused on Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks. Selected for Smart India Hackathon (SIH) 2024. Solved 170+ DSA problems on LeetCode.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Class 12 — 92.4%</h4>
                <h5>Prabhuji English Medium School</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Completed higher secondary education with strong academic performance.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Class 10 — 94.1%</h4>
                <h5>St. Theresa English School</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Achieved excellent results in secondary education with a focus on academics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
