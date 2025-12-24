
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Início', path: '/' },
    { label: 'Sobre', path: '/sobre' },
    { label: 'Serviços', path: '/servicos' },
    { label: 'Blocos', path: '/blocos' },
    { label: 'Obras', path: '/obras' },
    { label: 'Contacto', path: '/contacto' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center space-x-2">
              <div className="bg-blue-700 p-2 rounded shadow-lg">
                <i className="fas fa-building text-white text-xl"></i>
              </div>
              <span className="text-xl font-black tracking-tighter text-gray-900">
                A.M.C <span className="text-blue-700 font-normal">CONSTRUÇÕES</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-semibold transition-colors duration-200 ${
                  isActive(item.path) ? 'text-blue-700 underline underline-offset-8' : 'text-gray-700 hover:text-blue-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contacto"
              className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-md hover:bg-blue-800 transition-all transform hover:-translate-y-0.5"
            >
              Orçamento Rápido
            </Link>
          </div>

          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-700 focus:outline-none"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium ${
                  isActive(item.path) ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
