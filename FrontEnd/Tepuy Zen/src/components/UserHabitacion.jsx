import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserHabitaciones = () => {
  const [habitaciones, setHabitaciones] = useState([]);

  useEffect(() => {
    const fetchHabitaciones = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/habitaciones');
        setHabitaciones(res.data);
      } catch (error) {
        console.error('Error fetching habitaciones:', error);
      }
    };
    fetchHabitaciones();
  }, []);

  return (
    <section alt="Lista de habitaciones" className="w-4/5 mx-auto mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
        {habitaciones.map(habitacion => (
          <div key={habitacion._id} className="p-5 rounded-xl mb-3 flex flex-col items-center justify-center transform transition hover:scale-110 duration-300" style={{ background: '#BFD8BD', width: '100%' }}>
            <div className="flex flex-col items-center">
              <img src={habitacion.imagen} alt="Imagen de la habitacion" className="w-96 h-auto object-cover" />
              <div className='text-center'>
                <h3 className="title tracking-wider text-2xl font-bold mb-2 mt-2 bg-[#77BFA3] text-white  py-2 px-4 rounded-xl w-fit mx-auto ">{habitacion.name}</h3>

                <div className='amatic-sc-bold text-2xl bg-[#EDEEC9] p-2 rounded-xl '>
                  <div className='text-center'>
                    <p className=" mb-1">Número de huespedes:{habitacion.huespedes}</p>
                    <p className=" mb-1"> Tamaño de la habitación: {habitacion.espacio}</p>
                    <p className=" mb-1"> Servicios Incluidos: {habitacion.servicios}</p>
                    <p className=" mb-1"> Servicios NO Incluidos: {habitacion.noServicios}</p>
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mt-4 bg-[#98C9A3] -m-2 rounded-bl-xl rounded-br-xl'>
                    <p className=" mb-1">Weekday: {habitacion.price1}$ / Noche</p>
                    <p className=" mb-1">Week-End: {habitacion.price2}$ / Noche</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserHabitaciones;
