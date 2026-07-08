import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import CustomerDashboard from './CustomerDashboard';
import WorkerDashboard from './WorkerDashboard';

const Home = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  // Get user initials for the avatar bubble
  const getInitials = (name) => {
    if (!name) return 'U';
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="min-h-screen bg-[#f5e6d3] flex flex-col relative overflow-hidden font-sans">
      {/* Decorative ambient background shapes */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#ebd5c1] opacity-50 blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-[#ebd5c1] opacity-40 blur-2xl pointer-events-none -z-10"></div>

      {/* Premium Navbar */}
      <header className="bg-white/85 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <img src="/worksy_logo.png" alt="Worksy Logo" className="h-9 w-9 object-contain rounded-lg shadow-sm border border-slate-200/30 cursor-pointer" onClick={() => navigate('/dashboard')} />
            <div>
              <h1 className="text-lg font-bold text-[#b5653b] tracking-tight">Worksy</h1>
              <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold block -mt-1">Dashboard</span>
            </div>
          </div>

          {/* User Section */}
          <div className="flex items-center gap-4">
            
            {/* User Profile Badge */}
            <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-100 rounded-full py-1 pl-1.5 pr-3 shadow-inner">
              <div className="h-7 w-7 rounded-full bg-[#ebd5c1] text-[#b5653b] font-bold text-xs flex items-center justify-center border border-[#b5653b]/20">
                {getInitials(user?.name)}
              </div>
              <div className="text-left hidden sm:block">
                <p className="text-xs font-bold text-slate-800 leading-none">{user?.name}</p>
                <p className="text-[9px] text-[#b5653b] font-semibold tracking-wide uppercase mt-0.5">{user?.role}</p>
              </div>
            </div>

            {/* Logout Button */}
            <button
              onClick={logout}
              className="flex items-center justify-center p-2 rounded-xl text-slate-500 hover:text-red-600 hover:bg-red-50 border border-transparent hover:border-red-100 transition-all duration-300 cursor-pointer"
              title="Logout"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full z-10">
        {user?.role === 'Customer' ? <CustomerDashboard /> : <WorkerDashboard />}
      </main>
    </div>
  );
};

export default Home;
