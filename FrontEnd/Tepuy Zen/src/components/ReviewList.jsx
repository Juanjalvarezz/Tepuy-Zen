import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  const [editingReviewId, setEditingReviewId] = useState(null);
  const [editedReview, setEditedReview] = useState({ name: '', habitacion: '', opinion: '', puntuacion: '' });

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

  const handleEdit = (id, review) => {
    setEditingReviewId(id);
    setEditedReview(review);
  };

  const handleSave = async () => {
    try {
      const res = await axios.put(`http://localhost:3000/api/review/${editingReviewId}`, editedReview);
      console.log('Review updated:', res.data);
      // Actualizar la lista de opiniones después de editar
      setReviews(reviews.map(review =>
        review._id === editingReviewId ? { ...review, ...editedReview } : review
      ));
      // Limpiar estados de edición
      setEditingReviewId(null);
      setEditedReview({ name: '', habitacion: '', opinion: '', puntuacion: '' });
    } catch (error) {
      console.error('Error updating review:', error);
    }
  };

  const handleDelete = async id => {
    try {
      const res = await axios.delete(`http://localhost:3000/api/review/${id}`);
      console.log('Review deleted:', res.data);
      // Actualizar la lista de opiniones después de eliminar una
      setReviews(reviews.filter(review => review._id !== id));
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };

  return (
    <section alt="Opiniones de usuarios" className="w-4/5 mx-auto mt-5">
    <div >
      {reviews.map(review => (
        <div key={review._id} className="shadow-md rounded-lg p-6 mb-3 transform transition hover:scale-110 duration-300" style={{ background: '#DDE7C7' }}>
          {editingReviewId === review._id ? (
            <div>
              <h1 className='bg-[#77BFA3] text-white font-bold py-2 px-4 rounded mr-2 mb-2 w-fit'>Editando</h1>
              <input
                type="text"
                value={editedReview.name}
                onChange={e => setEditedReview({ ...editedReview, name: e.target.value })}
                className="mb-2 px-2 py-1 border rounded w-full"
                placeholder="Nombre"
              />
              <input
                type="text"
                value={editedReview.habitacion}
                onChange={e => setEditedReview({ ...editedReview, habitacion: e.target.value })}
                className="mb-2 px-2 py-1 border rounded w-full"
                placeholder="Tipo de Habitación"
              />
              <textarea
                value={editedReview.opinion}
                onChange={e => setEditedReview({ ...editedReview, opinion: e.target.value })}
                className="mb-2 px-2 py-1 border rounded w-full"
                placeholder="Opinión"
                rows="4"
              />
              <input
                type="text"
                value={editedReview.puntuacion}
                onChange={e => setEditedReview({ ...editedReview, puntuacion: e.target.value })}
                className="mb-2 px-2 py-1 border rounded w-full"
                placeholder="Puntuación"
              />
              <button onClick={handleSave} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                Guardar
              </button>
            </div>
          ) : (
            <div>
              <h3 className="title text-2xl tracking-wider font-medium" style={{ color: '#77BFA3' }}>{review.name}</h3>
              <p className="amatic-sc-bold text-gray-600 text-2xl mb-2">Tipo de habitacion: {review.habitacion}</p>
              <p className="amatic-sc-bold text-gray-600 text-2xl mb-2">{review.opinion}</p>
              <p className="amatic-sc-bold text-gray-600 text-2xl mb-2"><i className="fa-solid fa-star text-yellow-400 mr-2"></i> Puntuación: {review.puntuacion} / 10</p>
              <div className="flex flex-wrap">
                <button
                  onClick={() => handleEdit(review._id, review)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 mb-2"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(review._id)}
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

export default ReviewList;
