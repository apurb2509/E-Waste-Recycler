import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero-image.webp";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLearnHovered, setIsLearnHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDigitalFootprintHovered, setIsDigitalFootprintHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative overflow-hidden text-white" style={{ 
      minHeight: '90vh',
      backgroundSize: '400% 400%',
      backgroundImage: 'linear-gradient(to right, #22c55e, #3b82f6, #22c55e, #3b82f6)',
      animation: 'gradientMove 15s linear infinite'
    }}>
      {/* Interactive Bubbles - Increased count to 28 */}
      {[...Array(28)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: `${Math.random() * 8 + 4}px`,
            height: `${Math.random() * 8 + 4}px`,
            backgroundColor: Math.random() > 0.5 ? 'rgba(255, 255, 255, 0.15)' : 'rgba(150, 255, 200, 0.15)',
            left: `${(mousePosition.x / window.innerWidth) * 100 + (Math.random() * 30 - 15)}%`,
            top: `${(mousePosition.y / window.innerHeight) * 100 + (Math.random() * 30 - 15)}%`,
            transform: `translate(-50%, -50%) scale(${0.5 + Math.random()})`,
            transition: `all ${0.2 + Math.random() * 0.5}s ease-out`,
            animation: `float ${3 + Math.random() * 5}s ease-in-out infinite`,
            zIndex: 5
          }}
        ></div>
      ))}

      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.2),_transparent)]" style={{ mixBlendMode: 'overlay', animation: 'pulse 8s infinite alternate' }}></div>
      <div className="absolute inset-0" style={{ backgroundImage: "url('https://res.cloudinary.com/dci8xuuwt/image/upload/v1717787344/circuit-pattern_rbv9mj.svg')", backgroundSize: "cover", opacity: 0.12, animation: 'float 15s infinite ease-in-out' }}></div>
      <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 20% 30%, rgba(0,255,200,0.05) 0%, transparent 40%)', animation: 'moveGradient 25s infinite alternate linear' }}></div>
      <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(135deg, rgba(0,150,255,0.03) 0%, transparent 50%, rgba(0,255,150,0.03) 100%)', animation: 'shimmer 20s infinite linear' }}></div>

      {/* Rotating Globe */}
      <div className="absolute right-0 bottom-0 opacity-30 z-0" style={{ width: '600px', height: '600px', backgroundImage: "url('https://res.cloudinary.com/dci8xuuwt/image/upload/v1717787945/3d-earth-globe_yzshlp.png')", backgroundSize: 'contain', backgroundRepeat: 'no-repeat', animation: 'rotate3D 30s infinite linear', transform: 'translateY(30%) translateX(20%)', filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.3))' }}></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="space-y-8" style={{ animation: 'fadeIn 1.2s ease-out' }}>
            <h1 className="text-4xl md:text-5xl font-bold font-poppins leading-tight" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
              <span style={{ animation: 'slideRight 0.8s ease-out', color: '#ffffff', display: 'inline-block' }}>Transform Your </span>
              <br />
              <span className="text-white cursor-pointer" 
                style={{
                  animation: 'none',
                  // textShadow: '0 0 5px #fff',
                  fontWeight: '700',
                  letterSpacing: '0.5px',
                  transition: 'all 0.3s ease',
                  textShadow: isDigitalFootprintHovered ? '0 0 10px #ffffff, 0 0 20px #36d7b7, 0 0 30px #36d7b7' : '0 0 5px #fff',
                  transform: isDigitalFootprintHovered ? 'scale(1.05)' : 'scale(1)',
                  display: 'inline-block'
                }}
                onMouseEnter={() => setIsDigitalFootprintHovered(true)}
                onMouseLeave={() => setIsDigitalFootprintHovered(false)}
              >
                Digital Footprint
              </span>
            </h1>

            <p className="mt-4 text-lg text-[#f8f8f8] max-w-lg" style={{ animation: 'fadeIn 1.5s ease-out, slideUp 1.2s ease-out', textShadow: '0 1px 5px rgba(0,0,0,0.15)' }}>
              Be the <span style={{ fontWeight: 'bold' }}>environmental hero</span> your planet deserves. Our AI-powered platform identifies and categorizes your electronic waste with <span style={{ fontWeight: 'bold' }}>99% accuracy</span>, guiding you to the nearest recycling facilities.
            </p>

            {/* Smooth Did You Know Box */}
            <div style={{
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(6px)',
              padding: '15px',
              borderRadius: '10px',
              border: '1px solid rgba(255,255,255,0.2)',
              textAlign: 'center',
              transition: 'all 0.3s ease-in-out'
            }}>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>
                <span style={{ fontWeight: 'bold', color: '#8fffb8' }}>Did you know?</span> Every year, over 50 million tons of e-waste is generated globally, but less than 20% is properly recycled. Our AI technology helps close this gap, potentially saving <span style={{ fontWeight: 'bold', color: '#8fffb8' }}>thousands of tons of precious metals</span> from landfills.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4" style={{ animation: 'fadeIn 1.8s ease-out, slideUp 1.5s ease-out' }}>
              <div style={{ transform: isHovered ? 'scale(1.08)' : 'scale(1)', transition: 'all 0.3s ease-out' }}>
                <Link to="/classify" className="bg-white text-green-600 px-6 py-3 rounded-md text-md font-semibold transition-all flex items-center justify-center" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} style={{ boxShadow: isHovered ? '0 10px 25px rgba(52, 211, 153, 0.4)' : '0 5px 15px rgba(52, 211, 153, 0.3)', transition: 'all 0.3s ease-out' }}>
                  AI Image Detection
                  <ArrowRight className="ml-2 h-5 w-5" style={{ transform: isHovered ? 'translateX(5px)' : 'translateX(0)', transition: 'transform 0.3s ease-out' }} />
                </Link>
              </div>

              <div style={{ transform: isLearnHovered ? 'scale(1.08)' : 'scale(1)', transition: 'all 0.3s ease-out' }}>
                <Link to="/learn" className="bg-transparent border border-white text-white px-6 py-3 rounded-md text-md font-semibold flex items-center justify-center" onMouseEnter={() => setIsLearnHovered(true)} onMouseLeave={() => setIsLearnHovered(false)} style={{ boxShadow: isLearnHovered ? '0 5px 15px rgba(255, 255, 255, 0.3)' : 'none', background: isLearnHovered ? 'rgba(255, 255, 255, 0.1)' : 'transparent', backdropFilter: isLearnHovered ? 'blur(5px)' : 'none', transition: 'all 0.3s ease-out' }}>
                  Discover Impact
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-2" style={{ animation: 'fadeIn 2s ease-out' }}>
              <div className="text-center" style={{ animation: 'pulse 2s infinite alternate ease-in-out', animationDelay: '0.2s' }}>
                <div className="text-xl font-bold text-[#F0F4F8]">50M+</div>
                <div className="text-sm">Tons Recycled</div>
              </div>
              <div className="text-center" style={{ animation: 'pulse 2s infinite alternate ease-in-out', animationDelay: '0.4s' }}>
                <div className="text-xl font-bold text-[#F0F4F8]">30%</div>
                <div className="text-sm">CO₂ Reduction</div>
              </div>
              <div className="text-center hidden sm:block" style={{ animation: 'pulse 2s infinite alternate ease-in-out', animationDelay: '0.6s' }}>
                <div className="text-xl font-bold text-[#F0F4F8]">5000+</div>
                <div className="text-sm">Active Users</div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative flex justify-center items-center" style={{ animation: 'fadeIn 1.5s ease-out' }}>
            <div className="absolute inset-0 bg-green-300/30 rounded-full blur-3xl" style={{ animation: 'pulse 4s infinite alternate ease-in-out' }}></div>
            <div className="absolute w-24 h-24 bg-green-200/40 rounded-full blur-xl" style={{ top: '10%', left: '15%', animation: 'float 6s infinite alternate ease-in-out', animationDelay: '0.5s' }}></div>
            <div className="absolute w-16 h-16 bg-blue-300/40 rounded-full blur-xl" style={{ bottom: '20%', right: '10%', animation: 'float 7s infinite alternate-reverse ease-in-out', animationDelay: '1s' }}></div>
            <div className="absolute w-12 h-12 bg-cyan-200/30 rounded-full blur-lg" style={{ top: '40%', right: '25%', animation: 'floatDiagonal 8s infinite alternate ease-in-out', animationDelay: '1.3s' }}></div>

            <div style={{ position: 'absolute', width: '150%', height: '150%', border: '2px dashed rgba(255,255,255,0.2)', borderRadius: '50%', animation: 'spin 25s linear infinite', zIndex: 1 }}></div>
            <div style={{ position: 'absolute', width: '120%', height: '120%', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '50%', animation: 'spin 15s linear infinite reverse', zIndex: 1 }}></div>
            <div style={{ position: 'absolute', width: '180%', height: '180%', border: '1px dotted rgba(255,255,255,0.1)', borderRadius: '50%', animation: 'spin 40s linear infinite', zIndex: 1 }}></div>

            {/* <img src={heroImage} alt="E-waste recycling illustration" className="relative z-10" style={{ animation: 'float 5s infinite ease-in-out', transform: 'scale(1.25)', filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.3))', transition: 'all 0.5s ease-out' }} /> */}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          @keyframes slideUp { from { transform: translateY(30px); } to { transform: translateY(0); } }
          @keyframes slideRight { from { transform: translateX(-30px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
          @keyframes float { 0% { transform: translateY(0); } 50% { transform: translateY(-15px); } 100% { transform: translateY(0); } }
          @keyframes floatDiagonal { 0% { transform: translate(0, 0); } 50% { transform: translate(-10px, -10px); } 100% { transform: translate(0, 0); } }
          @keyframes pulse { 0% { opacity: 0.7; transform: scale(0.97); } 100% { opacity: 1; transform: scale(1.03); } }
          @keyframes pulseBox { 0% { transform: scale(0.99); } 100% { transform: scale(1.01); } }
          @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          @keyframes rotate3D { 0% { background-position: 0% center; } 100% { background-position: 200% center; } }
          @keyframes moveGradient { 0% { background-position: 0% 0%; } 50% { background-position: 100% 100%; } 100% { background-position: 0% 0%; } }
          @keyframes shimmer { 0% { opacity: 0.5; transform: translateX(-100%) translateY(-100%) rotate(45deg); } 50% { opacity: 0.7; } 100% { opacity: 0.5; transform: translateX(100%) translateY(100%) rotate(45deg); } }
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
        `}
      </style>
    </div>
  );
};

export default HeroSection;