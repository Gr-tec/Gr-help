
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[85vh] flex items-center overflow-hidden">
      {/* Background Image / Video Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=2000"
          alt="Construction Site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-2xl">
          <span className="inline-block bg-blue-700 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
            Qualidade & Resistência
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6">
            Construímos com <span className="text-blue-500 underline decoration-4 decoration-blue-500/30">Qualidade</span>. Produzimos com Rigor.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-light">
            A.M.C CONSTRUÇÕES E SERVIÇOS, LDA é a sua parceira de confiança para infraestruturas sólidas e materiais de construção de alta performance em Angola.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contacto"
              className="bg-blue-700 text-white px-10 py-4 rounded-lg font-bold text-center hover:bg-blue-800 transition-all flex items-center justify-center gap-2"
            >
              <i className="fas fa-file-invoice-dollar"></i>
              Pedir Orçamento
            </Link>
            <Link
              to="/blocos"
              className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-lg font-bold text-center hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              <i className="fas fa-cube"></i>
              Comprar Blocos
            </Link>
          </div>
        </div>
      </div>

      {/* Stats overlay for desktop */}
      <div className="hidden lg:block absolute bottom-0 right-0 bg-blue-700 p-8 rounded-tl-3xl shadow-2xl z-20">
        <div className="flex gap-12 text-white">
          <div>
            <div className="text-3xl font-black">500+</div>
            <div className="text-xs uppercase font-bold text-blue-200">Projetos Entregues</div>
          </div>
          <div>
            <div className="text-3xl font-black">20k</div>
            <div className="text-xs uppercase font-bold text-blue-200">Blocos/Dia</div>
          </div>
          <div>
            <div className="text-3xl font-black">10+</div>
            <div className="text-xs uppercase font-bold text-blue-200">Anos de Experiência</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
