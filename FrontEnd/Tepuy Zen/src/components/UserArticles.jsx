import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/articles');
        setArticles(res.data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };
    fetchArticles();
  }, []);

  return (
    <section alt="Lista de artículos" className="w-4/5 mx-auto mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {articles.map(article => (
          <div key={article._id} className="p-5 rounded-xl mb-3 flex flex-col items-center justify-center transform transition hover:scale-110 duration-300" style={{ background: '#BFD8BD', minWidth: 0 }}>
            <div className="flex flex-col items-center">
              <img src={article.imagen} alt="Imagen del artículo" className="w-40 h-auto object-cover mb-3" />
              <div className='text-center'>
                <h3 className="amatic-sc-bold text-3xl font-bold mb-2">{article.name}</h3>
                <p className="text-xl mb-1">Precio: {article.price}$</p>
                <p className="text-xl mb-1">Importancia: {article.importance}/10</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserArticles;
