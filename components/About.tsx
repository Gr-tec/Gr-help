
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200" 
              alt="Sobre a AMC" 
              className="rounded-3xl shadow-2xl"
            />
          </div>
          <div>
            <h1 className="text-4xl font-black text-gray-900 mb-6 uppercase tracking-tighter">
              Mais de uma década construindo o futuro
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              A <strong>A.M.C CONSTRUÇÕES E SERVIÇOS, LDA</strong> nasceu com o propósito de elevar os padrões de construção civil em Angola. O que começou como uma pequena equipa de mão-de-obra especializada, tornou-se hoje uma referência em produção de materiais e execução de projetos de engenharia.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-700">
                  <i className="fas fa-bullseye text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Nossa Missão</h3>
                  <p className="text-gray-600">Fornecer soluções de construção robustas e materiais de excelência que garantam a longevidade de cada obra.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-700">
                  <i className="fas fa-eye text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Nossa Visão</h3>
                  <p className="text-gray-600">Ser a empresa líder no mercado nacional de construção e fabricação de betão, reconhecida pela inovação e transparência.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-blue-700">
                <div className="text-3xl font-black text-gray-900">20.000</div>
                <div className="text-sm text-gray-500 font-bold uppercase">Capacidade/Mês</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-blue-700">
                <div className="text-3xl font-black text-gray-900">100%</div>
                <div className="text-sm text-gray-500 font-bold uppercase">Qualidade</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
