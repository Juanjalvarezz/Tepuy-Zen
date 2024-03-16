import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserReview = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/review');
        setReviews(res.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };
    fetchReviews();
  }, []);

  return (
    <section alt="Opiniones de usuarios" className="w-4/5 mx-auto mt-5">
      <div>
        {reviews.map(review => (
          <div key={review._id} className="shadow-md rounded-lg p-6 mb-3 transform transition hover:scale-110 duration-300" style={{ background: '#DDE7C7' }}>
            <div>
              <h3 className="title text-2xl tracking-wider font-medium" style={{ color: '#77BFA3' }}>{review.name}</h3>
              <p className="amatic-sc-bold text-gray-600 text-2xl mb-2">Tipo de habitacion: {review.habitacion}</p>
              <p className="amatic-sc-bold text-gray-600 text-2xl mb-2">{review.opinion}</p>
              <p className="amatic-sc-bold text-gray-600 text-2xl mb-2"><i className="fa-solid fa-star text-yellow-400 mr-2"></i> Puntuación: {review.puntuacion} / 10</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserReview;
