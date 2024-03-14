import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserHorarios = () => {
  const [horarios, setHorarios] = useState([]);

  useEffect(() => {
    const fetchHorarios = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/horarios');
        setHorarios(res.data);
      } catch (error) {
        console.error('Error fetching horarios:', error);
      }
    };
    fetchHorarios();
  }, []);

  return (
    <section alt="Lista de horarios" className="w-4/5 mx-auto mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 justify-center">
        {horarios.map(horario => (
          <div key={horario._id} className="p-5 rounded-xl mb-3 flex flex-col items-center justify-center transform transition hover:scale-110 duration-300" style={{ background: '#EDEEC9', minWidth: 0 }}>
            <div className="flex flex-col items-center">
              <img src={horario.imagen} alt="Imagen del horario" className="w-40 h-auto object-cover mb-3" />
              <div className='text-center'>
                <h3 className="title text-2xl font-bold mb-2 text-[#98C9A3]">{horario.name}</h3>
                <p className="amatic-sc-bold text-3xl mb-1">{horario.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserHorarios;
