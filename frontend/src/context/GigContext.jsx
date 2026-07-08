import React, { createContext, useState } from 'react';

export const GigContext = createContext();

export const GigProvider = ({ children }) => {
  const [gigs, setGigs] = useState([
    {
      id: 'g1',
      title: 'Need a plumber to fix sink',
      description: 'My kitchen sink is leaking and I need someone to fix it ASAP.',
      category: 'Plumbing',
      location: 'RS Puram, Coimbatore, Tamil Nadu',
      payment: '₹1500',
      status: 'Open',
      customerId: 'mock-id-123',
      workerId: null,
      applicants: []
    },
    {
      id: 'g2',
      title: 'House cleaning for 2 hours',
      description: 'General cleaning of a 2 bedroom apartment.',
      category: 'Cleaning',
      location: 'Peelamedu, Coimbatore, Tamil Nadu',
      payment: '₹600',
      status: 'Open',
      customerId: 'other-customer',
      workerId: null,
      applicants: []
    }
  ]);

  const addGig = (gig) => {
    setGigs([...gigs, { ...gig, id: Date.now().toString(), applicants: [], status: 'Open' }]);
  };

  const applyForGig = (gigId, workerId) => {
    setGigs(gigs.map(g => {
      if (g.id === gigId && !g.applicants.includes(workerId)) {
        return { ...g, applicants: [...g.applicants, workerId] };
      }
      return g;
    }));
  };

  const acceptWorker = (gigId, workerId) => {
    setGigs(gigs.map(g => {
      if (g.id === gigId) {
        return { ...g, workerId, status: 'In Progress' };
      }
      return g;
    }));
  };

  const completeGig = (gigId) => {
    setGigs(gigs.map(g => {
      if (g.id === gigId) {
        return { ...g, status: 'Completed' };
      }
      return g;
    }));
  };

  return (
    <GigContext.Provider value={{ gigs, addGig, applyForGig, acceptWorker, completeGig }}>
      {children}
    </GigContext.Provider>
  );
};
