import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HabitacionesList = () => {
  const [habitaciones, setHabitaciones] = useState([]);
  const [editingHabitacionId, setEditingHabitacionId] = useState(null);
  const [editedHabitacion, setEditedHabitacion] = useState({ name: '', price1: '', price2: '', huespedes: '', stars: '', espacio: '', descripcion: '', servicios: '', noServicios: '', imagen: '' });

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

  const handleEdit = (id, habitacion) => {
    setEditingHabitacionId(id);
    setEditedHabitacion(habitacion);
  };

  const handleSave = async () => {
    try {
      const res = await axios.put(`http://localhost:3000/api/habitaciones/${editingHabitacionId}`, editedHabitacion);
      console.log('Habitacion updated:', res.data);
      setHabitaciones(habitaciones.map(habitacion =>
        habitacion._id === editingHabitacionId ? { ...habitacion, ...editedHabitacion } : habitacion
      ));
      setEditingHabitacionId(null);
      setEditedHabitacion({ name: '', price1: '', price2: '', huespedes: '', espacio: '', stars: '', descripcion: '', servicios: '', noServicios: '', imagen: '' });
    } catch (error) {
      console.error('Error updating habitacion:', error);
    }
  };

  const handleDelete = async id => {
    try {
      const res = await axios.delete(`http://localhost:3000/api/habitaciones/${id}`);
      console.log('Habitacion deleted:', res.data);
      setHabitaciones(habitaciones.filter(habitacion => habitacion._id !== id));
    } catch (error) {
      console.error('Error deleting habitacion:', error);
    }
  };

  return (
    <section alt="Lista de habitaciones" className="w-4/5 mx-auto mt-5">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
    {habitaciones.map(habitacion => (
      <div key={habitacion._id} className="p-5 rounded-xl mb-3 flex flex-col items-center justify-center transform transition hover:scale-110 duration-300" style={{ background: '#BFD8BD', width: '100%' }}>
        {editingHabitacionId === habitacion._id ? (
          <div className="flex flex-col items-center w-4/5">
            <h1 className='bg-[#77BFA3] text-white font-bold py-2 px-4 rounded mr-2 mb-2'>Editando</h1>
            <input
              type="text"
              value={editedHabitacion.name}
              onChange={e => setEditedHabitacion({ ...editedHabitacion, name: e.target.value })}
              className="mb-2 px-2 py-1 border rounded w-full"
              placeholder="Nombre"
            />
            <input
              type="text"
              value={editedHabitacion.price1}
              onChange={e => setEditedHabitacion({ ...editedHabitacion, price1: e.target.value })}
              className="mb-2 px-2 py-1 border rounded w-full"
              placeholder="Precio 1"
            />
            <input
              type="text"
              value={editedHabitacion.price2}
              onChange={e => setEditedHabitacion({ ...editedHabitacion, price2: e.target.value })}
              className="mb-2 px-2 py-1 border rounded w-full"
              placeholder="Precio 2"
            />
            <input
              type="text"
              value={editedHabitacion.huespedes}
              onChange={e => setEditedHabitacion({ ...editedHabitacion, huespedes: e.target.value })}
              className="mb-2 px-2 py-1 border rounded w-full"
              placeholder="Huespedes"
            />
            <input
              type="text"
              value={editedHabitacion.espacio}
              onChange={e => setEditedHabitacion({ ...editedHabitacion, espacio: e.target.value })}
              className="mb-2 px-2 py-1 border rounded w-full"
              placeholder="Espacio"
            />
            <input
                type="text"
                value={editedHabitacion.stars}
                onChange={e => setEditedTip({ ...editedHabitacion, stars: e.target.value })}
                className="mb-2 px-2 py-1 border rounded w-full"
                placeholder="Estrellas"
                max={5}
              />
               <textarea
                type="text"
                value={editedHabitacion.descripcion}
                onChange={e => setEditedTip({ ...editedHabitacion, descripcion: e.target.value })}
                className="mb-2 px-2 py-1 border rounded w-full h-36"
                placeholder="Estrellas"
                max={5}
              />
            <input
              type="text"
              value={editedHabitacion.servicios}
              onChange={e => setEditedHabitacion({ ...editedHabitacion, servicios: e.target.value })}
              className="mb-2 px-2 py-1 border rounded w-full"
              placeholder="Servicios"
            />
            <input
              type="text"
              value={editedHabitacion.noServicios}
              onChange={e => setEditedHabitacion({ ...editedHabitacion, noServicios: e.target.value })}
              className="mb-2 px-2 py-1 border rounded w-full"
              placeholder="No Servicios"
            />
            <button onClick={handleSave} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
              Guardar
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <img src={habitacion.imagen} alt="Imagen de la habitacion" className="w-96 h-auto object-cover" />
            <div className='text-center'>
              <h3 className="title tracking-wider text-2xl font-bold mb-2 mt-2 bg-[#77BFA3] text-white  py-2 px-4 rounded-xl w-fit mx-auto ">{habitacion.name}</h3>
              
              <div className='bg-[#EDEEC9] p-2 rounded-xl '>
                <div className='text-center'>
                <p className="amatic-sc-bold text-xl mb-5"> {habitacion.descripcion}</p>
                <p className="amatic-sc-bold text-2xl mb-1">Número de huespedes:{habitacion.huespedes}</p>
                <p className="amatic-sc-bold text-2xl mb-1"> Tamaño de la habitación: {habitacion.espacio}</p>
                <p className="amatic-sc-bold text-2xl mb-1"> Servicios Incluidos: {habitacion.servicios}</p>
                <p className="amatic-sc-bold text-2xl mb-1"> Servicios NO Incluidos: {habitacion.noServicios}</p>
                <p className="amatic-sc-bold text-2xl mb-1">Evaluación: {habitacion.stars} ⭐</p>
                </div>

              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mt-4 bg-[#98C9A3] -m-2 rounded-bl-xl rounded-br-xl'>
                <p className="amatic-sc-bold text-2xl mb-1">Weekday: {habitacion.price1}$ / Noche</p>
                <p className="amatic-sc-bold text-2xl mb-1">Week-End: {habitacion.price2}$ / Noche</p>
              </div>

              </div>
            </div>
            <div className="flex flex-wrap mt-4">
              <button
                onClick={() => handleEdit(habitacion._id, habitacion)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 mb-2"
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(habitacion._id)}
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

export default HabitacionesList;
