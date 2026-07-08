import React, { useContext, useState } from 'react';
import { GigContext } from '../context/GigContext';
import { AuthContext } from '../context/AuthContext';
import GigCard from '../components/GigCard';

const WorkerDashboard = () => {
  const { gigs, applyForGig } = useContext(GigContext);
  const { user } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState('browse'); // 'browse' or 'mygigs'

  const availableGigs = gigs.filter(g => g.status === 'Open' && !g.applicants.includes(user._id));
  const myGigs = gigs.filter(g => g.applicants.includes(user._id) || g.workerId === user._id);

  // Dynamic statistics
  const availableCount = availableGigs.length;
  const appliedCount = myGigs.filter(g => g.status === 'Open' && g.applicants.includes(user._id)).length;
  const activeCount = myGigs.filter(g => g.status === 'In Progress' && g.workerId === user._id).length;
  const completedCount = myGigs.filter(g => g.status === 'Completed' && g.workerId === user._id).length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
      
      {/* Welcome & Action Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Worker Dashboard</h2>
          <p className="text-slate-500 mt-1.5 leading-relaxed">Find open gigs in Coimbatore, submit applications, and track your work.</p>
        </div>
      </div>

      {/* Dynamic Statistics Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
        
        {/* Stat 1 */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm flex items-center gap-4">
          <div className="h-10 w-10 rounded-xl bg-[#f5e6d3] flex items-center justify-center text-[#b5653b] font-bold text-lg">
            🔍
          </div>
          <div className="text-left">
            <p className="text-xl sm:text-2xl font-black text-slate-800 leading-none">{availableCount}</p>
            <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mt-1.5">Available Gigs</p>
          </div>
        </div>

        {/* Stat 2 */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm flex items-center gap-4">
          <div className="h-10 w-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 font-bold text-lg">
            📩
          </div>
          <div className="text-left">
            <p className="text-xl sm:text-2xl font-black text-slate-800 leading-none">{appliedCount}</p>
            <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mt-1.5">Applied Gigs</p>
          </div>
        </div>

        {/* Stat 3 */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm flex items-center gap-4">
          <div className="h-10 w-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold text-lg">
            ⚡
          </div>
          <div className="text-left">
            <p className="text-xl sm:text-2xl font-black text-slate-800 leading-none">{activeCount}</p>
            <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mt-1.5">Assigned Gigs</p>
          </div>
        </div>

        {/* Stat 4 */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm flex items-center gap-4">
          <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-lg">
            ✓
          </div>
          <div className="text-left">
            <p className="text-xl sm:text-2xl font-black text-slate-800 leading-none">{completedCount}</p>
            <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mt-1.5">Completed Jobs</p>
          </div>
        </div>

      </div>

      {/* Tab Navigation */}
      <div className="mb-8 flex gap-4 border-b border-slate-200/60 pb-px">
        <button
          onClick={() => setActiveTab('browse')}
          className={`pb-3.5 px-2 text-sm font-bold tracking-tight transition-all duration-300 relative cursor-pointer ${
            activeTab === 'browse'
              ? 'text-[#b5653b]'
              : 'text-slate-400 hover:text-slate-700'
          }`}
        >
          Browse Open Gigs
          {availableCount > 0 && (
            <span className="ml-2 px-2 py-0.5 rounded-full text-[10px] bg-[#b5653b] text-white font-bold">
              {availableCount}
            </span>
          )}
          {activeTab === 'browse' && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#b5653b] rounded-full"></span>
          )}
        </button>
        <button
          onClick={() => setActiveTab('mygigs')}
          className={`pb-3.5 px-2 text-sm font-bold tracking-tight transition-all duration-300 relative cursor-pointer ${
            activeTab === 'mygigs'
              ? 'text-[#b5653b]'
              : 'text-slate-400 hover:text-slate-700'
          }`}
        >
          My Gigs & Applications
          {myGigs.length > 0 && (
            <span className="ml-2 px-2 py-0.5 rounded-full text-[10px] bg-slate-200 text-slate-700 font-bold">
              {myGigs.length}
            </span>
          )}
          {activeTab === 'mygigs' && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#b5653b] rounded-full"></span>
          )}
        </button>
      </div>

      {/* Tab Content */}
      <div className="pt-2">
        {activeTab === 'browse' && (
          <>
            {availableGigs.length === 0 ? (
              <div className="bg-white rounded-3xl shadow-md border border-slate-200/60 p-16 text-center max-w-xl mx-auto">
                <div className="h-16 w-16 bg-[#f5e6d3] rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                  ✨
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">All Caught Up!</h3>
                <p className="text-slate-500 text-sm">No new gigs are available at the moment. Please check back later.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {availableGigs.map(gig => (
                  <GigCard
                    key={gig.id}
                    gig={gig}
                    role={user.role}
                    onApply={(id) => applyForGig(id, user._id)}
                  />
                ))}
              </div>
            )}
          </>
        )}

        {activeTab === 'mygigs' && (
          <>
            {myGigs.length === 0 ? (
              <div className="bg-white rounded-3xl shadow-md border border-slate-200/60 p-16 text-center max-w-xl mx-auto">
                <div className="h-16 w-16 bg-[#f5e6d3] rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                  📩
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">No Gigs Applied</h3>
                <p className="text-slate-500 text-sm">You haven't applied to any gigs yet. Switch to "Browse Open Gigs" to find opportunities.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {myGigs.map(gig => (
                  <GigCard
                    key={gig.id}
                    gig={gig}
                    role={user.role}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default WorkerDashboard;
