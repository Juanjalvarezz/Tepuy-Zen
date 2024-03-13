// src/App.js

import React from 'react';
import ArticleForm from '../components/ArticleForm';
import ArticleList from '../components/ArticlesList';


const AdminArticles = () => {
  return (
    <div className="container mx-auto">
      <div className="bg-transparent backdrop-blur-md p-5 border-transparent border-2 rounded-lg ">
          <h1 className="title text-3xl text-center font-bold mb-2 text-slate-200 tracking-wider" style={{ color: '#DDE7C7' }}>Articulos de Viaje</h1>
      </div>

        <ArticleForm/>
        <ArticleList/>
        
    </div>

    
  );
};

export default AdminArticles;
