import React, { useState } from 'react';
import axios from 'axios';

const OpinionForm = () => {
  const initialFormData = {
    name: '',
    opinion: '',
    puntuacion: 0
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/opinion', formData);
      console.log('Opinion created:', res.data);
      // Actualizar la lista de opiniones después de crear una nueva
      setFormData(initialFormData); // Limpiar el formulario después de enviar los datos
    } catch (error) {
      console.error('Error creating opinion:', error);
    }
  };

  return (
    <div className="w-4/5 mx-auto mt-5 flex justify-center items-center">
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-5 p-5  rounded-lg bg-[#77BFA3]">
        <input
          type="text"
          placeholder="Nombre"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border mb-2 rounded-lg"
          required // Campo requerido
        />
        <textarea
          placeholder="Opinión"
          name="opinion"
          value={formData.opinion}
          onChange={handleChange}
          className="w-full p-2 border mb-2 rounded-lg h-40"
          required // Campo requerido
        />
       <input
          type="number"
          placeholder="Puntuación"
          name="puntuacion"
          value={formData.puntuacion || ''} // Usar un string vacío si formData.puntuacion es null o undefined
          onChange={handleChange}
          max={10}
          className="w-full p-2 border -mt-1.5 mb-2 rounded-lg"
          required // Campo requerido
        />

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default OpinionForm;
