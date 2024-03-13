import React from 'react';
import TipsForm from '../components/TipsForm';
import TipsList from '../components/TipsList';


const AdminTips = () => {
  return (


    <div className="container mx-auto">
    <div className="bg-transparent backdrop-blur-md p-5 border-transparent border-2 rounded-lg">
      <h1 className="title text-3xl text-center font-bold mb-2 text-slate-200 tracking-wider" style={{ color: '#DDE7C7' }}>Tips para tu Viaje</h1>
    </div>
    <TipsForm />
    <TipsList/>
  </div>

  );
};

export default AdminTips;
