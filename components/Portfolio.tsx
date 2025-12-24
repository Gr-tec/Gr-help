
import React from 'react';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-black text-gray-900">Obras Concluídas</h2>
          <p className="text-gray-600 mt-2">Transparência e orgulho em cada entrega.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100">
              <div className="h-96 relative">
                <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-4 py-2 rounded-xl text-xs font-bold text-gray-900 shadow-sm uppercase tracking-wider">
                  {project.type}
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{project.name}</h3>
                    <p className="text-blue-700 font-medium flex items-center gap-2 mt-1">
                      <i className="fas fa-map-marker-alt"></i> {project.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-bold text-gray-400 block">ENTREGA</span>
                    <span className="text-gray-900 font-bold">{project.date}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Projecto integral executado pela nossa equipa, incluindo desde o fornecimento de blocos produzidos localmente até à pavimentação exterior e acabamentos finais.
                </p>
                <button className="text-gray-900 font-black border-b-2 border-blue-700 pb-1 hover:text-blue-700 transition-colors">
                  Ver Detalhes do Projeto <i className="fas fa-chevron-right ml-2 text-xs"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
