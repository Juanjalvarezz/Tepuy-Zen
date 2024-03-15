import React, { useState } from 'react';
import axios from 'axios';

const HabitacionesForm = () => {
  const initialFormData = {
    name: '',
    price1: 0,
    price2: 0,
    descripcion: '',
    huespedes: '',
    espacio: '',
    servicios: '',
    noServicios: '',
    imagen: null,
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
        const image = new Image();
        image.src = event.target.result;

        image.onload = () => {
            const canvas = document.createElement('canvas');
            const maxSize = 800; // Tamaño máximo permitido

            let width = image.width;
            let height = image.height;

            if (width > height) {
                if (width > maxSize) {
                    height *= maxSize / width;
                    width = maxSize;
                }
            } else {
                if (height > maxSize) {
                    width *= maxSize / height;
                    height = maxSize;
                }
            }

            canvas.width = width;
            canvas.height = height;

            const ctx = canvas.getContext('2d');
            ctx.drawImage(image, 0, 0, width, height);

            const resizedImage = canvas.toDataURL('image/jpeg', 0.7); // Reducción de calidad a 70%

            setFormData({ ...formData, imagen: resizedImage });
        };
    };
    reader.readAsDataURL(file);
};

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/habitaciones', formData);
      console.log('Article created:', res.data);
      setFormData(initialFormData); // Limpiar el formulario después de enviar los datos
    } catch (error) {
      console.error('Error creating Article:', error);
    }
  };

  return (
    <div className="w-4/5 mx-auto">
  <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-5 p-5 rounded-lg bg-[#77BFA3] grid grid-cols-1 md:grid-cols-2 gap-2">
    <input
      type="text"
      placeholder="Nombre"
      name="name"
      value={formData.name}
      onChange={handleChange}
      className="p-2 border rounded-lg"
      required // Campo requerido
    />
        <input
      type="text"
      placeholder="Número de huespedes"
      name="huespedes"
      value={formData.huespedes}
      onChange={handleChange}
      className="p-2 border rounded-lg"
      required // Campo requerido
    />
    <input
      type="number"
      placeholder="Weekday"
      name="price1"
      value={formData.price1 || ''}
      onChange={handleChange}
      className="p-2 border rounded-lg"
      required // Campo requerido
    />
    <input
      type="number"
      placeholder="Week-End"
      name="price2"
      value={formData.price2 || ''}
      onChange={handleChange}
      className="p-2 border rounded-lg"
      required // Campo requerido
    />

    <input
      type="text"
      placeholder="Tamaño de la habitación"
      name="espacio"
      value={formData.espacio}
      onChange={handleChange}
      className="p-2 border rounded-lg md:col-span-2"
      required // Campo requerido
    />
    <textarea
      type="text"
      placeholder="Descripción"
      name="descripcion"
      value={formData.descripcion}
      onChange={handleChange}
      className="p-2 border rounded-lg md:col-span-2"
      required // Campo requerido
    />
    <textarea
      type="text"
      placeholder="Servicios Incluidos"
      name="servicios"
      value={formData.servicios}
      onChange={handleChange}
      className="p-2 border rounded-lg md:col-span-2"
      required // Campo requerido
    />
    <textarea
      type="text"
      placeholder="Servicios No Incluidos"
      name="noServicios"
      value={formData.noServicios}
      onChange={handleChange}
      className="p-2 border rounded-lg md:col-span-2"
      required // Campo requerido
    />
    <h1 className='md:col-span-2 text-center'>Agrega una Imagen para mostrar la Habitación :</h1>
    <input type="file" className="p-2 border rounded w-full bg-white text-gray-700 hover:bg-gray-300 focus:outline-none focus:bg-white md:col-span-2" name="imagen" onChange={handleImageChange} required />

    <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:col-span-2"
    >
      Enviar
    </button>
  </form>
</div>

  );
};

export default HabitacionesForm;
