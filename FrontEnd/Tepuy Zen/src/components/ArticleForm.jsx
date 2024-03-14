import React, { useState } from 'react';
import axios from 'axios';

const ArticleForm = () => {
  const initialFormData = {
    name: '',
    price: 0,
    importance: 0,
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
      const res = await axios.post('http://localhost:3000/api/articles', formData);
      console.log('Article created:', res.data);
      setFormData(initialFormData); // Limpiar el formulario después de enviar los datos
    } catch (error) {
      console.error('Error creating Article:', error);
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
          placeholder="Precio"
          name="price"
          value={formData.price || ''}
          onChange={handleChange}
          className="w-full p-2 border mb-2 rounded-lg"
          required // Campo requerido
        />
       <input
          type="number"
          placeholder="Importancia"
          name="importance"
          value={formData.importance || ''} // Usar un string vacío si formData.importance es null o undefined
          onChange={handleChange}
          max={10}
          className="w-full p-2 border mb-2 rounded-lg"
          required // Campo requerido
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

export default ArticleForm;
