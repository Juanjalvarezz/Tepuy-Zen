import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserPromo = () => {
  const [promos, setPromos] = useState([]);

  useEffect(() => {
    const fetchPromos = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/promos');
        setPromos(res.data);
      } catch (error) {
        console.error('Error fetching promos:', error);
      }
    };
    fetchPromos();
  }, []);

  return (
    <section alt="Lista de promociones" className="w-4/5 mx-auto mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {promos.map(promo => (
          <div key={promo._id} className="p-5 rounded-xl mb-3 flex flex-col items-center justify-center transform transition hover:scale-110 duration-300" style={{ background: '#98C9A3', minWidth: 0 }}>
            <div className="flex flex-col items-center">
              <img src={promo.imagen} alt="Imagen de la promoción" className="w-40 h-auto object-cover mb-3" />
              <div className='text-center'>
                <h3 className="title text-2xl font-bold mb-2 tracking-wider text-[#EDEEC9]">{promo.name}</h3>
                <p className="amatic-sc-bold text-3xl mb-1">Precio: {promo.price}$</p>
                <p className="amatic-sc-bold text-3xl mb-1">Duración: {promo.duracion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserPromo;
