
import React from 'react';
import { PRODUCTS } from '../constants';
import { Link } from 'react-router-dom';

interface ProductSectionProps {
  preview?: boolean;
}

const ProductSection: React.FC<ProductSectionProps> = ({ preview }) => {
  const displayProducts = preview ? PRODUCTS.slice(0, 3) : PRODUCTS;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-black text-gray-900 sm:text-4xl">Produção Industrial de Blocos</h2>
            <p className="mt-2 text-lg text-gray-600">Resistência comprovada para a sua segurança.</p>
          </div>
          {preview && (
            <Link to="/blocos" className="text-blue-700 font-bold hover:underline">
              Ver Catálogo Completo <i className="fas fa-arrow-right ml-1"></i>
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-blue-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {product.category.toUpperCase()}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                <p className="text-blue-700 text-sm font-semibold mb-3">Dimensão: {product.dimensions}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {product.application}
                </p>
                <div className="flex items-center justify-between border-t pt-4">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Produção sob encomenda</span>
                  <Link
                    to="/contacto"
                    className="bg-gray-900 text-white px-4 py-2 rounded text-sm font-bold hover:bg-blue-700 transition-colors"
                  >
                    Solicitar Preço
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!preview && (
          <div className="mt-16 bg-blue-700 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center md:text-left">
              <h3 className="text-3xl font-bold mb-4">Capacidade de Produção Industrial</h3>
              <p className="text-blue-100 text-lg">
                Utilizamos maquinária moderna para garantir blocos com geometria perfeita e cura controlada. Aceitamos encomendas de grande volume para obras públicas e privadas em todo o país.
              </p>
            </div>
            <Link to="/contacto" className="bg-white text-blue-700 px-8 py-4 rounded-xl font-black shadow-lg hover:scale-105 transition-transform">
              Falar com Comercial
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductSection;
