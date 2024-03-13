import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserGUias = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    const fetchTips = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/guias');
        setTips(res.data);
      } catch (error) {
        console.error('Error fetching tips:', error);
      }
    };
    fetchTips();
  }, []);

  return (
    <section alt="Lista de tips" className="w-4/5 mx-auto mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {tips.map(tip => (
          <div key={tip._id} className="p-5 rounded-xl mb-3 flex flex-col items-center justify-center transform transition hover:scale-110 duration-300" style={{ background: '#98C9A3', minWidth: 0 }}>
            <div className="flex flex-col items-center">
              <img src={tip.imagen} alt="Imagen del tip" className="w-40 h-auto object-cover mb-3" />
              <div className='text-center'>
                <h3 className="title text-2xl font-medium tracking-wider" style={{ color: '#EDEEC9' }}>{tip.name}</h3>
                <div className="amatic-sc-bold text-2xl font-bold mb-2">
                  <p className="mb-1">Edad: {tip.age}</p>
                  <p className="mb-1">Años de experiencia: {tip.experience}</p>
                  <p className="mb-1">Idiomas: {tip.lenguajes}</p>
                  <p className="mb-1">Estrellas: {tip.stars} ⭐</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserGUias;
