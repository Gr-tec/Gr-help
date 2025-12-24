
import React from 'react';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';

interface ServiceSectionProps {
  preview?: boolean;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ preview }) => {
  const displayServices = preview ? SERVICES.slice(0, 4) : SERVICES;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-gray-900 sm:text-4xl">Nossos Serviços</h2>
          <div className="w-20 h-1.5 bg-blue-700 mx-auto mt-4 rounded-full"></div>
          <p className="mt-6 text-xl text-gray-500 max-w-2xl mx-auto">
            Da fundação à pavimentação, oferecemos mão-de-obra e gestão completa para o seu projeto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {displayServices.map((service) => (
            <div key={service.id} className="group relative bg-gray-900 rounded-2xl overflow-hidden h-80 shadow-lg">
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center mb-4">
                  <i className={`fas ${service.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 line-clamp-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {!preview && (
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center mb-10">Processo de Trabalho</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Consulta Inicial', desc: 'Reunião técnica para entender as necessidades e orçamentação.' },
                { step: '02', title: 'Planeamento', desc: 'Definição de cronograma, materiais e logística de obra.' },
                { step: '03', title: 'Execução', desc: 'Construção com acompanhamento diário de qualidade.' },
                { step: '04', title: 'Entrega Final', desc: 'Vistoria detalhada e entrega do projeto concluído.' }
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="text-5xl font-black text-gray-100 mb-[-1.5rem] relative z-0">{item.step}</div>
                  <div className="relative z-10">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceSection;
