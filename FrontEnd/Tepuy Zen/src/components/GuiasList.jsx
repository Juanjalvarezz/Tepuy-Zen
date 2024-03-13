import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GuiasList = () => {
  const [tips, setTips] = useState([]);
  const [editingTipId, setEditingTipId] = useState(null);
  const [editedTip, setEditedTip] = useState({ name: '', age: '', experience: '', lenguajes: '', stars: '', imagen: ''});

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

  const handleEdit = (id, tip) => {
    setEditingTipId(id);
    setEditedTip(tip);
  };

  const handleSave = async () => {
    try {
      const res = await axios.put(`http://localhost:3000/api/guias/${editingTipId}`, editedTip);
      console.log('Tip updated:', res.data);
      setTips(tips.map(tip =>
        tip._id === editingTipId ? { ...tip, ...editedTip } : tip
      ));
      setEditingTipId(null);
      setEditedTip({ name: '', age: '', experience: '', lenguajes: '', stars: '', imagen: ''});
    } catch (error) {
      console.error('Error updating tip:', error);
    }
  };

  const handleDelete = async id => {
    try {
      const res = await axios.delete(`http://localhost:3000/api/guias/${id}`);
      console.log('Tip deleted:', res.data);
      setTips(tips.filter(tip => tip._id !== id));
    } catch (error) {
      console.error('Error deleting tip:', error);
    }
  };

  return (
    <section alt="Lista de tips" className="w-4/5 mx-auto mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {tips.map(tip => (
          <div key={tip._id} className="p-5 rounded-xl mb-3 flex flex-col items-center justify-center transform transition hover:scale-110 duration-300" style={{ background: '#98C9A3', minWidth: 0 }}>
            {editingTipId === tip._id ? (
              <div className="flex flex-col items-center">
                <input
                  type="text"
                  value={editedTip.name}
                  onChange={e => setEditedTip({ ...editedTip, name: e.target.value })}
                  className="mb-2 px-2 py-1 border rounded w-full"
                  placeholder="Nombre"
                />
                <input
                  type="text"
                  value={editedTip.age}
                  onChange={e => setEditedTip({ ...editedTip, age: e.target.value })}
                  className="mb-2 px-2 py-1 border rounded w-full"
                  placeholder="Edad"
                />
                <input
                  type="text"
                  value={editedTip.experience}
                  onChange={e => setEditedTip({ ...editedTip, experience: e.target.value })}
                  className="mb-2 px-2 py-1 border rounded w-full"
                  placeholder="Experiencia"
                />
                <input
                  type="text"
                  value={editedTip.lenguajes}
                  onChange={e => setEditedTip({ ...editedTip, lenguajes: e.target.value })}
                  className="mb-2 px-2 py-1 border rounded w-full"
                  placeholder="Lenguajes"
                />
                <input
                  type="text"
                  value={editedTip.stars}
                  onChange={e => setEditedTip({ ...editedTip, stars: e.target.value })}
                  className="mb-2 px-2 py-1 border rounded w-full"
                  placeholder="Estrellas"
                />
                <button onClick={handleSave} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
                  Guardar
                </button>
              </div>
            ) : (
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

export default GuiasList;
