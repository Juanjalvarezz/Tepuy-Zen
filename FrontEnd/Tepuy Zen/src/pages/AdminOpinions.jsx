// src/App.js

import React from 'react';
import OpinionForm from '../components/OpinionForm';
import OpinionList from '../components/OpinionList';

const AdminOpinions = () => {
  return (
    <div className="container mx-auto">
      <div className="bg-transparent backdrop-blur-md p-5 border-transparent border-2 rounded-lg mb-4">
            <h1 className="title text-3xl text-center font-bold mb-2 text-slate-200 tracking-wider" style={{ color: '#DDE7C7' }}>Opiniones y Reseñas</h1>
        </div>
      <OpinionForm />
      <OpinionList />
    </div>
  );
};

export default AdminOpinions;
