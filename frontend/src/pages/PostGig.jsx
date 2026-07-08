import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GigContext } from '../context/GigContext';
import { AuthContext } from '../context/AuthContext';

const PostGig = () => {
  const { addGig } = useContext(GigContext);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Plumbing',
    location: '',
    payment: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addGig({
      ...formData,
      customerId: user._id
    });
    navigate('/dashboard');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
      {/* Decorative background shapes */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#ebd5c1] opacity-50 blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-[#ebd5c1] opacity-40 blur-2xl pointer-events-none -z-10"></div>

      {/* Premium Navbar */}
      <header className="bg-white/85 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img src="/worksy_logo.png" alt="Worksy Logo" className="h-9 w-9 object-contain rounded-lg shadow-sm border border-slate-200/30 cursor-pointer" onClick={() => navigate('/dashboard')} />
            <div>
              <h1 className="text-lg font-bold text-[#b5653b] tracking-tight cursor-pointer" onClick={() => navigate('/dashboard')}>Worksy</h1>
              <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold block -mt-1">New Gig</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-100 rounded-full py-1 pl-1.5 pr-3 shadow-inner">
              <div className="h-7 w-7 rounded-full bg-[#ebd5c1] text-[#b5653b] font-bold text-xs flex items-center justify-center border border-[#b5653b]/20">
                {getInitials(user?.name)}
              </div>
              <div className="text-left hidden sm:block">
                <p className="text-xs font-bold text-slate-800 leading-none">{user?.name}</p>
                <p className="text-[9px] text-[#b5653b] font-semibold tracking-wide uppercase mt-0.5">{user?.role}</p>
              </div>
            </div>

            <button
              onClick={logout}
              className="flex items-center justify-center p-2 rounded-xl text-slate-500 hover:text-red-600 hover:bg-red-50 border border-transparent hover:border-red-100 transition-all duration-300 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-3xl mx-auto py-10 px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Back Button */}
        <button
          onClick={() => navigate('/dashboard')}
          className="flex items-center gap-2 text-sm font-bold text-[#b5653b] hover:text-[#914d2a] mb-6 transition-colors cursor-pointer"
        >
          <span>←</span> Back to Dashboard
        </button>

        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/50 p-6 sm:p-10">
          <div className="mb-8 text-left">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Create a New Gig</h2>
            <p className="text-slate-500 mt-1.5 leading-relaxed">Fill in the details below to specify the job and find qualified local helpers.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Gig Title</label>
              <input
                type="text"
                name="title"
                required
                placeholder="e.g. Help moving bookshelf and desk"
                className="block w-full px-4 py-3 border border-slate-200 rounded-xl placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#b5653b] focus:border-[#b5653b] sm:text-sm transition-all duration-300"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Description & Details</label>
              <textarea
                name="description"
                required
                rows={4}
                placeholder="Describe the task clearly. Include any specific tools needed, timing preferences, or physical requirements."
                className="block w-full px-4 py-3 border border-slate-200 rounded-xl placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#b5653b] focus:border-[#b5653b] sm:text-sm transition-all duration-300"
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Category</label>
                <div className="relative">
                  <select
                    name="category"
                    className="block w-full px-4 py-3 border border-slate-200 rounded-xl bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#b5653b] focus:border-[#b5653b] sm:text-sm transition-all duration-300 appearance-none cursor-pointer"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    <option value="Plumbing">Plumbing</option>
                    <option value="Cleaning">Cleaning</option>
                    <option value="Electrical">Electrical</option>
                    <option value="Moving">Moving</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-400">
                    ▼
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Location</label>
                <input
                  type="text"
                  name="location"
                  required
                  placeholder="e.g. RS Puram, Coimbatore"
                  className="block w-full px-4 py-3 border border-slate-200 rounded-xl placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#b5653b] focus:border-[#b5653b] sm:text-sm transition-all duration-300"
                  value={formData.location}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Estimated Payment</label>
              <div className="relative rounded-xl shadow-sm">
                <input
                  type="text"
                  name="payment"
                  required
                  placeholder="e.g. ₹500 or Negotiable"
                  className="block w-full px-4 py-3 border border-slate-200 rounded-xl placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#b5653b] focus:border-[#b5653b] sm:text-sm transition-all duration-300"
                  value={formData.payment}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex justify-end pt-4 border-t border-slate-100 gap-3">
              <button
                type="button"
                onClick={() => navigate('/dashboard')}
                className="bg-white py-3 px-6 border border-slate-200 rounded-xl shadow-sm text-sm font-bold text-slate-600 hover:bg-slate-50 focus:outline-none transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-[#b5653b] hover:bg-[#914d2a] py-3 px-6 border border-transparent rounded-xl shadow-lg hover:shadow-xl text-sm font-bold text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#b5653b] transition-all duration-300 cursor-pointer"
              >
                Post Gig
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default PostGig;
