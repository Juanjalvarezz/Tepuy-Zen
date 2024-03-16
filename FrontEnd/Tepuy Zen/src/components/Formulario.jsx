import React, { useState } from 'react';
import axios from 'axios';

const Formulario = ({ enviado, setEnviado }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [fechaEntrada, setFechaEntrada] = useState('');
  const [fechaSalida, setFechaSalida] = useState('');
  const [correo, setCorreo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { nombre, apellido, fechaEntrada, fechaSalida, correo };
    try {
      const response = await axios.post('http://localhost:3000/api/reservas', data);
      if (response.status === 201) {
        console.log('Reserva creada');
        setEnviado(true);
        // Reiniciar los estados de los campos del formulario
        setNombre('');
        setApellido('');
        setFechaEntrada('');
        setFechaSalida('');
        setCorreo('');
      } else {
        console.error('Error al crear la reserva');
      }
    } catch (error) {
      console.error('Error al crear la reserva', error);
    }

    try {
      const response = await fetch('http://localhost:3000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log('Email enviado');
        setEnviado(true);
        // Reiniciar los estados de los campos del formulario
        setNombre('');
        setApellido('');
        setFechaEntrada('');
        setFechaSalida('');
        setCorreo('');
      } else {
        console.error('Error al enviar el email');
      }
    } catch (error) {
      console.error('Error al enviar el email', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mx-auto mt-5 p-5 rounded-lg bg-[#77BFA3]">
      <div>
        <input
          type="text"
          id="nombre"
          htmlFor="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full p-2 border mb-2 rounded-lg"
          placeholder="Nombre"
          required
        />
      </div>
      <div>
        <input
          type="text"
          id="apellido"
          htmlFor="apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          className="w-full p-2 border mb-2 rounded-lg"
          placeholder="Apellido"
          required
        />
      </div>
      <div className="mb-2">
        <label htmlFor="fechaEntrada" className="block text-sm font-medium text-gray-700">
          Fecha de Entrada
        </label>
        <input
          type="date"
          id="fechaEntrada"
          value={fechaEntrada}
          onChange={(e) => setFechaEntrada(e.target.value)}
          className="w-full p-2 border mb-2 rounded-lg"
          placeholder="Fecha de Entrada"
          required
        />
      </div>
      <div>
        <label htmlFor="fechaSalida" className="block text-sm font-medium text-gray-700">
          Fecha de Salida
        </label>
        <input
          type="date"
          id="fechaSalida"
          value={fechaSalida}
          onChange={(e) => setFechaSalida(e.target.value)}
          className="w-full p-2 border mb-2 rounded-lg"
          placeholder="Fecha de Salida"
          required
        />
      </div>
      <div>
        <input
          type="email"
          id="correo"
          htmlFor="correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          className="w-full p-2 border mb-2 rounded-lg"
          placeholder="Correo Electrónico"
          required
        />
      </div>
      <div className="mt-2">
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Enviar
        </button>
      </div>
      {enviado && (
        <div className="mt-2 text-center bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Reserva creada!</strong>
          <span className="block sm:inline"> Tu reserva ha sido creada correctamente.</span>
        </div>
      )}
    </form>
  );
};

export default Formulario;
