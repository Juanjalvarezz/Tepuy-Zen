import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PromosList = () => {
  const [promos, setPromos] = useState([]);
  const [editingPromoId, setEditingPromoId] = useState(null);
  const [editedPromo, setEditedPromo] = useState({ name: '', price: '', duracion: '', imagen: ''});

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

  const handleEdit = (id, promo) => {
    setEditingPromoId(id);
    setEditedPromo(promo);
  };

  const handleSave = async () => {
    try {
      const res = await axios.put(`http://localhost:3000/api/promos/${editingPromoId}`, editedPromo);
      console.log('Promo updated:', res.data);
      setPromos(promos.map(promo =>
        promo._id === editingPromoId ? { ...promo, ...editedPromo } : promo
      ));
      setEditingPromoId(null);
      setEditedPromo({ name: '', price: '', duracion: '', imagen: ''});
    } catch (error) {
      console.error('Error updating promo:', error);
    }
  };

  const handleDelete = async id => {
    try {
      const res = await axios.delete(`http://localhost:3000/api/promos/${id}`);
      console.log('Promo deleted:', res.data);
      setPromos(promos.filter(promo => promo._id !== id));
    } catch (error) {
      console.error('Error deleting promo:', error);
    }
  };

  return (
    <section alt="Lista de promociones" className="w-4/5 mx-auto mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {promos.map(promo => (
          <div key={promo._id} className="p-5 rounded-xl mb-3 flex flex-col items-center justify-center transform transition hover:scale-110 duration-300" style={{ background: '#98C9A3', minWidth: 0 }}>
            {editingPromoId === promo._id ? (
              <div className="flex flex-col items-center">
                <h1 className='bg-[#77BFA3] text-white font-bold py-2 px-4 rounded mr-2 mb-2'>Editando</h1>
                <input
                  type="text"
                  value={editedPromo.name}
                  onChange={e => setEditedPromo({ ...editedPromo, name: e.target.value })}
                  className="mb-2 px-2 py-1 border rounded w-full"
                  placeholder="Nombre"
                />
                <input
                  type="text"
                  value={editedPromo.price}
                  onChange={e => setEditedPromo({ ...editedPromo, price: e.target.value })}
                  className="mb-2 px-2 py-1 border rounded w-full"
                  placeholder="Precio"
                />
                <input
                  type="text"
                  value={editedPromo.duracion}
                  onChange={e => setEditedPromo({ ...editedPromo, duracion: e.target.value })}
                  className="mb-2 px-2 py-1 border rounded w-full"
                  placeholder="Duración"
                />
                <button onClick={handleSave} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
                  Guardar
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <img src={promo.imagen} alt="Imagen de la promoción" className="w-40 h-auto object-cover mb-3" />
                <div className='text-center'>
                  <h3 className="title text-2xl font-bold mb-2 tracking-wider text-[#EDEEC9]">{promo.name}</h3>
                  <p className="amatic-sc-bold text-3xl mb-1">Precio: {promo.price}$</p>
                  <p className="amatic-sc-bold text-3xl mb-1">Duración: {promo.duracion}</p>
                </div>
                <div className="flex flex-wrap mt-4">
                  <button
                    onClick={() => handleEdit(promo._id, promo)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 mb-2"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(promo._id)}
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

export default PromosList;
