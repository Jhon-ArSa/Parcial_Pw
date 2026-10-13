// 🟡 Jefferson - Datos iniciales para Local Storage
import { categoriaService } from './categoriaService';
import { libroService } from './libroService';
import { userService } from './userService';

const SEED_FLAG = 'biblioteca_seeded_v1';

export const seedIfEmpty = () => {
  if (localStorage.getItem(SEED_FLAG) === 'true' && libroService.getAll().length > 0) {
    return;
  }

  const categoriasIniciales = [
    'Ficción',
    'Clásicos',
    'Infantil',
    'Ciencia Ficción',
    'Romance',
    'No Ficción',
  ];

  categoriasIniciales.forEach((nombre) => {
    if (!categoriaService.getByNombre(nombre)) {
      categoriaService.create(nombre);
    }
  });

  const categoriaId = (nombre: string) => categoriaService.getByNombre(nombre)?.id ?? '';

  const librosIniciales = [
    { titulo: 'Cien Años de Soledad', autor: 'Gabriel García Márquez', isbn: '978-0307474728', categoria: 'Ficción', stock: 3 },
    { titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', isbn: '978-8420412146', categoria: 'Clásicos', stock: 2 },
    { titulo: 'El Principito', autor: 'Antoine de Saint-Exupéry', isbn: '978-0156013987', categoria: 'Infantil', stock: 0 },
    { titulo: '1984', autor: 'George Orwell', isbn: '978-0451524935', categoria: 'Ciencia Ficción', stock: 4 },
    { titulo: 'Orgullo y Prejuicio', autor: 'Jane Austen', isbn: '978-0141439518', categoria: 'Romance', stock: 2 },
    { titulo: 'Sapiens', autor: 'Yuval Noah Harari', isbn: '978-0062316097', categoria: 'No Ficción', stock: 0 },
  ];

  librosIniciales.forEach((libro) => {
    if (!libroService.getByIsbn(libro.isbn)) {
      libroService.create({
        titulo: libro.titulo,
        autor: libro.autor,
        isbn: libro.isbn,
        categoriaId: categoriaId(libro.categoria),
        stock: libro.stock,
      });
    }
  });

  if (!userService.getByCorreo('admin@biblioteca.edu')) {
    userService.create({
      nombres: 'Admin',
      apellidos: 'Biblioteca',
      codigo: 'ADMIN001',
      correo: 'admin@biblioteca.edu',
      tipo: 'Docente',
      rol: 'admin',
    });
  }

  if (!userService.getByCorreo('juan@unh.edu.pe')) {
    userService.create({
      nombres: 'Juan',
      apellidos: 'Pérez',
      codigo: '20240001',
      correo: 'juan@unh.edu.pe',
      tipo: 'Estudiante',
      rol: 'usuario',
    });
  }

  localStorage.setItem(SEED_FLAG, 'true');
};
