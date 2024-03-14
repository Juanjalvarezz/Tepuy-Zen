import React, { useState } from 'react';
import axios from 'axios';

const GuiasForm = () => {
  const initialFormData = {
    name: '',
    age: 0,
    experience: 0,
    lenguajes: '',
    stars: 0,
    imagen: null
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
      const res = await axios.post('http://localhost:3000/api/guias', formData);
      console.log('Guide created:', res.data);
      setFormData(initialFormData); // Limpiar el formulario después de enviar los datos
    } catch (error) {
      console.error('Error creating Guide:', error);
    }
  };

  return (
    <div className="w-4/5 mx-auto flex justify-center items-center">
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
        <input
          type="number"
          placeholder="Edad"
          name="age"
          value={formData.age || ''}
          onChange={handleChange}
          className="w-full p-2 border mb-2 rounded-lg"
          required // Campo requerido
        />
        <input
          type="number"
          placeholder="Experiencia"
          name="experience"
          value={formData.experience || ''}
          onChange={handleChange}
          className="w-full p-2 border mb-2 rounded-lg"
          required // Campo requerido
        />
        <input
          type="text"
          placeholder="Lenguajes"
          name="lenguajes"
          value={formData.lenguajes}
          onChange={handleChange}
          className="w-full p-2 border mb-2 rounded-lg"
        />
        <input
          type="number"
          placeholder="Estrellas"
          name="stars"
          value={formData.stars || ''}
          onChange={handleChange}
          className="w-full p-2 border mb-2 rounded-lg"
        />
        <div className="mb-3">
          <input type="file" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="imagen" onChange={handleImageChange} required />
        </div>
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

export default GuiasForm;
