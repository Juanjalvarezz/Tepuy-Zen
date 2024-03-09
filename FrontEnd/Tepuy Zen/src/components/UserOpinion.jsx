import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserOpinion = () => {
  const [opinions, setOpinions] = useState([]);

  useEffect(() => {
    const fetchOpinions = async () => {
      try {
        const res = await axios.get('http://localhost:3000/opinion');
        setOpinions(res.data);
      } catch (error) {
        console.error('Error fetching opinions:', error);
      }
    };
    fetchOpinions();
  }, []);

  return (
    <section alt="Opiniones de usuarios" className="w-4/5 mx-auto mt-5">
      <div>
        {opinions.map(opinion => (
          <div key={opinion._id} className="shadow-md rounded-lg p-6 mb-3 transform transition hover:scale-110 duration-300" style={{ background: '#DDE7C7' }}>
            <h3 className="title text-2xl tracking-wider font-medium" style={{ color: '#77BFA3' }}>{opinion.name}</h3>
            <p className="amatic-sc-bold text-gray-600 text-2xl mb-2">{opinion.opinion}</p>
            <p className="amatic-sc-bold text-gray-600 text-2xl mb-2"><i class="fa-solid fa-star text-yellow-400 mr-2"></i> Puntuación: {opinion.puntuacion} / 10</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserOpinion;
