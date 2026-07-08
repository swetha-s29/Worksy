import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GigContext } from '../context/GigContext';
import { AuthContext } from '../context/AuthContext';
import GigCard from '../components/GigCard';

const CustomerDashboard = () => {
  const { gigs, acceptWorker, completeGig } = useContext(GigContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const myGigs = gigs.filter(g => g.customerId === user._id);

  // Dynamic statistics
  const totalGigs = myGigs.length;
  const openGigs = myGigs.filter(g => g.status === 'Open').length;
  const activeGigs = myGigs.filter(g => g.status === 'In Progress').length;
  const completedGigs = myGigs.filter(g => g.status === 'Completed').length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
      
      {/* Welcome & Action Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Your Dashboard</h2>
          <p className="text-slate-500 mt-1.5 leading-relaxed">Manage your posted gigs, accept workers, and monitor progress.</p>
        </div>
        <button
          onClick={() => navigate('/post-gig')}
          className="inline-flex items-center justify-center gap-2 bg-[#b5653b] hover:bg-[#914d2a] text-white px-6 py-3.5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-bold text-sm cursor-pointer shrink-0 self-start sm:self-center"
        >
          <span>+</span> Post New Gig
        </button>
      </div>

      {/* Dynamic Statistics Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
        
        {/* Stat 1 */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm flex items-center gap-4">
          <div className="h-10 w-10 rounded-xl bg-[#f5e6d3] flex items-center justify-center text-[#b5653b] font-bold text-lg">
            📋
          </div>
          <div className="text-left">
            <p className="text-xl sm:text-2xl font-black text-slate-800 leading-none">{totalGigs}</p>
            <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mt-1.5">Total Posted</p>
          </div>
        </div>

        {/* Stat 2 */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm flex items-center gap-4">
          <div className="h-10 w-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold text-lg">
            🟢
          </div>
          <div className="text-left">
            <p className="text-xl sm:text-2xl font-black text-slate-800 leading-none">{openGigs}</p>
            <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mt-1.5">Open Listings</p>
          </div>
        </div>

        {/* Stat 3 */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm flex items-center gap-4">
          <div className="h-10 w-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 font-bold text-lg">
            ⚡
          </div>
          <div className="text-left">
            <p className="text-xl sm:text-2xl font-black text-slate-800 leading-none">{activeGigs}</p>
            <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mt-1.5">In Progress</p>
          </div>
        </div>

        {/* Stat 4 */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm flex items-center gap-4">
          <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-lg">
            ✓
          </div>
          <div className="text-left">
            <p className="text-xl sm:text-2xl font-black text-slate-800 leading-none">{completedGigs}</p>
            <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mt-1.5">Completed</p>
          </div>
        </div>

      </div>

      {/* Main Section Content */}
      <div className="border-t border-slate-200/40 pt-8">
        {myGigs.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-md border border-slate-200/60 p-16 text-center max-w-xl mx-auto">
            <div className="h-16 w-16 bg-[#f5e6d3] rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
              📁
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">No Gigs Found</h3>
            <p className="text-slate-500 mb-6 text-sm">You haven't posted any gigs yet. Post your first gig to find local helpers.</p>
            <button
              onClick={() => navigate('/post-gig')}
              className="inline-flex items-center justify-center gap-2 bg-[#b5653b] hover:bg-[#914d2a] text-white px-5 py-2.5 rounded-xl transition-colors font-bold text-xs cursor-pointer"
            >
              Post your first gig
            </button>
          </div>
        ) : (
          <div>
            <h3 className="text-lg font-bold text-slate-700 mb-6">Gigs Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myGigs.map(gig => (
                <GigCard
                  key={gig.id}
                  gig={gig}
                  role={user.role}
                  onAccept={acceptWorker}
                  onComplete={completeGig}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerDashboard;
