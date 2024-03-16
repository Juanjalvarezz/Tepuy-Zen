import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const UserHabitaciones = () => {
  const [habitaciones, setHabitaciones] = useState([]);
  const [filtroHuespedes, setFiltroHuespedes] = useState('');
  const [noHabitacionesMensaje, setNoHabitacionesMensaje] = useState('');
  const [mostrarLoader, setMostrarLoader] = useState(true);

  useEffect(() => {
    const fetchHabitaciones = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/habitaciones');
        setHabitaciones(res.data);
        setTimeout(() => {
          setMostrarLoader(false);
        }, 3000); // Ocultar loader después de 3 segundos
      } catch (error) {
        console.error('Error fetching habitaciones:', error);
      }
    };
    fetchHabitaciones();
  }, []);

  // Función para manejar el cambio en el input de búsqueda
  const handleBuscarHabitaciones = e => {
    setFiltroHuespedes(e.target.value);
    setNoHabitacionesMensaje('');
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFiltroHuespedes('');
    }, 5000);

    return () => clearTimeout(timeout);
  }, [filtroHuespedes]);

  // Filtrar habitaciones por número de huéspedes
  const habitacionesFiltradas = habitaciones.filter(habitacion =>
    habitacion.huespedes.includes(filtroHuespedes)
  );

  useEffect(() => {
    if (habitacionesFiltradas.length === 0 && filtroHuespedes !== '') {
      setNoHabitacionesMensaje('No hay habitaciones con ese número de huéspedes disponibles.');
    } else {
      setNoHabitacionesMensaje('');
    }
  }, [habitacionesFiltradas, filtroHuespedes]);

  return (
    <>
      <section alt="Lista de habitaciones" className="w-4/5 mx-auto mt-5">
        {/* Input para buscar habitaciones */}
        <div className='bg-[#98C9A3] py-3 mb-3 rounded-3xl lg:w-3/5 mx-auto'>
  <div className="items-center justify-center mb-4 mx-auto lg:w-3/5">
    <input
      type="text"
      value={filtroHuespedes}
      onChange={handleBuscarHabitaciones}
      placeholder="Filtrar por huéspedes 🔎"
      className="w-full py-2 border rounded-full mt-3 text-center"
    />
  </div>
</div>

        
          {/* Loader */}
          {mostrarLoader && (
            <div className="flex justify-center items-center h-24">
              <div className="animate-spin rounded-full border-8 border-t-8 border-[#77BFA3] h-12 w-12 shadow-xl"></div>
            </div>
          )}
          
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
          {/* Lista de habitaciones filtradas */}
          {!mostrarLoader && (
            <>
              {habitacionesFiltradas.length > 0 ? (
                habitacionesFiltradas.map(habitacion => (
                  <div key={habitacion._id} className="p-5 rounded-xl mb-3 flex flex-col items-center justify-center transform transition hover:scale-105 duration-300" style={{ background: '#BFD8BD', width: '100%' }}>
                    <div className="flex flex-col items-center">
                      <img src={habitacion.imagen} alt="Imagen de la habitacion" className="w-96 h-auto object-cover" />
                      <div className='text-center'>
                        <h3 className="title tracking-wider text-2xl font-bold mb-2 mt-2 bg-[#77BFA3] text-white  py-2 px-4 rounded-xl w-fit mx-auto ">{habitacion.name}</h3>

                        <div className='amatic-sc-bold text-2xl bg-[#EDEEC9] p-2 rounded-xl '>
                          <div className='text-center'>
                            <p className="amatic-sc-bold text-xl mb-5"> {habitacion.descripcion}</p>
                            <p className="amatic-sc-bold text-2xl mb-1">Número de huespedes:{habitacion.huespedes}</p>
                            <p className="amatic-sc-bold text-2xl mb-1"> Tamaño de la habitación: {habitacion.espacio}</p>
                            <p className="amatic-sc-bold text-2xl mb-1"> Servicios Incluidos: {habitacion.servicios}</p>
                            <p className="amatic-sc-bold text-2xl mb-1"> Servicios NO Incluidos: {habitacion.noServicios}</p>
                            <p className="amatic-sc-bold text-2xl mb-1">Evaluación: {habitacion.stars} ⭐</p>
                          </div>

                          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mt-4 bg-[#98C9A3] -m-2 rounded-bl-xl rounded-br-xl'>
                            <p className=" mb-1">Weekday: {habitacion.price1}$ / Noche</p>
                            <p className=" mb-1">Week-End: {habitacion.price2}$ / Noche</p>
                          </div>
                          </div>

                              <NavLink to='/reviewReserve' className="flex justify-center mt-3 amatic-sc-regular text-2xl">
                                <button className="bg-[#77BFA3] text-white px-4 py-2 rounded-2xl ">
                                  Hacer una reserva o dejar una review
                                </button>
                              </NavLink>
                      </div>
                    </div>
                  </div>
                ))
              ) : null}
            </>
          )}
        </div>
      </section>

      {/* Mensaje de no habitaciones */}
      {habitacionesFiltradas.length === 0 && !mostrarLoader && (
        <div className="w-4/5 mx-auto mt-2 p-5 amatic-sc-bold text-3xl rounded-xl text-center text-red-500 bg-[#EDEEC9] mb-2">{noHabitacionesMensaje}</div>
      )}
    </>
  );
};

export default UserHabitaciones;
