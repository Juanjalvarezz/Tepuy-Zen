import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TipsList = () => {
  const [tips, setTips] = useState([]);
  const [editingTipId, setEditingTipId] = useState(null);
  const [editedTip, setEditedTip] = useState({ name: '', description: '', imagen: '' });

  useEffect(() => {
    const fetchTips = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/tips');
        setTips(res.data);
      } catch (error) {
        console.error('Error fetching tips:', error);
      }
    };
    fetchTips();
  }, []);

  const handleEdit = (id, tip) => {
    setEditingTipId(id);
    setEditedTip(tip);
  };

  const handleSave = async () => {
    try {
      const res = await axios.put(`http://localhost:3000/api/tips/${editingTipId}`, editedTip);
      console.log('Tip updated:', res.data);
      setTips(tips.map(tip =>
        tip._id === editingTipId ? { ...tip, ...editedTip } : tip
      ));
      setEditingTipId(null);
      setEditedTip({ name: '', description: '', imagen: '' });
    } catch (error) {
      console.error('Error updating tip:', error);
    }
  };

  const handleDelete = async id => {
    try {
      const res = await axios.delete(`http://localhost:3000/api/tips/${id}`);
      console.log('Tip deleted:', res.data);
      setTips(tips.filter(tip => tip._id !== id));
    } catch (error) {
      console.error('Error deleting tip:', error);
    }
  };

  return (
    <section alt="Lista de consejos" className="w-4/5 mx-auto mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
      {tips.map(tip => (
  <div key={tip._id} className="p-5 rounded-xl mb-3 flex flex-col items-center justify-center transform transition hover:scale-110 duration-300" style={{ background: '#BFD8BD', minWidth: 0 }}>
    {editingTipId === tip._id ? (
      <div className="flex flex-col items-center">
        <h1 className='bg-[#77BFA3] text-white font-bold py-2 px-4 rounded mr-2 mb-2'>Editando</h1>
        <input
          type="text"
          value={editedTip.name}
          onChange={e => setEditedTip({ ...editedTip, name: e.target.value })}
          className="mb-2 px-2 py-2 border rounded-lg w-full"
          placeholder="Nombre"
          style={{ minHeight: '40px' }} // Añadido estilo para altura mínima
        />
        <textarea
          value={editedTip.description}
          onChange={e => setEditedTip({ ...editedTip, description: e.target.value })}
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
                <img src={tip.imagen} alt="Imagen del consejo" className="w-40 h-auto object-cover mb-3" />
                <div className='text-center'>
                  <h3 className="amatic-sc-bold text-3xl font-bold mb-2">{tip.name}</h3>
                  <p className="text-xl mb-1">{tip.description}</p>
                </div>
                <div className="flex flex-wrap mt-4">
                  <button
                    onClick={() => handleEdit(tip._id, tip)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 mb-2"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(tip._id)}
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

export default TipsList;
