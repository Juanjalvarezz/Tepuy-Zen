import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [editingArticleId, setEditingArticleId] = useState(null);
  const [editedArticle, setEditedArticle] = useState({ name: '', price: '', importance: '', imagen: ''});

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

  const handleEdit = (id, article) => {
    setEditingArticleId(id);
    setEditedArticle(article);
  };

  const handleSave = async () => {
    try {
      const res = await axios.put(`http://localhost:3000/api/articles/${editingArticleId}`, editedArticle);
      console.log('Article updated:', res.data);
      setArticles(articles.map(article =>
        article._id === editingArticleId ? { ...article, ...editedArticle } : article
      ));
      setEditingArticleId(null);
      setEditedArticle({ name: '', price: '', importance: '', imagen: ''});
    } catch (error) {
      console.error('Error updating article:', error);
    }
  };

  const handleDelete = async id => {
    try {
      const res = await axios.delete(`http://localhost:3000/api/articles/${id}`);
      console.log('Article deleted:', res.data);
      setArticles(articles.filter(article => article._id !== id));
    } catch (error) {
      console.error('Error deleting article:', error);
    }
  };

  return (
    <section alt="Lista de artículos" className="w-4/5 mx-auto mt-5">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
    {articles.map(article => (
      <div key={article._id} className="p-5 rounded-xl mb-3 flex flex-col items-center justify-center transform transition hover:scale-110 duration-300" style={{ background: '#BFD8BD', minWidth: 0 }}>
  {editingArticleId === article._id ? (
    <div className="flex flex-col items-center">
      <input
        type="text"
        value={editedArticle.name}
        onChange={e => setEditedArticle({ ...editedArticle, name: e.target.value })}
        className="mb-2 px-2 py-1 border rounded w-full"
        placeholder="Nombre"
      />
      <input
        type="text"
        value={editedArticle.price}
        onChange={e => setEditedArticle({ ...editedArticle, price: e.target.value })}
        className="mb-2 px-2 py-1 border rounded w-full"
        placeholder="Precio"
      />
      <input
        type="text"
        value={editedArticle.importance}
        onChange={e => setEditedArticle({ ...editedArticle, importance: e.target.value })}
        className="mb-2 px-2 py-1 border rounded w-full"
        placeholder="Importancia"
      />
      <button onClick={handleSave} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
        Guardar
      </button>
    </div>
        ) : (
          <div className="flex flex-col items-center">
            <img src={article.imagen} alt="Imagen del artículo" className="w-40 h-auto object-cover mb-3" />
            <div className='text-center'>
              <h3 className="amatic-sc-bold text-3xl font-bold mb-2">{article.name}</h3>
              <p className="text-xl mb-1">Precio: {article.price}$</p>
              <p className="text-xl mb-1">Importancia: {article.importance}/10</p>
            </div>
          <div className="flex flex-wrap mt-4">
              <button
                onClick={() => handleEdit(article._id, article)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 mb-2"
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(article._id)}
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

export default ArticleList;
