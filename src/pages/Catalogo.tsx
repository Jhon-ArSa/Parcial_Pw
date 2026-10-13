// 🔵 John - Página Catálogo de Libros
import { useMemo, useState } from 'react';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { Input } from '../components/common/Input';
import { categoriaService } from '../services/categoriaService';
import { libroService } from '../services/libroService';
import { prestamoService } from '../services/prestamoService';
import { authService } from '../services/authService';
import { userService } from '../services/userService';
import './Catalogo.css';

const covers = ['📕', '📗', '📘', '📙'];

export const Catalogo = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [tick, setTick] = useState(0);

  const categorias = categoriaService.getAll();
  const libros = libroService.getAll();

  const filteredBooks = useMemo(() => {
    return libroService.buscar(searchTerm, selectedCategory === 'all' ? undefined : selectedCategory);
  }, [searchTerm, selectedCategory, tick]);

  const nombreCategoria = (id: string) =>
    categorias.find((c) => c.id === id)?.nombre ?? 'Sin categoría';

  const ensureUsuario = () => {
    const sesion = authService.getSesion();
    if (sesion.usuario) return sesion.usuario;

    const demo = userService.getByCorreo('juan@unh.edu.pe');
    if (!demo) {
      alert('No hay un usuario de prueba. Recarga la página para inicializar datos.');
      return null;
    }
    authService.loginWithCodigo({ codigo: demo.codigo, correo: demo.correo });
    return demo;
  };

  const handleBorrow = (libroId: string) => {
    const usuario = ensureUsuario();
    if (!usuario) return;

    const resultado = prestamoService.solicitar(usuario.id, libroId);
    if (!resultado.success) {
      alert(resultado.error ?? 'No se pudo solicitar el préstamo');
      return;
    }
    alert(`Préstamo registrado. Código: ${resultado.data?.id}`);
    setTick((n) => n + 1);
  };

  return (
    <div className="catalogo-page fade-in">
      <div className="catalogo-header">
        <h1>📚 Catálogo de Libros</h1>
        <p className="catalogo-subtitle">
          Explora nuestra colección de {libros.length} libros disponibles
        </p>
      </div>

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
          <button
            className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            Todas
          </button>
          {categorias.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.nombre}
            </button>
          ))}
        </div>
      </div>

      <div className="results-info">
        Mostrando {filteredBooks.length} de {libros.length} libros
      </div>

      <div className="books-grid">
        {filteredBooks.map((book, index) => (
          <Card key={book.id} variant="elevated" hoverable>
            <Card.Body>
              <div className="book-cover">{covers[index % covers.length]}</div>
              <h3 className="book-title">{book.titulo}</h3>
              <p className="book-author">Por {book.autor}</p>
              <div className="book-meta">
                <span className="book-category">{nombreCategoria(book.categoriaId)}</span>
                <span className="book-year">ISBN {book.isbn}</span>
              </div>
              <div className="book-status">
                {book.stock > 0 ? (
                  <span className="status-badge available">✓ Disponible ({book.stock})</span>
                ) : (
                  <span className="status-badge unavailable">✗ Prestado</span>
                )}
              </div>
            </Card.Body>
            <Card.Footer>
              <Button
                variant={book.stock > 0 ? 'primary' : 'secondary'}
                fullWidth
                disabled={book.stock <= 0}
                onClick={() => handleBorrow(book.id)}
              >
                {book.stock > 0 ? 'Solicitar Préstamo' : 'No Disponible'}
              </Button>
            </Card.Footer>
          </Card>
        ))}
      </div>

      {filteredBooks.length === 0 && (
        <div className="no-results">
          <p>No se encontraron libros que coincidan con tu búsqueda</p>
          <Button
            variant="outline"
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
            }}
          >
            Limpiar filtros
          </Button>
        </div>
      )}
    </div>
  );
};
