import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ServicesList = () => {
  const [services, setServices] = useState([]);
  const [editingServiceId, setEditingServiceId] = useState(null);
  const [editedService, setEditedService] = useState({ name: '', description: '', imagen: '' });

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

  const handleEdit = (id, service) => {
    setEditingServiceId(id);
    setEditedService(service);
  };

  const handleSave = async () => {
    try {
      const res = await axios.put(`http://localhost:3000/api/servicios/${editingServiceId}`, editedService);
      console.log('Service updated:', res.data);
      setServices(services.map(service =>
        service._id === editingServiceId ? { ...service, ...editedService } : service
      ));
      setEditingServiceId(null);
      setEditedService({ name: '', description: '', imagen: '' });
    } catch (error) {
      console.error('Error updating service:', error);
    }
  };

  const handleDelete = async id => {
    try {
      const res = await axios.delete(`http://localhost:3000/api/servicios/${id}`);
      console.log('Service deleted:', res.data);
      setServices(services.filter(service => service._id !== id));
    } catch (error) {
      console.error('Error deleting service:', error);
    }
  };

  return (
    <section alt="Lista de servicios" className="w-4/5 mx-auto mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {services.map(service => (
          <div key={service._id} className="p-5 rounded-xl mb-3 flex flex-col items-center justify-center transform transition hover:scale-110 duration-300" style={{ background: '#BFD8BD', minWidth: 0 }}>
            {editingServiceId === service._id ? (
              <div className="flex flex-col items-center">
                <h1 className='bg-[#77BFA3] text-white font-bold py-2 px-4 rounded mr-2 mb-2'>Editando</h1>
                <input
                  type="text"
                  value={editedService.name}
                  onChange={e => setEditedService({ ...editedService, name: e.target.value })}
                  className="mb-2 px-2 py-2 border rounded-lg w-full"
                  placeholder="Nombre"
                  style={{ minHeight: '40px' }} // Añadido estilo para altura mínima
                />
                <textarea
                  value={editedService.description}
                  onChange={e => setEditedService({ ...editedService, description: e.target.value })}
                  className="mb-2 px-2 py-2 border rounded-lg w-full resize-none" // Quité la clase `rounded` y agregué `resize-none` para evitar el redimensionamiento
                  placeholder="Descripción"
                  style={{ minHeight: '150px' }} // Añadido estilo para altura mínima
                />
                <button onClick={handleSave} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
                  Guardar
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <img src={service.imagen} alt="Imagen del servicio" className="w-40 h-auto object-cover mb-3" />
                <div className='text-center'>
                  <h3 className="amatic-sc-bold text-3xl font-bold mb-2">{service.name}</h3>
                  <p className="text-xl mb-1">{service.description}</p>
                </div>
                <div className="flex flex-wrap mt-4">
                  <button
                    onClick={() => handleEdit(service._id, service)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 mb-2"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(service._id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-2"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesList;
