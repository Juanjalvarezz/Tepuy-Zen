import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OpinionList = () => {
  const [opinions, setOpinions] = useState([]);
  const [editingOpinionId, setEditingOpinionId] = useState(null);
  const [editedOpinion, setEditedOpinion] = useState({ name: '', opinion: '', puntuacion: '' });

  useEffect(() => {
    const fetchOpinions = async () => {
      try {
        const res = await axios.get('http://localhost:3000/opinion');
        setOpinions(res.data);
      } catch (error) {
        console.error('Error fetching opinions:', error);
      }
    };
    fetchOpinions();
  }, []);

  const handleEdit = (id, opinion) => {
    setEditingOpinionId(id);
    setEditedOpinion(opinion);
  };

  const handleSave = async () => {
    try {
      const res = await axios.put(`http://localhost:3000/opinion/${editingOpinionId}`, editedOpinion);
      console.log('Opinion updated:', res.data);
      // Actualizar la lista de opiniones después de editar
      setOpinions(opinions.map(opinion =>
        opinion._id === editingOpinionId ? { ...opinion, ...editedOpinion } : opinion
      ));
      // Limpiar estados de edición
      setEditingOpinionId(null);
      setEditedOpinion({ name: '', opinion: '', puntuacion: '' });
    } catch (error) {
      console.error('Error updating opinion:', error);
    }
  };

  const handleDelete = async id => {
    try {
      const res = await axios.delete(`http://localhost:3000/opinion/${id}`);
      console.log('Opinion deleted:', res.data);
      // Actualizar la lista de opiniones después de eliminar una
      setOpinions(opinions.filter(opinion => opinion._id !== id));
    } catch (error) {
      console.error('Error deleting opinion:', error);
    }
  };

  return (
    <section alt="Opiniones de usuarios" className="w-4/5 mx-auto mt-5">
    <div >
      {opinions.map(opinion => (
        <div key={opinion._id} className="shadow-md rounded-lg p-6 mb-3 transform transition hover:scale-110 duration-300" style={{ background: '#DDE7C7' }}>
          {editingOpinionId === opinion._id ? (
            <div>
              <h1 className='bg-[#77BFA3] text-white font-bold py-2 px-4 rounded mr-2 mb-2 w-fit'>Editando</h1>
              <input
                type="text"
                value={editedOpinion.name}
                onChange={e => setEditedOpinion({ ...editedOpinion, name: e.target.value })}
                className="mb-2 px-2 py-1 border rounded w-full"
                placeholder="Nombre"
              />
              <textarea
                value={editedOpinion.opinion}
                onChange={e => setEditedOpinion({ ...editedOpinion, opinion: e.target.value })}
                className="mb-2 px-2 py-1 border rounded w-full"
                placeholder="Opinión"
                rows="4"
              />
              <input
                type="text"
                value={editedOpinion.puntuacion}
                onChange={e => setEditedOpinion({ ...editedOpinion, puntuacion: e.target.value })}
                className="mb-2 px-2 py-1 border rounded w-full"
                placeholder="Puntuación"
              />
              <button onClick={handleSave} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                Guardar
              </button>
            </div>
          ) : (
            <div>
              <h3 className="title text-2xl tracking-wider font-medium" style={{ color: '#77BFA3' }}>{opinion.name}</h3>
              <p className="amatic-sc-bold text-gray-600 text-2xl mb-2">{opinion.opinion}</p>
              <p className="amatic-sc-bold text-gray-600 text-2xl mb-2"><i class="fa-solid fa-star text-yellow-400 mr-2"></i> Puntuación: {opinion.puntuacion} / 10</p>
              <div className="flex flex-wrap">
                <button
                  onClick={() => handleEdit(opinion._id, opinion)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 mb-2"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(opinion._id)}
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

export default OpinionList;
