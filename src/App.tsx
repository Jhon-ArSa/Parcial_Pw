// 🔵 John - App Principal - Biblioteca Virtual
import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { AppProvider } from './context/AppContext';
import { MainLayout } from './components/layout/MainLayout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Dashboard } from './pages/Dashboard';
import { Catalogo } from './pages/Catalogo';
import { NotFound } from './pages/NotFound';
import './App.css';

function App() {
  // Simple router basado en hash
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash.slice(1) || '/';
    return hash;
  });

  // Escuchar cambios en el hash
  useState(() => {
    const handleHashChange = () => {
      setCurrentPage(window.location.hash.slice(1) || '/');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  });

  // Renderizar página actual
  const renderPage = () => {
    switch (currentPage) {
      case '/':
        return <Home />;
      case '/catalogo':
        return <Catalogo />;
      case '/about':
        return <About />;
      case '/dashboard':
        return <Dashboard />;
      default:
        return <NotFound />;
    }
  };

  return (
    <AppProvider>
      <ThemeProvider>
        <AuthProvider>
          <MainLayout>
            {renderPage()}
          </MainLayout>
        </AuthProvider>
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
