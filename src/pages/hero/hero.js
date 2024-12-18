import Navbar from "../../components/navbar/navbar";
import './hero.css';

const Hero = () => {
  return (
    <div className="hero-page">
      <Navbar />
      <section className="hero-section">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
        >
          <source src="/hero/-6d7a-4bbe-98b8-78f65984c285.mp4" type="video/mp4" />
        </video>

        <div className="hero-content">
          <p>Sail your way with</p>
          <h1 className="hero-title">CHARTERAG</h1>
          <p className="hero-subtext">
            adventure ✦ relax ✦ explore ✦ fun ✦ dance
          </p>
        </div>
        <div className="hero-gradient"></div>
      </section>
    </div>
  );
};


export default Hero;
