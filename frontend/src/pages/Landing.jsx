import React, { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Landing = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleSelection = (role) => {
    navigate('/register', { state: { role } });
  };

  return (
    <div className="min-h-screen bg-[#f5e6d3] flex flex-col relative overflow-hidden font-sans">
      {/* Decorative background shapes for visual depth */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#ebd5c1] opacity-60 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-[#ebd5c1] opacity-50 blur-2xl pointer-events-none"></div>

      {/* Header */}
      <header className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-6 flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <img src="/worksy_logo.png" alt="Worksy Logo" className="h-10 w-10 object-contain rounded-xl shadow-sm border border-slate-200/30" />
          <div>
            <h1 className="text-2xl font-bold text-[#b5653b] tracking-tight">Worksy</h1>
            <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Local gig platform</span>
          </div>
        </div>

        <button
          onClick={() => navigate('/login')}
          className="px-5 py-2.5 rounded-xl text-sm font-semibold text-[#b5653b] bg-white/60 hover:bg-white hover:text-[#914d2a] border border-slate-200/50 hover:border-[#d68a5c] shadow-sm hover:shadow transition-all duration-300"
        >
          Sign In
        </button>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 sm:px-12 py-8 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center z-10">
        
        {/* Left Column: Hero Text & Call to Actions */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-[#d68a5c]/30 text-xs font-semibold text-[#b5653b] mb-6 self-start shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-[#b5653b] animate-pulse"></span>
            Empowering Coimbatore's Students & Locals
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Find Local Help. <br />
            <span className="text-[#b5653b] bg-clip-text">Earn Locally.</span>
          </h2>
          
          <p className="text-lg text-slate-600 mb-10 max-w-2xl leading-relaxed">
            Worksy connects people who need temporary local services with talented student workers looking for flexible earning opportunities right in their neighborhood.
          </p>

          {/* Action Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl mb-8">
            
            {/* Customer card */}
            <div
              onClick={() => handleSelection('Customer')}
              className="group flex flex-col items-start bg-white p-6 rounded-2xl border border-slate-200/60 hover:border-[#d68a5c] hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              {/* Decorative Accent hover */}
              <div className="absolute top-0 left-0 w-2 h-full bg-[#d68a5c]/10 group-hover:bg-[#b5653b] transition-all duration-300"></div>

              {/* Icon Container */}
              <div className="h-12 w-12 rounded-xl bg-[#f5e6d3] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-[#b5653b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-[#b5653b] transition-colors">
                I Need a Service
              </h3>
              
              <p className="text-slate-500 text-sm mb-4 leading-relaxed">
                Post short-term gigs, set your budget, and find trusted local helpers.
              </p>

              {/* Bullet points */}
              <ul className="text-xs text-slate-600 space-y-2 mt-auto w-full">
                <li className="flex items-center gap-2">
                  <span className="text-[#b5653b] font-bold">✓</span> Post a gig in seconds
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#b5653b] font-bold">✓</span> Direct worker application
                </li>
              </ul>
            </div>

            {/* Worker card */}
            <div
              onClick={() => handleSelection('Worker')}
              className="group flex flex-col items-start bg-white p-6 rounded-2xl border border-slate-200/60 hover:border-[#d68a5c] hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              {/* Decorative Accent hover */}
              <div className="absolute top-0 left-0 w-2 h-full bg-[#d68a5c]/10 group-hover:bg-[#b5653b] transition-all duration-300"></div>

              {/* Icon Container */}
              <div className="h-12 w-12 rounded-xl bg-[#f5e6d3] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-[#b5653b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-[#b5653b] transition-colors">
                I'm Looking for Work
              </h3>
              
              <p className="text-slate-500 text-sm mb-4 leading-relaxed">
                Find flexible tasks nearby, work around classes, and get paid quickly.
              </p>

              {/* Bullet points */}
              <ul className="text-xs text-slate-600 space-y-2 mt-auto w-full">
                <li className="flex items-center gap-2">
                  <span className="text-[#b5653b] font-bold">✓</span> Browse Coimbatore gigs
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#b5653b] font-bold">✓</span> 100% direct application
                </li>
              </ul>
            </div>

          </div>

          {/* Already have an account? */}
          <p className="text-slate-500 font-medium">
            Already have an account?{' '}
            <button
              onClick={() => navigate('/login')}
              className="text-[#b5653b] hover:text-[#914d2a] font-bold underline underline-offset-4 decoration-[#d68a5c]/50 hover:decoration-[#914d2a] transition-all"
            >
              Sign in to your account
            </button>
          </p>
        </div>

        {/* Right Column: Hero Visuals */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-md lg:max-w-none">
            
            {/* Visual Container Frame */}
            <div className="absolute inset-0 bg-[#b5653b]/10 rounded-3xl transform rotate-3 scale-[1.02] -z-10"></div>
            <div className="absolute inset-0 bg-white/40 rounded-3xl transform -rotate-2 -z-10 border border-white/50"></div>
            
            <div className="bg-white p-4 rounded-3xl shadow-2xl border border-slate-200/50 overflow-hidden relative group">
              <img
                src="/worksy_hero.png"
                alt="Worksy Illustration"
                className="w-full h-auto rounded-2xl object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />

              {/* Float Card Overlay: Coimbatore active banner */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-100 shadow-lg flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold shrink-0">
                  📍
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Active Region</p>
                  <p className="text-sm font-bold text-slate-800">Coimbatore, Tamil Nadu</p>
                </div>
              </div>
            </div>

            {/* Quick Stats Panel */}
            <div className="mt-8 grid grid-cols-3 gap-4 w-full">
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-[#d68a5c]/20 shadow-sm text-center">
                <p className="text-2xl font-bold text-[#b5653b]">14+</p>
                <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Active Gigs</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-[#d68a5c]/20 shadow-sm text-center">
                <p className="text-2xl font-bold text-[#b5653b]">42+</p>
                <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Local Workers</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-[#d68a5c]/20 shadow-sm text-center">
                <p className="text-2xl font-bold text-[#b5653b]">120+</p>
                <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Completed</p>
              </div>
            </div>

          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="w-full border-t border-slate-200/40 py-6 mt-12 bg-white/30 backdrop-blur-md z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">&copy; {new Date().getFullYear()} Worksy Platform. Developed in India.</p>
          <div className="flex gap-6 text-xs text-slate-500 font-medium">
            <span>Coimbatore, TN</span>
            <span>&bull;</span>
            <span>Student Service MVP</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
