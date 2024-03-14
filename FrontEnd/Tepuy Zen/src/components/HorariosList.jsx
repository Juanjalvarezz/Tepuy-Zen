import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HorariosList = () => {
  const [horarios, setHorarios] = useState([]);
  const [editingHorarioId, setEditingHorarioId] = useState(null);
  const [editedHorario, setEditedHorario] = useState({ name: '', description: '', imagen: '' });

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

  const handleEdit = (id, horario) => {
    setEditingHorarioId(id);
    setEditedHorario(horario);
  };

  const handleSave = async () => {
    try {
      const res = await axios.put(`http://localhost:3000/api/horarios/${editingHorarioId}`, editedHorario);
      console.log('Horario updated:', res.data);
      setHorarios(horarios.map(horario =>
        horario._id === editingHorarioId ? { ...horario, ...editedHorario } : horario
      ));
      setEditingHorarioId(null);
      setEditedHorario({ name: '', description: '', imagen: '' });
    } catch (error) {
      console.error('Error updating horario:', error);
    }
  };

  const handleDelete = async id => {
    try {
      const res = await axios.delete(`http://localhost:3000/api/horarios/${id}`);
      console.log('Horario deleted:', res.data);
      setHorarios(horarios.filter(horario => horario._id !== id));
    } catch (error) {
      console.error('Error deleting horario:', error);
    }
  };

  return (
    <section alt="Lista de horarios" className="w-4/5 mx-auto mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 justify-center">
      {horarios.map(horario => (
        <div key={horario._id} className="p-5 rounded-xl mb-3 flex flex-col items-center justify-center transform transition hover:scale-110 duration-300" style={{ background: '#EDEEC9', minWidth: 0 }}>
          {editingHorarioId === horario._id ? (
            <div className="flex flex-col items-center">
              <h1 className='bg-[#77BFA3] text-white font-bold py-2 px-4 rounded mr-2 mb-2'>Editando</h1>
              <input
                type="text"
                value={editedHorario.name}
                onChange={e => setEditedHorario({ ...editedHorario, name: e.target.value })}
                className="mb-2 px-2 py-2 border rounded-lg w-full"
                placeholder="Nombre"
                style={{ minHeight: '40px' }} // Añadido estilo para altura mínima
              />
              <textarea
                value={editedHorario.description}
                onChange={e => setEditedHorario({ ...editedHorario, description: e.target.value })}
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
              <img src={horario.imagen} alt="Imagen del horario" className="w-40 h-auto object-cover mb-3" />
              <div className='text-center'>
                <h3 className="title text-2xl font-bold mb-2 text-[#98C9A3]">{horario.name}</h3>
                <p className="amatic-sc-bold text-3xl mb-1">{horario.description}</p>
              </div>
              <div className="flex flex-wrap mt-4">
                <button
                  onClick={() => handleEdit(horario._id, horario)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 mb-2"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(horario._id)}
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

export default HorariosList;
