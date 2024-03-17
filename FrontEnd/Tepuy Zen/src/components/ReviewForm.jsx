import React, { useState } from 'react';
import axios from 'axios';

const ReviewForm = () => {
  const initialFormData = {
    name: '',
    habitacion: '', // Agregamos el campo habitacion al initialFormData
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
      const res = await axios.post('http://localhost:3000/api/review', formData);
      console.log('Opinion created:', res.data);
      // Actualizar la lista de opiniones después de crear una nueva
      setFormData(initialFormData); // Limpiar el formulario después de enviar los datos
    } catch (error) {
      console.error('Error creating opinion:', error);
    }
  };

  // Opciones disponibles para el tipo de habitación
  const habitacionOptions = [
    'Cuarto Simple',
    'Cuarto Simple Deluxe',
    'Cuarto Doble',
    'Cuarto Doble Deluxe',
    'Habitación Doble',
    'Habitación Doble Deluxe'
  ];

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-5 p-5 rounded-lg bg-[#77BFA3]">
      <input
        type="text"
        placeholder="Nombre y Apellido"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 border mb-2 rounded-lg"
        required // Campo requerido
      />
      <textarea
        placeholder="Review"
        name="opinion"
        value={formData.opinion}
        onChange={handleChange}
        className="w-full p-2 border mb-2 rounded-lg h-40"
        required // Campo requerido
      />
      <select
        value={formData.habitacion}
        onChange={handleChange}
        name="habitacion"
        className="w-full p-2 border -mt-1.5 mb-2 rounded-lg"
        required // Campo requerido
      >
        <option value="">Seleccione una opción</option>
        {habitacionOptions.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Puntuación"
        name="puntuacion"
        value={formData.puntuacion || ''}
        onChange={handleChange}
        max={10}
        className="w-full p-2 border  mb-2 rounded-lg"
        required // Campo requerido
      />

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Enviar
      </button>
    </form>
  );
};

export default ReviewForm;
