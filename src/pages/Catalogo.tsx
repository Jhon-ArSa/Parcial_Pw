// 🔵 John - Página Catálogo de Libros
import { useState } from 'react';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { Input } from '../components/common/Input';
import './Catalogo.css';

interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  year: number;
  available: boolean;
  cover: string;
}

export const Catalogo = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Datos de ejemplo - en producción vendrían de Jefferson's API
  const books: Book[] = [
    {
      id: 1,
      title: 'Cien Años de Soledad',
      author: 'Gabriel García Márquez',
      category: 'Ficción',
      year: 1967,
      available: true,
      cover: '📕'
    },
    {
      id: 2,
      title: 'Don Quijote de la Mancha',
      author: 'Miguel de Cervantes',
      category: 'Clásicos',
      year: 1605,
      available: true,
      cover: '📗'
    },
    {
      id: 3,
      title: 'El Principito',
      author: 'Antoine de Saint-Exupéry',
      category: 'Infantil',
      year: 1943,
      available: false,
      cover: '📘'
    },
    {
      id: 4,
      title: '1984',
      author: 'George Orwell',
      category: 'Ciencia Ficción',
      year: 1949,
      available: true,
      cover: '📙'
    },
    {
      id: 5,
      title: 'Orgullo y Prejuicio',
      author: 'Jane Austen',
      category: 'Romance',
      year: 1813,
      available: true,
      cover: '📕'
    },
    {
      id: 6,
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      category: 'No Ficción',
      year: 2011,
      available: false,
      cover: '📗'
    },
  ];

  const categories = ['all', 'Ficción', 'Clásicos', 'Infantil', 'Ciencia Ficción', 'Romance', 'No Ficción'];

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleBorrow = (bookId: number) => {
    alert(`Solicitando préstamo del libro ID: ${bookId}`);
    // Aquí se conectaría con el servicio de Gabriel/Jefferson
  };

  return (
    <div className="catalogo-page fade-in">
      <div className="catalogo-header">
        <h1>📚 Catálogo de Libros</h1>
        <p className="catalogo-subtitle">Explora nuestra colección de {books.length} libros disponibles</p>
      </div>

      {/* Barra de búsqueda y filtros */}
      <div className="search-filter-section">
        <div className="search-box">
          <Input
            type="text"
            placeholder="Buscar por título o autor..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            fullWidth
          />
        </div>

        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category === 'all' ? 'Todas' : category}
            </button>
          ))}
        </div>
      </div>

      {/* Resultados */}
      <div className="results-info">
        Mostrando {filteredBooks.length} de {books.length} libros
      </div>

      {/* Grid de libros */}
      <div className="books-grid">
        {filteredBooks.map((book) => (
          <Card key={book.id} variant="elevated" hoverable>
            <Card.Body>
              <div className="book-cover">{book.cover}</div>
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author">Por {book.author}</p>
              <div className="book-meta">
                <span className="book-category">{book.category}</span>
                <span className="book-year">{book.year}</span>
              </div>
              <div className="book-status">
                {book.available ? (
                  <span className="status-badge available">✓ Disponible</span>
                ) : (
                  <span className="status-badge unavailable">✗ Prestado</span>
                )}
              </div>
            </Card.Body>
            <Card.Footer>
              <Button
                variant={book.available ? 'primary' : 'secondary'}
                fullWidth
                disabled={!book.available}
                onClick={() => handleBorrow(book.id)}
              >
                {book.available ? 'Solicitar Préstamo' : 'No Disponible'}
              </Button>
            </Card.Footer>
          </Card>
        ))}
      </div>

      {filteredBooks.length === 0 && (
        <div className="no-results">
          <p>No se encontraron libros que coincidan con tu búsqueda</p>
          <Button variant="outline" onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}>
            Limpiar filtros
          </Button>
        </div>
      )}
    </div>
  );
};
