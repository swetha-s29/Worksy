import React from 'react';

const GigCard = ({ gig, role, onApply, onAccept, onComplete }) => {
  return (
    <div className="bg-white rounded-3xl shadow-md hover:shadow-xl border border-slate-200/50 p-6 flex flex-col justify-between transition-all duration-300 relative group overflow-hidden">
      
      {/* Decorative colored strip at the top */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#d68a5c]/20 group-hover:bg-[#b5653b] transition-colors duration-300"></div>

      <div>
        {/* Category & Status */}
        <div className="flex justify-between items-center mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-bold text-[#b5653b] bg-[#f5e6d3] border border-[#d68a5c]/20 uppercase tracking-wider">
            {gig.category}
          </span>
          <span className={`px-2.5 py-1 text-xs font-semibold rounded-full flex items-center gap-1.5 ${
            gig.status === 'Open' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' :
            gig.status === 'In Progress' ? 'bg-amber-50 text-amber-700 border border-amber-100' :
            'bg-slate-50 text-slate-600 border border-slate-200'
          }`}>
            <span className={`h-1.5 w-1.5 rounded-full ${
              gig.status === 'Open' ? 'bg-emerald-500 animate-pulse' :
              gig.status === 'In Progress' ? 'bg-amber-500' :
              'bg-slate-400'
            }`}></span>
            {gig.status}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-800 tracking-tight group-hover:text-[#b5653b] transition-colors duration-300">
          {gig.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-500 mt-2.5 line-clamp-3 leading-relaxed">
          {gig.description}
        </p>

        {/* Gig Info Elements */}
        <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-2 gap-4 text-xs font-semibold text-slate-600">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400">
              📍
            </div>
            <span className="truncate" title={gig.location}>{gig.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 text-sm">
              💵
            </div>
            <span className="text-slate-800 font-bold text-sm">{gig.payment}</span>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col justify-end">
        {role === 'Customer' && (
          <div>
            {gig.status === 'Open' && (
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-400 text-sm">👥</span>
                  <span className="text-xs font-bold text-slate-700">
                    {gig.applicants.length} {gig.applicants.length === 1 ? 'applicant' : 'applicants'}
                  </span>
                </div>
                {gig.applicants.length > 0 ? (
                  <button
                    onClick={() => onAccept(gig.id, gig.applicants[0])}
                    className="text-xs bg-[#b5653b] hover:bg-[#914d2a] text-white px-3.5 py-2 rounded-xl font-bold shadow transition-all duration-300 cursor-pointer"
                  >
                    Accept Applicant
                  </button>
                ) : (
                  <span className="text-xs font-semibold text-slate-400 bg-slate-50 px-2 py-1 rounded-lg">Waiting...</span>
                )}
              </div>
            )}
            
            {gig.status === 'In Progress' && (
              <button
                onClick={() => onComplete(gig.id)}
                className="w-full text-xs bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 rounded-xl font-bold shadow hover:shadow-md transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>✓</span> Mark As Completed
              </button>
            )}

            {gig.status === 'Completed' && (
              <div className="text-center py-1 bg-slate-50 text-slate-500 rounded-xl text-xs font-bold">
                Task Completed Successfully
              </div>
            )}
          </div>
        )}

        {role === 'Worker' && (
          <div>
            {gig.status === 'Open' && (
              <button
                onClick={() => onApply(gig.id)}
                className="w-full text-sm bg-[#b5653b] hover:bg-[#914d2a] text-white py-2.5 px-4 rounded-xl font-bold shadow hover:shadow-lg transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
              >
                Apply for Gig
                <span className="text-xs">→</span>
              </button>
            )}

            {gig.status === 'In Progress' && gig.workerId === 'mock-id-123' && (
              <div className="bg-amber-50 border border-amber-100 text-amber-800 py-2.5 px-3 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                You are assigned to this gig!
              </div>
            )}

            {gig.status === 'In Progress' && gig.workerId !== 'mock-id-123' && (
              <div className="bg-slate-50 text-slate-400 py-2.5 px-3 rounded-xl text-xs font-semibold text-center">
                Assigned to another worker
              </div>
            )}

            {gig.status === 'Completed' && gig.workerId === 'mock-id-123' && (
              <div className="bg-emerald-50 border border-emerald-100 text-emerald-800 py-2.5 px-3 rounded-xl text-xs font-bold text-center">
                🎉 Job completed & payment released!
              </div>
            )}

            {gig.status === 'Completed' && gig.workerId !== 'mock-id-123' && (
              <div className="bg-slate-50 text-slate-400 py-2.5 px-3 rounded-xl text-xs font-semibold text-center">
                Completed
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default GigCard;
