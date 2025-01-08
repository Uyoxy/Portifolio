import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Typewriter } from 'react-simple-typewriter';
import Particles from 'react-tsparticles';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center relative text-white bg-gradient-to-br from-purple-500 via-indigo-500 to-purple-800 animate-gradient-x"
    >
      {/* Particle Background */}
      <Particles
        options={{
          background: { color: { value: '' } },
          fpsLimit: 60,
          particles: {
            color: { value: '#ffffff' },
            links: { enable: true, color: '#ffffff', distance: 150 },
            move: { enable: true, speed: 2 },
            number: { value: 50 },
            opacity: { value: 0.5 },
            size: { value: 3 },
          },
        }}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />

      <div
        className="max-w-4xl text-center p-8"
        data-aos="fade-up"
      >
        <h2
          className="text-xl uppercase text-gray-200"
          data-aos="fade-down"
          data-aos-delay="50"
        >
          Hi there!
        </h2>
        <h1
          className="text-4xl md:text-6xl font-bold mt-2 text-yellow-400"
          data-aos="zoom-in"
          data-aos-duration="1200"
        >
          I'm Timothy Blessing Uyo
        </h1>
        <p className="mt-4 text-lg text-gray-100">
          <span data-aos="fade-up" data-aos-delay="100">
            <Typewriter
              words={[
                'A Frontend Developer',
                'A Problem Solver',
                'A Creative Thinker',
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={1000}
            />
          </span>
        </p>
        <div className="mt-8 space-x-4">
          <button
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-yellow-400 hover:text-black transition-colors"
            data-aos="flip-right"
            data-aos-delay="150"
          >
            Sparkz
          </button>
          <button
            className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-black transition-colors"
            data-aos="flip-left"
            data-aos-delay="200"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
