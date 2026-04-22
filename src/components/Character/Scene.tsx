import { useEffect, useRef, useState } from "react";
import { useLoading } from "../../context/LoadingProvider";
import { setAllTimeline } from "../utils/GsapScroll";
import "./HeroVisual.css";



const Scene = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { setLoading } = useLoading();
  const [showIllustration, setShowIllustration] = useState(false);
  const [scrolledPast, setScrolledPast] = useState(false);

  // Loading simulation
  useEffect(() => {
    let percent = 0;
    const interval = setInterval(() => {
      if (percent < 100) {
        percent += Math.round(Math.random() * 8) + 2;
        if (percent > 100) percent = 100;
        setLoading(percent);
      } else {
        clearInterval(interval);
      }
    }, 80);

    setTimeout(() => setAllTimeline(), 500);
    setTimeout(() => {
      const charModel = document.querySelector(".character-model");
      if (charModel) charModel.classList.add("character-loaded");
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Hide IDE when scrolling past landing section using GSAP ScrollTrigger
  useEffect(() => {
    // Dynamic import to avoid issues with SSR
    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);

        const trigger = ScrollTrigger.create({
          trigger: ".landing-section",
          start: "top top",
          end: "30% top",
          onUpdate: (self) => {
            setScrolledPast(self.progress >= 1);
          },
          onLeave: () => setScrolledPast(true),
          onEnterBack: () => setScrolledPast(false),
        });

        return () => {
          trigger.kill();
        };
      });
    });
  }, []);

  // Show illustration after a brief delay (after loading)
  useEffect(() => {
    const timer = setTimeout(() => setShowIllustration(true), 3200);
    return () => clearTimeout(timer);
  }, []);

  // 3D Mouse tracking effect
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20; // Max 10 deg
      const y = (e.clientY / window.innerHeight - 0.5) * -20;
      setMousePos({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div className={`character-container ${scrolledPast ? "scrolled-past" : ""}`}>
        <div className="character-model" ref={containerRef}>
          <div className="character-rim"></div>

          <div className={`hero-illustration ${showIllustration && !scrolledPast ? "hero-illustration-visible" : ""}`}>
            <div 
              className="hero-tilt-container"
              style={{
                width: "100%",
                height: "100%",
                transform: showIllustration 
                  ? `perspective(1000px) rotateY(${mousePos.x}deg) rotateX(${mousePos.y}deg)` 
                  : undefined,
                transition: "transform 0.1s ease-out"
              }}
            >
              {/* Main Image with Glassmorphism Frame */}
              <div className="hero-img-wrapper">
                <img src="/images/hero_coding_girl.png" alt="Software Developer" className="hero-img" />
                <div className="hero-img-overlay"></div>
              </div>

              {/* Floating Tech Badges */}
              <div className="floating-badge badge-1">
                <span>React</span>
              </div>
              <div className="floating-badge badge-2">
                <span>TypeScript</span>
              </div>
              <div className="floating-badge badge-3">
                <span>AI</span>
              </div>
              
              {/* Floating decorative elements */}
              <div className="ide-glow glow-1"></div>
              <div className="ide-glow glow-2"></div>
              <div className="ide-glow glow-3"></div>

              {/* Ambient particles */}
              <div className="ide-particles">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="ide-particle"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 8}s`,
                      animationDuration: `${4 + Math.random() * 6}s`,
                      width: `${2 + Math.random() * 3}px`,
                      height: `${2 + Math.random() * 3}px`,
                      opacity: 0.2 + Math.random() * 0.3,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Scene;
