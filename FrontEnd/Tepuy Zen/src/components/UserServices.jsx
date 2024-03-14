import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/servicios');
        setServices(res.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };
    fetchServices();
  }, []);

  return (
    <section alt="Lista de servicios" className="w-4/5 mx-auto mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {services.map(service => (
          <div key={service._id} className="p-5 rounded-xl mb-3 flex flex-col items-center justify-center transform transition hover:scale-110 duration-300" style={{ background: '#BFD8BD', minWidth: 0 }}>
            <div className="flex flex-col items-center">
              <img src={service.imagen} alt="Imagen del servicio" className="w-40 h-auto object-cover mb-3" />
              <div className='text-center'>
                <h3 className="amatic-sc-bold text-3xl font-bold mb-2">{service.name}</h3>
                <p className="text-xl mb-1">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserServices;
